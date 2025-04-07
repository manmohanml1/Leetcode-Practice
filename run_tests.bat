@echo off
setlocal EnableDelayedExpansion

:: ============================================
:: Multi-Language Test Runner (Batch Script)
:: ============================================
:: This script allows developers to:
:: - Run tests for TypeScript, Java, and Python
:: - Use argument-based control (ts/java/py/all/smart)
:: - Choose via an interactive menu if no args are passed
:: - Execute "smart tests" based on Git diff (only changed test files or inferred from source)
:: - Display timing info for each test run
:: ============================================

:: Store script start time
set startTime=%time%

:: 1️⃣ Smart test mode
if "%1"=="smart" (
    echo Running smart test mode: only testing changed test files...
    git diff --name-only > changed_files.txt

    echo --- Changed files:
    type changed_files.txt
    echo -------------------

    findstr /i "typescript/" changed_files.txt >nul && call :typescript_smart
    findstr /i "java/src/" changed_files.txt >nul && call :java_smart
    findstr /i "python/src/" changed_files.txt >nul && call :python_smart

    del changed_files.txt
    goto summary
)

:: 2️⃣ Argument-based
if "%1"=="ts" call :typescript
if "%1"=="java" call :java
if "%1"=="py" call :python
if "%1"=="all" (
    call :typescript
    call :java
    call :python
    goto summary
)

:: 3️⃣ Interactive menu
if "%1"=="" goto menu

goto summary

:menu
cls
echo =====================================
echo         Select Language to Test
echo =====================================
echo 1. TypeScript
echo 2. Java
echo 3. Python
echo 4. All
echo 5. Smart (only changed test files)
echo 6. Exit
echo =====================================
set /p choice="Enter your choice (1-6): "

if "%choice%"=="1" call :typescript
if "%choice%"=="2" call :java
if "%choice%"=="3" call :python
if "%choice%"=="4" (
    call :typescript
    call :java
    call :python
)
if "%choice%"=="5" (
    git diff --name-only > changed_files.txt

    echo --- Changed files:
    type changed_files.txt
    echo -------------------

    findstr /i "typescript/" changed_files.txt >nul && call :typescript_smart
    findstr /i "java/src/" changed_files.txt >nul && call :java_smart
    findstr /i "python/src/" changed_files.txt >nul && call :python_smart

    del changed_files.txt
)
if "%choice%"=="6" exit
goto summary

:: ==========================
:: TypeScript Test Function
:: ==========================
:typescript
echo Running All TypeScript Tests...
pushd typescript >nul
call npm test
popd >nul
set tsTime=%time%
goto :eof

:typescript_smart
echo Running Only Changed TypeScript Test Files...
pushd typescript >nul

:: Collect changed test files directly
git diff --name-only | findstr /i "typescript/tests/" > changed_ts_tests.txt

:: Collect changed source files and infer test paths
git diff --name-only | findstr /i "typescript/src/" > changed_ts_src.txt
for /F "usebackq delims=" %%f in (`type changed_ts_src.txt`) do call :process_ts_src "%%f"
goto after_process

:process_ts_src
set "srcPath=%~1"
set "testPath=%srcPath:src=tests%"
set "testPath=%testPath:.ts=.test.ts%"
set "testPath=%testPath:/=\%"

:: Ensure relative paths for test files only
set "testPath=typescript\tests%testPath%"  :: Adjusting relative path handling

if exist "%cd%\%testPath%" (
    echo Inferred test file: %testPath%
    echo %testPath%>> changed_ts_tests.txt
) else (
    echo ⚠️ No matching test found for source: %srcPath%
)
goto :eof

:after_process
for /F "usebackq delims=" %%t in (`type changed_ts_tests.txt`) do (
    set "unixPath=%%t"
    setlocal enabledelayedexpansion
    set "unixPath=!unixPath:\=/!"
    echo Running test: !unixPath!
    call npx jest "!unixPath!"
    endlocal
)

del changed_ts_tests.txt
del changed_ts_src.txt
popd >nul
set tsTime=%time%
goto :eof

:: ==========================
:: Java Test Function
:: ==========================
:java
echo Running All Java Tests...
pushd java >nul
call mvn test
popd >nul
set javaTime=%time%
goto :eof

:java_smart
echo Running Only Changed Java Test Files...
pushd java >nul
git diff --name-only | findstr /i "java/src/test/" > changed_java_tests.txt
git diff --name-only | findstr /i "java/src/main/" > changed_java_src.txt
for /F "usebackq delims=" %%f in (`type changed_java_src.txt`) do call :process_java_src "%%f"

for /F "usebackq delims=" %%t in (`type changed_java_tests.txt`) do (
    for %%X in (%%t) do (
        set "file=%%~nxX"
        setlocal enabledelayedexpansion
        set "class=!file:.java=!"
        echo Running test class: !class!
        call mvn -Dtest=!class! test
        endlocal
    )
)

del changed_java_tests.txt
del changed_java_src.txt
popd >nul
set javaTime=%time%
goto :eof

:process_java_src
set "srcPath=%~1"
set "testPath=%srcPath:src/main=src/test%"
set "testPath=%testPath:.java=Test.java%"
set "testPath=%testPath:/=\%"

if exist "%cd%\%testPath%" (
    for %%X in ("%testPath%") do (
        set "file=%%~nxX"
        setlocal enabledelayedexpansion
        set "class=!file:.java=!"
        echo Inferred test class: !class!
        echo !class!>> changed_java_tests.txt
        endlocal
    )
) else (
    echo ⚠️ No matching Java test found for source: %srcPath%
)
goto :eof

:: ==========================
:: Python Test Function
:: ==========================
:python
echo Running All Python Tests...
pushd python >nul
call pytest tests
popd >nul
set pyTime=%time%
goto :eof

:python_smart
echo Running Only Changed Python Test Files...
pushd python >nul

:: Get changed test and source files
git diff --name-only | findstr /i "python/tests/" > changed_py_tests.txt
git diff --name-only | findstr /i "python/src/" > changed_py_src.txt

:: Remove __pycache__ and .pyc files from the list of changed files
findstr /v /i "__pycache__" changed_py_tests.txt > changed_py_tests_no_cache.txt
findstr /v /i "__pycache__" changed_py_src.txt > changed_py_src_no_cache.txt
move /Y changed_py_tests_no_cache.txt changed_py_tests.txt
move /Y changed_py_src_no_cache.txt changed_py_src.txt

:: Infer test files from changed source files
for /F "usebackq delims=" %%f in (`type changed_py_src.txt`) do (
    setlocal EnableDelayedExpansion
    set "srcPath=%%f"
    set "srcPath=!srcPath:/=\!"  :: Convert to Windows style path
    set "relativePath=!srcPath:python\src\=!"  :: Strip src/ prefix

    :: Extract folder and file name
    for %%X in ("!relativePath!") do (
        set "folder=%%~dpX"
        set "filename=%%~nxX"
    )

    set "testFile=test_!filename!"
    set "testPath=python\tests\ML\easy\!testFile!"
    set "testPath=!testPath:\\=\!"  :: Normalize double backslashes

    :: Ensure the path is correct before running pytest
    if exist "!testPath!" (
        echo Running test: !testPath!
        
        :: Setting the PYTHONPATH correctly to include the `src` directory
        set PYTHONPATH=%CD%\../../../src
        echo PYTHONPATH is set to: %PYTHONPATH%

        :: Run pytest with full path
        call pytest "!testPath!" --maxfail=1 --disable-warnings --tb=short || echo [ERROR] pytest failed to run for !testPath!
    ) else (
        echo [ERROR] Test file !testPath! not found.
    )
    endlocal
)

del changed_py_tests.txt
del changed_py_src.txt
popd >nul
set pyTime=%time%
goto :eof


:: ==========================
:: Final Summary Output
:: ==========================
:summary
echo.
echo ========== Test Summary ==========
echo Start Time:     %startTime%
if defined tsTime echo TypeScript End:  %tsTime%
if defined javaTime echo Java End:        %javaTime%
if defined pyTime echo Python End:      %pyTime%
echo End Time:       %time%
echo ================================
pause

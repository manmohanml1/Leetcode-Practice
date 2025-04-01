@echo off
setlocal EnableDelayedExpansion

:: ============================================
:: Multi-Language Test Runner (Batch Script)
:: ============================================
:: This script allows developers to:
:: - Run tests for TypeScript, Java, and Python
:: - Use argument-based control (ts/java/py/all/smart)
:: - Choose via an interactive menu if no args are passed
:: - Execute "smart tests" based on Git diff
:: - Display timing info for each test run
::
:: Commands used:
:: - `pushd`/`popd` to switch directories safely
:: - `call` to execute commands without exiting the script
:: - `git diff` to detect file changes for smart testing
:: ============================================

:: Store script start time
set startTime=%time%

:: 1️⃣ Smart test mode: run only what has changed
if "%1"=="smart" (
    echo Running smart test mode based on Git diff...
    git diff --name-only > changed_files.txt
    findstr /i "typescript" changed_files.txt >nul && call :typescript
    findstr /i "java" changed_files.txt >nul && call :java
    findstr /i "python" changed_files.txt >nul && call :python
    del changed_files.txt
    goto summary
)

:: 2️⃣ Argument-based testing
if "%1"=="ts" call :typescript
if "%1"=="java" call :java
if "%1"=="py" call :python
if "%1"=="all" (
    call :typescript
    call :java
    call :python
    goto summary
)

:: 3️⃣ No argument? Show interactive menu
if "%1"=="" goto menu

:: If unknown input, skip to summary
goto summary

:: ==========================
:: Interactive Menu Function
:: ==========================
:menu
cls
echo =====================================
echo         Select Language to Test
echo =====================================
echo 1. TypeScript
echo 2. Java
echo 3. Python
echo 4. All
echo 5. Smart (based on Git diff)
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
    findstr /i "typescript" changed_files.txt >nul && call :typescript
    findstr /i "java" changed_files.txt >nul && call :java
    findstr /i "python" changed_files.txt >nul && call :python
    del changed_files.txt
)
if "%choice%"=="6" exit
goto summary

:: ==========================
:: TypeScript Test Function
:: ==========================
:typescript
echo Running TypeScript Tests...
pushd typescript >nul
call npm test
popd >nul
set tsTime=%time%
goto :eof

:: ==========================
:: Java Test Function
:: ==========================
:java
echo Running Java Tests...
pushd java >nul
call mvn test
popd >nul
set javaTime=%time%
goto :eof

:: ==========================
:: Python Test Function
:: ==========================
:python
echo Running Python Tests...
pushd python >nul
call pytest
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

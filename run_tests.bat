@echo off
setlocal

echo Running TypeScript Tests...
pushd typescript
call npm test
popd

echo Running Java Tests...
pushd java
call mvn test
popd

echo Running Python Tests...
pushd python
call pytest
popd

echo All tests executed successfully!

:: Explanation:
:: This batch script automates the execution of test cases for multiple programming languages (TypeScript, Java, and Python)
:: in a structured repository. The `@echo off` command ensures that only the output of commands is displayed, keeping 
:: the script clean. The `setlocal` command prevents variable changes from affecting other scripts or the system.
::
:: Each language's tests are executed sequentially:
:: 1. `pushd` moves into the respective language's directory.
:: 2. `call` is used before `npm test`, `mvn test`, and `pytest` to ensure execution returns to the main script after 
::    running the command. Without `call`, the batch script would terminate after executing the first test.
:: 3. `popd` moves back to the original directory after running each set of tests, ensuring the script can continue.
::
:: If all tests pass, "All tests executed successfully!" is displayed. If any test fails, the error message from the 
:: respective test framework will be shown. This script allows developers to run tests for all three languages 
:: from the root directory without needing to navigate into each folder manually.
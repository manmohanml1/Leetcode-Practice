## 🧠 Leetcode-Practice

Practice solving **LeetCode problems** in **TypeScript, Java, and Python** — with a unified, test-driven, and collaborative approach.

---

### 📌 Supported Languages

- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178c6?style=flat&logo=typescript&logoColor=white)
- ![Java](https://img.shields.io/badge/-Java-007396?style=flat&logo=java&logoColor=white)
- ![Python](https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white)

---

### 📁 Project Structure

```
leetcode-practice/
│
├── typescript/
│   ├── src/easy/LC_1_two_sum.ts(src/ML/easy or other initials(ML))
│   ├── tests/easy/LC_1_two_sum.test.ts(tests/ML/easy or other initials(ML))
│
├── java/
│   ├── src/main/java/easy/LC_1_TwoSum.java
│   ├── src/test/java/easy/LC_1_TwoSumTest.java
│
├── python/
│   ├── src/easy/LC_1_two_sum.py
│   ├── tests/easy/test_LC_1_two_sum.py
│
├── .github/
│   ├── workflows/test.yml  # GitHub Actions CI
│
├── run_tests.bat           # Interactive and smart test runner for all languages (Windows)
└── README.md
```

---

### 🚀 Features

- 📂 Organized by **difficulty** (`easy/`, `medium/`, `hard/`)
- 🔬 Unit tests for each solution in its native language
- 🤖 **GitHub Actions CI** runs all tests automatically for PRs and pushes
- 🧪 Unified **testing frameworks**:
  - TypeScript: Jest
  - Java: JUnit 5 + Maven
  - Python: Pytest
- 🛠️ Built-in `run_tests.bat` to:
  - Run all tests from the root folder
  - Accept arguments to test specific languages (`ts`, `java`, `py`, `all`, `smart`)
  - Show an interactive menu when no arguments are passed
  - Run "smart tests" based on changed files using `git diff`

---

### ✅ Contribution Checklist

> For contributors and collaborators:

- [ ] My code follows the project’s coding guidelines.
- [ ] I have added a corresponding **unit test**.
- [ ] I have run all tests and verified everything works.
- [ ] I have used the proper file naming convention (see below).
- [ ] I have added meaningful **comments** to my code where necessary.
- [ ] I have checked the solution **does not already exist**.

---

### 🔤 File Naming Convention

All solution files in `easy/`, `medium/`, or `hard/` **must** follow this format:

```
LC_<number>_<problem-name>.<ext>
```

**Examples:**

- TypeScript: `LC_1_two_sum.ts`
- Java: `LC_1_TwoSum.java`
- Python: `LC_1_two_sum.py`

> 📝 You can find the problem number from the LeetCode URL (e.g., `/problems/two-sum/` is #1)

---

### 🧪 How to Run Tests

#### 🖥️ Run Tests Using `run_tests.bat` (Windows)

```sh
run_tests.bat           # Shows menu to select language or run all
run_tests.bat ts        # Only run TypeScript tests
run_tests.bat java      # Only run Java tests
run_tests.bat py        # Only run Python tests
run_tests.bat all       # Run all language tests
run_tests.bat smart     # Automatically test based on modified files (using git diff)
```

#### 📦 TypeScript

```sh
cd typescript
npm install
npm test
```

#### ☕ Java

```sh
cd java
mvn test
```

#### 🐍 Python

```sh
cd python
pip install -r requirements.txt
pytest tests
```

---

### 🤝 Contributing

1. **Fork** the repo
2. **Create a new branch**: `feature/LC_<number>_<title>`
3. **Add your solution and test**
4. **Commit & push**
5. **Create a Pull Request**
6. ✅ The GitHub Actions pipeline will verify your code

---

### 📸 GitHub Actions CI/CD

This repository uses **GitHub Actions** to:

- Run tests for all 3 languages
- Use **dependency caching** to speed up builds
- Prevent merging unless all tests pass

---

### 💡 Testing Shortcuts (Windows)

- `run_tests.bat` — Opens interactive menu
- `run_tests.bat smart` — Detects changed files and runs only those tests
- `run_tests.bat ts` — Runs TypeScript only
- `run_tests.bat java` — Runs Java only
- `run_tests.bat py` — Runs Python only
- `run_tests.bat all` — Runs everything

You can bind these to VS Code tasks or set keyboard shortcuts using `.vscode/tasks.json` (optional)

---

### 📣 Future Enhancements

- Add support for C++ or Go
- Generate README index for all problems
- Auto-lint code before merge

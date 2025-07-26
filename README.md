# Do It! List

Dev-KimDonghyun's personal project

---

### Project refactoring notice

**You can access the refactored version here:**

[Ref-Do It! List (Do It! List Refactor Version)](https://github.com/Dev-KimDonghyun/Ref-Do-It-List.git)

This project is undergoing refactoring to improve its code structure and functionality. The next version will be developed in a separate repository. Please refer to the following details:

**Reasons for refactoring**

- Improve component modularity and reusability  
- Enhance the UI for a better user experience  
- Replace complex props with global state management using Redux


This repository is now archived. No new features or bug fixes will be added.

It is preserved to retain the development history of the pre-refactored version.

---

## Retrospective

- **Experience**:
Through this project, I became familiar with React and TailwindCSS, and learned how to handle basic read/write operations using localStorage. However, I encountered issues caused by unstructured component separation, which led to complex and inefficient prop drilling.
- **Lesson Learned**:
I learned that component separation should be planned carefully from the beginning. When a project’s component structure is expected to grow in complexity, it’s more effective to use the Context API or a dedicated state management library.
- **Next Action**:
In the refactored version of this project, Ref-Do-It-List, I will design and document the component structure beforehand and build the application using the Redux state management library.

## Description

Simple responsive To Do Web App developed with React using browser local storage

## Features

- Add and delete to-do items
- Mark tasks as completed or incomplete
- Fully responsive UI (PC & Mobile)
- Data stored in browser local storage

## Tech Stack

- Git & GitHub
- React + TypeScript + Vite
- TailwindCSS
- Browser Local Storage

## Installation

1. ```git clone https://github.com/Dev-KimDonghyun/Do-It-List.git```

2. ```npm install```

3. ```npm run dev```

## License

This project is licensed under the MIT License

## Development Period

Version 1.0.0 - 2025.05.08 ~ 2025.05.19

Version 1.1.0 - 2025.06.05

Version 1.1.1 - 2025.07.20

## Update Log

### 1.1.0 - 2025.06.05

- Extracted buttons from Task Item into a separate component
- Extracted footer into a separate component

### 1.1.1 - 2025.07.20

- Fixed typos in variable and local storage key names

<br>

<a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=git,github,vite,react,tailwindcss,typescript&theme=dark&perline=15" alt="My Skills" /></a>
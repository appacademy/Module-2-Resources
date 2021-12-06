# a/A Module 2 Resources

_Before exploring this repo, please consult the sections on [how to use this repo][how to use] and [setup][setup] to learn the intended utilization of these resources._

<!-- ## Welcome to Module 2! -->

## Sections Outline

-   [How to use this repo][how to use]
-   [Setup][setup]
-   [Content covered in module 2][content]

---

## How to use this repo

This repo has templates for a/A module 2 practices and study guides. Students should use their own cohort specific branch. Solutions and cohort specific work will come from their respective branch as the cohort progresses through curriculum.

__It is recommended that students create two clones of this repo__. One to check for updates (`git pull`) and another for their own commits which has been connected to their own GitHub repo. Consult the [git flow guide][git flow] how to change a `git remote`.

---

## Setup

To clone the repo run this command in the directory of your choice:

    git clone -b <your-cohort-branchname> --single-branch <remote-repo-url>

- `<your-cohort-branchname>` will follow the format of __your cohort's__ `Year-Month-Cohort` (e.g., `2021-November-Cohort`).

- `<remote-repo-url>` will depend on if you are using SSH or PAT to access GitHub.

Examples:

- Cloning (using PAT) may look like:

        git clone -b 2021-November-Cohort --single-branch https://github.com/appacademy/Module-2-Resources.git

- Cloning (using SSH) may look like:

        git clone -b 2021-November-Cohort --single-branch git@github.com:appacademy/Module-2-Resources.git

---

## Content covered in module 2

### Week 4

- Basics of Clean Coding Principles
- The importance of and guidelines for asking efficient questions
- How to read unit tests
- Object Oriented Programming (OOP)
- JavaScript Classes
- CommonJS Modules
- Test Driven Development (TDD)
- How to write your own unit tests with Mocha and Chai

### Week 5

- Big O Analysis of time and space complexity (O(1), O(n), O(n^2))
- Logic operators
- Computer memory addresses/pointers
- Binary/Hexidecimal representation
- Dynamic arrays and the Big O cost of array methods
- Linked lists (single and doubly linked lists)
- Stacks and Queues
- Sets
- Hash Tables

### Week 6

- Big O Analysis of time and space complexity (O(log n), O(n* log n))
- Sorting algorithms(naive and efficient)
- JavaScript built in arr.sort method
- Tree data structures and traversals/searching
- Graph data structures and traversals/searching

<!-- internal links -->

[content]: README.md#content-covered-in-module-2
[how to use]: README.md#how-to-use-this-repo
[setup]: README.md#setup

<!-- redirect links -->
[git flow]: ./git-flow-guide/README.md#connecting-a-local-cloned-repo-to-a-github-repo

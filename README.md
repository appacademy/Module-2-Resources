# a/A Module 2 Resources

___PLEASE READ BEFORE CLONING:___

_Before exploring this repo, please consult the sections on [how to use this repo][how to use] and [setup][setup] to learn the intended utilization of these resources._

---

## Welcome to module 2!

App Academy's module 2 covers subjects in computer science, from coding design practices to data structures and algorithms. Please use this student resource to facilitate your studies here at App Academy!

---

## Sections outline

-   [How to use this repo][how to use]
-   [Setup][setup]
-   [Content outline for module 2][content]
-   [Guides][guides]
    - [Git Flow Guide][git flow]
-   [FAQ (Frequently asked questions)][faq]
    -   [Why do I not see any solutions?][why solutions]
    -   [Why can't I simply `git clone` or `git fork` the resources repo to get solutions?][why not git x]
    -   [What is the recommended git flow for short practice problems?][short git flow]
    -   [What is the recommended git flow for long project problems?][long git flow]
    -   [How do I connect my own local repo?][how connect]
    -   [What is a recommended file structure for my own notes going forward?][how files]
    -   [Will I still have access to these materials once I leave the module?][will access]

---

## How to use this repo

This repo has templates for a/A module 2 practices and study guides. __Students should use their own cohort's specific branch to access solutions__. Do __not__ use the `main` branch of this repo; it is reserved for empty templates only.

Cohort specific work and solutions will be available to students on their respective branch as their cohort progresses through curriculum. Content is regularly iterated on, adjusted and improved so each cohort's materials might change. The current cohort branch has the latest updates.

### The general day to day use of this repo will be:

- Each morning will have short practices. These are provided for you in this repo so that you do not have to clone them from a/A Open. We will rotate between short lectures and time to work on these practices.
    - Students are to work with their pair, collaboratively but on their own files.

- In the afternoon there will be more challenging long practices. These will still be accessed via a/A Open.
    - Students are to work with their pair following a/A recommended pair programming practices taking turns driving and navigating.

- Lectures will be done with these `notes` and `practices` on this resources repo. Short practice solutions will be pushed intermittently in after each short practice and lecture. Students can then pull them down as soon as they are available.

- Long practice solutions will be uploaded at the end of the day they are assigned.

- Practice assessment solutions and material will be available on this repo as they are reviewed at the end of each week.

_Please follow the specific steps for setting up this repo. They are designed for incoming students for this module._

__It is recommended that students create two clones of this repo__. One to check for updates (with `git pull`) and another for their own work and commits which the student will connect to their own GitHub repo. This setup serves two primary purposes:
1. Convenient access to short practices and lecture material.
2. Quick access to solutions for all content in module 2.

__Follow the instructions in the [setup][setup] section (below) how to clone this repo__. Consult the [git flow guide][connecting] how to change a `git remote` to connect to your personal repo.

##### [Back to the top][top]

---

## Setup

To access daily uploaded solutions you must clone the repo using this command in the directory of your choice:

    git clone -b <your-cohort-branch-name> --single-branch <remote-repo-url> <new-folder-name>

- `<your-cohort-branch-name>` will follow the format of __your cohort's__ `Year-Month-Cohort` (e.g., `2022-June-Cohort`).

- `<remote-repo-url>` will depend on if you are using SSH or PAT to access GitHub.

- `<new-folder-name>` will change the name of the local repo to this name (e.g., "my-mod-2-resources", etc.)

[See below for examples][examples].

These commands will clone the resource repo and only grab the branch relevant to your cohort, while making it the default branch of your local repo. This branch with be preserved as your cohort left it to utilize at your convenience in the future.

Cloning this branch, as demonstrated, will enable GitHub to track your contributions should you change the remote to your own repository (see the [git flow guide][connecting] how to do this).

If you intend to make a second clone, you should rename the previous cloned repo or git will give you an error. Alternatively, you can utilize an optional command with `git clone` which will be the name of your newly cloned repo. See example below.

### Examples:

_Note, the version you use depends on how you have previously setup your GitHub authentication. Usually only one method is utilized._

- Cloning (using PAT) may look like:

        git clone -b 2022-June-Cohort --single-branch https://github.com/appacademy/Module-2-Resources.git

- Cloning (using SSH) may look like:

        git clone -b 2022-June-Cohort --single-branch git@github.com:appacademy/Module-2-Resources.git

- Cloning with with new repo name, may look like this (using PAT). This will clone the repo but name the folder "my-mod-2-resources":

        <same PAT command as above> my-mod-2-resources

        or

        git clone -b 2022-June-Cohort --single-branch https://github.com/appacademy/Module-2-Resources.git my-mod-2-resources

To determine if you have setup your repo to correctly receive solutions use the command `git branch` in your repo. It should say your cohort specific branch is selected (e.g., `2022-June-Cohort`). If instead it says `main`, you have cloned the empty template branch. This branch will never receive solutions. Please refer to the instructions above how to access solutions.

##### [Back to the top][top]

---

## Content outline for module 2

### [Week 4](#week-4)

- The importance of and guidelines for asking efficient questions
- Basics of clean coding principles
- Reading unit tests
- Object oriented programming (OOP)
- Common JavaScript modules
- JavaScript classes
- Test driven development (TDD)
- Writing unit tests with Mocha and Chai

### [Week 5](#week-5)

- Big O analysis of time and space complexity (O(1), O(n), O(n^2))
- Logic operators
- Computer memory addresses/pointers
- Binary, hexadecimal, ASCII representation and conversion
- Dynamic arrays and the big O analysis of array methods
- Linked lists (single and doubly linked lists)
- Stacks and queues
- Hash tables and Sets

### [Week 6](#week-6)

- Big O analysis of time and space complexity (O(log n), O(n * log n))
- Sorting algorithms (naive and efficient)
- JavaScript built in Array.sort() method
- Binary tree data structures, traversals and searches
- Graph data structures, traversals and searches

##### [Back to the top][top]

---

## Guides

-   [Git Flow Guide][git flow]

##### [Back to the top][top]

---

## FAQ (Frequently asked questions)

### Why do I not see any solutions?

-   Please make sure your repo is on the correct branch. If using the command `git branch` indicates you are on `main` you will not see solutions. The `main` branch only has empty templates. Solutions for your cohort are on your cohort specific branch (e.g., `2022-June-Cohort`). Please refer to [the setup instructions][setup] on how to setup your repo.

### Why can't I simply `git clone` or `git fork` the resources repo to get solutions?

-   These are not necessarily incorrect approaches. However to get the intended utility of the repo requires additional steps after using those commands. Some of those steps may not be known to newer incoming students to a/A. The instructions in [the setup section][setup] were designed to accommodate students in an effective manner relative to their current expected experience with `git` and a/A's goals to gradually encourage familiarity with `git` over time.

-   The goals of this repo are:
    1) Access to the short practices, all solutions and various curriculum resources.
    2) Convenient setup to make your contributions to your own repo on GitHub.

### What is the recommended git flow for short practice problems?

-   In module 2, morning practices are short sessions to tackle concepts through smaller problems. In the interest of time, you may find it simpler to work on your own code and repos while collaborating with your pair. Working together to understand and solve the problems but maximizing your own coding practice time as well. This resources repo conveniently has all of the short practices setup for you.

### What is the recommended git flow for long project problems?

-   For longer practices it is expected that pairs follow a/A suggested pair programming git flow of working from the same repo while taking turns swapping roles between driving and navigating.

### How do I connect my own local repo?

-   Please consult our [git flow guide][git flow] which has step by step instructions with images for extra details.

### What is a recommended file structure for my own notes going forward?

-   There are many options and taking the time to find something that makes sense for you will be very useful in the long run. A straight forward example could be the following:

```js
./appaca // not a repo; regular directory
    ├── mod-1... // not a repo
    ├── mod-2 // not a repo
    |    ├── mod-2-resources // repo `git pull` for solutions!
    |    ├── my-mod-2-resources // repo for your commits on practices!
    |    └── long-practices // not a repo; regular directory
    |         ├── w4...
    |         ├── w5...
    |         |    ├── d1...
    |         |    ├── d3
    |         |    |    ├── long-practice-1 //  repo for pairing
    |         |    |    └── long-practice-2 //  "   "   "   "
    |         |    └── d4...
    |         └── w6...
    └── mod-3...
```

### Will I still have access to these materials once I leave the module?

-   Yes. We have cohort specific branches so that they can remain unchanged once the cohort departs this module and continues through the a/A program. The branch will be preserved and can be referred to at your discretion and we will have new branches for future cohorts. Since you cloned your branch directly, you will not need to re-clone nor do anything else differently to access this material if you keep your local repo.

##### [Back to the top][top]

<!-- internal links -->
[top]: README.md#welcome-to-module-2
[content]: README.md#content-outline-for-module-2
[guides]: README.md#guides
[how to use]: README.md#how-to-use-this-repo
[setup]: README.md#setup
[examples]: README.md#examples
[faq]: README.md#faq-frequently-asked-questions

<!-- faq links -->
[why solutions]: README.md#why-do-I-not-see-any-solutions
[why not git x]: README.md#why-cant-I-simply-git-clone-or-git-fork-the-resources-repo
[short git flow]: README.md#what-is-the-recommended-git-flow-for-short-practice-problems
[long git flow]: README.md#what-is-the-recommended-git-flow-for-long-project-problems
[how connect]: README.md#how-do-i-connect-my-own-local-repo
[how files]: README.md#what-is-a-recommended-file-structure-for-my-own-notes-going-forward
[will access]: README.md#will-i-still-have-access-to-these-materials-once-i-leave-the-module

<!-- git flow guide links -->
[git flow]: ./git-flow-guide/README.md
[connecting]: ./git-flow-guide/README.md#connecting-a-local-cloned-repo-to-a-github-repo

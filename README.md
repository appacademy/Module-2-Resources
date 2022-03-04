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
-   [Content covered in module 2][content]
-   [Guides][guides]
    - [Git Flow Guide][git flow]
-   [FAQ (Frequently asked questions)][faq]
    -   [Why do I not see any solutions?][why solutions]
    -   [Why can't I just `git clone` or `git fork` the resources repo?][why not git x]
    -   [What is the recommended git flow for short practice problems?][short git flow]
    -   [What is the recommended git flow for long project problems?][long git flow]

---

## How to use this repo

This repo has templates for a/A module 2 practices and study guides. __Students should use their own cohort's specific branch__. Do __not__ use the `main` branch of this repo; it is reserved for empty templates only.

Cohort specific work and solutions will be available on their respective branch as their cohort progresses through curriculum. Content is regularly iterated on, adjusted and improved so each cohort's materials might change. The current cohort branch will receive the latest updates.

### The general day to day use of this repo will be:

- Each morning will have short practices. These are already provided for you in this repo so that you do not have to clone them from a/A Open.

- In the afternoon there will be more complex long practices. These will still be accessed via a/A Open.

- Lectures will be done with these notes and practices on this resources repo. Short practice solutions will be pushed intermittently in between each short practice and lecture. Students can then pull them down as soon as they are available.

- Long practice solutions will be uploaded at the end of the day they are assigned.

- Practice assessment solutions and material will be available on this repo as they are reviewed at the end of each week.

_Please follow the specific steps for setting up this repo. They are designed for incoming students for this module._

__It is recommended that students create two clones of this repo__. One to check for updates (with `git pull`) and another for their own commits which the student will connect to their own GitHub repo.

__Follow the instructions in the [setup][setup] section (below) how to clone this repo__. Consult the [git flow guide][connecting] how to change a `git remote` to connect to your personal repo.

---

## Setup

To clone the repo run this command in the directory of your choice:

    git clone -b <your-cohort-branchname> --single-branch <remote-repo-url> <new-folder-name>

- `<your-cohort-branchname>` will follow the format of __your cohort's__ `Year-Month-Cohort` (e.g., `2022-February-Cohort`).

- `<remote-repo-url>` will depend on if you are using SSH or PAT to access GitHub.

- `<new-folder-name>` will change the name of the local repo to this name (e.g., "my-mod-2-resources", etc.)

[See below for examples][examples].

If you intend to make a second clone, you should rename the previous cloned repo or git will give you an error. Altneratively, you can append an additional option to the above `git clone` command which will be the name of your newly cloned repo. See example below.

These commands will clone the resource repo and only grab the branch relevant to your cohort, while making it the default branch of your local repo. This branch with be preserved as your cohort left it to utilize at your convenience in the future.

Cloning this branch, as demonstrated, will enable GitHub to track your contributions should you change the remote to your own repositority (see the [git flow guide][connecting] how to do this).

### Examples:

_Note, the version you use depends on how you have previously setup your GitHub authentication. Usually only one method is utilized._

- Cloning (using PAT) may look like:

        git clone -b 2022-February-Cohort --single-branch https://github.com/appacademy/Module-2-Resources.git

- Cloning (using SSH) may look like:

        git clone -b 2022-February-Cohort --single-branch git@github.com:appacademy/Module-2-Resources.git

- Cloning a second copy, with new repo name, may look like this (using PAT). This will clone the repo but name the folder "my-mod-2-resources":

        git clone -b 2022-February-Cohort --single-branch https://github.com/appacademy/Module-2-Resources.git my-mod-2-resources

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

---

## Guides

-   [Git Flow Guide][git flow]

---

## FAQ (Frequently asked questions)

### Why do I not see any solutions?

-   Please make sure your repo is on the correct branch. If using the command `git branch` indicates you are on `main` you will not see solutions. The solutions for your cohort are on your cohort specific branch (e.g., 2022-February-Cohort). Please refer to [the setup instructions][setup] on how to setup your repo.

### Why can't I just `git clone` or `git fork` the resources repo?

-   These are not necessarily incorrect approaches. However to get the intended utility of the repo, 1) access to the solutions and 2) easy setup to make your contributions to your own repo on GitHub, requires additional steps after using those commands. Some of those steps may not be known to newer incoming students to a/A. The instructions in [the setup section][setup] were designed to accomodate students in an effective manner relative to their current expected experience with `git` and a/A's goals to gradually encourage familiarity with `git` over time.

### What is the recommended git flow for short practice problems?

-   In Module 2, morning practice sessions are short periods of time to tackle concepts through smaller problems. In the interest of time, you may find it simpler to work on your own code and repos for these shorter sessions while collaborating with your pair. Working together to understand and solve the problems but maximizing your own coding practice time as well.

-   If you would prefer to commit to the same repos, you may do so. Attempt to coordinate with your pair in advance, prior to the designated practice time, to decide who creates the repos, send/accept links. This will minimize downtime.

### What is the recommended git flow for long project problems?

-   For longer practices it is expected that pairs follow a/A suggested pair programming git flow of working from the same repo while taking turns swapping roles between driving and navigating.


<!-- internal links -->

[content]: README.md#content-covered-in-module-2
[guides]: README.md#guides
[how to use]: README.md#how-to-use-this-repo
[setup]: README.md#setup
[examples]: README.md#examples
[faq]: README.md#faq-frequently-asked-questions

<!-- faq links -->
[why solutions]: README.md#why-do-I-not-see-any-solutions
[why not git x]: README.md#why-cant-I-just-git-clone-or-git-fork-the-resources-repo
[short git flow]: README.md#what-is-the-recommended-git-flow-for-short-practice-problems
[long git flow]: README.md#what-is-the-recommended-git-flow-for-long-project-problems

<!-- redirect links -->
[git flow]: ./git-flow-guide/README.md
[connecting]: ./git-flow-guide/README.md#connecting-a-local-cloned-repo-to-a-github-repo

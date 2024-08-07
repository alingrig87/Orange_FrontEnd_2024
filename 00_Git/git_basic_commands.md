# Basic Git Commands in Git Bash

## 1. Initial Configuration
- `git config --global user.name "Your Name"`: Set your global username for all repositories.
- `git config --global user.email "your.email@example.com"`: Set your global email for all repositories.

## 2. Creating and Cloning Repositories
- `git init`: Initialize a new Git repository in the current directory.
- `git clone <url>`: Clone an existing repository from the specified URL.

## 3. Staging Changes
- `git status`: Show the current status of the repository (unstaged changes, added files, etc.).
- `git add <file>`: Add a file to the staging area.
- `git add .`: Add all modified files to the staging area.
- `git reset <file>`: Remove a file from the staging area.

## 4. Committing Changes
- `git commit -m "Commit message"`: Create a new commit with changes from the staging area and a descriptive message.
- `git commit -a -m "Commit message"`: Stage and commit all tracked files in one step.

## 5. Viewing History
- `git log`: Display the commit history.
- `git log --oneline`: Show the commit history in a compact format (one line per commit).
- `git log --graph --oneline`: Show the commit history as a graph in a compact format.

## 6. Branching
- `git branch`: List all branches and the current branch.
- `git branch <branch-name>`: Create a new branch with the specified name.
- `git checkout <branch-name>`: Switch to the specified branch.
- `git checkout -b <branch-name>`: Create and switch to a new branch with the specified name.

## 7. Merging
- `git merge <branch-name>`: Merge the specified branch into the current branch.

## 8. Managing Remote Repositories
- `git remote add origin <url>`: Add a remote repository.
- `git remote -v`: Display existing remote repositories.
- `git push origin <branch-name>`: Push changes from the specified branch to the remote repository.
- `git pull`: Fetch and integrate changes from the remote repository into the current branch.

## 9. Reverting Changes
- `git revert <commit>`: Create a new commit that undoes changes from the specified commit.
- `git reset --hard <commit>`: Reset the repository to the state specified by the given commit, discarding all local changes.

## 10. Others
- `git stash`: Temporarily save uncommitted changes and revert to a clean state.
- `git stash pop`: Apply previously stashed changes and remove them from the stash.

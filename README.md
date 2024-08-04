# Front End 50

## Initial Setup

1. Install git from git-scm.com
2. Create an account on Github
3. Fork the "frontend50" repository created by Alin
4. Initial git config on local machine:

   - Open git bash
   - Verify if git is properly installed on your machine:

   ```bash
   git --version
   ```

   - Go to your workspace folder e.g. /c or /d

   ```bash
      cd /d
   ```

   - Config user name and email for git

   ```bash
   git config --global user.name "Ion Popescu"
   git config --global user.email "ion.popescu@gmail.com"
   git config --global --list
   ```

5. Clone the repository

```bash
git clone https://github.com/<your_git_id>/frontend50.git
```

6. Create, modify, delete, move different files
7. Add changes to git system

```bash
git add .
```

8. Create the first local version(commit)

```bash
git commit -m "specific message related to your changes"
```

9. Push local versions to Github

```bash
git push
```

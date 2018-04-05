# project-newbs
This is a project intended to provided experience in collaborating in a development environment. We will be cloning a website using 3 technologies: HTML, CSS, and JavaScript. The group will be using the Agile Scrum methodology in building the site. 

### Team Members
- Aracely Valencia
- Jon Mladia
- Karren Zoleta


# Working on Git

## Initial Set up

#### NOTES:
i. Use the terminal
ii. Navigate to the folder you want to add the repo to

### Clone the repo:
 1. Fork the repo and copy the URL
 2. $ git clone <YOURREPOURL>
 3. $ git remote add upstream https://github.com/jmaldia/project-newbs.git
     - this creates a connection to the main repo so
     - you will use this to sync your repo with the main
 4. $ git checkout -b <BRANCHNAME>
     - this creates the branch and immediately checks out the branch
     - see below for branch naming convention
 

> **Branch Naming Convention**
> - Branch names consists of 3 elements
>   - Issue type
>   - Feature Name
>   - Your Name
>
> **We'll have 4 issue types for now**
> - bug
> - feature
> - style
> - refactor
>
> **Feature Name**
> - Use camel case for feature names
>
> **Example**
> - git checkout -b feature-navigationBar-bob

# Working on your Branch

- Always do a git pull to make sure you are working on the latest code
- Always work on your branch
- Commit often 
	- make atomic commits 
	- this makes it easier to revert to an older version without losing a lot of work

### Steps to take when working on your Branch
1. $ git checkout development  
	- you need to go to the development branch first
	- to know what branch you are on, do 
	- $ git branch
	- the starred branch is your current branch
2. $ git fetch upstream
	- this gets the new files from the main repo  
3. $ git checkout <BRANCHNAME>
4. $ git merge development
	- this merges the new code with your current code

### Things to do while coding
NOTE: Make commits often
1. $ git add .
	- adds all your code changes to git
2. $git commit -m "ADD A SHORT COMMIT MESSAGE"
	- commits your changes

### Pushing your Commits
1. $ git checkout development  
2. $ git fetch upstream 
3. $ git checkout <BRANCHNAME>
4. $ git merge development  
5. $ git push origin <BRANCHNAME>
6. Go to github and issue a Pull Request from your repo
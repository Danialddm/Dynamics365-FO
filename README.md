# Dynamics365-FO
All developments in D365 F&amp;O
Its so important to consider the .ignoregit file, so just your customized model commit and send to the github online folder.
If you do not change the .ignorefile, then it sends all models to the server by default(more than 4 GB...).

There are some tips for doing the version control of the D365fo:
1- create an empty folder and then clone the repo from the github or create in repo in VS.
2- copy .git file in the path of the C:\AOSService\PackagesLocalDirectory(*)
3- in VS add new local repo from the above path.
4- change the .ignoregit file
5- Remove all other folder and git repo created in the previous steps.
6- Copy all of your VS soloution and projects in (*).
7- You should create new soloution and projects in the (*)
8- Congrast... As of now you can control any script in your project.

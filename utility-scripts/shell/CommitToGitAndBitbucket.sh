#!/bin/bash


echo -n "Enter commit message: > "
read commitMessage
echo "COMMIT MESSAGE: $commitMessage"
cd $XNATIMAGEVIEWER_HOME
git add sample-data/scans/*
git add sample-data/Slicer/*
git add README.md
git add ./build/*
git add src
git add *.txt
git add pom.xml
git commit -m "$commitMessage"
git push origin master

# Updates the demo website
git checkout gh-pages
#
# You would call the python script to
# convert the demo here.
#
git rm -rf ./src
git checkout master src
git rm -rf Demo.html
git checkout master Demo.html
git add index.html
git rm -rf ./sample-data
git checkout master sample-data
git checkout master sample-data/*.txt
git checkout master sample-data/*.js
git checkout master sample-data/scans/*
git checkout master sample-data/Slicer/*
git add *.js
git commit -m "From master: $commitMessage"
git push
# Switch back to master branch
git checkout master


hg add README.md
hg add ./build/*
hg add demo
hg add src
hg add pom.xml
hg commit -m "$commitMessage"
hg push

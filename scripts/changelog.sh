#!/bin/bash

now=$(date +'%Y-%m-%d')
year=$(date +'%Y')

rm -f .changelog.md

echo "---" > .changelog.md
echo "title: ENTER TITLE" >> .changelog.md
echo "date: ${now}" >> .changelog.md
echo "published: true" >> .changelog.md
echo "category: release notes" >> .changelog.md
echo "---" >> .changelog.md
mkdir -p "site/src/updates/$year"
cat .temp_changes.md >> .changelog.md

mv .changelog.md "site/src/updates/$year/$now-release.mdx"
rm -f .temp_changes.md
 
printf "\nChangelog generated\n → site/src/updates/$year/$now-release.mdx"
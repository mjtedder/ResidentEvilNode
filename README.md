# Resident Evil Node

| [Node.JS](https://nodejs.org/en/) | [Inquirer.js](https://www.npmjs.com/package/inquirer) |

A CLI zombie RPG built with Node.js and Inquirer.js

![Travis](https://img.shields.io/travis/USER/REPO.svg)
![npm](https://img.shields.io/npm/v/npm.svg)
![repo-size](https://img.shields.io/github/repo-size/mjtedder/ResidentEvilNode.svg)


## Installation

To run the application locally, first clone this repository with the following command:

	git clone https://github.com/mjtedder/ResidentEvilNode.git

Next, install the application dependencies:

	* cd your/path/to/ResidentEvilNodeclone
	* yarn install or npm install
	* run 'node start' to begin the game

## How To Play

In this game, you are Leon S. Kenney and you will square off against Mr. X. Each will be given a certain amount of health.

For each round, you will be asked to guess a random number between 1 and 5.
If your guess matches the random number of the enemy -- your character inflicts a random amount of damage between 1 and 5.
If your guess does not match the random number of the enemy -- they will inflict a random amount of damage to your character between 1 and 5.  Each round the enemy is given a new random number and you must guess again.

The game ends when Leon or Mr. X gets to 0 health.

## Errors and bugs

If something is not behaving intuitively, it is a bug and should be reported.
Report it here by creating an issue: https://github.com/mjtedder/ResidentEvilNode/issues

Help us fix the problem as quickly as possible by following [Mozilla's guidelines for reporting bugs.](https://developer.mozilla.org/en-US/docs/Mozilla/QA/Bug_writing_guidelines#General_Outline_of_a_Bug_Report)

## Patches and pull requests

Your patches are welcome! Here's our suggested workflow:

* 🍴 Fork the project.
* Make your feature addition or bug fix.
* Send us a pull request with a description of your work. Bonus points for topic branches!

## Copyright and attribution

Copyright (c) 2018 fully_coded.


git remote add origin https://github.com/mjtedder/ResidentEvilNode.git
git push -u origin master

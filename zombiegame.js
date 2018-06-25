// Dependencies
let fs = require('fs')
let inquirer = require('inquirer')

// set global variables
let playerHP = Math.floor(Math.random()*(50-25))+15
let zombieHP = Math.floor(Math.random()*(100-75))+20
console.log('======================================================')
console.log('***RESIDENT EVIL NODE***' + '\n')
console.log('Leon S. Kennedy HP: ' + playerHP + '\n' + 'Mr. X HP: ' + zombieHP)
console.log('======================================================')

// function for start round - math for setting starting player HP and zombie HP

//function for start battle - use inquirer


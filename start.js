// Dependencies
let fs = require('fs')
let inquirer = require('inquirer')

// set global variables & starting HP

let minHP = 20
let maxHP = 40
let playerHP = Math.floor(Math.random()*(maxHP - minHP +1))+minHP
let zombieHP = Math.floor(Math.random()*(maxHP - minHP +1))+minHP
console.log('======================================================')
console.log('***RESIDENT EVIL NODE***' + '\n')
console.log('Leon S. Kennedy HP: ' + playerHP + '\n' + 'Mr. X HP: ' + zombieHP)
console.log('======================================================')

// function for calculating damage, randomg number between 1 and 5

function rollDamage() {
    let attack = Math.floor(Math.random()* 5+1)
    let zombieAttack = Math.floor(Math.random() * 5+1)
    startBattle(attack, zombieAttack)
}

//function for start game - use inquirer
function startBattle(attack, zombieAttack) {
    let questions = [
           {
            type: 'list',
            name: 'damage',
            message: 'Choose a number:',
            choices: ['1','2','3','4','5']
           }
        ]
    inquirer.prompt(questions).then(function(response){
        let playerGuess = response.damage

        if (playerGuess == zombieAttack){
            zombieHP = zombieHP - attack
            console.log('Correct!  Leon dealt ' + attack + ' damage to Mr. X!')
            console.log('====================================================')
            console.log('Leon S. Kennedy HP: ' + playerHP + '\n' + 'Mr. X HP: ' + zombieHP)
            console.log('====================================================')
            rollDamage()
        } else {
            playerHP = playerHP - attack
            console.log('Incorrect! Mr. X dealt ' + attack + ' damage to Leon!')
            console.log('=====================================================')
            console.log('Leon S. Kennedy HP: ' + playerHP + '\n' + 'Mr. X HP: ' + zombieHP)
            console.log('=====================================================')
            rollDamage()
        }
        if ((playerHP - attack) <= 0) {
            console.log('Oh no! Leon is dead!')
            console.log('=====================================================')
        } else if ((zombieHP - attack) <=0) {
            console.log('Mr. X is dead! Leon survived!')
            console.log('=====================================================')
        }
    })
}

rollDamage()






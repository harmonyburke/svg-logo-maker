const inquirer = require('inquirer')
// const fs = require('fs')
const Logo = require('./lib/logo.js')
const { Circle, Triangle, Square } = require('./lib/shapes.js')
const { writeFile } = require('fs/promises')

// prompts ask for user input
function prompts() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter your 3 character logo name.',
            name: 'logoName',
        },
        {
            type: 'input',
            message: 'What color would you like the text to be?',
            name: 'color',
        },
        {
            type: 'list',
            message: 'What shape would you like to use?',
            choices: ['circle', 'triangle', 'square'],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'What color would you like the shape to be?',
            name: 'shapeColor'
        }
    ])



        .then(({ logoName, color, shape, shapeColor }) => {
            // after the user input for these parameters is taken in, it will then start this switch case based on the chosen shape
            let chosenShape
            switch (shape) {
                case "circle":
                    chosenShape = new Circle()
                    break;
                case 'triangle':
                    chosenShape = new Triangle()
                    break;
                case 'square':
                    chosenShape = new Square()
                    break;

            }
            // calls the setColor function for the chosen shape
            chosenShape.setColor(shapeColor)
            // begin function for logo
            const logo = new Logo()
            // calls the class Logo and the functions within that class
            logo.setLogo(logoName, color)
            logo.setShape(chosenShape)
            // this writes the logo.svg file
            return writeFile('logo.svg', logo.render())
        })
        .then(() => {
            console.log('Your logo has been created!')
            // if there are no errors, this message will appear in the terminal
        })
        .catch((error) => {
            console.log('An error has occurred.', error)
            // if something goes wrong, this message will appear in the console.
        })

}
// calling the prompt function to make sure it runs
prompts()

const inquirer = require('inquirer')
// const fs = require('fs')
const Logo = require('./lib/logo.js')
const { Circle, Triangle, Square } = require('./lib/shapes.js')
const { writeFile } = require('fs/promises')


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
            chosenShape.setColor(shapeColor)
            // begin function for logo
            const logo = new Logo()
            logo.setLogo(logoName, color)
            logo.setShape(chosenShape)
            return writeFile('logo.svg', logo.render())
        })
        .then(() => {
            console.log('Your logo has been created!')
        })
        .catch((error) => {
            console.log('An error has occurred.', error)
        })

}
prompts()

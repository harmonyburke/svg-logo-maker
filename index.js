const inquirer=require('inquirer')


const prompts =[
    {
        type:'input',
        message: 'Enter your 3 character logo name.',
        name:'logoName' ,  
    },
    {
        type:'input',
        message:'What color would you like the text to be?',
        name: 'color',
    },
    {
        type:'list',
        message:'What shape would you like to use?',
        choices: ['circle', 'triangle', 'sqaure'],
        name:'shape',
    },
    {
        type: 'input',
        message:'What color would you like the shape to be?',
        name:'shapeColor'
    }

];


function writeToFile(fileName, data){
    const{logoName, color, shape, shapeColor}=data;
    const fileName= 'logo.svg';
    

    console.log('Your logo has been created!')
}
function init(){
    inquirer.prompt(prompts)
}
init()
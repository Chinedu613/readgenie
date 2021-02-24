// Bringing inquier into my file
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadMe = require('./generateReadMe')

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'header',
            message: 'Name of your project?',
        },
        {
            type: 'list',
            name:'license',
            choices: ['MIT','GPL','ANNA','N/A']
        },
        {
            type: 'input',
            name:'description',
            message: 'Write a breif description of your project',
        },
        {
            type: 'input',
            name: 'use',
            message: 'What is the purpose of this application',
        },
        {
            type:'input',
            name: 'install',
            message: 'How do you install the generator',
            default: 'npm i'
        }
    ])
}



const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('Readme.md', generateReadMe(answers)))
        .then(() => console.log('Successfully wrote to Read.md'))
        .catch((err) => console.error(err));
};
init();
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
            name: 'title',
            message: 'Name of your project?',
        },
        {
            type: 'list',
            name:'license',
            choices: ['MIT','GNU GPLv3','Apache 2.0','ISC','N/A']
        },
        {
            type: 'input',
            name:'description',
            message: 'Write a breif description of your project',
        },
        {
            type:'input',
            name: 'installation',
            message: 'How do you install the generator',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'use',
            message: 'What is the purpose of this application?',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Rules on how someone should contribute',
            default: 'https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.txt'
        },
        {
            type: 'input',
            name: 'test',
            message: 'How to test the application?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
    ])
}



const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('Readme.md', generateReadMe(answers)))
        .then(() => console.log('Successfully wrote to Read.md'))
        .catch((err) => console.error(err));
};
init();
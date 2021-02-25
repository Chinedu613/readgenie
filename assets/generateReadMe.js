const generateReadMe = (answers) => {

    return `
    ${generateLicense(answers.license)}

# ${answers.title}
## Table of Contents

${generateTOC(answers)}

## DESCRIPTION

${answers.description}

${installation(answers.installation)}
${readMeUsage(answers.use)}

## LICENSE
${generateLicense(answers.license)}

This application is using the ${answers.license} license
${readMeTest(answers.test)}

## Contribute
${contributeGenie(answers.contribute)}

## Questions

If you have questions or spot an issue please contact me through github or email:

Github: [${answers.github}](https://github.com/${answers.github})

Email: ${answers.email}
    `;
}
// Function to plug in license if available
const generateLicense = (license) => {
if(license !== "N/A")
    return `![badge](https://img.shields.io/badge/license-${license}-blue.svg)`

}

// Function to Plug in Install Section if not blank
const installation = (installation) =>  {
    if(installation !== ""){
    return `
## INSTALLATION

${installation}`
}else{
return`
${installation = ""}`
}
}
// Function to Plug in Contributing Section if not blank
const contributeGenie = (contribute) => {
    let shorten = 'https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.txt'
    if(contribute === shorten ){
return `
If you would like to contribute please follow the [contributors convenent](${shorten})`
}else return `
${contribute}`

}
// Function to Plug in Test Section if not blank
const readMeTest = (test) => {
    if(test !== ""){
    return `

## Tests

${test}`
} else return `
${test}`
}
// Function to Plug in Usage Section if not blank
const readMeUsage = (use) => {
    if(use !== ""){
return `
## USAGE

${use}` 
} else return `
${use}`
}
const generateTOC = (answers) => {
    const entries = Object.entries(answers);
    let toc = "";
    for (let [key, value] of entries){
        if  (value !== ""){
            toc += `[${key}](#${key})\n`
        }
    }
    return toc
    /* let toc = ""
    //if (// if answers is empty) return str;
    for ( let key in answers) {
        toc += `[${key}](#${key})\n`
    }
console.log(toc)
return toc */
}

module.exports = generateReadMe
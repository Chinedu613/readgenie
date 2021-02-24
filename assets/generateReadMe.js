const generateReadMe = (answers) => {

    return `
    ${generateLicense(answers.license)}

# ${answers.title}

## DESCRIPTION

${answers.description}

${installation(answers.install)}
${readMeUsage(answers.use)}

## LICENSE
${generateLicense(answers.license)}

This application is using the ${answers.license} license
${readMeTest(answers.test)}

## Contributing
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
const installation = (install) =>  {
    if(install !== ""){
    return `
## INSTALLATION

${install}`
}else{
return`
${install = ""}`
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
} else {
    return `
${test = ""}`
    }
}
// Function to Plug in Usage Section if not blank
const readMeUsage = (use) => {
    if(use !== ""){
return `
## USAGE

${use}`}
else{
return `
${use = ""}`
}
}


module.exports = generateReadMe
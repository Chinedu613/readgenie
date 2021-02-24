const generateReadMe = (answers) => {
    generateLicense(answers.license)
    return `
    ${generateLicense(answers.license)}

# ${answers.header}

## DESCRIPTION

${answers.description}

## USAGE

${answers.use}
    `;
}
const generateLicense = (license) => {
if(license !== "N/A"){
    return `[github license](https://img.shields.io/badge/license-${license}-blue.svg)`
}
}
module.exports = generateReadMe
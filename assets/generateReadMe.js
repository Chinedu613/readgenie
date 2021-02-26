
// Generate Readme syntax 
const generateReadMe = (answers) => {

    return `
# ${answers.title}

${generateLicense(answers.license)}

## Table of Contents

${generateTOC(answers)}[QUESTIONS](#Questions)

## DESCRIPTION

${answers.description}

${installation(answers.installation)}

${readMeUsage(answers.usage)}

## LICENSE

${generateLicense(answers.license)}

This application is using the ${answers.license} license
${readMeTesting(answers.test)}

## Contribute
${contributeGenie(answers.contribute)}

## Questions

If you have questions or spot an issue please contact me through github or email below:

Github: [${answers.github}](https://github.com/${answers.github})

Email: ${answers.email}
    `;
}

// Function to plug in license if available

const generateLicense = (license) => {
if(license !== "N/A")
license = (license.replace(/\s/g ,"%20"))

return `![badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// Function to Plug in Install Section if not blank

const installation = (installation) =>  {
    if(installation !== ""){
    return `
## INSTALLATION

\`\`\` bash 
${installation}
\`\`\` `;
}else
    return`
${installation = ""}`;
}

// Function to Plug in Contributing Section if not blank

const contributeGenie = (contribute) => {
    let shorten = 'https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.txt'
    if(contribute === shorten ){
return `
If you would like to contribute please follow the [contributors convenent](${shorten})`
}else return `
${contribute}`;
}

//Function to Plug in Test Section if not blank

const readMeTesting = (test) => {
    if (test !== "") {
        return `

## Tests

${test}`;
    } else
        return `
${test}`;
}

// Function to Plug in Usage Section if not blank

const readMeUsage = (usage) => {
    if(usage !== ""){
return `
## USAGE

${usage}` 
} else 
    return `
${usage}`;
}


// If there is a value in the key of the answers Obj then this function will list it out for the 

const generateTOC = (answers) => {
    const entries = Object.entries(answers);
    let toc = "";
    for (let [key, value] of entries){
        if  (value !== "" && key !== "title"){
            toc += `[${key.toUpperCase()}](#${key})\n\n`
        }
    }
    return toc
}

module.exports = generateReadMe
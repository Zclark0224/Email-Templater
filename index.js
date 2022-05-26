import emailData from '/data.js'
import convertToCamelCase from './utils.js'

const createEmailBtn = document.getElementById("createEmailBtn")
const overlay = document.getElementById("overlay") 
const overlayMessage = document.getElementById("overlayMessage")
const emailTypeSelector = document.getElementById("emailType")
const inputContainer = document.getElementById("inputContainer")
const emailExample = document.getElementById("emailExample")

//change values based on selected input
emailTypeSelector.addEventListener("change", renderEmailType)
createEmailBtn.addEventListener("click", createEmail)

function renderEmailType(){
    //reset container html content
    inputContainer.innerHTML = ""
    emailExample.innerHTML = ""
    
    //grab email value inputs from emailData
    const currentEmailType = emailData[emailTypeSelector.value]
    const currentInputs = currentEmailType.inputs
    const currentEmailTemplate = currentEmailType.emailTemplate
    emailExample.innerHTML = currentEmailTemplate
       
    //render inputs to the screen
    for(let input in currentInputs){
        let curInput = currentInputs[input]
        let curInputCamel = convertToCamelCase(curInput)
        // add in camelCase function here
        inputContainer.innerHTML += `<label for="${curInputCamel}">${curInput}</label>
                <input type="input" name="${curInputCamel}" id="${curInputCamel}" placeholder="type ${curInput} here">
                <br>`
    }
}

function createEmail(){
    // grab email data and inputs
    const currentEmailType = emailData[emailTypeSelector.value]
    const currentInputs = currentEmailType.inputs
    
    let replaceMatrix = []
    for(let input in currentInputs){
        let camelInput = convertToCamelCase(currentInputs[input])
        let currentUserInput = document.getElementById(`${camelInput}`)
        replaceMatrix.push({"searchText": `${camelInput}`, "value": `${currentUserInput.value}`})
     }
    
    //loop over replaceMatrix
    let currentEmailTemplate = currentEmailType.emailTemplate
    for(let i = 0; i < replaceMatrix.length; i++){
        const {searchText, value} = replaceMatrix[i]
        currentEmailTemplate = currentEmailTemplate.replaceAll(searchText, value)
    }
    
    emailExample.innerHTML = currentEmailTemplate
}


// createEmailBtn.addEventListener("click", function(){
//     //get values from inputs
//     const email = document.getElementById("email").value
//     const firstName = document.getElementById("firstName").value
//     const lastName = document.getElementById("lastName").value
    
//     //create new CreateEmail instance
//     const positiveEmailOutput = new CreateEmail(email, firstName, lastName)
    
//     //active overlay
//     overlayMessage.innerHTML = `${positiveEmailOutput.positiveEmail()}`
//     overlay.style.display = "block"
// })

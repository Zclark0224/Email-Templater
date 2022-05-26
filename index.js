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
    let currentInputsArr = []
    for(let input in currentInputs){
        let curInput = currentInputs[input]
        let curInputCamel = convertToCamelCase(curInput)
        currentInputsArr.push(curInputCamel)
        inputContainer.innerHTML += `<label for="${curInputCamel}">${curInput}</label>
                <input type="input" name="${curInputCamel}" id="${curInputCamel}" class = "input" placeholder="type ${curInput} here">
                <br>`
    }

    console.log(currentInputsArr)
    for(let i = 0; i < currentInputsArr.length; i++){
        document.getElementById(currentInputsArr[i]).addEventListener("keyup", createEmail)
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

const valuesContainer = document.getElementById("valuesContainer")
const templateNameInput = document.getElementById('templateName')
const addAnotherValueBtn = document.getElementById("addAnotherValue")
const createTemplateBtn = document.getElementById("createTemplateBtn")
const emailTextArea = document.getElementById("emailTextArea")
const value1Input = document.getElementById("value1")

let valuesArray = ['value1']

addAnotherValueBtn.addEventListener("click", function(){
    const valueId = `value${valuesArray.length + 1}`
    valuesContainer.innerHTML += 
        `<div class="value">
            <label for="${valueId}">Placeholder value</label>
            <input type="text" name="${valueId}" id="${valueId}" placeholder="value name">
            <br>
        </div>`
    valuesArray.push(valueId)
})

createTemplateBtn.addEventListener("click", createTemplate)

function createTemplate(){
    const newTemplateName = templateNameInput.value
    const newValue1 = value1Input.value
    const newEmailTemplate = emailTextArea.value
    
    let newTemplate = new TemplateData(newTemplateName, newValue1, newEmailTemplate)
    
    console.log(newTemplate)
}

class TemplateData {
    constructor(templateName, inputs, emailTemplate){
        this.templateName = templateName
        this.inputs = inputs
        this.emailTemplate = emailTemplate
    }
    
}
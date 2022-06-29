const valuesContainer = document.getElementById("valuesContainer")
const templateNameInput = document.getElementById('templateName')
const addAnotherValueBtn = document.getElementById("addAnotherValue")
const createTemplateBtn = document.getElementById("createTemplateBtn")
const emailTextArea = document.getElementById("emailTextArea")

// if(!window.localStorage.getItem('templates')){
//     window.localStorage.setItem('templates', '')
// }

tinymce.init({
    selector: 'textarea',
    plugins: 'a11ychecker advcode casechange export formatpainter image editimage linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tableofcontents tinycomments tinymcespellchecker',
    toolbar: 'a11ycheck addcomment showcomments casechange checklist code export formatpainter image editimage pageembed permanentpen table tableofcontents',
    toolbar_mode: 'floating',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
  })

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

document.

createTemplateBtn.addEventListener("click", createTemplate)

function addValueToTemplate(value){
    let currentValue = document.getElementById(`${value}`).value.toLowerCase()
    let myContent = tinymce.activeEditor.getContent().slice(0, -4)
    tinymce.activeEditor.setContent(`${myContent}{{${currentValue}}}`);
}

function createTemplate(){
    const templateName = templateNameInput.value
    // const userInputs = 
    const emailTemplate = emailTextArea.value

    const templateData = {
        inputs: userInputs,
        emailTemplate: emailTemplate,
    }

    window.localStorage.setItem(`${templateName}`, JSON.stringify(templateData))
}
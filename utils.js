function convertToCamelCase(str){
    let inputArr = str.split(" ")
    if(inputArr.length === 1){
            return `{${inputArr[0].toLowerCase()}}`
       }
    let camelCase = ``
    for(let word = 0; word < inputArr.length; word++){
            if(word === 0){
                camelCase += inputArr[word].toLowerCase()
            } else {
                camelCase += inputArr[word].charAt(0).toUpperCase() + inputArr[word].slice(1)
            }
    }     
    return `{${camelCase}}`
}

export default convertToCamelCase
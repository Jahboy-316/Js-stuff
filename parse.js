


function displayNameandAge() {
    const thierName = document.getElementById("name").value
    const thierAge = document.getElementById("age").value
    const textoutput = document.getElementById("outputText")

    const person = {
        name: thierName,
        age: thierAge
    }

    const jsonString = JSON.stringify(person)

    document.getElementById("jsonOutput").textContent = jsonString

    const parsedPerson = JSON.parse(jsonString)
    
    const processedText = `${parsedPerson.name} is ${parsedPerson.age} years old`
    textoutput.textContent = processedText
}

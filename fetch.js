async function loadData() {

    const [studentResponse, coursesResponse, gradeResponse] = 
    await Promise.all([
        fetch("student.json"),
        fetch("courses.json"),
        fetch("grades.json")
    ])   
    
    const [student, courses, grades] = 
    await Promise.all([
        studentResponse.json(),
        coursesResponse.json(),
        gradeResponse.json()
    ])

    displayStudents(student, courses, grades)
}

function displayStudents(student, courses, grades){
    console.log(student.name)
    console.log(`Total Courses: ${courses.length}`)
    console.log(`Total Grades: ${grades.length}`)
}

loadData()
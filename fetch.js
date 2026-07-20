import { readFile } from "fs/promises";

async function loadData() {

    const [studentData, coursesData, gradesData] =
    await Promise.all([
        readFile("student.json", "utf-8"),
        readFile("courses.json", "utf-8"),
        readFile("grades.json", "utf-8")
    ]);

    const student = JSON.parse(studentData);
    const courses = JSON.parse(coursesData);
    const grades = JSON.parse(gradesData);

    displayStudents(student, courses, grades);
}


function displayStudents(student, courses, grades){
    console.log(student.name)
    console.log(`Total Courses: ${courses.length}`)
    console.log(`Total Grades: ${grades.length}`)
}

loadData()
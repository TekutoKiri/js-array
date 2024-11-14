const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// 1. getTopScoringStudents
function getTopScoringStudents(students) {
  const topScoring = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > 80) {
      topScoring.push(students[i].name);
    }
  }
  return topScoring;
}

// 2. getAverageAge
function getAverageAge(students) {
  let totalAge = 0;
  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
  }
  return totalAge / students.length;
}

// 3. addStudent
function addStudent(students, student) {
  students.push(student);
}

// 4. removeStudentByName
function removeStudentByName(students, name) {
  const updatedStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].name !== name) {
      updatedStudents.push(students[i]);
    }
  }
  return updatedStudents;
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };

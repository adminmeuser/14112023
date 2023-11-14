// Array of students
var students = [];

function addStudent() {
    var number = document.getElementById("studentNumber").value;
    var name = document.getElementById("studentName").value;
    var age = document.getElementById("studentAge").value;
    var department = document.getElementById("studentDepartment").value;
    var totalMarks = document.getElementById("studentTotalMarks").value;
    
    if ( number === "" || name === "" || age === "" || department === "" || totalMarks === "" ) {
        alert("Please fill in all required fields");
        return; 
    }

    var newStudent = { name: name, age: age, department: department, totalMarks: totalMarks, number: number };
    students.push(newStudent);

    updateTable();

    document.getElementById("addStudentForm").reset();
}

function updateTable(data) {
    var tableBody = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = "";

    var dataArray = data || students;

    for (var i = 0; i < dataArray.length; i++) {
        var student = dataArray[i];
        var newRow = tableBody.insertRow(tableBody.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);

        cell1.innerHTML = student.number;
        cell2.innerHTML = student.name;
        cell3.innerHTML = student.age;
        cell4.innerHTML = student.department;
        cell5.innerHTML = student.totalMarks;
        
    }
}
// sort

function sortStudents() {
    var sortFields = document.getElementById("sortFields").value;

    students.sort(function(a, b) {
        return a[sortFields].localeCompare(b[sortFields]);
    });

    updateTable();
}
//filter
function filterByMarks() {
    var markFilter = document.getElementById("markFilter").value;
    var filteredStudents = students.filter(function(student) {
        return parseInt(student.totalMarks) >= parseInt(markFilter);
    });

    updateTable(filteredStudents);
}

function performSearch() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();

    var filteredStudents = students.filter(function(student) {
        return Object.values(student).some(function(value) {
            return value.toLowerCase().includes(searchInput);
        });
    });

    updateTable(filteredStudents);
}
const students = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eva",
    "Fiona",
    "George",
    "Hannah",
    "Ian",
    "Jasmine"
];

document.addEventListener("DOMContentLoaded", () => {
    const studentListDiv = document.getElementById("student-list");
    const ul = document.createElement("ul");

    students.forEach(student => {
        const li = document.createElement("li");
        li.textContent = student;
        ul.appendChild(li);
    });

    studentListDiv.appendChild(ul);
});

function selectRepresentative() {
    const randomIndex = Math.floor(Math.random() * students.length);
    const selectedStudent = students[randomIndex];
    document.getElementById("representative").textContent = `Selected Representative: ${selectedStudent}`;
}

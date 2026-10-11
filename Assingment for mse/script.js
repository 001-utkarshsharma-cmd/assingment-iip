function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    fetch("user.xml")
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(data, "text/xml");

            let users = xmlDoc.getElementsByTagName("user");
            let found = false;

            for (let i = 0; i < users.length; i++) {
                let xmlUsername = users[i].getElementsByTagName("username")[0].textContent;
                let xmlPassword = users[i].getElementsByTagName("password")[0].textContent;

                if (username === xmlUsername && password === xmlPassword) {
                    found = true;
                    break;
                }
            }

            if (found) {
                message.innerHTML = "Login Successful!";
                message.style.color = "green";
                window.location.href = "portal.html";
            } else {
                message.innerHTML = "Invalid Username or Password";
                message.style.color = "red";
            }
        })
        .catch(error => {
            message.innerHTML = "Unable to load user.xml";
            message.style.color = "red";
            console.error(error);
        });
}
    function showPassword() {
    let passwordField = document.getElementById("password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
function loadStudents() {
    fetch("students.xml")
        .then(response => {
            if (!response.ok) {
                throw new Error("Unable to load students.xml");
            }
            return response.text();
        })
        .then(data => {
            let parser = new DOMParser();

            let xmlDoc = parser.parseFromString(
                data,
                "text/xml"
            );

            let students = xmlDoc.getElementsByTagName("student");
            let tableBody = document.getElementById("studentData");

            tableBody.innerHTML = "";

            for (let i = 0; i < students.length; i++) {
                let name = students[i].getElementsByTagName("name")[0].textContent;
                let course = students[i].getElementsByTagName("course")[0].textContent;
                let semester = students[i].getElementsByTagName("semester")[0].textContent;
                let marks = students[i].getElementsByTagName("marks")[0].textContent;

                let row = document.createElement("tr");

                row.innerHTML = `
                    <td>${name}</td>
                    <td>${course}</td>
                    <td>${semester}</td>
                    <td>${marks}</td>
                `;

                tableBody.appendChild(row);
            }
        })
        .catch(error => {
            document.getElementById("result").textContent =
                "Error loading student data. Check students.xml.";
            console.error(error);
        });
}
function toggleTable() {
    let table = document.getElementById("tableContainer");

    if (table.style.display === "none") {
        table.style.display = "block";
    } else {
        table.style.display = "none";
    }
}
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
function changeHeading() {
    let heading = document.getElementById("heading");

    if (heading.innerHTML === "Student Performance Dashboard") {
        heading.innerHTML = "Welcome to Student Portal";
    } else {
        heading.innerHTML = "Student Performance Dashboard";
    }
}
function findTopStudent() {
    let rows = document.getElementById("studentData")
                       .getElementsByTagName("tr");

    if (rows.length === 0) {
        document.getElementById("topStudent").innerHTML =
            "Please load student data first.";
        return;
    }

    let highestMarks = -1;
    let topName = "";

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");

        let name = cells[0].textContent;
        let marks = Number(cells[3].textContent);

        if (marks > highestMarks) {
            highestMarks = marks;
            topName = name;
        }
    }

    document.getElementById("topStudent").innerHTML =
        "Top Student: " + topName + " — Marks: " + highestMarks;
}
window.onload = function () {
    let student_details = localStorage.getItem("student") !== undefined && JSON.parse(localStorage.getItem("student"))

    console.log("surere", localStorage.getItem("student"))

    let tablelist = document.getElementById("tabledata");

    let tableBody = [];

    for (let index = 0; index < student_details.length; index++) {
        tableBody += `<tr>
    <td>${index + 1}</td>
    <td>${student_details[index]?.name}</td>
    <td>${student_details[index]?.age}</td>
    <td>${student_details[index]?.Education}</td>
    <td>${student_details[index]?.address}</td>
    </tr>`

    }

    tablelist.innerHTML = tableBody;
};
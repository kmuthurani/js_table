let student_details = [];

function formhandling(e) {
    e.preventDefault();

    var details = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        Education: document.getElementById("select").value,
        address: document.getElementById('address').value,

    };

    student_details = [...student_details, details]

    localStorage.setItem("student", JSON.stringify(student_details))

    // console.log("studentssss", student_details)

    // e.target.reset();
}

function route(e) {
    e.preventDefault();
    window.location.href = './table.html'
}
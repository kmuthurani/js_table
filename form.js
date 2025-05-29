let student_details = [];

function formhandling(e) {
    e.preventDefault();

    const details = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        Education: document.getElementById('select').value,
        address: document.getElementById('address').value
    };

    student_details = JSON.parse(localStorage.getItem("student")) || [];
    student_details.push(details);

    localStorage.setItem("student", JSON.stringify(student_details));

    e.target.reset(); // Clear form after submission
}

function route(e) {
    e.preventDefault();
    window.location.href = './table.html';
}

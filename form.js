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

    localStorage.setItem("student", JSON.stringify([...student_details, details]));

    e.target.reset();
}

function route(e) {
    e.preventDefault();
    window.location.href = './table.html';
}

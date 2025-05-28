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
    console.log("student", details)
    //  alert("form submitted successfully!")
    // let finallist = document.getElementById("finaldata")

    // let getdetails = ""
    // for (let key in details) {
    // getdetails += `<p>${key} : ${details[key]}</p>` 
    // }

    // finallist.innerHTML = getdetails


    let tablelist = document.getElementById("tabledata");

    let tableBody = [];

    //  for (const [index, value] of tablelist.entries()) {
    //    let row = tableBody.insertRow();
    //    let indexCell = row.insertCell();
    //    let valueCell = row.insertCell();
    //    indexCell.textContent = index;
    //    valueCell.textContent = value;
    //  }

    for (let index = 0; index < student_details.length; index++) {
        tableBody += `<tr>
    <td>${index+1}</td>
    <td>${student_details[index]?.name}</td>
    <td>${student_details[index]?.age}</td>
    <td>${student_details[index]?.Education}</td>
    <td>${student_details[index]?.address}</td>
    </tr>`

    }

    tablelist.innerHTML = tableBody;
}
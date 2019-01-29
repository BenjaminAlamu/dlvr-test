let table = document.getElementById("table");


let json_data = data;
printData()

function printData() {
    table.innerHTML = ""
    for (let i = 0; i < json_data.length; i++) {
        var row_data = ""
        row_data = '<tr>' +
            ' <td>' + json_data[i].firstName + '</td>' +
            ' <td>' + json_data[i].lastName + '</td>' +
            ' <td>' + json_data[i].occupation + '</td>' +
            ' <td>' + json_data[i].phoneNumber +
            '</tr>';
        table.innerHTML += row_data
    }
}




function myFunction(value) {
    console.log(value)
    data.sort(sortFirstName)
    printData()
}

function sortFirstName(a, b) {
    console.log("fbfjeb")
    if (a.firstName > b.firstName) {
        return 1
    }
    if (a.firstName < b.firstName) {
        return -1
    }
    return 0
}
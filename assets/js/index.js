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




function parentSort(value) {

    if (value === "firstName") {
        data.sort(sortFirstName)
    }

    if (value === "lastName") {
        data.sort(sortLastName)
    }

    if (value === "occupation") {
        data.sort(sortOccupation)
    }

    if (value === "phoneNumber") {
        data.sort(sortNum)
    }


    printData()
}

function sortFirstName(a, b) {
    if (a.firstName > b.firstName) {
        return 1
    }
    if (a.firstName < b.firstName) {
        return -1
    }
    return 0
}

function sortLastName(a, b) {
    if (a.lastName > b.lastName) {
        return 1
    }
    if (a.lastName < b.lastName) {
        return -1
    }
    return 0
}

function sortOccupation(a, b) {
    if (a.occupation > b.occupation) {
        return 1
    }
    if (a.occupation < b.occupation) {
        return -1
    }
    return 0
}

function sortNum(a, b) {
    if (a.phoneNumber > b.phoneNumber) {
        return 1
    }
    if (a.phoneNumber < b.phoneNumber) {
        return -1
    }
    return 0
}
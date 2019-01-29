let table = document.getElementById("table");


let json_data = data;
let displayed_data = json_data.slice(0, 10)
printData()
addButtons()

function printData() {
    table.innerHTML = ""
    for (let i = 0; i < displayed_data.length; i++) {
        var row_data = ""
        row_data = '<tr>' +
            ' <td>' + displayed_data[i].firstName + '</td>' +
            ' <td>' + displayed_data[i].lastName + '</td>' +
            ' <td>' + displayed_data[i].occupation + '</td>' +
            ' <td>' + displayed_data[i].phoneNumber +
            '</tr>';
        table.innerHTML += row_data
    }
}

function addButtons() {
    let button = document.getElementById("buttons");
    for (let i = 0; i < json_data.length; i += 10) {
        let val = i / 10 + 1;
        button.innerHTML += `<button class=button button${val} onclick='trimArray(${i})'>${val}</button>`
    }
}

function trimArray(index) {
    console.log(index);
    displayed_data = json_data.slice(index, index + 10)
    printData();

}

function parentSort(value) {

    if (value === "firstName") {
        displayed_data.sort(sortFirstName)
    }

    if (value === "lastName") {
        displayed_data.sort(sortLastName)
    }

    if (value === "occupation") {
        displayed_data.sort(sortOccupation)
    }

    if (value === "phone") {
        displayed_data.sort(sortNum)
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
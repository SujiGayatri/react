var x = [
    {
        name:"Suji",
        rollno:"212",
        branch:"AIML",
    },
    {
        name:"Nick",
        rollno:"214",
        branch:"AIML",
    },
    {
        name:"Nani",
        rollno:"213",
        branch:"AIML",
    },
    {
        name:"Tara",
        rollno:"211",
        branch:"AIML",
    }
];

// Function to create table and display initial data
function createTable() {
    var table = document.getElementsByClassName("mytable")[0];
    table.style.width = '50%';
    table.setAttribute('border', '1');
    table.setAttribute('cellpadding', '5');
    table.setAttribute('cellspacing', '0');

    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    tr.style.backgroundColor = "#3FA2F6";

    ['Name', 'Rollno', 'Branch'].forEach(ele => {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(ele));
        th.style.color = "black";
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);

    var tbody = document.createElement("tbody");

    x.forEach(ele => {
        var tr = document.createElement("tr");
        Object.values(ele).forEach(i => {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(i));
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
}

// Function to add a new row to the table
function addRow() {
    const name = prompt("Enter name:");
    const rollno = prompt("Enter roll number:");
    const branch = prompt("Enter branch:");

    if (name && rollno && branch) {
        var table = document.getElementsByClassName("mytable")[0];
        var tbody = table.getElementsByTagName('tbody')[0];

        var tr = document.createElement("tr");
        [name, rollno, branch].forEach(i => {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(i));
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    } else {
        alert("Please fill all fields.");
    }
}

// Initialize the table on page load
createTable();

// Set onclick event for the ADD button
document.getElementById("addButton").onclick = addRow;

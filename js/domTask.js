var dataDisplayed = false;
function display(){
    if(!dataDisplayed){
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
    ]
    var table = document.getElementsByClassName("mytable")[0];
    table.style.width='50%';
    table.setAttribute('border','1');
    table.setAttribute('cellpadding','5');
    table.setAttribute('cellspacing', '0');

    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    tr.style.backgroundColor = "#3FA2F6";

    ['Name','Rollno','Branch','Delete'].forEach(ele =>{
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(ele));
        th.style.color = "black";
        tr.appendChild(th);
    })
    thead.appendChild(tr);
    table.appendChild(thead);

    var tbody = document.createElement("tbody");

    x.map(ele => {
        var tr = document.createElement("tr");
        Object.values(ele).map(i =>{
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(i));
            td.contentEditable = true;
            tr.appendChild(td);
        });

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.backgroundColor = "red";
        deleteButton.onclick = function(){
            table.deleteRow(tr.rowIndex);
        };
        var deleteCell = document.createElement("td");
        deleteCell.appendChild(deleteButton);
        tr.appendChild(deleteCell);

        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    dataDisplayed = true;
    }
    else{
        var newRow = newUserData();
        if(newRow){
            addRow(newRow);
        }
    }
}

function newUserData(){
    var name=window.prompt("Enter Name");
    var rollno=window.prompt("Enter Rollno");
    var branch=window.prompt("Enter Branch");
    if(name && rollno && branch){
        return{
            name:name,
            rollno:rollno,
            branch:branch
        }
    }
    else{
        alert("please fill details");
        return null;
    }
}

function addRow(data){
     var table = document.getElementsByClassName("mytable")[0];
     var tbody = document.getElementsByTagName('tbody')[0];

    var tr = document.createElement("tr");
    Object.values(data).forEach(ele => {
        var td = document.createElement("td");
        td.textContent = ele;
        td.contentEditable = true;
        tr.appendChild(td);
    })
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.backgroundColor = "red";
    deleteButton.onclick = function(){
        table.deleteRow(tr.rowIndex);
    }
    var deleteCell = document.createElement("td");
    deleteCell.appendChild(deleteButton);
    tr.appendChild(deleteCell);
    tbody.appendChild(tr);
}

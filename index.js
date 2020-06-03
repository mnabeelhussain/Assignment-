
var arr = [];

function pushFunction() {


    var toDoList = {
        taskName: document.getElementById("task").value,
        status: document.getElementById("status").value,
    };

    arr.push(toDoList);



    var newArr = arr.map(function (element) {
        return element.taskName + element.status;

    }).join(" , ");
    console.log(newArr);



    //  console.log(JSON.stringify(newArr));

    var tableData = document.getElementById("tableData");

    // inserting a row
    var row = tableData.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);



    for (var i = 0; i < arr.length; i++) {

        cell1.innerHTML = i+1
        cell2.innerHTML = (i+1) * 10;
        cell3.innerHTML = toDoList.taskName;    
        cell4.innerHTML = toDoList.status;

    }


}






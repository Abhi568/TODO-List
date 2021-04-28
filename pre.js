function clicked1() {
    console.log("call");
    Subject1 = document.getElementById("subj").value;
    Description = document.getElementById("desc").value;
    Date1 = document.getElementById("date").value;
    let Arrayofitems = []
    if (localStorage.getItem('itemsJson') == null) {
        Arrayofitems.push([Subject1, Description, Date1]);
        localStorage.setItem('itemsJson', JSON.stringify(Arrayofitems));
    }
    else {
        JsonString = localStorage.getItem('itemsJson')
        Arrayofitems = JSON.parse(JsonString);
        Arrayofitems.push([Subject1, Description, Date1]);
        localStorage.setItem('itemsJson', JSON.stringify(Arrayofitems));
    }
    update()

}
function update() 
{
    table_content = document.getElementById('values');
    if (localStorage.getItem('itemsJson') != null) {
        JsonString = localStorage.getItem('itemsJson');
        Arrayofitems = JSON.parse(JsonString);
        
        str = ''
        Arrayofitems.forEach((element, index) => {
            str += `
       <tr>
        <th><text>${index + 1}</text></th>
        <td><text>${element[0]}</text></td>
        <td><text>${element[1]}</text></td>
        <td><text>${element[2]}</text></td>
        <td><button onclick="delete1(${index})">Delete</button></td>
        </tr>
       `
        });
        table_content.innerHTML = str;
    }
}
function delete1(index) {
    JsonString1 = localStorage.getItem('itemsJson');
    array = JSON.parse(JsonString1);
    array.splice(index, 1);
    console.log(array);
    localStorage.setItem('itemsJson', JSON.stringify(array));
    update();
}
function Clear1() 
{
    confirm1=confirm("Are you sure");
    if (confirm1==true)
    {
    table_content = document.getElementById('values')
    table_content.innerHTML="";
    localStorage.clear();
    }
}

update();

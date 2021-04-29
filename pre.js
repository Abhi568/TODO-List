function clicked1()
 {
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
        <td>${index + 1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>${element[2]}</td>
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
var Search_items = () => {
    var table_content = document.getElementById("values");
    var tr_content = table_content.getElementsByTagName('tr');
    search_bar_content = document.getElementById("input_cont").value.toUpperCase()
    for (var i = 0; i < tr_content.length; i++) {
    
        var td_content_name = tr_content[i].getElementsByTagName('td')[1];
        var td_content_date = tr_content[i].getElementsByTagName('td')[3];
        var main_data_search_name = td_content_name.textContent || td_content_name.innerHTML
        var main_data_search_date = td_content_date.textContent || td_content_date.innerHTML;
        
        if (main_data_search_name || main_data_search_date) {
            if (main_data_search_name.toUpperCase().indexOf(search_bar_content) > -1) {
                console.log("found");
                tr_content[i].style.display = ""
            }
            else if (main_data_search_date.toUpperCase().indexOf(search_bar_content) > -1) {
                tr_content[i].style.display = ""
            }
            else {
                tr_content[i].style.display = "none";
            }
        }

    }
}

update();
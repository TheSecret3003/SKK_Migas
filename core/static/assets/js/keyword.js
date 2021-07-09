window.addEventListener("load", function() {
    load_keyword_table();
});
var xhttp = new XMLHttpRequest()
function load_keyword_table() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response);

            // data = Object.values(data);
            // console.log(this.response);
            var cases_table = document.getElementById("keywords_table");
            var cases_table_body = document.getElementById("keywords_table_body");
            // console.log(Object.values(data));
            
            for (let value of Object.values(data)) {
                console.log(value);
                let new_row = "<tr>";

                new_row += "<td class='font-weight-bold'>" + value['Keyword'] + "</td>";
                new_row += "</tr>";

                cases_table_body.innerHTML += new_row;
            }
            // for (const value of Object.values(data)) {
            // }

            sorttable.makeSortable(cases_table);
            cases_table.classList.add("sortable");
        }
    };

    xhttp.open("GET", "keywords");
    xhttp.send();
}
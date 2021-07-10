
$(document).ready(function() {
    $("#testGrid").kendoGrid({
        dataSource: {
            data: people,
            schema: {
                model: {
                    fields: {
                        name: { type: "string", validation:{required: true} },
                        doctor: { type: "string" },
                        time: { type: "string" },
                        date: { type: "string" },
                        id: { type: "string" }
                    }
                }
            },
            pageSize: 5
        },
        scrollable: true,
        sortable: true,
        filterable: 
        {
            mode: "row"
        },
        pageable: {
            input: true,
            numeric: false
        },
        toolbar: [{name: "create"}, {name: "save"},{name: "cancel"}],
        columns: [
            { template: "<a class='k-button a'>Appointment Detail</a>", width: 150}, 
            { field: "name", title: "Name", format: "{0:c}", width: "130px" },
            { field: "doctor", title: "Doctor", format: "{0:c}", width: "130px"},
            { field: "time", title: "Time", width: "130px" },
            { field: "date", title: "Date", width: "130px" },
            { field: "id", title: "ID", width: "130px"}, 
            { command: ["edit", "destroy"], title: "&nbsp;", width: "150px" }
        ],
        editable: "inline"
    });
});


var people =
   [{ name: "John Doe", doctor: "10", time:"9:00 am", date: "04/21/21", id:"1"},
    { name: "Jane Doe", doctor: "22", time:"10:00 am", date: "05/1/21", id:"2"},
    { name: "Jake Doe", doctor: "31",     time:"9:30 am", date: "04/23/21", id:"3"},
    { name: "Jordan Doe", doctor: "32", time:"8:00 am", date: "05/5/21", id:"4"},
    { name: "Justin Doe", doctor: "52", time:"8:30 am", date: "04/24/21", id:"5"},
    { name: "Jill Doe", doctor: "14", time:"9:30 am", date: "04/27/21", id:"6"},
    { name: "John Doe", doctor: "10", time:"11:00 am", date: "04/25/21", id:"7"},
    { name: "Jane Doe", doctor: "22", time:"9:30 am", date: "04/28/21", id:"8"},
    { name: "Jake Doe", doctor: "31", time:"10:30 am", date: "04/27/21", id:"9"},
    { name: "Jordan Doe", doctor: "32", time:"9:00 am", date: "04/28/21", id:"10"},
    { name: "Justin Doe", doctor: "52", time:"9:00 am", date: "04/30/21", id:"11"},
    { name: "Jill Doe", doctor: "14", time:"11:00 am", date: "05/1/21", id:"12"},
    { name: "John Doe", doctor: "10", time:"8:00 am", date: "05/11/21", id:"13"},
    { name: "Jane Doe", doctor: "22", time:"9:00 am", date: "04/24/21", id:"14"},
    { name: "Jake Doe", doctor: "31", time:"11:00 am", date: "04/21/21", id:"15"},
    { name: "Jordan Doe", doctor: "32", time:"7:30 am", date: "04/21/21", id:"16"},
    { name: "Justin Doe", doctor: "52", time:"9:00 am", date: "04/21/21", id:"17"},
    { name: "Jill Doe", doctor: "14", time:"9:00 am", date: "04/21/21", id:"18"},
    { name: "John Doe", doctor: "10", time:"7:00 am", date: "04/21/21", id:"19"},
    { name: "Jane Doe", doctor: "22", time:"9:00 am", date: "04/21/21", id:"20"},
    { name: "Jake Doe", doctor: "31", time:"10:00 am", date: "04/21/21", id:"21"},
    { name: "Jordan Doe", doctor: "32", time:"8:00 am", date: "04/21/21", id:"21"},
    { name: "Justin Doe", doctor: "52", time:"11:00 am", date: "04/21/21", id:"22"},
    { name: "Jill Doe", doctor: "14", time:"9:00 am", date: "04/21/21", id:"23"}
]



$(document).ready(function() {
    $("#treeView").kendoTreeView();
});  

$(document).ready(function(){
    // $("#dialog").kendoDialog({
    //     width: 500,
    //     height: 500,
    //     title: "Dialog Title",
    //     visible: false,
    //     closable: true,
    //     modal: true
    // }).data("kendoDialog");;
  
    $("#dialog").kendoDialog({
        width: "600px",
        height: "600px",
        title: "Appointment Detail",
        visible: false,
        closable: true,
        modal: true,
        content: "<p>ID: 1<p>" +
         "<p>Patient: John Doe </p>" +
          "<p> Doctor: 10 </p>" +
           "<p>Time: 9:00am </p>" + 
           "<p>Patient ID: 1 </p>" + 
           "<p>Date: 04/21/2021 </p>" + 
           "<p>Reason: Upset Stomach, Nausea, Headache </p>" +
           "<p>Opened By: Dr. Who</p>" +
           "<p>Opened On: 04/02/2021 </p>" +
           "<p>Edited By: N/A </p>" +
           "<p>Edited On: N/A </p>" +
           "<p>Notes: </p>"
         ,
        actions: [
        
            { text: 'OK', primary: true }
        ]
    }).data("kendoDialog");;

$("a, .k-button a ").click(function(){
    var dialog = $("#dialog").data("kendoDialog");
    dialog.open();
   
});

// $("a, .k-button a ").click(function(){
//     var dialog = $("#dialog").data("kendoDialog");
//     dialog.close();
   
// });

});
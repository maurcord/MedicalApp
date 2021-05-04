
//////////////////////////////////// DATA FOR GRID/////////////////////////////////////

$(function () { 
    var people =
   [{ name: "John Doe", doctor: "10", time:"9:00 am", date: "04/21/21", id:"1"},
    { name: "Jane Doe", doctor: "22", time:"10:00 am", date: "05/1/21", id:"2"},
    { name: "Jake Doe", doctor: "31", time:"9:30 am", date: "04/23/21", id:"3"},
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

///////////////////////////      GRID  ///////////////////////////////////////////////////

    $("#grid").kendoGrid({
        columns: [
        { title: "ID", field: "id" },
        { title: "Date", field:"date" },
        { title: "Time", field:"time" },
        { title: "Patient", field: "name"},
        { title: "Doctor", field: "doctor" } ],

    dataSource: {
        data: people,
        pageSize: 10
    },
    height: 500,
    scrollable: true,
    pageable: true,
    sortable: {
        mode: "multiple"
    },
    groupable: true
    }); 



/////////////////////////////////// NAV TREE /////////////////////////////////////////////////////////////

$(document).ready(function() {
    $("#treeView").kendoTreeView();
});




//////////////////////////////////////// APPOINTMENT SEARCH FORM////////////////////////////////////////////

$(document).ready(function () {
    var validationSuccess = $("#validation-success");

    $("#exampleform").kendoForm({
        orientation: "horizontal",
        formData: {
            Id: "John Doe",
            Patient: Number,
            Doctor: Number,
            Time: "Time",
            Date: new Date(),
            Agree: false
        },
        height: 485 ,
        items: [{
            type: "group",
            label: "Filters",
            items: [
                {field: "Id", editor: "NumericTextBox", label: "ID:",validation: { required: true } },
                { field: "Patient", editor: "NumericTextBox", label: "Patient:", validation: { required: true} },
                { field: "Doctor", editor: "NumericTextBox", label: "Doctor:", validation: { required: true} },
                { field: "Time", label: "Time:", validation: { required: true} },
                { field: "Date", editor: "DatePicker", label: "Date:", validation: { required: true} },
                { field: "Reason", label: "Reason:", validation: { required: true} },
            ]   
        }],
        validateField: function(e) {
            validationSuccess.html("");
        },
        search: function(e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
        },
        clear: function(ev) {
            validationSuccess.html("");
        }
    });
});

////////////////////////////////////////////////////// APPOINTMENT DETAIL FORM //////////////////////////////////////////

$(document).ready(function () {
    var validationSuccess = $("#validation-success");

    $("#exampleform2").kendoForm({
        orientation: "horizontal",
        formData: {
            Id: "John Doe",
            Patient: Number,
            Doctor: Number,
            Time: "Time",
            Date: new Date(),
            Agree: false
        }, 
        items: [{
            type: "group",
            label: "Appointment Detail",
            items: [
                {field: "Id", editor: "NumericTextBox", label: "ID:",validation: { required: true } },
                { field: "Patient", editor: "NumericTextBox", label: "Patient:", validation: { required: true} },
                { field: "Doctor", editor: "NumericTextBox", label: "Doctor:", validation: { required: true} },
                { field: "Time", label: "Time:", validation: { required: true} },
                { field: "Date", editor: "DatePicker", label: "Date:", validation: { required: true} },
                { field: "Reason", label: "Reason:", validation: { required: true} },
            ]   
        }],
        validateField: function(e) {
            validationSuccess.html("");
        },
        search: function(e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
        },
        clear: function(ev) {
            validationSuccess.html("");
        }
    });
});


/////////////////////////////////////////////// Patient Seach Form //////////////////////////////////////////////////

$(document).ready(function () {
    var validationSuccess = $("#validation-success");

    $("#exampleform3").kendoForm({
        orientation: "horizontal",
        formData: {
            Id: "",
            FirstName: "",
            LastName: "",
            Birth: new Date(),
            ActivePatient: "",
            Doctor: Number,
            Time: "Time",
            Date: new Date(),
            Agree: false
        }, 
        layout:"grid",
        grid:{ cols:2, gutter: 20 },
        items: [{
            type: "group",
            label: "Patient Search",
            items: [
                {field: "Id", label: "ID:",validation: { required: true } },
                { field: "FirstName", label: "First Name", validation: { required: true} },
                { field: "LastName", label: "Last Name", validation: { required: true} },
                { field: "ActivePatient",label: "Active Patient?", validation: { required: true} 
            }
        ] 
    } ,
    {
            type: "group",         
            layout: "grid",
            grid: { cols:2, gutter: 20 },
         items: [  
                { field: "Time", editor: "TimePicker", label: "Time", validation: { required: true} },
                { field: "Reason", label: "Reason", validation: { required: true} },
                { field: "PrimaryInsurance", label: "Primary Insurance", validation: { required: true} },
                { field: "SecondaryInsurance", label: "Secondary Insurance", validation: { required: true} }]
        }],
        validateField: function(e) {
            validationSuccess.html("");
        },
        search: function(e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
        },
        clear: function(ev) {
            validationSuccess.html("");
        }
    });
});

//////////////////////////////////////////////////////////// PATIENT DETAIL FORM ///////////////////////////////////////////////////////

$(document).ready(function () {
    var validationSuccess = $("#validation-success");

    $("#exampleform4").kendoForm({
        orientation: "horizontal",
        formData: {
            Id: "",
            FirstName: "",
            LastName: "",
            Birth: new Date(),
            ActivePatient: "",
            Doctor: Number,
            Time: "Time",
            Date: new Date(),
            Agree: false
        }, 
        layout:"grid",
        grid:{ cols:2, gutter: 20 },
        items: [{
            type: "group",
            label: "Patient Detail",
            items: [
                {field: "ActivePatient", label: "Active Patient?", validation: { required: true } },
                {field: "Birth", label: "Date of Birth *", validation: { required: true } },
                { field: "FirstName", label: "First Name *", validation: { required: true} },
                { field: "LastName", label: "Last Name *", validation: { required: true} }, 
                {field: "Adress", label: "Street Address *", validation: { required: true } },
                {field: "Apartment", label: "Apartment *", validation: { required: true } },
                {field: "City", label: "City *", validation: { required: true } },
                {field: "Zip", label: "Zip Code *", validation: { required: true } },
                {field: "PrimaryInsurance", label: "Primary Insurance *", validation: { required: true } },
                {field: "PrimaryInsuranceNumber", label: "Primary Insurance  ID Number *", validation: { required: true } },
             
        ] 
    } ,
    {
            type: "group",         
            layout: "grid",
            grid: { cols:2, gutter: 20 },
         items: [  
                { field: "Time", editor: "TimePicker", label: "Time", validation: { required: true} },
                { field: "Reason", label: "Reason", validation: { required: true} },
                { field: "PrimaryInsurance", label: "Primary Insurance", validation: { required: true} },
                { field: "SecondaryInsurance", label: "Secondary Insurance", validation: { required: true} }]
        }],
        validateField: function(e) {
            validationSuccess.html("");
        },
        search: function(e) {
            e.preventDefault();
            validationSuccess.html("<div class='k-messagebox k-messagebox-success'>Form data is valid!</div>");
        },
        clear: function(ev) {
            validationSuccess.html("");
        }
    });
});



///////////////////////////////////// PATIENT DETAIL GRID ///////////////////////////////////////////////

$("#grid2").kendoGrid({
    columns: [
    { title: "ID", field: "id" },
    { title: "Date", field:"date" },
    { title: "Time", field:"time" },
    { title: "Patient", field: "name"},
    { title: "Doctor", field: "doctor" } ],

dataSource: {
    data: people,
    pageSize: 10
},
height: 500,
scrollable: true,
pageable: true,
sortable: {
    mode: "multiple"
},
groupable: true
}); 
});

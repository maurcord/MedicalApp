$(document).ready(function() {
$("#grid98").kendoGrid({
    dataSource: {
        transport: {
            read: "http://localhost:3000/posts",
            dataType: "jsonp"
        },
        schema: {
            model: {
                fields: {
                    name: { type: "string", validation:{required: true} },
                    doctor: { type: "string" },
                    time: { type: "string" },
                    date: { type: "string" },
                    identification: { type: "string" }
                }
            }
        },
        pageSize: 5
    },
    scrollable: true,
    sortable: true,
    filterable: true,
    pageable: {
        input: true,
        numeric: false
    },
    toolbar: ["create"],
    columns: [
        { field: "name", title: "Name", format: "{0:c}", width: "130px" },
        { field: "doctor", title: "Doctor", format: "{0:c}", width: "130px"},
        { field: "time", title: "Time", width: "130px" },
        { field: "date", title: "Date", width: "130px" },
        { field: "identification", title: "ID", width: "130px"}, 
        { command: ["edit", "destroy"], title: "&nbsp;", width: "150px" }
    ],
    editable: "inline"
});
});
// var people = [{
//     name : "John Doe",
//     doctor : "10",
//     time : "9:30am",
//     date : "04/21/21",
//     identification : "1"
// }, 
// {
//     name : "Jane Doe",
//     doctor : "22",
//     time : "10:30am",
//     date : "05/01/21",
//     identification : "2"
// },
// {
//     name : "Jake Doe",
//     doctor : "31",
//     time : "11:30am",
//     date : "04/23/21",
//     identification : "3"
// },{
//     name : "Jake Doe",
//     doctor : "31",
//     time : "11:30am",
//     date : "04/23/21",
//     identification : "4"
// }
// ]

fetch('http://localhost:3000/posts')
.then(result => {
    return result.json();
})
.then(data => {
    console.log(data);
})


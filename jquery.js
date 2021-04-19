var data = {
    'foo': 'bar',
    'foo2': 'baz'
}


var s = $('<select />');

for(var val in data) {
    $('<option />', {value: val, text: data[val]}).appendTo(s);
}

s.appendTo('body'); // or wherever it should be
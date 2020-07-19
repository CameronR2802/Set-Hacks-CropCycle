items = [];
idx = 0;

if(!localStorage.getItem('existingData')){
    $.getJSON( "postingData.json", function( data ) {
        console.log(data);
        $.each( data, function( key, val ) {
            items[idx] = val;
            idx += 1;
        });
        
        localStorage.setItem('existingData', JSON.stringify(items));

        items = localStorage.getItem('existingData');
        items = JSON.parse(items);
    });
}else{
    items = localStorage.getItem('existingData');
    items = JSON.parse(items);
}
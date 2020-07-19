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
    location.reload();
}else{
    items = localStorage.getItem('existingData');
    items = JSON.parse(items);
}

storedFilters = localStorage.getItem('storedFilters');

if(storedFilters){
    storedFilters = JSON.parse(storedFilters);
}else{
    storedFilters = {};
    storedFilters.BUY = {
        'Price' : {
            'minPrice' : 0,
            'maxPrice' : 1000000
        }
    };
    storedFilters.SELL = {
        'Price' : {
            'minPrice' : 0,
            'maxPrice' : 1000000
        }
    };
}

storedSort = localStorage.getItem('storedSort');
if (storedSort){
    storedSort = storedSort;
}else{
    storedSort = "None";
}
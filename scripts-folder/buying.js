const htmlBuyItems = document.querySelector("#displayBuyItems");
const buyFilterForm = document.querySelector("#buyFilterForm");
const buySortForm = document.querySelector("#buySortForm");

buyItems = [];

storedBuyFilters = storedFilters.BUY;

sortFunction = (a, b) => {
    if (storedSort === "None") return 0;
    else if (storedSort === "Price") {
        return parseFloat(a['Price/kg'].slice(2)) < parseFloat(b['Price/kg'].slice(2)) ? -1 : 1;
    } else if (storedSort === "Name") {
        return a['Product '] < b['Product '] ? -1 : 1;
    }else if(storedSort === 'Date'){
        return a['PostedDate'] > b['PostedDate'] ? -1 : 1;
    }else{
        return 0;
    }
}

items.sort(sortFunction);

buyItems = items.filter(item => {
    if (item["Buy/Sell"] === "Buy ") {
        itemCost = parseFloat(item['Price/kg'].slice(2))
        if (itemCost >= storedBuyFilters['Price'].minPrice && itemCost <= storedBuyFilters['Price'].maxPrice) {
            return item;
        }
    }
});

for (i = 0; i < buyItems.length; i++) {
    let item = `<li class="col-lg-4" style = "margin-top : 10px">
                    <div style="width: 100%; height: 60vh; padding: 0.8vw; background-color: white;">
                        <img src="Images/${buyItems[i]['Product ']}.png" class="card-img-top" alt="${buyItems[i]['Product ']}">
                        <span>
                            <h4 class = "card-title" style = "float: left"> ${buyItems[i]["Product "]} </h4>
                            <p style = "float: right; margin: 10px 0;" >  <span>&#8804;</span> Rs${buyItems[i]["Price/kg"].slice(2)}/kg </p>
                        </span>
                        <div class="card-body" style = "clear: both;">
                            <i class="fa fa-map-marker"> ${buyItems[i]['Location ']}, Matale </i>
                            <button type="button" class="btn btn-info btn-lg" style = "float: right;"
                            data-toggle="modal" data-target="#myModal${i}">
                                See Details </button>
                        </div>
                    </div>

                    <div id="myModal${i}" class="modal fade" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h3 class="modal-title"> ${buyItems[i]["Product "]} </h3>
                                <p> Location: ${buyItems[i]["Location "]}, Matale | Posted: ${buyItems[i]["PostedDate"]} </p>
                            </div>
                            <div class="modal-body">
                
                                <div class = "container-fluid">
                                    <div class="row">
                                        <div class="col-md-6"> 
                                            <h4 style = "text-decoration : underline"> Product Description </h4>
                                            ${buyItems[i]["Description "]} 
                                            <h4 style = "text-decoration : underline; margin-top:10px"> Product Details </h4>
                                            <p> Price: ${buyItems[i]["Price/kg"]}  </p>
                                        </div>
                                        <img src="Images/${buyItems[i]['Product ']}.png" class="card-img-right" alt="...">
                                    </div>
                                </div>
                                <hr>
                                <h4> Connect with Seller </h4>
                                <div class = "container-fluid">
                                    <p> Name: ${buyItems[i]["Name "]} </p>
                                    <p> Phone: ${buyItems[i]["Phone "]}</p>
                                    <p> Email: ${buyItems[i]["Email "]}</p>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-default"
                                    data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
                    </div>
                </li>`;

    htmlBuyItems.insertAdjacentHTML('beforeend', item);
}

buyFilterForm.onsubmit = function (event) {
    event.preventDefault();
    if (buyFilterForm.minPrice.value === '') {
        storedBuyFilters.Price.minPrice = 0;
    } else {
        storedBuyFilters.Price.minPrice = buyFilterForm.minPrice.value;
    }

    if (buyFilterForm.maxPrice.value === '') {
        storedBuyFilters.Price.maxPrice = 1000000;
    } else {
        storedBuyFilters.Price.maxPrice = buyFilterForm.maxPrice.value;
    }

    storedFilters.BUY = storedBuyFilters
    localStorage.setItem('storedFilters', JSON.stringify(storedFilters));
    location.reload();
};

$('#buySortForm').submit(function (event) {
    event.preventDefault();
    var radioValue = $("input[name='sortRadio']:checked").val();
    alert(radioValue);
    storedSort = radioValue;
    localStorage.setItem('storedSort', storedSort);
    location.reload();
});

//Leaflet
/*var mymap = L.map('mapid').setView([51.505, -0.09], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWRzZmxhc2RmbGtqIiwiYSI6ImNrY3Nxdjh6ODB4NmcycnBkZzJkOXFmdnUifQ.S5ha6UaD9imQRic2Nr8dGw'
}).addTo(mymap);

function forwardGeoEncode(){
    var apikey = '660d02b1f0a043fcad267a8edc982b51';
    var latitude = '51.0';
    var longitude = '7.0';
    
    var api_url = 'https://api.opencagedata.com/geocode/v1/json'
    
    var request_url = api_url
        + '?'
        + 'key=' + apikey
        + '&q=' + encodeURIComponent('Toronto, Ontario')
        + '&pretty=1'
        + '&no_annotations=1';
    
    var request = new XMLHttpRequest();
    request.open('GET', request_url, true);
    
    request.onload = function () {
        // see full list of possible response codes:
        // https://opencagedata.com/api#codes
    
        if (request.status == 200) {
            // Success!
            var data = JSON.parse(request.responseText);
            alert(data.results[0].formatted);
            console.log(data.results[0].geometry);
        } else if (request.status <= 500) {
            // We reached our target server, but it returned an error
    
            console.log("unable to geocode! Response code: " + request.status);
            var data = JSON.parse(request.responseText);
            console.log(data.status.message);
        } else {
            console.log("server error");
        }
    };
    
    request.onerror = function () {
        // There was a connection error of some sort
        console.log("unable to connect to server");
    };
    
    request.send();  // make the request
}*/
const htmlBuyItems = document.querySelector("#displayBuyItems");
const buyFilterForm = document.querySelector("#buyFilterForm");
const buySortForm = document.querySelector("#buySortForm");

buyItems = [];

storedBuyFilters = storedFilters.BUY;

sortFunction = (a, b) => {
    if(storedSort === "None") return 0;
    else if(storedSort === "Price"){
        return parseFloat(a['Price/kg'].slice(2)) < parseFloat(b['Price/kg'].slice(2)) ? -1 : 1;
    }else if(storedSort === "Name"){
        return a['Product '] < b['Product '] ? -1 : 1;
    }
}

items.sort(sortFunction);

buyItems = items.filter(item => {
    if(item["Buy/Sell"] === "Buy "){
        itemCost = parseFloat(item['Price/kg'].slice(2))
        if(itemCost >= storedBuyFilters['Price'].minPrice && itemCost <= storedBuyFilters['Price'].maxPrice){
            return item;
        }
    }
});

for(i=0; i<buyItems.length; i++){
    let item = `<li class="col-lg-4" style = "margin-top : 10px">
                    <div style="width: 100%; height: 60vh; padding: 0.8vw; background-color: white;">
                        <img src="Images/${buyItems[i]['Product ']}.png" class="card-img-top" alt="${buyItems[i]['Product ']}">
                        <span>
                            <h4 class = "card-title" style = "float: left"> ${buyItems[i]["Product "]} </h4>
                            <p style = "float: right; margin: 10px 0;" > Rs${buyItems[i]["Price/kg"].slice(2)}/kg </p>
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
                                <p> ${buyItems[i]["Location "]}, Matale | Posted Some Date </p>
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

buyFilterForm.onsubmit = function(event){
    event.preventDefault();
    if(buyFilterForm.minPrice.value === ''){
        storedBuyFilters.Price.minPrice = 0;
    }else{
        storedBuyFilters.Price.minPrice = buyFilterForm.minPrice.value;
    }

    if(buyFilterForm.maxPrice.value === ''){
        storedBuyFilters.Price.maxPrice = 1000000;
    }else{
        storedBuyFilters.Price.maxPrice = buyFilterForm.maxPrice.value;
    }   

    storedFilters.BUY = storedBuyFilters
    localStorage.setItem('storedFilters', JSON.stringify(storedFilters));
    location.reload();
};

$('#buySortForm').submit(function(event){
    event.preventDefault();
    var radioValue = $("input[name='sortRadio']:checked").val();
    alert(radioValue);
    storedSort = radioValue;
    localStorage.setItem('storedSort', storedSort);
    location.reload();
});
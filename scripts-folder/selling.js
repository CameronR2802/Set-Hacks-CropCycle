const htmlSellItems = document.querySelector("#displaySellItems");
const sellFilterForm = document.querySelector("#sellFilterForm");

sellItems = [];

storedSellFilters = storedFilters.SELL;

sellItems = items.filter(item => {
    if(item["Buy/Sell"] === "Sell"){
        itemCost = parseFloat(item['Price/kg'].slice(2))
        if(itemCost >= storedSellFilters['Price'].minPrice && itemCost <= storedSellFilters['Price'].maxPrice){
            return item;
        }
    }
});

for(i=0; i<sellItems.length; i++){
    let item = `<li class="col-lg-4" style = "margin-top : 10px">
                        <div style="width: 100%; height: 60vh; padding: 0.8vw; background-color: white;">
                        <img src="Images/${sellItems[i]['Product ']}.png" class="card-img-top" alt="...">
                        <span>
                            <h4 class = "card-title" style = "float: left"> ${sellItems[i]["Product "]} </h4>
                            <p style = "float: right; margin: 10px 0;" > $${sellItems[i]["Price/kg"].slice(2)}/kg </p>
                        </span>
                        <div class="card-body" style = "clear: both;">
                            <i class="fa fa-map-marker" aria-hidden="true"> ${sellItems[i]['Location ']}, Matale </i>
                            <button type="button" class="btn btn-info btn-lg" style = "float: right; text-decoration : underline;"
                            data-toggle="modal" data-target="#myModal${i}">
                                See Details </button>
                        </div>
                    </div>

                    <div id="myModal${i}" class="modal fade" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h3 class="modal-title"> ${sellItems[i]["Product "]} </h3>
                                <p> ${sellItems[i]["Location "]}, Matale | Posted Some Date </p>
                            </div>
                            <div class="modal-body">
                                <h4> Product Description </h4>
                                <div class = "container-fluid">
                                    <div class="row">
                                        <div class="col-md-6"> ${sellItems[i]["Description "]} 
                                        <h4 style = "text-decoration : underline; margin-top:10px"> Product Details </h4>
                                        <p> Price: ${sellItems[i]["Price/kg"]}  </p>
                                        </div>
                                        <img src="Images/${sellItems[i]['Product ']}.png" class="card-img-right" alt="...">
                                    </div>
                                </div>
                                <hr>
                                <h4> Connect with Buyer </h4>
                                <div class = "container-fluid">
                                    <p> Name: ${sellItems[i]["Name "]} </p>
                                    <p> Phone: ${sellItems[i]["Phone "]}</p>
                                    <p> Email: ${sellItems[i]["Email "]}</p>
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
    
    htmlSellItems.insertAdjacentHTML('beforeend', item);
}

sellFilterForm.onsubmit = function(event){
    event.preventDefault();
    if(sellFilterForm.minPrice.value === ''){
        storedSellFilters.Price.minPrice = 0;
    }else{
        storedSellFilters.Price.minPrice = sellFilterForm.minPrice.value;
    }

    if(sellFilterForm.maxPrice.value === ''){
        storedSellFilters.Price.maxPrice = 1000000;
    }else{
        storedSellFilters.Price.maxPrice = sellFilterForm.maxPrice.value;
    }   

    storedFilters.SELL = storedSellFilters;

    localStorage.setItem('storedFilters', JSON.stringify(storedFilters));
    location.reload();
};
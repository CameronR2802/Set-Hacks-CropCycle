const htmlSellItems = document.querySelector("#displaySellItems");

sellItems = [];

sellItems = items.filter(item => item["Buy/Sell"] === "Sell");

for(i=0; i<sellItems.length; i++){
    let item = `<li class="col-lg-4" style = "margin-top : 10px">
                    <div class="card" style="width: 20vw;">
                        <img src="Images/${sellItems[i]['Picture ']}.png" class="card-img-top" alt="...">
                        <span>
                            <h4 class = "card-title" style = "float: left"> ${sellItems[i]["Product "]} </h4>
                            <p style = "float: right; margin: 10px 0;" > $${sellItems[i]["Price/kg"].slice(2)}/kg </p>
                        </span>
                        <div class="card-body" style = "clear: both;">
                            <i class="fa fa-map-marker" aria-hidden="true"> ${sellItems[i]['Location ']}, Matale </i>
                            <button type="button" class="btn btn-info btn-lg" style = "float: right"
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
                                        <div class="col-md-6"> ${sellItems[i]["Description "]} </div>
                                        <img src="Images/${sellItems[i]['Picture ']}.png" class="card-img-top" alt="...">
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
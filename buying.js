const buyItems = document.querySelector("#displayBuyItems");
//const data = require('./postingData.json'); 

items = [];
idx = 0
let curView = 6;

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

for(i=0; i<curView; i++){
    let item = `<li class="col-lg-4" style = "margin-top : 10px">
                    <div class="card" style="width: 20vw;">
                        <img src="Images/${items[i]['Picture ']}.png" class="card-img-top" alt="...">
                        <span>
                            <h4 class = "card-title" style = "float: left"> ${items[i]["Name "]} </h4>
                            <p style = "float: right; margin: 10px 0;" > $${items[i]["Price/kg"].slice(2)}/kg </p>
                        </span>
                        <div class="card-body" style = "clear: both;">
                            <i class="fa fa-map-marker" aria-hidden="true"> ${items[i]['Location ']} </i>
                            <button type="button" class="btn btn-info btn-lg" style = "float: right"
                            data-toggle="modal" data-target="#myModal">
                                See More </button>
                        </div>
                    </div>

                        <div id="myModal" class="modal fade" role="dialog">
                            <div class="modal-dialog">

                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 class="modal-title">Modal Header</h4>
                                    </div>
                                    <div class="modal-body">
                                        <p>Some text in the modal.</p>
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
    
    buyItems.insertAdjacentHTML('beforeend', item);
}
const buyItems = document.querySelector("#displayBuyItems");

let item = `<li class="col-lg-4">
            <div class="card" style="width: 18rem;">
                <img src="data:image/png;base64,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"
                    alt="Italian Trulli">
                <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">
                    See More </button>

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
            </li>`;

buyItems.insertAdjacentHTML('beforeend', item)
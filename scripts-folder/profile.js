const htmlForm = document.querySelector("#profileForm");
const buyButton = document.querySelector("#buy_button");
const sellButton = document.querySelector("#sell_button");
const createButton = document.querySelector("#create_button");
const priceDiv = document.querySelector("#priceKg");
const priceInput = document.querySelector("#priceId");
const imageInput = document.querySelector('#productImage');

var buyProduct = true;
var imageUpload;

htmlForm.onsubmit = function(event){
    alert("Submitted");
    event.preventDefault();
    newItem = {
        'Product ' : htmlForm.product_type.value,
        "Email " : htmlForm.email.value,
        "Description " : htmlForm.product_details.value,
        "Description " : htmlForm.productDetails.value,
        "Location " : htmlForm.location.value,
        "Name " :  htmlForm.name_organization.value, 
        "Phone " : htmlForm.phone_number.value,
        "Amount " : 1000,
        "Picture " : "1",
        "Delivery Included?" : "FALSE",
        "Buy/Sell" : buyProduct ? "Buy " : "Sell",
        "PostedDate" : new Date().toISOString().slice(0, 10)
    } 

    if(!buyProduct){
        newItem['Price/kg'] = htmlForm.priceId.value === '' ? "Rs120.00" : "Rs" + htmlForm.priceId.value;
    }else{
        var x = htmlForm.maxPrice.value === '' ?  10000 : parseFloat(htmlForm.maxPrice.value);
        newItem['Price/kg'] = "Rs" + x.toFixed(2);
        var x = htmlForm.minPrice.value === '' ?  0 : parseFloat(htmlForm.minPrice.value);
        newItem['minPrice'] = "Rs" + x.toFixed(2);
    }

    items.push(newItem);
    console.log("!!!", items.length);

    localStorage.setItem("existingData", JSON.stringify(items));
    htmlForm.reset();
    location.reload();
}

$("#buy_button").click(() => {
    buyButton.style.backgroundColor = "#f1c232ff";
    sellButton.style.backgroundColor = "rgb(228, 220, 220)";
    buyProduct = true;
    createButton.disabled = false;
    priceInput.required = false;
    $('#priceBuy').show();
    $('#priceKg').hide();
})

$(sellButton).click(() => {
    sellButton.style.backgroundColor = "#f1c232ff";
    buyButton.style.backgroundColor = "rgb(228, 220, 220)";
    buyProduct = false;
    createButton.disabled = false;
    priceInput.required = true;
    $('#priceBuy').hide();
    $('#priceKg').show();
});

/*{"Name ", "Email ", "Phone ": "2997301", "Buy/Sell": "Sell", 
"Product ": "Plantain", "Description ", "Delivery Included?, 
"Amount ", "Picture ", "Location ", "Price/kg": "Rs271.29", "": ""}}*/

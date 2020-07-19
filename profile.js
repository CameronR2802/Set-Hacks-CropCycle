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
        "Location " : htmlForm.location.value,
        "Name " :  htmlForm.name_organization.value, 
        "Phone " : htmlForm.phone_number.value,
        "Amount " : 1000,
        "Price/kg" : htmlForm.priceId.value,
        "Picture " : "1",
        "Delivery Included?" : "FALSE",
        "Buy/Sell" : buyProduct ? "Buy " : "Sell"
    } 

    items.push(newItem);
    console.log("!!!", items);
    if (imageUpload) localStorage.setItem('image', imageUpload);
    localStorage.setItem("existingData", JSON.stringify(items));
    htmlForm.reset();
    location.reload();
}

/*$('#productImage').on('change', () => {
    imageFile = imageInput.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = function () {
        console.log(reader.result);
        imageUpload = reader.result;
    };
});*/

$("#buy_button").click(() => {
    buyButton.style.backgroundColor = "#f1c232ff";
    sellButton.style.backgroundColor = "rgb(228, 220, 220)";
    buyProduct = true;
    createButton.disabled = false;
    priceDiv.style.display = "none";
    priceInput.required = false;
})

$(sellButton).click(() => {
    sellButton.style.backgroundColor = "#f1c232ff";
    buyButton.style.backgroundColor = "rgb(228, 220, 220)";
    buyProduct = false;
    createButton.disabled = false;
    priceDiv.style.display = "block";
    priceInput.required = true;
});

/*{"Name ", "Email ", "Phone ": "2997301", "Buy/Sell": "Sell", 
"Product ": "Plantain", "Description ", "Delivery Included?, 
"Amount ", "Picture ", "Location ", "Price/kg": "Rs271.29", "": ""}}*/

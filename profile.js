const htmlForm = document.querySelector("#profileForm");

htmlForm.onsubmit = function(event){
    alert("Submitted");
    event.preventDefault();
    newItem = {
        'Product ' : "Product", //htmlForm.product_type.value,
        "Email " : "EMAIL", //htmlForm.email.value,
        "Description " : 
        "DESCRIPTION", //htmlForm.product_details.value,
        "Location " : "LCOATION", //htmlForm.location.value,
        "Name " :  "ANME", //htmlForm.name_organization.value, 
        "Phone " : "PHONE", //htmlForm.phone_number.value,
        "Amount " : 1000,
        "Price/kg" : "Rs271.29",
        "Picture " : "1",
        "Delivery Included?" : "FALSE",
        "Buy/Sell" : "Buy "
    } 

    items.push(newItem);
    console.log("!!!", items);
    localStorage.setItem("existingData", JSON.stringify(items));
    htmlForm.reset();
}

/*{"Name ", "Email ", "Phone ": "2997301", "Buy/Sell": "Sell", 
"Product ": "Plantain", "Description ", "Delivery Included?, 
"Amount ", "Picture ", "Location ", "Price/kg": "Rs271.29", "": ""}}*/

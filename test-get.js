function displayItems() {
    var searchItems = new XMLHttpRequest();
    searchItems.onreadystatechange = function() {
        if (searchItems.readyState == XMLHttpRequest.DONE && searchItems.status == 200) {
            let itemsList = JSON.parse(searchItems.response);
            console.log(itemsList);
            const items = document.getElementById("items-display");
            itemsList.forEach(item => {
                //items.textContent = item.name;
                console.log(item.name);
                const newItem = document.createElement("div");
                items.appendChild(newItem);
                newItem.classList.add("new-item");
                newItem.textContent = item.name;
            })
        }
    };
    searchItems.open("GET" , "http://localhost:3000/api/furniture/");
    searchItems.send();
}

displayItems();
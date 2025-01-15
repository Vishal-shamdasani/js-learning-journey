let items = [];

const itemsDiv = document.getElementById("Items");
const storageKey="Items"

function renderItems() {
    itemsDiv.innerHTML = null;
    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.marginBottom = "10px"
        const text = document.createElement("p")
        text.textContent = item;
        text.style.display="inline"
        text.style.paddingRight="10px"
        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx)
        container.appendChild(text);
        container.appendChild(button)
        itemsDiv.appendChild(container)
    }
}

function loadItem() { 
    const oldItems= localStorage.getItem(storageKey)
    if(oldItems){
        items=JSON.parse(oldItems)
    }
    renderItems()
}

function saveItem() { 
    const itemsString=JSON.stringify(items)
    localStorage.setItem(storageKey,itemsString)
}

function addItem() {
    temp=document.getElementById("itemInput")
    if (temp.value===""){
        alert("you can't add a empty item to the list")
        return 
    }
    else{
        items.push(temp.value)
        temp.value=""
    }
    saveItem()
    renderItems()
}


function removeItem(idx) {
    items.splice(idx,1)
    saveItem()
    renderItems()
 }
document.addEventListener("DOMContentLoaded",loadItem)
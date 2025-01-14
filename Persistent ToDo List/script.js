let items=["hello world","how are you"];

const itemsDiv= document.getElementById("Items")

function renderItems(){
    itemsDiv.innerHTML=null;
    for (const [idx,item] of Object.entries(items)){
        const text = document.createElement("p")
        text.textContent=item;
        itemsDiv.appendChild(text);
    }
}
renderItems()
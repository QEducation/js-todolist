const addButton = document.querySelector(".addButton");
var input = document.querySelector(".input");
const container = document.querySelector(".data_container");


class Todo{

    constructor(itemName){

        this.createTodo(itemName);

    }

    createTodo(itemName){

        // create todo input box
        let input = document.createElement("input");            
        input.value = itemName;
        input.disabled = true;
        input.classList.add("item_input");
        input.type = "text";
        input.style.fontSize = '25px';
        input.style.color = 'black';

        // create itembox div
        let itemBox = document.createElement("div");
        itemBox.classList.add('item');

        // create edit button
        let editButton = document.createElement("button");
        editButton.innerHTML = "EDIT";
        editButton.classList.add("editButton");
        editButton.style.backgroundColor = 'lightgrey';
        editButton.style.color = 'black';

        // create remove button
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add("removeButton");
        removeButton.style.backgroundColor = 'coral';
        removeButton.style.color = 'black';

        // append the items to the data container
        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener("click",()=>{

            this.edit(input);

        })

        removeButton.addEventListener("click",()=>{


                this.remove(itemBox);

        })

    }
    
    edit(item){

        item.disabled = !item.disabled;
    
    }
    
    remove(itemBox){
    
        container.removeChild(itemBox);
    
    }


}

function check(){

    if(input.value != ' ')
    {

        new Todo(input.value);
        input.value = " ";

    }


}


addButton.addEventListener('click',check);
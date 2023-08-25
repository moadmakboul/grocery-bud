let buttonSubmit = document.getElementById('submit');
let title = document.getElementById('title');
let message = document.getElementById('message');
let inputField = document.getElementById('add-text');
let groceryList = document.getElementById('grocery-list');
let clearListButton = document.getElementById('clear-list-button');


buttonSubmit.addEventListener('click', ()=>{
    if (inputField.value == ''){
       failedEntry();
    }
    else {
        addItem();
        success();
        if (buttonSubmit.innerHTML == 'Edit'){
            buttonSubmit.innerHTML = 'Submit';
        }
    }
})

groceryList.addEventListener('click', (e)=>{
    let treeParent = e.target.parentElement.parentElement.id;
    if (e.target.tagName == 'SPAN'){
        if (e.target.classList.contains('glyphicon-trash')){
            deleteItem(treeParent);
            checklist();
        }
        if (e.target.classList.contains('glyphicon-pencil')){
            editItem(treeParent);
            deleteItem(treeParent);
        }
    }
})

clearListButton.addEventListener('click', ()=>{
    groceryList.innerHTML = '';
    clearListButton.setAttribute('class', 'hidden');
})

let addItem = () => {
    let item =  `<li id='${inputField.value}'>${inputField.value} 
    <div>
        <span class="glyphicon glyphicon-pencil"></span>
        <span class="glyphicon glyphicon-trash"></span>
    </div>
</li>`;
    groceryList.innerHTML += item;
    inputField.value = '';
    clearListButton.setAttribute('class', 'visible');
}

let checklist = () => {
    if (groceryList.children.length == 0){
        clearListButton.setAttribute('class', 'hidden');
    }
}

let deleteItem = (treeParent) => {
    let parent = document.getElementById(treeParent);
    parent.remove();
}

let editItem = (treeParent) => {
    let content = document.getElementById(treeParent);
    let regexp = /\n/ig;
    let itemToEdit = content.innerHTML.split(regexp)[0];

    inputField.value = itemToEdit;
    buttonSubmit.innerHTML = 'Edit';
    console.log(itemToEdit);
}

let failedEntry = () => {
    message.innerHTML = 'Enter an Item to the list';
    message.setAttribute('class', 'alert alert-danger');
    setTimeout(()=>{
        message.setAttribute('class', '');
        message.innerHTML = '';
    }, 5000);
}

let success = () => {
    message.innerHTML = 'Item has been added';
    message.setAttribute('class', 'alert alert-success');
    setTimeout(()=>{
        message.setAttribute('class', '');
        message.innerHTML = '';
    }, 5000);
}
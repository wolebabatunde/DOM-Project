// Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');


// We'll call a function to load all EventListerners
loadEventListeners();

// Load all Event Listerners

function loadEventListeners(){

    
    //NOTE: You will store in Local Storage when everything is compelete "DOM LOAD EVENT"
    document.addEventListener('DOMContentLoaded', getTasks);


    // Add task event 
    form.addEventListener('submit', addTask);

    // Remove task Event

    taskList.addEventListener('click', removeTask);

    // Clear Task

    clearBtn.addEventListener('click', clearTasks);

    // Filter Task

    filter.addEventListener('keyup', filterTasks);
};


// //NOTE: You will store in Local Storage when everything is compelete "GET TASK"

function getTasks(){
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } 

    tasks.forEach(function(task){

        // Create LI Element 
        
        const li = document.createElement('li');

        // Add class Name to the Li

        li.className = "collection-item";

        
        // Create Text Node and Append to the Li

        li.appendChild(document.createTextNode(task));

        // Create a Link Element

        const link = document.createElement('a');

        // Add class Name to Link
        link.className = 'delete-item secondary-content';

        // Get font awesome Icon for Link

        link.innerHTML = '<i class = "fa fa-remove"></i>';

        // Append li to link

        li.appendChild(link);

        // Append li to ul

        taskList.appendChild(li);

        

    })
};

// Add Task   // Add Task   // Add Task  // Add Task   // Add Task  // Add Task  // Add Task  // Add Task   // Add Task   // Add Task 

function addTask(e){
if(taskInput.value === ''){
alert('Add a Task');
}

// Create Li element
const li = document.createElement('li');

// Add a className to the Li created
li.className = 'collection-item'

// Create Text Node and Append to the Li

li.appendChild(document.createTextNode(taskInput.value));

// create a link Element for the delete it

const link = document.createElement('a');

// Add a className to the Link

link.className = 'delete-item secondary-content';

// Add a font awesome Icon to the Link

link.innerHTML = '<i class = "fa fa-remove"></i>';

// Append the Link to the Li

li.appendChild(link);

// Append Li to the Ul

taskList.appendChild(li);

//NOTE: You will store in Local Storage when everything is compelete "STORE IN LOCAL STORAGE "

storeTaskInLocalStorage(taskInput.value);

// End

taskInput.value = '';

    e.preventDefault();
};

// NOTE: You will store in Local Storage when everything is compelete  "STORE TASKS" 

function storeTaskInLocalStorage(task){
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
};


// End


// REMOVE TASK  REMOVE TASK  REMOVE TASK  REMOVE TASK REMOVE TASK REMOVE TASK REMOVE TASK REMOVE TASK  REMOVE TASK  REMOVE TASK

function removeTask(e){
    // Target the parent element of the 'a' tag
if(e.target.parentElement.classList.contains('delete-item')){
    // Confirm if you want to remove 
    if(confirm('Are you sure you want to remove this item from the list?')){
        e.target.parentElement.parentElement.remove();  


        // REMOVE FROM LOCAL STORAGE 

        removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
    
}
    e.preventDefault();
}

// REMOVE FROM LS

function removeTaskFromLocalStorage(taskItem){
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
    if(taskItem.textContent ===task ){
        tasks.splice(index, 1);
} 
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Clear Task  Clear Task Clear Task Clear Task Clear Task Clear Task Clear Task Clear Task Clear Task Clear Task

// function clearTasks(e){
// taskList.innerHTML= '';

//     e.preventDefault();
// }

// OR 

function clearTasks(e){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }


    // //NOTE: You will store in Local Storage when everything is compelete "CLEAR TASK FROM LOCAL STORAGE"

  clearTaskFromLocalStorage();
    e.preventDefault();
    
}

// //NOTE: You will store in Local Storage when everything is compelete "CLEAR TASK FROM LOCAL STORAGE"
function clearTaskFromLocalStorage(){
    localStorage.clear();
}


// Filter Tasks  Filter Tasks  Filter Tasks Filter Tasks Filter Tasks  Filter Tasks Filter Tasks Filter Tasks Filter Tasks

function filterTasks(e){
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('.collection-item').forEach( function(task){

        const item = task.firstChild.textContent;

        if( item.toLocaleLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    })

    e.preventDefault();
}; 
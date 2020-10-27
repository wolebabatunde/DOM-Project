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

    // Add task event 
    form.addEventListener('submit', addTask);

    // Remove task Event

    taskList.addEventListener('click', removeTask);

    // Clear Task

    clearBtn.addEventListener('click', clearTasks);

    // Filter Task

    filter.addEventListener('keyup', filterTasks);
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

taskInput.value = '';




    e.preventDefault();
};


// REMOVE TASK  REMOVE TASK  REMOVE TASK  REMOVE TASK REMOVE TASK REMOVE TASK REMOVE TASK REMOVE TASK  REMOVE TASK  REMOVE TASK

function removeTask(e){
    // Target the parent element of the 'a' tag
if(e.target.parentElement.classList.contains('delete-item')){
    // Confirm if you want to remove 
    if(confirm('Are you sure you want to remove this item from the list?')){
        e.target.parentElement.parentElement.remove();  
    }
    

    console.log(e.target);
}
    e.preventDefault();
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
    e.preventDefault();
    
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
//Set up tasks
let tasks = ['Sound design', 'Experiment with Swing', 'Manipulate Audio', 'Write a melody with a new key', 'Search for New Samples', 'Organize Sample Library', 'Use a Plugin you never use', 'Work on mixing', 'Try to master a track', 'Try to layer sounds' , 'Use a live recording', 'Use a vocal from a popular song' , 'Work on Vocal Processing' , 'Look for new tutorials', 'Experiment with arpegiators', 'Work with 3D plugins']
//create a function that puts them in a list
let list = document.createElement('ul');
tasks.forEach(function(task){
    let li = document.createElement('li');
    li.textContent = task;
    list.appendChild(li);
}); 
let app = document.querySelector('list');
document.body.appendChild(list);
list.style = 'display: flex;'

//append the list to the page

//set up a button that will randomize the list and give you an answer
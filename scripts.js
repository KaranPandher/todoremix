// Retrieve "Active" list. Grabbing first ul in HTML.
var activeList = document.querySelector('ul');

// Retrieve "Completed" list. Grabbing the last ul in HTML. 
var activeList = document.querySelector('ul:last-of-type');

//Retrieve the to-do Input. 
// '[name = "attirubte name"] ; Grabs any attribute with that name. 
var newTask = document.querySelector('[name = "new-task"]');


// Select our form. 
var form = document.querySelector('form'); // querySelector grabs the form. 
// We listen to our form for a submission
form.addEventListener('submit', function(event) { 
    event.preventDefault(); //Prevents default submitting / Page refresh from a REAL form submission. 
    // Lets add the list item into our UL.
    activeList.innerHTML += `
    <li>
        <input type = "checkbox">
        ` + newTask.value + `
    </li>`;
});
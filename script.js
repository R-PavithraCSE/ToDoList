
// Select all editor elements

function saveToLocalStorage(){

    const subs = document.querySelectorAll('.sub');
    const data = [];

    subs.forEach(sub =>{
        const editorContent = sub.querySelector('.editor').innerText;
        const currentTime = sub.querySelector('.current-time').innerText;
        data.push({editorContent,currentTime});
    })

    localStorage.setItem('todoData',JSON.stringify(data));
}


function loadFromLocalStorage(){
    const savedData = localStorage.getItem('todoData');
    if(savedData){
        const data = JSON.parse(savedData);
        console.log(data);
        data.forEach(item => {
            const newContainer = document.createElement('div');
            newContainer.className = 'sub';

            const editor = document.createElement('div');
            editor.className = 'editor';
            editor.setAttribute('contenteditable', 'true');
            editor.innerText = item.editorContent;

            const data = document.createElement('div');
            data.className = 'current-time';
            data.innerText = item.currentTime;

            const del = document.createElement('a');
            del.className = 'delete';
            del.innerText = 'Delete';

            newContainer.appendChild(editor);
            newContainer.appendChild(data);
            newContainer.appendChild(del);

            document.getElementById('container').appendChild(newContainer);

            editor.addEventListener('blur', function() {
                const currentTime = new Date().toLocaleTimeString(); // Get the current time
                const currentTimeElement = this.nextElementSibling; // Get the next sibling (current-time div)
                currentTimeElement.innerText = currentTime; // Update the time
                saveToLocalStorage();
            });
        
            // Add delete event listener for the new delete button
            del.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default link behavior
                newContainer.remove(); // Remove the specific container (fixed typo)
                saveToLocalStorage();
            });
        });

    }
}




window.onload = loadFromLocalStorage;

function addfunction() {

    const newcontainer = document.createElement('div');
    newcontainer.className = 'sub';

    const editor = document.createElement('div');
    editor.className = 'editor';
    editor.setAttribute('contenteditable', 'true');
    editor.innerText = '';

    const date = document.createElement('div');
    date.className = 'current-time'; // Corrected: Removed the dot (.)
    date.innerText = '';

    const del = document.createElement('a');
    del.className = 'delete';
    del.innerText = 'Delete';

    // adding right theme to the page
    if (document.body.classList.contains('dark-mode')) {
        newcontainer.classList.add('subTheme'); // Apply the theme if dark mode is active
    }

    newcontainer.appendChild(editor);
    newcontainer.appendChild(date);
    newcontainer.appendChild(del);

    document.getElementById('container').appendChild(newcontainer);

    // Add blur event listener for the new editor
    editor.addEventListener('blur', function() {
        const currentTime = new Date().toLocaleTimeString(); // Get the current time
        const currentTimeElement = this.nextElementSibling; // Get the next sibling (current-time div)
        currentTimeElement.innerText = currentTime; // Update the time
        saveToLocalStorage();
    });

    // Add delete event listener for the new delete button
    del.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        newcontainer.remove(); // Remove the specific container (fixed typo)
        
    });

    
}


function changeTheme(){
    var element = document.body;
    element.classList.toggle("dark-mode");

    const mood = document.querySelector('.theme');
    mood.classList.toggle("sun-image");

    const subTheme = document.querySelectorAll('.sub'); 
    subTheme.forEach(sub=>{
        sub.classList.toggle("subTheme");
    })
    

}



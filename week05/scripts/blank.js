// Select the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Creating an empty array in case data is not yet saved
let chaptersArray = getChapterList() || [];

// Displaying saved items in our new chapters array
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', () => {
  if (input.value != '') {  // make sure the input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input
  }
});

// Display List function
function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; // note the use of the displayList parameter 'item'
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    input.focus(); // set the focus back to the input
  });
}

// Defining the Set chapter list (Array to String)
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Defining the get chapter list  (String to Array)
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Delete chapter function to remove chapters in the list
function deleteChapter(chapter) {
 chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}

// Listen for the Add Chapter button click
button.addEventListener('click', function() {
  
  // Step 1: Check if input is empty
  if (input.value.trim() === '') {
    input.focus();
    return; // stop here if input is empty
  }

  // Step 2: Create new elements
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  // Step 3: Set their content
  li.textContent = input.value;
  deleteButton.textContent = '❌';
  deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

  // Step 4: Attach the delete button to the list item
  li.append(deleteButton);
  list.append(li);

  // Step 5: Clear input field and refocus
  input.value = '';
  input.focus();

  // Step 6: Delete functionality
  deleteButton.addEventListener('click', function() {
    li.remove();
  });

});




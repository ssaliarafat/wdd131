// Select the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Listen for the Add Chapter button click
button.addEventListener('click', function() {
  
  // Step 1: Check if input is empty
  if (input.value.trim() === '') {
    alert('Please enter a chapter name!');
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

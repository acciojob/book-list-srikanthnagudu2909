//your JS code here. If required.
// Select form elements
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const submitBtn = document.getElementById('submit');
const bookList = document.getElementById('book-list');

// Add event listener to submit button
submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); // prevent form submission

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const isbn = isbnInput.value.trim();

    // Validate input
    if(title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create new row
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    // Append row to table
    bookList.appendChild(row);

    // Clear input fields
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
});

// Delete a row when clear button is clicked
bookList.addEventListener('click', function(e) {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
});

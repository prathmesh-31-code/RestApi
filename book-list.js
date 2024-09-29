const loadBooks = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/books", true);
    xhttp.onload = function() {
        if (this.status >= 200 && this.status < 300) {
            const books = JSON.parse(this.responseText);
            const booksContainer = document.getElementById('books');
            booksContainer.innerHTML = ''; // Clear existing content

            for (let book of books) {
                const cardHTML = `
                    <div class="col-4 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${book.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>
                                <div>Author: ${book.author}</div>
                                <div>Publisher: ${book.publisher}</div>
                                <div>Published Date: ${book.pdate}</div>
                                <div>Pages: ${book.pages}</div>
                            </div>
                        </div>
                    </div>
                `;
                booksContainer.innerHTML += cardHTML; // Append each card to the container
            }
        } else {
            console.error('Failed to load books:', this.statusText);
        }
    };
    xhttp.onerror = function() {
        console.error('Request failed');
    };
    xhttp.send();
};

loadBooks();

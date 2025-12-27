const books = [
    { title: 'Book',
        author: 'Name'
    },
    { title: 'Book2',
        author: 'Name2'
    }
    ]

const getTheTitles = function(books) {
    
    let bookTitles = [];

    for (let book of books) {
        bookTitles.push(book.title);
    }

    return bookTitles;

};

// Do not edit below this line
module.exports = getTheTitles;

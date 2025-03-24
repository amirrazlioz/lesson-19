
type Book = {
  title: string;
  author: string;
  publishedDate: string;
  available: boolean;
  genre: Genre;
};

// Enum עבור ז'אנרים
enum Genre {
  Fiction = "Fiction",
  NonFiction = "Non-Fiction",
  Biography = "Biography",
  ScienceFiction = "Science Fiction",
  Fantasy = "Fantasy",
}


// פונקציה להוספת ספר חדש למערך הספרים
function addBook(books: Book[], newBook: Book): Book[] {
  return [...books, newBook]; // מחזירים מערך חדש עם הספר החדש
}


// דוגמה לשימוש
let library1: Book[] = [
  { title: "Dune", author: "Frank Herbert", publishedDate: "1965", available: true, genre: Genre.ScienceFiction },
  { title: "Harry Potter", author: "J.K. Rowling", publishedDate: "1997", available: false, genre: Genre.Fantasy }
];

const newBook: Book = {
  title: "Sapiens",
  author: "Yuval Noah Harari",
  publishedDate: "2011",
  available: true,
  genre: Genre.NonFiction
};

// הוספת הספר החדש
library1 = addBook(library1, newBook);

// הדפסת הספרייה המעודכנת
console.log("Updated book list");
console.log(library1);

//-----------------------------------------------------------------------------//

// פונקציה לחיפוש ספרים לפי ז'אנר
function searchByGenre(books: Book[], genre: Genre): Book[] {
  return books.filter(book => book.genre === genre); // books מחזירים את כל הספרים עם ז'אנר תואם
}


// דוגמה לשימוש
const library2: Book[] = [
  { title: "Dune", author: "Frank Herbert", publishedDate: "1965", available: true, genre: Genre.ScienceFiction },
  { title: "Harry Potter", author: "J.K. Rowling", publishedDate: "1997", available: false, genre: Genre.Fantasy },
  { title: "Sapiens", author: "Yuval Noah Harari", publishedDate: "2011", available: true, genre: Genre.NonFiction },
  { title: "1984", author: "George Orwell", publishedDate: "1949", available: true, genre: Genre.Fiction },
];

// חיפוש ספרים בז'אנר "Science Fiction"
const sciFiBooks = searchByGenre(library2, Genre.ScienceFiction);

// הדפסת התוצאה
console.log("Filtered book list - gener  Science Fiction");
console.log(sciFiBooks);


//-----------------------------------------------------------------------------//

// פונקציה שמעדכנת את זמינות הספר
function updateAvailability(books: Book[], title: string, available: boolean): Book[] {
  // מחפשים את הספר שהכותרת שלו תואמת ל-title
  const updatedBooks = books.map(book => {
    if (book.title === title) {
      // אם מצאנו את הספר, מעדכנים את הזמינות שלו
      return { ...book, available }; 
    }
    // אם לא מצאנו, מחזירים את הספר כמו שהוא
    return book;
  });

  return updatedBooks;
}

// דוגמה לשימוש
const library3: Book[] = [  
  { title: "Dune", author: "Frank Herbert", publishedDate: "1965", available: true, genre: Genre.ScienceFiction },
  { title: "Harry Potter", author: "J.K. Rowling", publishedDate: "1997", available: false, genre: Genre.Fantasy },
  { title: "Sapiens", author: "Yuval Noah Harari", publishedDate: "2011", available: true, genre: Genre.NonFiction },
];

console.log("Update book Harry Potter-available to true");

const updatedBooks = updateAvailability(library3, "Harry Potter", true);
console.log(updatedBooks);
import React, {useState} from 'react'

const Books = () => {
    const [books, setBooks] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear())
    const [bookName, setBookName] = useState("")
    const [genre, setGenre] = useState("")

    const handleAddBook= () => {
        
            // const newBook = document.getElementById("BookAdd").value;
            // document.getElementById("BookAdd").value = "";

            const newBook = {
                name: bookName,
                year: year,
                genre: genre
                
            }

            setBooks(b => [...b, newBook]);
            setBookName("");
            setGenre("");
            setYear(new Date().getFullYear());


    }
    //this is the part where you delete the option which yu no longer want
    const handleDeleteBook = (index) =>{
        setBooks(b => b.filter((_, i) => i !== index))
        

    }
    const handlebookyear = (event) => {
        setYear(event.target.value)
    }
    const handlebookname = (event) => {
        setBookName(event.target.value)
    }
    const handlebookgenre = (event) => {
        setGenre(event.target.value)
    }
  return (
    <div>
        <h1>Books</h1>
        <ul>
    {books.map((book, index) => 
        <li key={index} onClick={()=> {handleDeleteBook(index)}}>
            {book.name} - {book.year} - {book.genre}
        </li>
    )}
</ul>

        <input type="number" placeholder='enter year' value={year}  onChange={handlebookyear}/>
        <input type="text" placeholder='name of book ' value={bookName} onChange={handlebookname}/>
        <input type="text" placeholder='book genre' value={genre}  onChange={handlebookgenre}/>
        <button onClick={handleAddBook} id='BookAdd'>Add</button>
    </div>
  )
}

export default Books
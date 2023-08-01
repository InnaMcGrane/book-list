import { useState } from "react";
import { data } from "./data";
import './App.css';


function App(){
  const[books,setBooks] = useState(data);
   const [showText, setShowText] = useState(false);

  const removeBook = (id) => {
    let newBooks = books.filter((book)=> book.id !== id);
    setBooks(newBooks)

  }

  const showTextClick = (item) => {
    item.showMore =!item.showMore
    setShowText(!showText)
  }

  return(<div>
    <div className="container">
      <h1> Top {books.length} Books I recommend reading</h1>
    </div>

    {books.map((item => {
      const {id, bookName, description, image, author, showMore} = item;
    

      return (
        <div key={id}>
          <div className="container">
            <h2>
              {id} - {bookName}
            </h2>
          </div>

          <div className="container">
            <p>
              {showMore ? description : description.substring(0, 200) + "...."}
              <button onClick={() => showTextClick(item)}>{showMore ? "show less" : "show more"}</button>
            </p>
          </div>

          <div className="container">
            <img src={image} width="350px" alt="book" />
          </div>

          <div className="container">
            <p> {author} </p>
          </div>

          <div className="container">
            <button className="btn" onClick={() => removeBook(id)}>
              remove
            </button>
          </div>
        </div>
      );

    } ))}
  </div>)
}
export default App;

import { useState } from 'react'
import books from '../data/data'
import './OneBook.css'
import OrderButton from './OrderButton'

const OneBook = () => {

  const [bookList, setBookList] = useState(books)

  const deleteOneBook = (id) => {
    const filteredBooks = bookList.filter( (oneBook) => {
      return oneBook.id !== id
    } )

    setBookList(filteredBooks)
  }


  return (<div className='all-books'> 
    {
      bookList.map((Book) => {
        const {id, image, author, title, numberOfProducts, price} = Book
      
        return <div className='one-book' key={id}>
            <img src={image} alt="book-photo" />
            <a href='https://example.sk'>{author}</a>
            <a href='https://example.sk'>{title}</a>
            <a href='https://example.sk'>{numberOfProducts} ks</a>
            <span>{price} kč</span>
            <OrderButton deleteBook = { () => deleteOneBook(id) } ></OrderButton>
        </div>
      
      
      })
    }
  </div>
  )
}

export default OneBook
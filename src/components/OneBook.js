import books from '../data/data'
import './OneBook.css'

const OneBook = () => {
  return (<div className='all-books'> 
    {
      books.map((Book) => {
        const {id, image, author, title, numberOfProducts, price} = Book
      
        return <div className='one-book' key={id}>
            <img src={image} alt="book-photo" />
            <h2>{author}</h2>
            <h3>{title}</h3>
            <p>{numberOfProducts}</p>
            <p>{price}</p>
        </div>
      
      
      })
    }
  </div>
  )
}

export default OneBook
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [book , setBook] = useState([])
const getData = async ()=>{
  const res = await axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey)
setBook(res.data)
}

useEffect(()=>{
  getData()
}, [])

console.log(book);

  return (
    <div>
      {book.map((item) => (
        <div>
          <h1>{item.id}</h1>
          <p>{item.kind}</p>
          <p>{item.selfLink}</p>

        </div>
      ))}
    </div>
  )
}

export default App
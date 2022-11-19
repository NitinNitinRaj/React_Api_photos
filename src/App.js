import React, { useState } from "react"
import "bulma/css/bulma.css"
import unpslash from "./api/unpslash"
import ImageList from "./components/ImageList"
import SearchBar from "./components/SearchBar"

function App() {
  const [images, setimages] = useState([])
  const searchImages = async (term) => {
    const response = await unpslash.get("/search/photos", {
      params: {
        query: term,
      },
    })
    setimages([...response.data.results])
  }
  return (
    <div>
      <SearchBar searchImages={searchImages} />
      <ImageList images={images} />
    </div>
  )
}

export default App

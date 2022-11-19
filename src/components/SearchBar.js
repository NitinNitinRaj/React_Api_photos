import React, { useState } from "react"

const SearchBar = ({ searchImages }) => {
  const [term, setTerm] = useState("")
  const handleFormSubmit = (e) => {
    e.preventDefault()
    searchImages(term)
    setTerm("")
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search Images"
      />
      <button>Submit</button>
    </form>
  )
}

export default SearchBar

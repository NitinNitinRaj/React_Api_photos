import React, { useState } from "react"
import "../styles/SearchBar.css"

const SearchBar = ({ searchImages }) => {
  const [term, setTerm] = useState("")
  const handleFormSubmit = (e) => {
    e.preventDefault()
    searchImages(term)
    setTerm("")
  }
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label className="label" htmlFor="term">
          Enter search term
        </label>
        <input
          id="term"
          className="input is-normal"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search Images"
        />
        <button className="button is-primary">Submit</button>
      </form>
    </div>
  )
}

export default SearchBar

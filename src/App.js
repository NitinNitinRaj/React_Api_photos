import React, { useState } from "react";
import unpslash from "./api/unpslash";

function App() {
  const searchImages = async (term) => {
    const response = await unpslash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    console.log(response.data.results);
  };
  searchImages();
  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default App;

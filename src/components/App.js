import React, { Component } from "react";
import unsplash from "../api/unpslash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, orientation: "landscape" },
    });
    const returnedImages = response.data.results.map((result) => {
      return {
        id: result.id,
        url: result.urls.regular,
        desc: result.description,
      };
    });
    this.setState({
      images: returnedImages,
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

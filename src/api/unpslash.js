import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID bXRFIXUp5l2yWzSjhzH3U1RcQTqzHLUqABrBwqVu4Zg",
  },
});

//   onSearchSubmit = (term) => {
//     axios
//       .get("https://api.unsplash.com/search/photos", {
//         params: { query: term },
//         headers: {
//           Authorization:
//             "Client-ID bXRFIXUp5l2yWzSjhzH3U1RcQTqzHLUqABrBwqVu4Zg",
//         },
//       })
//       .then((response) => {
//         const returnedImages = response.data.results.map((result) => {
//           return {
//             id: result.id,
//             url: result.urls.regular,
//           };
//         });
//         this.setState({ images: returnedImages });
//       });
//   };

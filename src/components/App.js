import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {

const [listings, setListings] = useState([])
console.log(listings)
useEffect( () => {
  fetch("http://localhost:6001/listings")
  .then(response => response.json())
  .then(listingData => setListings(listingData)  )
}, []
)

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings = {listings} />
    </div>
  );
}

export default App;







//steps:
//1. fetch data from db.json. 
//2. employ the useState hook to store the data as a variable.
//3. employ .map method to loop through the array and generate an item for each object.


//
//
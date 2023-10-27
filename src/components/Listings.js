import React, { useState, useEffect } from 'react';
import data from '../data/listingsData';
import ListingDetail from './ListingDetail';
import '../styles/listings.css';
import imageListing from "../images/listingImage.jpg";

function Listings() {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState(listings);
  const [filter, setFilter] = useState({ bedrooms: '', bathrooms: '', parking: '', price: '' });
  const dataResult = data;
  const [selectedListing, setSelectedListing] = useState(null);
  
  const openModal = (listing) => {
    setSelectedListing(listing);
  };

  const closeModal = () => {
    setSelectedListing(null);
  };

  useEffect(() => {
    setListings(dataResult);
  }, []);


  useEffect(() => {
    // Apply filtering based on user input
    const filtered = listings.filter((listing) => {
      return (
        (filter.bedrooms === '' || parseInt(listing.Bedrooms) >= parseInt(filter.bedrooms)) &&
        (filter.bathrooms === '' || parseInt(listing.Bathrooms) >= parseInt(filter.bathrooms)) &&
        (filter.parking === '' || parseInt(listing.Parking) >= parseInt(filter.parking)) &&
        (filter.price === '' || parseInt(listing['Sale Price']) <= parseInt(filter.price))
      );
    });
    setFilteredListings(filtered);
  }, [filter, listings]);

  return (
    <div>
      <div className="filters-list" >
        <input
          type="text"
          placeholder="Bedrooms"
          value={filter.bedrooms}
          onChange={(e) => setFilter({ ...filter, bedrooms: e.target.value })}
        />
        <input
          type="text"
          placeholder="Bathrooms"
          value={filter.bathrooms}
          onChange={(e) => setFilter({ ...filter, bathrooms: e.target.value })}
        />
        <input
          type="text"
          placeholder="Parking Spaces"
          value={filter.parking}
          onChange={(e) => setFilter({ ...filter, parking: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price Range"
          value={filter.price}
          onChange={(e) => setFilter({ ...filter, price: e.target.value })}
        />
      </div>
      <div>
        <ul className="horizontal-list">
          {filteredListings.map((listing) => (
            <li className="horizontal-list-item" key={listing.id} >
              <img src={imageListing} alt={listing.Id} />
              <h3>{listing.title}</h3>
              <p>{listing.Title}</p>
              <p>{listing.Location}</p>
              <div className="paragraph-container">
              <p>{listing.Bedrooms} Beds  | </p>
              <p>{listing.Bathrooms} Bathrooms</p>
              </div>
              <h3 className="priceSize{">${listing['Sale Price']}</h3>
              <button className="button-listings " onClick={() => openModal(listing)}>View Details</button>
            </li>
          ))}
        </ul>
      </div>
      {selectedListing && (
        <ListingDetail listing={selectedListing} onClose={closeModal} />
      )}
    </div>
  );
}

// function viewDetails(listing) {
//   // Implement navigation to the "View Details" page
// }

export default Listings;
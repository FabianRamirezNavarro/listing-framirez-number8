import React from 'react';
import '../styles/modal.css';
import imageListing from "../images/listingImage.jpg";
function ListingDetail({ listing, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{listing.Title}</h2>
        <p>{listing.Location}</p>
        <h3 className="priceSize{">${listing['Sale Price']}</h3>
        <img className="border-elements" src={imageListing} alt={listing.Id} />
        <div className="horizontal-list">
        <p className="p-space">{listing.Bedrooms} Beds </p>
        <p className="p-space">{listing.Bathrooms} Bathrooms</p>
        <p className="p-space">{listing.Parking} Parking</p>
        <p className="p-space">{listing.Sqft} Sqft</p>
        <p className="p-space">{listing.YearBuilt} Year Built</p>
        </div>
        <p>{listing.Description}</p>
        
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ListingDetail;
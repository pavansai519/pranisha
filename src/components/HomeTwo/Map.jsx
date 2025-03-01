import React from 'react';

function MapHomeTwo({ className }) {
    return (
        <>
          <section className={`map-section ${className || ''}`}>
                <iframe className="map" src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed">
                </iframe>
          </section>
        </>
    );
}

export default MapHomeTwo;

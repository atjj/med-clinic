
import GoogleMapReact from 'google-map-react';

const Mapp = () => {
  const defaultCenter = {
    lat: 42.83457207031317, // Default center coordinates for San Francisco
    lng: 74.5751287623713,
  };

  const defaultZoom = 10; // Default zoom level

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCwKvePh9eMBPA9AM5eRcP6t3oQp-kr91k' }} // Replace 'YOUR_API_KEY' with your actual Google Maps API key
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        
      </GoogleMapReact>
    </div>
  );
};

export default Mapp;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import GoogleMapReact from "google-map-react";
import { FaLocationDot } from "react-icons/fa6";
import SectionTitle from "../../../Comnonent/SectionTitle/SectionTitle";
const AnyReactComponent = ({ text }) => (
  <div style={{ color: "red" }}>
    {/* {text} */}
    <FaLocationDot className="font-semibold text-3xl"/>
  </div>
);

const Location = () => {
  const defaultProps = {
    center: {
      lat: 23.7948,
      lng: 90.4143,
    },
    zoom: 15,
  };
  return (
    <div className="mt-6">
      <SectionTitle heading="Our Location"></SectionTitle>
      <div className="mt-6" style={{ height: "550px", width: "" }}>
      <GoogleMapReact
        // Replace this with your own Google Maps API key and other options
        bootstrapURLKeys={{
          key: import.meta.env.VITE_GOOGLE_APIKEY,
          libraries: "places",
          language: "en",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="Our Building"
        />
      </GoogleMapReact>
    </div>
    </div>
    
  );
};

export default Location;

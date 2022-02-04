import GoogleMapReact from "google-map-react";
import classes from "./Map.module.css";

const greatPlaceStyle = {
  position: "absolute",
  transform: "translate(-8%, -50%)",
};

const LocationPin = ({ image }) => (
  <div className={classes.pin} style={greatPlaceStyle}>
    <img className={classes.image} src={image} alt="Image" />
  </div>
);

export default function Map({ memberList, zoomLevel }) {
  return (
    <div className={classes.map}>
      <h2 className="text-2xl text-center">Find Pod Members on The Map</h2>
      <div className={classes.google_map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDAO8JZFNKqFL51bkkz042RWNw90ficUbk" }}
          defaultCenter={memberList[0]}
          defaultZoom={zoomLevel}
        >
          {memberList.map((member) => (
            <LocationPin
              key={member.key}
              lat={member.lat}
              lng={member.lng}
              image={member.avatar}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
}

import GoogleMapReact from "google-map-react";
import classes from "./Map.module.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const LocationPin = ({ text }) => (
  <div className={classes.pin}>
    <Icon icon={locationIcon} className={classes.pin_icon} />
    <p className={classes.pin_text}>{text}</p>
  </div>
);

export default function Map({ location, zoomLevel }) {
  return (
    <div className={classes.map}>
      <h2 className={classes.map_h2}>Locations of Pod members</h2>

      <div className={classes.google_map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDAO8JZFNKqFL51bkkz042RWNw90ficUbk" }}
          defaultCenter={location[0]}
          defaultZoom={zoomLevel}
        >
          {location.map((loc) => (
            <LocationPin
              lat={loc.lat}
              lng={loc.lng}
              text={loc.address}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
}

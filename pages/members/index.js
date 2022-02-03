import Map from "../../components/Map";
import Dinu from "../../public/images/Dinu.ico"

const location = [
  {
    lat: 47.4979,
    lng: 19.0402,
    img: Dinu
  },
  {
    lat: 33.6844,
    lng: 73.0479,
    img: Dinu
  },
];

function MembersPage() {
    return (
      <>
        <div>This is members page</div>
        <Map location={location} zoomLevel={0}></Map>
      </>
    ); 
} 

export default MembersPage;
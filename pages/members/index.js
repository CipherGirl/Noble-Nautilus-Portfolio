import Map from "../../components/Map";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

function MembersPage() {
    return (
      <>
        <div>This is members page</div>
        <Map location={location} zoomLevel={0}></Map>
      </>
    ); 
} 

export default MembersPage;
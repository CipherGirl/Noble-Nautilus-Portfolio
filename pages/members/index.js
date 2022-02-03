import Map from "../../components/Map";

const location = [
  {
    address: "Dinu Botan",
    lat: 47.4979,
    lng: 19.0402,
  },
  {
    address: "Member 2",
    lat: 33.6844,
    lng: 73.0479,
  }
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
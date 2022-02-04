import Layout from "../../components/Layout";
import Map from "../../components/Map";
import Dinu from "../../public/images/Dinu.ico";

const location = [
  {
    lat: 47.4979,
    lng: 19.0402,
    img: Dinu,
  },
  {
    lat: 33.6844,
    lng: 73.0479,
    img: Dinu,
  },
];

function MembersPage() {
  return (
    <>
      <Layout>
        <h1 className="text-3xl text-center">Meet The Pod Members</h1>
        <Map location={location} zoomLevel={0}></Map>
      </Layout>
    </>
  );
}

export default MembersPage;

import Layout from "../../components/Layout";
import Map from "../../components/Map";
import MemberCard from "../../components/MemberCard";
import Dinu from "../../public/images/Dinu.ico";
import members from "../../public/members.json";
import { motion } from "framer-motion";

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

// Animations
let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
function MembersPage() {
  const memberList = members.members;
  return (
    <>
      <Layout>
        <h1 className="text-3xl text-center pt-10">Meet The Pod Members</h1>
        <motion.div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {memberList.map((member, i) => (
            <motion.div
              key={i}
              initial={{
                y: 60,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 0.5, ease: easing, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <MemberCard key={member.id} member={member} />
            </motion.div>
          ))}
        </motion.div>
        <Map location={location} zoomLevel={0}></Map>
      </Layout>
    </>
  );
}

export default MembersPage;

import styles from "./MemberCard.module.css";
import avatar from "../public/images/avatar.png";
const MemberCard = ({ member }) => {
  return (
    <div className="w-full flex items-center justify-evenly text-xl rounded-xl bg-white p-5 bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <img
        src={member.avatar}
        alt="Avatar"
        style={{ width: "200px" }}
      />
      <div className={styles.container}>
        <h4>
          <b>{member.name}</b>
        </h4>
        <h5>{member.location}</h5>
        <p>{member.tagline}</p>
      </div>
    </div>
  );
};
export default MemberCard;

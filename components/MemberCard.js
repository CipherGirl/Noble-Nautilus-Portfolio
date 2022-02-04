import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MemberCard.module.css";
import classes from "./Footer.module.css";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const MemberCard = ({ member }) => {
  return (
    <div className="w-full min-h-full flex gap-5 items-center justify-evenly text-xl rounded-xl shadow-md overflow-hidden md:max-w-2xl bg-white p-5 bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <div className="">
        <img
          className="object-cover h-48 w-64"
          src={member.avatar}
          alt="Avatar"
        />
      </div>
      <div className={styles.container}>
        <h4>
          <b>{member.name}</b>
        </h4>
        <p className="text-sm text-gray-500">{member.location}</p>
        <p className="text-lg mt-2">{member.tagline}</p>
        <div className="flex text-sm gap-x-2">
          <Link href="https://www.linkedin.com/school/mlh-fellowship/">
            <FontAwesomeIcon
              className="text-blue-700"
              icon={faLinkedin}
              size="2x"
            />
          </Link>
          <Link href="https://www.facebook.com/MajorLeagueHacking">
            <FontAwesomeIcon className="" icon={faGithub} size="2x" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MemberCard;

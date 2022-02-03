import Link from "next/link";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className={classes.social_container}>
      <div className={classes.content}>
        <h3>Social Follow</h3>
        <Link href="https://www.youtube.com/c/Majorleaguehacking">
          <FontAwesomeIcon
            className={classes.youtube}
            icon={faYoutube}
            size="2x"
          />
        </Link>
        <Link href="https://www.facebook.com/MajorLeagueHacking">
          <FontAwesomeIcon
            className={classes.facebook}
            icon={faFacebook}
            size="2x"
          />
        </Link>
        <Link href="https://twitter.com/MLHacks?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <FontAwesomeIcon
            className={classes.twitter}
            icon={faTwitter}
            size="2x"
          />
        </Link>
        <Link href="https://www.instagram.com/mlhacks/">
          <FontAwesomeIcon
            className={classes.instagram}
            icon={faInstagram}
            size="2x"
          />
        </Link>
        <Link href="https://www.linkedin.com/school/mlh-fellowship/">
          <FontAwesomeIcon
            className={classes.linkedin}
            icon={faLinkedin}
            size="2x"
          />
        </Link>
      </div>
    </div>
  );
}

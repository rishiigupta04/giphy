import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow Me Here:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/rishi-raj-gupta45/">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/rishiigupta04">
          <FaGithub size={20} />
        </a>
        <a href="https://x.com/rishiigupta04?t=UgmSdTUvplYuCE9MtelQDg&s=09">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;

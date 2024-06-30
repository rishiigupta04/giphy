import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaArrowDown,
} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <div className="flex gap-2 items-center faded-text">
        <span>Follow Me Here</span>
        <FaArrowDown />
      </div>
      <div className="flex gap-4 pt-3">
        <a
          href="https://www.linkedin.com/in/rishi-raj-gupta45/"
          target="_blank"
        >
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/rishiigupta04" target="_blank">
          <FaGithub size={20} />
        </a>
        <a
          href="https://x.com/rishiigupta04?t=UgmSdTUvplYuCE9MtelQDg&s=09"
          target="_blank"
        >
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;

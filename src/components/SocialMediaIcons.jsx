import LinkedinIcon from "../assets/linkedin.png"
import FacebookIcon from "../assets/facebook.png"
import GithubIcon from "../assets/github.png"

const SocialMediaIcons = () => {
    const iconStyles = "hover:opacity-50 transition duration-500";
    return (
        <div className="flex justify-center my-10 gap-7">
            <a
                className={iconStyles}
                href="https://github.com/dungdt212"
                target="_blank"
            >
                <img alt="github-link" src={GithubIcon} />
            </a>
            <a
                className={`${iconStyles} w-9/10 h-9/10`}
                href="https://www.linkedin.com/in/dung-dinh-3640b0286/"
                target="_blank"
            >
                <img alt="linkedin-link" src={LinkedinIcon} />
            </a>
            <a
                className={iconStyles}
                href="https://www.facebook.com/inhtiendung.965399"
                target="_blank"
            >
                <img alt="facebook-link" src={FacebookIcon} />
            </a>
        </div>
    );
};

export default SocialMediaIcons;

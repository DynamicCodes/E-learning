import PropTypes from "prop-types";
import styles from "./MenuIcon.module.css";

const MenuIcon = ({ className = "" }) => {
  return (
    <img
      className={[styles.menuIcon, className].join(" ")}
      loading="lazy"
      alt=""
      src="/menu.svg"
    />
  );
};

MenuIcon.propTypes = {
  className: PropTypes.string,
};

export default MenuIcon;

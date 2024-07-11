import PropTypes from "prop-types";
import styles from "./MainContainer.module.css";

const MainContainer = ({ className = "" }) => {
  return (
    <header className={[styles.mainContainer, className].join(" ")}>
      <div className={styles.contentContainer}>
        <img
          className={styles.cdac2Icon}
          loading="lazy"
          alt=""
          src="/cdac-2@2x.png"
        />
        <div className={styles.cdacTitleContainer}>
          <h1 className={styles.centreForDevelopment}>
            Centre for Development of Advanced Computing
          </h1>
        </div>
      </div>
      <div className={styles.userIconContainer}>
        <img
          className={styles.icons8User902}
          loading="lazy"
          alt=""
          src="/icons8user90-2@2x.png"
        />
      </div>
    </header>
  );
};

MainContainer.propTypes = {
  className: PropTypes.string,
};

export default MainContainer;

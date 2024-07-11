import PropTypes from "prop-types";
import styles from "./NewsItems.module.css";

const NewsItems = ({ className = "" }) => {
  return (
    <div className={[styles.newsItems, className].join(" ")}>
      <div className={styles.newsItem}>
        <div className={styles.newsItemChild} />
        <img
          className={styles.newsItemItem}
          loading="lazy"
          alt=""
          src="/polygon-3.svg"
        />
      </div>
      <div className={styles.newsItem1}>
        <div className={styles.newsItemInner} />
        <img
          className={styles.polygonIcon}
          loading="lazy"
          alt=""
          src="/polygon-4.svg"
        />
      </div>
      <div className={styles.newsContent}>
        <div className={styles.newsContentChild} />
        <div className={styles.loremIpsumWrapper}>
          <div className={styles.loremIpsum}>Lorem Ipsum</div>
        </div>
        <div className={styles.loremIpsumIsContainer}>
          <p className={styles.loremIpsumIs}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className={styles.loremIpsumIs1}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
      </div>
      <div className={styles.newsItems1}>
        <div className={styles.newsItem2}>
          <div className={styles.newsDetails}>
            <div className={styles.newsDetailsChild} />
            <div className={styles.loremIpsumContainer}>
              <div className={styles.loremIpsum1}>Lorem Ipsum</div>
            </div>
            <div className={styles.loremIpsumIsContainer1}>
              <p className={styles.loremIpsumIs2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className={styles.loremIpsumIs3}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
          <div className={styles.newsDetails1}>
            <div className={styles.newsDetailsItem} />
            <div className={styles.loremIpsumFrame}>
              <div className={styles.loremIpsum2}>Lorem Ipsum</div>
            </div>
            <div className={styles.loremIpsumIsContainer2}>
              <p className={styles.loremIpsumIs4}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className={styles.loremIpsumIs5}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsItems.propTypes = {
  className: PropTypes.string,
};

export default NewsItems;

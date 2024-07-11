import PropTypes from "prop-types";
import styles from "./FrameComponent31.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <footer className={styles.footerContent}>
        <div className={styles.centreForDevelopment}>
          Centre for Development of Advanced Computing
        </div>
        <div className={styles.footerNavigation}>
          <div className={styles.payment}>
            <div className={styles.rate}>Rate</div>
            <div className={styles.paymentOptions}>
              <div className={styles.uPI}>
                <div className={styles.uPIOptions}>
                  <div className={styles.razorpay}>Razorpay</div>
                  <div className={styles.acceptPayments}>Accept Payments</div>
                </div>
                <div className={styles.paytm}>
                  <div className={styles.paytm1}>Paytm</div>
                </div>
              </div>
              <div className={styles.navigation}>
                <div className={styles.home}>
                  <div className={styles.home1}>Home</div>
                </div>
                <div className={styles.about}>
                  <div className={styles.about1}>About</div>
                  <div className={styles.services}>
                    <div className={styles.services1}>Services</div>
                  </div>
                </div>
              </div>
              <div className={styles.docs}>
                <div className={styles.docsContent}>
                  <div className={styles.docsLink}>
                    <div className={styles.docs1}>Docs</div>
                  </div>
                  <div className={styles.integrations}>
                    <div className={styles.intregrations}>Intregrations</div>
                    <div className={styles.apiReference}>API Reference</div>
                  </div>
                </div>
                <div className={styles.developers}>
                  <div className={styles.developersIcon} />
                  <div className={styles.developers1}>Developers</div>
                </div>
              </div>
              <div className={styles.company}>
                <div className={styles.aboutUs}>
                  <div className={styles.aboutUs1}>About Us</div>
                  <div className={styles.termsOfUse}>Terms of Use</div>
                </div>
                <div className={styles.ourPartners}>Our Partners</div>
                <div className={styles.companyLink}>
                  <div className={styles.companyIcon} />
                  <div className={styles.company1}>Company</div>
                </div>
              </div>
              <div className={styles.help}>
                <div className={styles.helpContent}>
                  <div className={styles.helpIcon} />
                  <div className={styles.helpSupport}>{`Help & Support`}</div>
                </div>
                <div className={styles.helpLink}>
                  <div className={styles.support}>Support</div>
                </div>
                <div className={styles.helpLink1}>
                  <div className={styles.moreKnowledge}>More Knowledge</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.resources}>
            <div className={styles.resources1}>Resources</div>
          </div>
        </div>
        <div className={styles.footer1}>
          <div className={styles.footerShape} />
          <div className={styles.footerShape1} />
          <img
            className={styles.cdac3Icon}
            loading="lazy"
            alt=""
            src="/cdac-31@2x.png"
          />
          <img
            className={styles.icons8Google482}
            loading="lazy"
            alt=""
            src="/icons8google48-22@2x.png"
          />
        </div>
      </footer>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;

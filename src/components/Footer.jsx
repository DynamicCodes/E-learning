import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerChild} />
      <div className={styles.logoContainer}>
        <img
          className={styles.cdac3Icon}
          loading="lazy"
          alt=""
          src="/cdac-2@2x.png"
        />
        <div className={styles.name}>
          <div className={styles.centreForDevelopment}>
            Centre for Development of Advanced Computing
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.links}>
          <div className={styles.primaryLinks}>
            <div className={styles.home}>
              <div className={styles.home1}>Home</div>
            </div>
            <div className={styles.aboutUs}>
              <div className={styles.about}>About</div>
              <div className={styles.services}>
                <div className={styles.dropdown}>
                  <div className={styles.services1}>Services</div>
                  <div className={styles.rate}>
                    <div className={styles.rate1}>Rate</div>
                  </div>
                  <a className={styles.resources}>Resources</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.resources1}>
            <div className={styles.docsDropdown}>
              <div className={styles.docs}>
                <div className={styles.docsLink}>
                  <div className={styles.docsItem}>
                    <div className={styles.docsName}>
                      <div className={styles.docs1}>Docs</div>
                    </div>
                    <div className={styles.integrations}>
                      <div className={styles.intregrations}>Intregrations</div>
                      <div className={styles.apiReference}>API Reference</div>
                    </div>
                  </div>
                  <div className={styles.developers}>
                    <div className={styles.developersChild} />
                    <div className={styles.developers1}>Developers</div>
                  </div>
                </div>
                <div className={styles.companyInfo}>
                  <div className={styles.legal}>
                    <div className={styles.aboutUs1}>About Us</div>
                    <div className={styles.termsOfUse}>Terms of Use</div>
                  </div>
                  <div className={styles.ourPartners}>Our Partners</div>
                  <div className={styles.companyLink}>
                    <div className={styles.companyLinkChild} />
                    <div className={styles.company}>Company</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.copyrightProtectedCdac}>
              Copyright Protected @CDAC 2023. All Right Resered
            </div>
          </div>
          <div className={styles.helpKnowledge}>
            <div className={styles.support}>
              <div className={styles.supportChild} />
              <div className={styles.helpSupport}>{`Help & Support`}</div>
            </div>
            <div className={styles.supportWrapper}>
              <div className={styles.support1}>Support</div>
            </div>
            <div className={styles.moreKnowledgeWrapper}>
              <div className={styles.moreKnowledge}>More Knowledge</div>
            </div>
          </div>
          <div className={styles.paymentOptions}>
            <div className={styles.payment}>
              <div className={styles.acceptPayments}>
                <div className={styles.acceptPaymentsChild} />
                <div className={styles.acceptPayments1}>Accept Payments</div>
              </div>
              <div className={styles.paymentPartners}>
                <div className={styles.razorpay}>Razorpay</div>
                <div className={styles.paytm}>Paytm</div>
              </div>
            </div>
            <div className={styles.designResources}>
              <div className={styles.design}>
                <div className={styles.resourceNames}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className={styles.resourceNames1}>
                  <img
                    className={styles.gridsAndTemplatesIcon}
                    loading="lazy"
                    alt=""
                    src="/gridsandtemplates.svg"
                  />
                </div>
                <img
                  className={styles.icons8Google482}
                  loading="lazy"
                  alt=""
                  src="/icons8google48-2@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;

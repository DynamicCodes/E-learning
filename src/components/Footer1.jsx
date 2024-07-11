import PropTypes from "prop-types";
import styles from "./Footer1.module.css";

const Footer1 = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.centreForDevelopment}>
        Centre for Development of Advanced Computing
      </div>
      <div className={styles.copyrightParent}>
        <div className={styles.copyrightProtectedCdac}>
          Copyright Protected @CDAC 2023. All Right Resered
        </div>
        <div className={styles.navigation}>
          <div className={styles.rateParent}>
            <div className={styles.rate}>Rate</div>
            <div className={styles.payment}>
              <div className={styles.razorpayParent}>
                <div className={styles.razorpayInfo}>
                  <div className={styles.razorpay}>Razorpay</div>
                  <div className={styles.acceptPayments}>Accept Payments</div>
                </div>
                <div className={styles.paytmParent}>
                  <div className={styles.paytm}>Paytm</div>
                </div>
              </div>
              <div className={styles.navigationLinks}>
                <div className={styles.homeParent}>
                  <div className={styles.home}>Home</div>
                </div>
                <div className={styles.aboutParent}>
                  <div className={styles.about}>About</div>
                  <div className={styles.servicesParent}>
                    <div className={styles.services}>Services</div>
                  </div>
                </div>
              </div>
              <div className={styles.docsParent}>
                <div className={styles.docsInfo}>
                  <div className={styles.docsWrapper}>
                    <div className={styles.docs}>Docs</div>
                  </div>
                  <div className={styles.intregrationsParent}>
                    <div className={styles.intregrations}>Intregrations</div>
                    <div className={styles.apiReference}>API Reference</div>
                  </div>
                </div>
                <div className={styles.developersParent}>
                  <div className={styles.developersIcon} />
                  <div className={styles.developers}>Developers</div>
                </div>
              </div>
              <div className={styles.companyParent}>
                <div className={styles.companyLinks}>
                  <div className={styles.aboutUs}>About Us</div>
                  <div className={styles.termsOfUse}>Terms of Use</div>
                </div>
                <div className={styles.ourPartners}>Our Partners</div>
                <div className={styles.companyIconParent}>
                  <div className={styles.companyIcon} />
                  <div className={styles.company}>Company</div>
                </div>
              </div>
              <div className={styles.knowledge}>
                <div className={styles.supportParent}>
                  <div className={styles.supportIcon} />
                  <div className={styles.helpSupportParent}>
                    <div className={styles.helpSupport}>{`Help & Support`}</div>
                    <div className={styles.icons}>
                      <div className={styles.layer} />
                      <div className={styles.iconsChild} />
                      <img
                        className={styles.cdac3Icon}
                        loading="lazy"
                        alt=""
                        src="/cdac-3@2x.png"
                      />
                      <img
                        className={styles.icons8Google482}
                        loading="lazy"
                        alt=""
                        src="/icons8google48-21@2x.png"
                      />
                      <img
                        className={styles.layer2Icon}
                        loading="lazy"
                        alt=""
                        src="/layer-2.svg"
                      />
                      <img
                        className={styles.iconsTypes}
                        loading="lazy"
                        alt=""
                        src="/vector1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.supportWrapper}>
                  <div className={styles.support}>Support</div>
                </div>
                <div className={styles.moreKnowledgeWrapper}>
                  <div className={styles.moreKnowledge}>More Knowledge</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.resourcesParent}>
            <div className={styles.resources}>Resources</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;

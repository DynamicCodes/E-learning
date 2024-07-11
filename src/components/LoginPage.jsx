import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./LoginPage.module.css";

const LoginPage = ({ className = "" }) => {
  return (
    <div className={[styles.loginPage, className].join(" ")}>
      <div className={styles.centreForDevelopmentOfAdvaParent}>
        <h1 className={styles.centreForDevelopment}>
          Centre for Development of Advanced Computing
        </h1>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/vector-1.svg" />
          <img
            className={styles.cdac1Icon}
            loading="lazy"
            alt=""
            src="/cdac-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <div className={styles.eMailAddress}>E-mail address</div>
          </div>
        </div>
        <div className={styles.passwordInputAreaParent}>
          <div className={styles.passwordInputArea}>
            <Form className={styles.wrapper}>
              <Form.Control
                type="text"
                name="Password"
                id="password"
                placeholder="Password"
              />
            </Form>
            <div className={styles.forgotPasswordWrapper}>
              <div className={styles.forgotPassword}>Forgot password?</div>
            </div>
          </div>
          <div className={styles.loginButtonAreaWrapper}>
            <div className={styles.loginButtonArea}>
              <div className={styles.loginButtonAreaChild} />
              <h3 className={styles.logIn}>LOG IN</h3>
            </div>
          </div>
          <div className={styles.dontHaveAnAccountSignInWrapper}>
            <div className={styles.dontHaveAnContainer}>
              <span>Don’t have an account?</span>
              <span className={styles.span}>{`   `}</span>
              <b>{`Sign In `}</b>
            </div>
          </div>
        </div>
        <div className={styles.dividerContentWrapper}>
          <div className={styles.dividerContent}>
            <div className={styles.dividerContentInner}>
              <img className={styles.frameInner} loading="lazy" alt="" />
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.orLogInWithWrapper}>
                <div className={styles.orLogIn}>or LOG IN with</div>
              </div>
              <div className={styles.socialLoginIcons}>
                <img
                  className={styles.icons8Google481}
                  loading="lazy"
                  alt=""
                  src="/icons8google48-1@2x.png"
                />
                <img
                  className={styles.icons8Facebook481}
                  loading="lazy"
                  alt=""
                  src="/icons8facebook48-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.dividerContentChild}>
              <img className={styles.lineIcon} loading="lazy" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.loginPageChild}
        loading="lazy"
        alt=""
        src="/vector-2.svg"
      />
    </div>
  );
};

LoginPage.propTypes = {
  className: PropTypes.string,
};

export default LoginPage;

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = ({ className = "" }) => {
  return (
    <div className={[styles.registrationPage, className].join(" ")}>
      <div className={styles.registrationPageChild} />
      <div className={styles.centreForDevelopmentOfAdvaParent}>
        <div className={styles.centreForDevelopment}>
          Centre for Development of Advanced Computing
        </div>
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
      <form className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.firstNameInputParent}>
            <div className={styles.firstNameInput} />
            <div className={styles.firstName}>First Name</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <Form className={styles.wrapper}>
            <Form.Control
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
          </Form>
          <div className={styles.emailLastNameInputWrapper}>
            <div className={styles.emailLastNameInput}>
              <div className={styles.emailInput} />
              <div className={styles.eMailAddress}>E-mail address</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.number}>Number</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.passwordConfirmInputParent}>
            <div className={styles.passwordConfirmInput}>
              <div className={styles.passwordInput} />
              <div className={styles.password}>Password</div>
            </div>
            <div className={styles.passwordConfirmInput1}>
              <div className={styles.passwordConfirmInputChild} />
              <div className={styles.confirmPassword}>Confirm Password</div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <Button
            className={styles.frameInner}
            name="signup"
            id="signup"
            variant="primary"
            href="/landing-page"
          >
            SIGN UP
          </Button>
        </div>
      </form>
      <img
        className={styles.registrationPageItem}
        loading="lazy"
        alt=""
        src="/vector-2.svg"
      />
    </div>
  );
};

RegistrationPage.propTypes = {
  className: PropTypes.string,
};

export default RegistrationPage;

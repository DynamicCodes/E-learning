import OtherPersonal from "./OtherPersonal";
import PropTypes from "prop-types";
import styles from "./FrameComponent8.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.otherPersonalParent, className].join(" ")}>
      <OtherPersonal otherInformation="Other Information" />
      <div className={styles.extraCurricularAttendanceWrapper}>
        <div className={styles.extraCurricularContainer}>
          <p className={styles.extraCurricular}>Extra Curricular :</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.attendance}>Attendance:</p>
        </div>
      </div>
      <OtherPersonal
        otherInformation="Personal Information"
        propPadding="10px 22px 17px"
        propWidth="374px"
      />
      <div className={styles.dateOfBirthGenderNatioWrapper}>
        <div className={styles.dateOfBirthContainer}>
          <p className={styles.dateOfBirth}>{`Date of Birth : `}</p>
          <p className={styles.gender}>{`Gender :  `}</p>
          <p className={styles.nationality}>{`Nationality :  `}</p>
          <p className={styles.passport}>{`Passport :  `}</p>
          <p className={styles.foreignLanguages}>{`Foreign Languages :  `}</p>
          <p className={styles.languagesKnown}>{`Languages Known : `}</p>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;

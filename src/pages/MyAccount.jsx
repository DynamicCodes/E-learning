import styles from "./MyAccount.module.css";

const MyAccount = () => {
  return (
    <div className={styles.myAccount}>
      <img
        className={styles.myAccountChild}
        loading="lazy"
        alt=""
        src="/group-16@2x.png"
      />
      <div className={styles.contentBox} />
      <div className={styles.myAccountInner}>
        <div className={styles.myAccountParent}>
          <a className={styles.myAccount1}>My account</a>
          <a className={styles.logOut}>Log out</a>
        </div>
      </div>
      <main className={styles.detailsContentWrapper}>
        <section className={styles.detailsContent}>
          <div className={styles.nameMailIdContainer}>
            <p className={styles.name}>Name:</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.mailId}>Mail id:</p>
            <p className={styles.blankLine1}>&nbsp;</p>
            <p className={styles.phoneNumber}>Phone Number:</p>
            <p className={styles.blankLine2}>&nbsp;</p>
            <p className={styles.address}>Address:</p>
            <p className={styles.blankLine3}>&nbsp;</p>
            <p className={styles.blankLine4}>&nbsp;</p>
            <p className={styles.blankLine5}>&nbsp;</p>
            <p className={styles.dateOfBirth}>Date of Birth :</p>
            <p className={styles.blankLine6}>&nbsp;</p>
            <p
              className={styles.gender}
            >{`Gender :                                                                         Nationality :  `}</p>
            <p className={styles.blankLine7}>&nbsp;</p>
            <p className={styles.foreignLanguages}>{`Foreign Languages :  `}</p>
            <p className={styles.blankLine8}>&nbsp;</p>
            <p className={styles.languagesKnown}>{`Languages Known : `}</p>
            <p className={styles.blankLine9}>&nbsp;</p>
            <p className={styles.qualification}>Qualification:</p>
            <p className={styles.blankLine10}>&nbsp;</p>
            <p className={styles.th}>10th: Year: Percentage:</p>
            <p className={styles.blankLine11}>&nbsp;</p>
            <p className={styles.th1}>12th: Year: Pecentage:</p>
            <p className={styles.blankLine12}>&nbsp;</p>
            <p className={styles.ugDegree}>UG Degree: Year: CGPA:</p>
            <p className={styles.blankLine13}>&nbsp;</p>
            <p className={styles.pgDegree}>PG Degree: Year: CGPA:</p>
            <p className={styles.blankLine14}>&nbsp;</p>
            <p className={styles.certificateCourseifAny}>
              Certificate course(if any):
            </p>
            <p className={styles.blankLine15}>&nbsp;</p>
            <p className={styles.experienceDetailsifAny}>
              Experience Details(if any):
            </p>
            <p className={styles.blankLine16}>&nbsp;</p>
            <p className={styles.extraCurricular}>Extra Curricular:</p>
          </div>
          <div className={styles.detailsList} />
          <div className={styles.detailsList1} />
          <div className={styles.detailsList2} />
          <div className={styles.detailsList3} />
          <div className={styles.detailsList4} />
          <div className={styles.detailsList5} />
          <div className={styles.detailsList6} />
          <div className={styles.detailsList7} />
          <div className={styles.detailsList8} />
          <div className={styles.detailsList9} />
          <div className={styles.detailsList10} />
          <div className={styles.detailsList11} />
          <div className={styles.detailsList12} />
          <div className={styles.detailsList13} />
          <div className={styles.detailsList14} />
          <div className={styles.detailsList15} />
          <div className={styles.detailsList16} />
          <div className={styles.detailsList17} />
          <div className={styles.detailsList18} />
          <div className={styles.detailsList19} />
          <div className={styles.detailsList20} />
          <div className={styles.detailsList21} />
          <div className={styles.detailsList22} />
          <div className={styles.detailsList23} />
          <div className={styles.detailsList24} />
        </section>
      </main>
    </div>
  );
};

export default MyAccount;

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./Practice.module.css";

const Practice = () => {
  return (
    <div className={styles.practice}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.prepareDsa}>{`Prepare > DSA > Basics`}</div>
      </div>
      <div className={styles.practiceQuestion}>
        <div className={styles.questionContent}>
          <div className={styles.questionPrompt}>
            <div className={styles.question1LoremContainer}>
              <p className={styles.question1}>Question 1:</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.loremIpsumIs}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and pecimen book
              </p>
            </div>
          </div>
          <div className={styles.codeArea}>
            <div className={styles.codeEditor}>
              <div className={styles.codeEditorChild} />
              <div className={styles.typeYourCode}>//Type your code here</div>
            </div>
            <div className={styles.codeOutput}>
              <div className={styles.output}>
                <p className={styles.output1}>Output:</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navigationControls}>
            <div className={styles.previousNext}>
              <div className={styles.previousNextChild} />
              <div className={styles.previousQuestion}>Previous Question</div>
            </div>
            <Button
              className={styles.previousNext1}
              name="Next"
              id="Next"
              variant="primary"
              href="/report"
            />
          </div>
        </div>
      </div>
      <main className={styles.visualElements}>
        <div className={styles.backgroundShape} />
        <header className={styles.userIcons}>
          <div className={styles.userIconsChild} />
          <img
            className={styles.icons8User902}
            loading="lazy"
            alt=""
            src="/icons8user90-2@2x.png"
          />
        </header>
      </main>
    </div>
  );
};

export default Practice;

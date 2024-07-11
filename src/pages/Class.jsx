import styles from "./Class.module.css";

const Class = () => {
  return (
    <div className={styles.class}>
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/group-21.svg"
        />
      </section>
      <div className={styles.classInner}>
        <div className={styles.contentBlockParent}>
          <div className={styles.contentBlock}>
            <div className={styles.operatingSystem}>Operating System</div>
            <div className={styles.footer}>
              <div className={styles.rajivRay}>Rajiv Ray</div>
            </div>
          </div>
          <div className={styles.structure}>
            <div className={styles.header}>
              <div className={styles.headerChild} />
              <div className={styles.content}>
                <div className={styles.lineParent}>
                  <img className={styles.frameInner} loading="lazy" alt="" />
                  <img className={styles.lineIcon} loading="lazy" alt="" />
                  <img className={styles.frameChild1} loading="lazy" alt="" />
                </div>
              </div>
              <div className={styles.sidebar}>
                <div className={styles.assignment}>
                  <div className={styles.resources}>Resources</div>
                  <div className={styles.assignment1}>Assignment</div>
                </div>
              </div>
              <div className={styles.layoutParent}>
                <div className={styles.layout}>
                  <div className={styles.feedback}>Feedback</div>
                </div>
                <div className={styles.diagramContainer}>
                  <div className={styles.images}>
                    <div className={styles.ellipseParent}>
                      <div className={styles.ellipseDiv} />
                      <div className={styles.div}>10</div>
                    </div>
                    <div className={styles.details}>
                      <div className={styles.detailsChild} />
                      <div className={styles.div1}>6</div>
                    </div>
                  </div>
                  <div className={styles.disclaimer}>
                    <div className={styles.highlightParent}>
                      <div className={styles.highlight}>
                        <div className={styles.highlightChild} />
                        <div className={styles.div2}>9</div>
                      </div>
                      <div className={styles.modifiers}>
                        <div className={styles.modifiersChild} />
                        <div className={styles.div3}>5</div>
                      </div>
                    </div>
                    <div className={styles.overlay}>
                      <div className={styles.details1}>
                        <div className={styles.detailsItem} />
                        <div className={styles.div4}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.diagramRowOne}>
                    <div className={styles.legal}>
                      <div className={styles.previewParent}>
                        <div className={styles.preview}>
                          <div className={styles.previewChild} />
                          <div className={styles.div5}>8</div>
                        </div>
                        <div className={styles.header1}>
                          <div className={styles.headerItem} />
                          <div className={styles.div6}>4</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.ellipseGroup}>
                      <div className={styles.frameChild2} />
                      <div className={styles.div7}> 1</div>
                    </div>
                  </div>
                  <div className={styles.diagramRowOne1}>
                    <div className={styles.info}>
                      <div className={styles.infoChild} />
                      <div className={styles.div8}>7</div>
                    </div>
                    <div className={styles.ellipseContainer}>
                      <div className={styles.frameChild3} />
                      <div className={styles.div9}>3</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;

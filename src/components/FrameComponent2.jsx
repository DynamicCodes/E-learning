import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <GroupComponent
        propAlignSelf="unset"
        propBackgroundColor="#34bcab"
        propWidth="883px"
        propBackgroundColor1="#34bcab"
        propBorderRight="5px solid #fff"
        propBorderRight1="5px solid #fff"
      />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;

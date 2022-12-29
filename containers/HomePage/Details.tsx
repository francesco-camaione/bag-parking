import styles from "./Main.module.css";

const DetailsArea = () => {
  return (
    <div className={styles.details_div}>
      <div className={styles.services_div} style={{paddingBottom: "3rem"}}>
        <div>
          <h3>2min walk from Cathedral</h3>
          <p>One step away from the center to immediately immerse yourself in the city.</p>
        </div>
        <div>
          <h3>5min walk from train station</h3>
          <p>No effort! Luggage will no longer be a burden.</p>
        </div>
        <div>
          <h3>Luggage insured</h3>
          <p>Sleep soundly. Your luggage will be safe in our storage.</p>
        </div>
      </div>
      <div className={styles.services_div}>
        <div>
          <h3>Fixed rate</h3>
          <p>No bad surprises. Transparency is the basis of our service.</p>
        </div>
        <div>
          <h3>Availability 7/7</h3>
          <p>Don't give up on your program.</p>
        </div>

        <div>
          <h3>Pick up service</h3>
          <p>We take care of your luggage, without leaving you with the burden of having to carry it around the city.</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsArea;

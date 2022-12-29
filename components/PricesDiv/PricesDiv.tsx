import ContactDiv from "../ContactDiv/ContactDiv";
import styles from "./PricesDiv.module.css";
import Image from "next/image";

const PricesDiv = () => {
  return (
    <div className={styles.prices_div}>
      <h3>Our Services</h3>

      <div className={styles.prices_options_div}>
        <div className={styles.prices_options}>
          <h4>Deposit</h4>
          <ul className={styles.ul}>
            <li>Luggage insured</li>
            <li>Available 7/7</li>
            <li>Chaired by staff</li>
          </ul>
          <p className={styles.text_center}>5€</p>
        </div>

        <div className={styles.prices_options}>
          <h4>Pick up</h4>
          <ul className={styles.ul}>
            <li>Free luggage pick up service from all Como's train stations</li>
            <li>
              Free pick up service from Como San Giovanni station, just book it
            </li>
            <li>
              within 10km pickup service for 7€ ( 2 bags ). 2€ each additional
              baggage
            </li>
          </ul>
          <p className={styles.text_center}>7€</p>
          <Image src="/images/van_icon.png" width={400} height={300} alt={""} className={styles.van_img} />
        </div>

        <div className={styles.prices_options}>
          <h4>Deposit transfer</h4>
          <ul className={styles.ul}>
            <li>
              We bring your luggage wherever you want within Como for 7€ ( 2
              bags ). 2€ each additional baggage{" "}
            </li>
          </ul>
          <p className={styles.text_center}>7€</p>
          <Image src="/images/van_icon.png" width={400} height={300} alt={""} className={styles.van_img} />
        </div>
      </div>
      <ContactDiv />
    </div>
  );
};

export default PricesDiv;

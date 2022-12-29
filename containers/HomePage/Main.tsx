import BookBtn from "../../components/Buttons/BookBtn";
import PricesDiv from "../../components/PricesDiv/PricesDiv";
import styles from "./Main.module.css";
import Sections from "./Sections";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.title_backg}>
        <div className={styles.div_flex}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>Bag Parking</h1>
            <h2 className={styles.h2}>Luggage Storage in Como</h2>
            <h3 className={styles.h3}>Drop off your bags and enjoy your day handfree</h3>
          </div>
          <BookBtn />
        </div>
      </div>
      
      <Sections />
      <PricesDiv />
    </main>
  );
};

export default Main;

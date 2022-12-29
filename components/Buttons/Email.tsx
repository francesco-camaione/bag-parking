import Link from "next/link";
import styles from "./Btn.module.css";

const EmailBtn = () => {
  return (
    <Link
      href="mailto:info@bagparkingcomo.it?subject=Informations"
      target="_blank"
      className={styles.a}
    >
      <button className={styles.btn}>Email</button>
    </Link>
  );
};

export default EmailBtn
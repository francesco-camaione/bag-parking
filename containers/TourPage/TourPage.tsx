import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./TourPage.module.css";
import articles from "../../config/tourArticles.json";
import TourArticlesDiv from "../../components/TourArticlesDiv/TourArticlesDiv";

const TourPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {articles.articles.map((art: any, n: number) => {
          return (
            <TourArticlesDiv
              key={n}
              src={art.src}
              title={art.title}
              body={art.body}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default TourPage;

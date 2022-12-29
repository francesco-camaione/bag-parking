import Head from "next/head";
import HomePage from "../containers/HomePage/HomePage";
import articles from "../config/tourArticles.json"

export default function Home() {
  const image_luggage = "images/luggage.jpg"
  const tour_data = articles.articles

  return (
    <div>
      <Head>
        <title>Bag Parking - Luggage Storage in Como</title>
        <link rel="icon" href="images/logo.jpg" type="image/png" />
        <meta name="description" content="Luggage storage in Como. Bag parking takes care of the transport and storage of luggage in Como." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta property="og:image" content={"images/logo.jpg"} />
        <meta property="og:title" content={"Bag Parking - Luggage storage"} />
        <meta property="og:description" content={"Bag Parking - Luggage storage. Luggage storage in Como. Bag parking takes care of the transport and storage of luggage in Como. " + tour_data.map(art => art.title + " " + art.body)} />
        <meta itemProp="image" content={image_luggage} /> 
      </Head>
      <HomePage />
    </div>
  );
}

import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="cookie-div" style={{color: "#fff"}}>
        <h1 style={{color: "#faaf45"}}>Bag parking Cookies Policy</h1>
        <p>Our Cookies Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service, your choices regarding cookies and further information about cookies.</p>
        <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>
        <p>Cookies can be "persistent" or "session" cookies. Persistent cookies remain on a user’s device for a set period of time specified in the cookie. They are activated each time that the user visits the website that created that particular cookie. Session cookies are temporary. They allow website operators to link the actions of a user during a browser session. A browser session starts when a user opens the browser window and finishes when they close the browser window. Once you close the browser, all session cookies are deleted.</p>
        <p>Cookies also have, broadly speaking, four different functions and can be categorised as follow: ‘strictly necessary’ cookies, ‘performance’ cookies, ‘functionality’ cookies and ‘targeting’ or ‘advertising’ cookies.</p>
        <h4 style={{color: "#faaf45", fontSize: "1.4rem"}}>How Bag parking use cookies</h4>
        <p>When you use and access the Service, we may place a number of cookies files in your web browser.</p>
        <p>We use cookies for the following purposes: to enable certain functions of the Service, to provide analytics.</p>
        <p>We use both session and persistent cookies on the Service and we use different types of cookies to run the Service:</p>
        <p><strong>- Strictly necessary:</strong> cookies are essential to navigate around a website and use its features. Without them, you wouldn’t be able to use basic services like registration or shopping baskets. These cookies do not gather information about you that could be used for marketing or remembering where you've been on the internet.</p>
        <h4 style={{color: "#faaf45", fontSize: "1.4rem"}}>What are your choices regarding cookies</h4>
        <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.</p>
        <p>Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.</p>
        <p>You can learn more about cookies and the following third-party websites:</p>
        <p>AllAboutCookies: <Link href="http://www.allaboutcookies.org/">http://www.allaboutcookies.org/ </Link></p>
        <p>Network Advertising Initiative: <Link href="https://thenai.org/">https://thenai.org/ </Link></p>
    </div>
    <Footer />
    </>
  );
}

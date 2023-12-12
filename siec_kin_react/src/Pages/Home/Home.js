import Navigation from "../../Components/navigation/Navigation.jsx";
import Footer from "../../Components/footer/Footer.jsx";
import Teasers from "../../Components/teasers/Teasers.jsx";
import HomeNews from "../../Components/homeNews/HomeNews.jsx";
import FilmCarousel from "../../Components/filmCarousel/FilmCarousel";
import SearchBar from "../../Components/searchBar/SearchBar";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <>
            <Navigation active={"home"} />
            <FilmCarousel />
            <SearchBar />
            {/* <Aktualnosci/> */}
            <HomeNews />
            <Teasers />
            <Footer />
        </>
    )
}
export default Home;

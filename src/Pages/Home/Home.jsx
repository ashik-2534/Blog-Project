import CardSection from "../../assets/Components/BlogComponents/CardsSection/CardSection";
import HeroSection from "../../assets/Components/HomeComponents/HeroSection/HeroSection";
import OurTeam from "../../assets/Components/AboutComponets/OurTeam/OurTeam";
import ContactFormWithMap from "../../assets/Components/ContactComponents/ContactFormWithMap/ContactFormWithMap";

const Home = () => {
    return (
        <div >
            <HeroSection/>
            <OurTeam/>
            <CardSection/>
            <ContactFormWithMap/>
        </div>
    );
};

export default Home;
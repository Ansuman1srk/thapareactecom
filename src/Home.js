import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
    const data = {
        name: "Mentor Gems",
        heading: "Welcome To",
        content: "We Provide the World's best Mentorship for Students."
    };
    
    return (
    <>
        <HeroSection myData={data} />
        <FeatureProduct />
        <Services />
        <Trusted />
    </>
    );
};


export default Home;
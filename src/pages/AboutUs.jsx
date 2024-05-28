import AboutUsHead from "../components/about-us/AboutUsHead";
import AboutUsInfo from "../components/about-us/AboutUsInfo";
import Features from "../components/about-us/Features";
import OurTeam from "../components/about-us/OurTeam";
import Preformance from "../components/about-us/Preformancs";

function AboutUs() {
    return <div className="overflow-hidden">
        <AboutUsHead />
        <AboutUsInfo />
        <OurTeam />
        <Preformance />
        <Features />
    </div>
}


export default AboutUs;
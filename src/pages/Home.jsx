
import ContactUs from "../components/home/ContactUs";
import Locations from "../components/home/Locations";
import OurProducts from "../components/home/OurProducts";
import SiteInterface from "../components/home/SiteInterface";

function Home() {
  return (
    <div>
      <SiteInterface />

      <OurProducts />

      <Locations />
      <ContactUs />
    </div>
  );
}

export default Home;

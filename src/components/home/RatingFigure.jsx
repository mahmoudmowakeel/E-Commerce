import { LiaStarSolid } from "react-icons/lia";

function RatingFigure() {
  return (
    <div className="bg-[#ffffff0d] p-10 mx-4 md:mr-5 mb-5 rounded-2xl z-20">
      <section className="flex space-x-1 text-2xl mb-5">
        <LiaStarSolid className="text-yellow-500" />
        <LiaStarSolid className="text-yellow-500" />
        <LiaStarSolid className="text-yellow-500" />
        <LiaStarSolid className="text-yellow-500" />
        <LiaStarSolid className="text-yellow-500" />
      </section>
      <p className="text-[#777777] mb-7 text-xl font-light">
        We have worked on Divi Elementor Bridge Theme Salient Theme WP Bakery
        and Beaver Builder Based Themes however this theme is above all it helps
        to achieve
      </p>
      <h3>Iskpro</h3>
      <span className="text-[#777777] text-xs">uDesign Client</span>
    </div>
  );
}

export default RatingFigure;

import AnimatedTitleBlack from "../../ui/AnimatedTitleBlack";
import LocationFigure from "./LocationFigure";

function Locations() {
  return (
    <div className="overflow-hidden">
      <AnimatedTitleBlack title="Our Locations" />
      <section className="mt-[120px] grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto">
        <LocationFigure
          img={`s1`}
          country={`United States`}
          state={`1234 Elm Street, Apt. 56B, Springfield, IL (Illinois), Sangamon`}
          zip={`62704`}
        />
        <LocationFigure
          img={`s2`}
          country={`France`}
          state={`78 Rue de Rivoli, Bâtiment B, Étage 3, Lyon, Auvergne-Rhône-Alpes`}
          zip={`69001`}
        />
        <LocationFigure
          img={`s3`}
          country={`England`}
          state={`5 High Street, Apartment 12, Oxford, Oxfordshire`}
          zip={`OX1 4AH`}
        />
      </section>
    </div>
  );
}

export default Locations;

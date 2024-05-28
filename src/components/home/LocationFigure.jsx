import { ImLocation } from "react-icons/im";

function LocationFigure({ img, country, state, zip }) {
  return (
    <div className="text-center text-lg">
      <img
        src={`imgs/${img}.png`}
        alt=""
        className="rounded-2xl mx-auto mb-7 w-[350px] h-[250px]"
      />
      <h1 className="mb-5 text-[#3452ff] font-bold w-full">
        <span>
          <ImLocation className="inline mr-5 text-xl text-red-800 mb-2" />
        </span>
        {country}
      </h1>
      <p className="text-[#777777]  w-full ">{state}</p>
      <span className="text-xs w-full">Zip code : {zip}</span>
    </div>
  );
}

export default LocationFigure;

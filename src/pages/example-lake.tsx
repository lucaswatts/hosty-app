import "../app/globals.css";
import BodyImage from "@/components/BodyImage";
import MapCopy from "@/components/MapCopy";

export default function Albion() {
  return (
    <div>
      <div className="header-image-container block bg-cover h-[99vh] w-full rounded-bl-[35px] rounded-br-[35px]"></div>
      <div className="header-content-container text-white absolute bottom-[60px] inline left-0 w-full">
        <h1 className="h1 align-left ml-[5%] mb-[15px]">
          Explore Your
          <br />
          <strong>Cottage</strong> Stay
        </h1>
        <button className="rounded-lg text-lg bg-white text-black py-2 w-[90%] mx-auto flex justify-center">
          See Our Recommendations
        </button>
      </div>
      <BodyImage
        imgSrc="/assets/hero-cottage.jpg"
        imgStyle="rounded-[35px] mt-[30px] w-[90%] mx-auto"
      />
      <MapCopy
        containerStyle="w-[90%] mx-auto mt-[10px]"
        titleStyle="uppercase font-bold"
        blurbStyle="text-xs text-gray-500"
        blurb="Below is a curated list of local sights, activities, points of interests, and businesses which we enjoy and recommend."
      />
      <iframe
        className="maps-iframe"
        src="https://www.google.com/maps/d/u/0/embed?mid=1UiNObyoAOutUUMWTAy-FCRY4xHaaovg&ehbc=2E312F&noprof=1"
        width="90%"
        height="600px"
      ></iframe>
    </div>
  );
}

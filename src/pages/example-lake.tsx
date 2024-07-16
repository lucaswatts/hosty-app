import "../app/globals.css";
import BodyImage from "@/components/BodyImage";
import FAQ from "@/components/FAQ";

export default function Albion() {
  const faqData = [
    {
      question: "What do we do with the garbage?",
      answer:
        "Garbage goes into the small metal bin, behind the large shed. You do not need to take it with you, but please ensure you use clear bags, which are provided under the sink.",
    },
    {
      question: "Can we use the kayaks?",
      answer:
        "Yes. You can use the water equipment. Life jackets are located inside the garage.",
    },
    {
      question: "What is the checkout time?",
      answer: "Checkout time is 11am on the final day of your stay.",
    },
    {
      question: "Can we have fires?",
      answer:
        "Fires are managed by the local fire authorities. Fire rules are posted on the road into the cottage, but are typically night burning only (7pm to 7am) April 1 - October 31, and Day burning November 1 - March 31. In rare circumstances, a total fire ban is imposed and will be posted.",
    },
    {
      question: "Can we use the ingredients and food in the pantry?",
      answer: "Yes - feel free to use all food products.",
    },
  ];

  return (
    <div>
      <div className="header-image-container block bg-cover h-[99svh] w-full rounded-bl-[35px] rounded-br-[35px]"></div>
      <div className="header-content-container text-white absolute bottom-[60px] inline left-0 w-full">
        <h1 className="text-[48px] align-left ml-[5%] mb-[15px]">
          Explore Your
          <br />
          <strong>Cottage</strong> Stay
        </h1>
        <a
          href="https://www.google.com/maps/d/viewer?hl=en&mid=1UiNObyoAOutUUMWTAy-FCRY4xHaaovg&ll=45.067160024209834%2C-77.91564249962482&z=12"
          target="_blank"
        >
          <button className="rounded-lg border-2 border-white text-lg bg-white text-black py-2 w-[90%] mx-auto flex justify-center cursor-pointer hover:bg-transparent hover:text-white duration-300">
            See Our Recommendations
          </button>
        </a>
      </div>
      <BodyImage
        imgSrc="/assets/hero-cottage.jpg"
        imgStyle="rounded-[35px] mt-[30px] w-[90%] mx-auto"
      />
      <FAQ faqData={faqData} />
    </div>
  );
}

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqData: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-[90%] mt-[20px] mb-[40px] mx-auto">
      <h2 className="px-4 mb-[2px] text-[42px] font-bold cursor">FAQ</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4 mx-auto">
          <div
            className={`cursor-pointer my-[-6px] duration-300 p-4 rounded-[20px] bg-gray-100 text-black ${
              activeIndex === index ? "bg-green-200" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
          </div>
          <div
            className={`px-4 mt-[10px] transition-height duration-300 ease-in-out ${
              activeIndex === index ? "block" : "hidden"
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

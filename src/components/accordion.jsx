import React, { useState, useRef, useEffect } from 'react';

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    const setMaxHeight = () => {
        contentRefs.current.forEach((content, index) => {
            if (activeAccordion === index && content) {
                content.style.maxHeight = `${content.scrollHeight}px`;
            } else if (content){
                content.style.maxHeight = '0px';
            }
        });
    };

    setMaxHeight();
    window.addEventListener('resize', setMaxHeight); // Update on resize

    return () => {
        window.removeEventListener('resize', setMaxHeight); // Clean up on unmount
    };
}, [activeAccordion]);

  const handleToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: 'What services do you offer?',
      content:
        'Our app offers a wide range of services, including mobile banking, crypto, flight booking, ecommerce, and a social media like feeling.',
    },
    {
      title: 'How do you get your own virtual card?',
      content:
        "Simple, and no stress, it comes when you open an account, so you don't have to do anything else to have it.",
    },
    {
      title: 'How do I change my bank account limits?',
      content:
        'You can simply go to your like the gear icon at the top of the app, this takes you to the settings page, navigate to account limit, and change it.',
    },
    {
      title: 'Can I have two accounts?',
      content:
        'Yes you can, but we strongly advise against this, as it may interfere with a lot of things.',
    },
  ];

  return (
    <main className="w-full tw-container pb-24">
      <div className="w-full flex justify-between gap-5 flex-wrap">
        <div className="space-y-5 md:w-[40%]">
          <h2 className="text-5xl max-w-sm font-semibold">Need help?</h2>
          <br />
          <div className="flex my-3 items-center gap-4">
            <button className=" bg-primary/20 text-primary rounded-full p-1 w-9 h-9 ">
              <i className="bx bxs-phone text-xl"></i>
            </button>
            <div>
              <h2 className="text-body_text font-inter font-semibold">
                +234 902 524 1052
              </h2>
              <p className="text-text_light font-medium">Support Hotline</p>
            </div>
          </div>
          <div className="flex mt-5 items-center gap-4">
            <button className=" bg-primary/20 text-primary rounded-full p-1 w-9 h-9 ">
              <i className="bx bxs-phone text-xl"></i>
            </button>
            <div>
              <h2 className="text-body_text font-inter font-semibold">
                the-future-support@gmail.com
              </h2>
              <p className="text-text_light font-medium">Support email</p>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full">
          <div className="h-1 w-full mx-auto my-5"></div>

          {accordionData.map((item, index) => (
            <div
              key={index}
              className="transition relative hover:bg-primary/15 pb-3 border-b border-gray-300"
            >
              <div
                className={`accordion-header  cursor-pointer transition flex space-x-5 px-5 items-center h-16 ${
                  activeAccordion === index ? 'a-active' : ''
                }`}
                onClick={() => handleToggle(index)}
              >
                <i className={`bx ${activeAccordion === index ? 'bx-minus' : 'bx-plus'}`}></i> {/* Conditional icon */}
                <h3 className="text-body_text font-semibold font-inter">
                  {item.title}
                </h3>
              </div>

              <div
                ref={el => contentRefs.current[index] = el}
                className="accordion-content px-5 pt-0 overflow-hidden max-h-0 transition-max-height duration-300 ease-in-out"
                style={{ transition: 'max-height 0.3s ease-in-out' }}
              >
                <p className="leading-6 font-inter font-normal text-text_normal pl-9 text-justify py-5">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Accordion;
import React from "react";

const Metric = () => {
  return (
    <div className="py-32 tw-container w-full">
      <div className="w-full space-y-6 text-start">
        <h1 className="font-semibold text-primary">Milestones</h1>
        <h2 className="text-4xl w-full text-balance font-semibold">
          Milestones Tracking Progress and Milestones
        </h2>
        <p className="font-medium w-full md:max-w-xl text-body_text">
          Effective progress tracking and milestone setting are critical
          components of any successful project or personal goal. By
          systematically monitoring our achievements.
        </p>
        <div className="flex pt-10 gap-4 flex-wrap w-full">
            <div className="h-[6rem] pr-24 flex items-start justify-center flex-col gap-1 sm:w-auto ds:w-full p-3 rounded-md bg-gray-300/10 pl-5">
                <h1 className=" text-heading_text font-semibold text-2xl">890+</h1>
                <p className="text-text_normal text-sm font-medium">Dedicated Users</p>
            </div>
            <div className="h-[6rem] pr-24 flex items-start justify-center flex-col gap-1 sm:w-auto ds:w-full p-3 rounded-md bg-gray-300/10 pl-5">
                <h1 className=" text-heading_text font-semibold text-2xl">458+</h1>
                <p className="text-text_normal text-sm font-medium">Daily Transactions</p>
            </div>
            <div className="h-[6rem] pr-24 flex items-start justify-center flex-col gap-1 sm:w-auto ds:w-full p-3 rounded-md bg-gray-300/10 pl-5">
                <h1 className="heading_text font-semibold text-2xl">100%</h1>
                <p className="text-text_normal text-sm font-medium">Assured Security</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Metric;

import React from "react";
import { Link } from "react-router-dom";
import {motion as m} from "framer-motion";
import data from "../../data.json";


const DisplayJobs = () => {

  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
          staggerChildren: 1,
          delayChildren: 1,
        }}
        className="grid gap-y-12  md:px-10 lg:px-40 lg:gap-y-12 lg:gap-x-6 md:gap-x-4 py-8 mx-auto justify-center items-center md:grid-cols-2 lg:grid-cols-3 "
      >
        {data.map((job) => (
          <m.div
            key={job.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to={`job/${job.id}`}>
              <div className="bg-white dark:bg-primary_dark_blue shadow-sm rounded-md">
                <div
                  className="relative bottom-6 flex ml-8 justify-center items-center rounded-lg h-[50px] w-[50px]"
                  style={{ backgroundColor: job.logoBackground }}
                >
                  <img src={job.logo} alt="Company Logo" />
                </div>

                <div className="text-cont pb-10 pl-8">
                  <p className="text-[#6E8098] ">
                    {job.postedAt} • {job.contract}
                  </p>
                  <h3 className="dark:text-white py-3 font-bold text-xl">
                    {job.position}
                  </h3>
                  <p className=" text-base font-normal text-[#6E8098]">
                    {job.company}
                  </p>
                </div>
                <p className="font-bold pl-8 pb-4 text-dark_viol text-sm ">
                  {job.location}
                </p>
              </div>
            </Link>
          </m.div>
        ))}
      </m.div>
    </>
  );
};

export default DisplayJobs;

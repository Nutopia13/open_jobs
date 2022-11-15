import React from "react";
import data from "../../data.json";
import { AnimatePresence, motion as m } from "framer-motion";
import { useParams } from "react-router-dom";
import Section from "../Components/Section";

const Job = () => {
  const { id } = useParams();
  const job = data[id - 1];
  const {
    position,
    company,
    website,
    postedAt,
    contract,
    location,
    description,
    languages,
    requirements,
    content,
    tools,
    role,
    level,
    logo,
    logoBackground,
    apply,
  } = job;

  return (
    <Section>
      <>
        <div>
          <div className="head_text md:text-left relative pb-8 md:pb-0  z-30 bottom-3 md:bottom-8 text-base mx-7 lg:mx-44 rounded-md dark:text-white bg-white flex-col md:flex-row md:justify-between dark:bg-primary_dark_blue flex justify-center items-center space-y-6 ">
            <div className="flex  md:space-x-10  flex-col md:flex-row items-center justify-center text-center md:text-left">
              <div
                style={{ backgroundColor: logoBackground }}
                className=" relative bottom-3 md:bottom-0 md:w-32 md:h-32  w-14 h-14 flex justify-center items-center rounded-md"
              >
                <img src={logo} alt={company} />
              </div>
              <div>
                <h4 className="font-bold text-xl">{company}</h4>
                <a href={website} className="text-[#6E8098] pt-2">
                  {company.toLowerCase()}.com
                </a>
              </div>
            </div>

            <a href={website}>
              <m.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="py-4 md:px-8 md:mb-8 md:mr-10 px-5 bg-[#5964E0]/10 rounded-md font-bold text-base text-[#5964E0]"
              >
                Company Site
              </m.button>
            </a>
          </div>

          <div className="text-base lg:mx-44   pt-10 px-8 mt-6 mx-7 rounded-md dark:text-white bg-white flex-col dark:bg-primary_dark_blue flex justify-center ">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <p className="text-[#6E8098]">
                  {postedAt} • {contract}
                </p>
                <h3 className="dark:text-white py-2 font-bold text-xl">
                  {position}
                </h3>
                <p className="font-bold text-dark_viol text-sm">{location}</p>
              </div>
              <a href={apply}>
                <m.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="py-4 mt-12 md:mt-0 px-20 md:px-12 bg-[#5964E0] rounded-md font-bold text-base text-white"
                >
                  Apply Now
                </m.button>
              </a>
            </div>
            <div className="pt-8">
              <p className="text-[#6E8098]">{description}</p>
              <h4 className="font-bold pt-10 pb-6 text-[#19202D] dark:text-white text-xl">
                Requirements
              </h4>
              <p className="text-[#6E8098]">{requirements.content}</p>
              <ul className="text-[#6E8098] pt-8 list-disc">
                {requirements.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
              <h4 className="font-bold pt-10 pb-6 text-[#19202D] dark:text-white text-xl">
                What Will You Do
              </h4>
              <p className="text-[#6E8098]">{role.content}</p>
              <ol className="list-decimal text-[#6E8098] mb-10">
                {role.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="flex mt-16 bg-white justify-center  items-center dark:bg-primary_dark_blue text-white ">
            <div className="hidden md:flex justify-between w-full mx-10 lg:mx-44 items-center">
                <div className="flex flex-col">
                    <div className="text-xl lg:text-2xl text-black dark:text-white font-bold">{position}</div>
                    <div className="text-[#6E8098]">{company}</div>
                </div>
              <a href={apply}>
                <m.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="py-4 my-6 px-28 bg-[#5964E0] rounded-md font-bold text-base text-white"
                >
                  Apply Now
                </m.button>
              </a>
            </div>

            <a className="md:hidden" href={apply}>
              <m.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="py-4 my-6 px-28 bg-[#5964E0] rounded-md font-bold text-base text-white"
              >
                Apply Now
              </m.button>
            </a>
          </div>
        </div>
      </>
    </Section>
  );
};

export default Job;

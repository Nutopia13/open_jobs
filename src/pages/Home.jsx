import React from "react";
import DisplayJobs from "../Components/DisplayJobs";
import SearchBar from "../Components/SearchBar";
import { useState } from "react";

const Home = () => {
  const [jobsData, setJobsData] = useState([]);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [fulltime, setFulltime] = useState(false);
  const [limit, setLimit] = useState(9);

  const handleSearch = (title, location, fulltime) => {
    setTitle(title);
    setLocation(location);
    setFulltime(fulltime);
  };

  const LoadMore = () => {
    getJobsData(limit + 6);
    setLimit(limit + 6);
  };

  async function getJobsData(a=limit) {
    try {
      const response = await fetch('../../data.json')
      setJobsData(response.data.slice(0,a))
    } catch (error) {
      console.log(error)
    }
  }

  let newPeople = jobsData.filter(function (obj) {
    // 👇 testing whether the properties match the criteria
    if(fulltime === true) {
      return obj.position.toLowerCase().includes(title) && obj.location.toLowerCase().includes(location) && obj.contract === "Full Time"
    } else {
      return obj.position.toLowerCase().includes(title) && obj.location.toLowerCase().includes(location) && obj.contract
    } 
  });

  return (
    <div>
      <SearchBar jobsData={jobsData} handleSearch={handleSearch} />
      <DisplayJobs />
    </div>
  );
};

export default Home;

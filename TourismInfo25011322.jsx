// Student ID: 25011322

import React, { useState } from "react";
import "./TourismInfo25011322.css";

import scenic from "../images/scenic.png";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import pic4 from "../images/pic4.png";
import pic5 from "../images/pic5.png";
import pic6 from "../images/pic6.png";
import pic7 from "../images/pic7.png";


export default function TourismInfo25011322({
  introHeading = "Introduction",
  name = "Kiwi Trails and Tales",
  description = `At Kiwi Trails and Tales, we don't just guide you through New
  Zealand's landscapes - we bring the stories behind them to life.
  From rugged coastlines to sacred peaks, every path has a tale to tell.`,
  heroImage = scenic,
  destinations,         
  funFacts: funFactsProp 
}) {

  const defaultFunFacts = [
    "Aotearoa means 'Land of the Long White Cloud'.",
    "New Zealand was the first country to give women the vote (1893).",
    "Kiwis are flightless birds and a national symbol.",
    "There are more sheep than people in New Zealand.",
    "Waitomo Caves are famous for their glowworms.",
    "Fiordland contains Milford Sound - a world-famous fjord.",
    "The haka is a traditional Maori posture dance.",
    "There are no native land snakes in New Zealand.",
    "Aoraki/Mount Cook is New Zealand's tallest peak.",
    "Many NZ beaches are named for their Maori heritage."
  ];

  const defaultActivities = [
    {
      name: "Guided Hiking Trails",
      description:
        "Explore New Zealand's most iconic tracks with experienced local guides who share the stories of the land, from Maori legends to hidden natural wonders.",
      imageUrl: pic1,
    },
    {
      name: "Storytelling Evenings",
      description:
        "Sit beneath the stars and listen to tales of Aotearoa, told through Maori myths, legends, and personal travel stories passed down through generations.",
      imageUrl: pic2,
    },
    {
      name: "Cultural Workshops",
      description:
        "Learn traditional Maori arts such as weaving, carving, or haka. These hands-on sessions let you connect with the culture on a deeper level.",
      imageUrl: pic3,
    },
    {
      name: "Nature & Wildlife Tours",
      description:
        "Discover New Zealand's unique flora and fauna - from glowworm caves to native bird sanctuaries - and learn how local stories connect with nature.",
      imageUrl: pic4,
    },
    {
      name: "Coastal & River Journeys",
      description:
        "Kayak or cruise through stunning waterways while uncovering the tales tied to the sea and rivers that have shaped New Zealand life for centuries.",
      imageUrl: pic5,
    },
    {
      name: "Food & Story Experiences",
      description:
        "Share a traditional hangi (earth oven meal) or taste regional specialties while hearing the stories of how food brings people together in Aotearoa.",
      imageUrl: pic6,
    },
    {
      name: "Adventure with a Twist",
      description:
        "Whether it's ziplining, cycling, or mountain climbing, each adventure comes with storytelling that links the thrill to the land's history and legends.",
      imageUrl: pic7,
    },
  ];
  
  const funFacts = Array.isArray(funFactsProp) && funFactsProp.length
    ? funFactsProp
    : defaultFunFacts;

  const activities = Array.isArray(destinations) && destinations.length
    ? destinations
    : defaultActivities;

  const [funFact, setFunFact] = useState("");

  const showFunFact = () => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setFunFact(randomFact);
  };

  return (
    <main>
      <section className="intro">
        <h2>{introHeading}</h2>
        <p>{description}</p>
        <img className="scenic" src={heroImage} alt={name} />
      </section>

      <section className="activities">
        <h2>Activities</h2>
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>
              <h3>{activity.name}</h3>
              <img src={activity.imageUrl} alt={activity.name} />
              <div className="hiddeninfo">
                <p>{activity.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="fun-facts">
        <h2>Fun Facts</h2>
        <p>Did You know?!</p>
        <p>{funFact}</p>
        <button onClick={showFunFact}>Show Fun Fact</button>
      </section>

      <footer>
        Created By: Pivithura Guruge
        <br />
        Student ID : 25011322
      </footer>
    </main>
  );
}

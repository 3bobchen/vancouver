import * as React from "react";

import Layout from "../components/layout";
import TextTransition, { presets } from "react-text-transition";
import { useState } from "react";
import * as styles from "../styles/rainbow.module.css";
import Headshot from "../images/headshot.jpeg";
import Emoji from "../images/emoji-sunglasses.webp";
import Jade from "../images/JADE Full.svg"
import Devsoc from "../images/Full v5 Invert.svg"

const IndexPage = () => {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1500
    );
    return () => clearTimeout(intervalId);
  }, []);
  const texts = ["Critical Thinker", "Considered Advocate", "Logical Reactor", "Decision Maker", "Optimistic Innovator", "Skilled Administrator", "Resourceful Leader", "Curious Observer"];

  return (
    <Layout>
      <div className="hero min-h-[80vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Headshot}
               className="max-w-sm rounded-lg shadow-2xl" />
          <div className="min-w-[500px] w-[50vw]">
            <p className={styles.handwriting}>Hi there, my name is <b>Bob</b> <img
              style={{ display: "inline", height: "2.5rem" }} src={Emoji} /> and I am a: </p>
            <TextTransition className={styles.rainbow}
                            springConfig={presets.default}>{texts[index % texts.length]}</TextTransition>
            <p>Keep reading to learn more about me and my experiences</p>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Experience in a variety of positions within teams of varying sizes and purposes
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://upload.wikimedia.org/wikipedia/en/0/04/Macquarie_Group_logo.svg"
              alt="Macquarie"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
              src={Jade}
              alt="Jade.io"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
              src="https://www.bankingday.com/uploads/2022/Q3/Volt-logo-August2022.png"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://unswfintech.com/wp-content/uploads/2022/05/red-horizontal-logo.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-10 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={Devsoc}
              alt="DevSoc"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical max-w-[1200px] mx-auto">
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Dec 2020</time>
            <div className="text-lg font-black">Graduated High School</div>
            97.95 ATAR and 100 LAT (Law Admissions Test)
          </div>
          <hr/>
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Jan 2021</time>
            <div className="text-lg font-black">Computer Science and Law</div>
            Begun university studies for this double degree at UNSW.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">May 2021</time>
            <div className="text-lg font-black">Joined Jade.io</div>
            Hired as a Junior Software Engineer 1 term into my university studies.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Feb 2022</time>
            <div className="text-lg font-black">Joined Volt Bank</div>
            Hired for a three month internship within IT Operations at Volt Bank. Held this internship and job at Jade.io concurrently.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Oct 2022</time>
            <div className="text-lg font-black">Elected Co-President of Fintech Society</div>
            Began a one year term as President of the UNSW Business School affiliated society.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Oct 2023</time>
            <div className="text-lg font-black">Elected Co-President of Software Development Society</div>
            Began a one year term as the inaugural President of the development focused large UNSW student group.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Dec 2023</time>
            <div className="text-lg font-black">Joined Macquarie Bank</div>
            Hired as a Summer Digital Intern working within the Banking and Financial Services aligned Corporate Operations Group.
          </div>
        </li>

      </ul>
    </Layout>
  );
};

export default IndexPage;

import * as React from "react";

import Layout from "../components/layout";
import TextTransition, { presets } from "react-text-transition";
import { useState } from "react";
import * as styles from "../styles/rainbow.module.css";
import Headshot from "../images/headshot.jpeg";
import Emoji from "../images/emoji-sunglasses.webp";
import Jade from "../images/JADE Full.svg";
import Devsoc from "../images/Full v5 Invert.svg";
import { ProgressBar } from "@nadfri/react-scroll-progress-bar";
import BubbleUI from "react-bubble-ui";
import Child from "../components/Child";
import { data } from "../components/data";
import "react-bubble-ui/dist/index.css";

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

  const [bubble, setBubble] = useState("");
  const options = {
    size: 210,
    minSize: 60,
    gutter: 8,
    provideProps: true,
    numCols: 6,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5
  };

  React.useEffect(() => {
    const bubbles = document.querySelector("._2MD0k");
    const img = document.querySelectorAll(".childComponent");
    img.forEach(
      (i) =>
        (i.ondragstart = () => {
          return false;
        })
    );
    const dragspeed = 2;
    let isDown = false;
    let startX;
    let startY;
    let scrollLeft;
    let scrollTop;

    bubbles.addEventListener("mousedown", (e) => {
      isDown = true;
      bubbles.classList.add("active");
      startX = e.pageX - bubbles.offsetLeft;
      startY = e.pageY - bubbles.offsetTop;
      scrollLeft = bubbles.scrollLeft;
      scrollTop = bubbles.scrollTop;
    });
    bubbles.addEventListener("mouseleave", () => {
      isDown = false;
      bubbles.classList.remove("active");
    });
    bubbles.addEventListener("mouseup", () => {
      isDown = false;
      bubbles.classList.remove("active");
    });
    bubbles.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - bubbles.offsetLeft;
      const y = e.pageY - bubbles.offsetTop;
      const walk = (x - startX) * dragspeed;
      const topwalk = (y - startY) * dragspeed;
      bubbles.scrollLeft = scrollLeft - walk;
      bubbles.scrollTop = scrollTop - topwalk;
    });
  });

  const handleClick = (bub) => {
    setBubble(bub);
  };

  const children = data?.map((data, i) => {
    return (
      <Child data={data} className="child" key={i} setClick={handleClick} />
    );
  });

  return (
    <Layout>
      <ProgressBar
        color1="#eff6ff"
        color2="rgb(0, 76, 163)"
        height="4px"
        position="fixed"
      />

      <div className="hero min-h-[80vh] mb-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Headshot}
               className=" w-3/4 max-w-sm rounded-lg shadow-2xl" />
          <div className="w-[50vw]">
            <p className={styles.handwriting}>Hi there, my name is <b>Bob</b> <img
              style={{ display: "inline", height: "2.5rem" }} src={Emoji} /> and I am a: </p>
            <TextTransition className={styles.rainbow}
                            springConfig={presets.default}>{texts[index % texts.length]}</TextTransition>
            <p>Keep reading to learn more about me and my experiences</p>
            <ul className="menu bg-white w-56 rounded-box drop-shadow-md m-0">
              <li>
                <h2 className="menu-title">On this page</h2>
                <ul>
                  <li><a href="#education">Education</a></li>
                  <li><a href="#work">Work Overview</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#timeline">Timeline</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ width: "100%" }} id="education">
        <h2 className={styles.rainbow} style={{
          fontWeight: 900,
          fontSize: "2.5rem",
          maxWidth: "1200px",
          width: "80%",
          margin: "auto",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          color: "#004ca3"
        }}>Education</h2>
      </div>
      <div className="md:join md:join-vertical lg:join-horizontal justify-evenly align-middle w-full py-16">
        <div className="card w-80 glass bg-white sm:m-auto md:m-0">
          <figure><img className="h-44 pt-10"
                       src="https://upload.wikimedia.org/wikipedia/en/9/9f/Baulkham_Hills_High_School_logo.png"
                       alt="car!" /></figure>
          <div className="card-body">
            <h2 className="card-title">Baulkham Hills High School</h2>
            <p>HSC</p>
            <div className="card-actions justify-center">
              <div className="radial-progress bg-[#004ca3] text-primary-content border-4 border-[#004ca3] text-xs"
                   style={{ "--value": 100 }} role="progressbar">Complete
              </div>
            </div>
          </div>
        </div>
        <div className="card w-80 glass bg-white sm:m-auto md:m-0">
          <figure><img className="h-44 pt-10"
                       src="https://images.credly.com/images/0a6743b4-cec3-469a-bd76-8ca923841b7d/blob.png"
                       alt="car!" /></figure>
          <div className="card-body">
            <h2 className="card-title">University of New South Wales</h2>
            <p>Bachelor of Science (Computer Science)</p>
            <div className="card-actions justify-center">
              <div className="radial-progress bg-[#004ca3] text-primary-content border-4 border-[#004ca3] text-xs"
                   style={{ "--value": 100 }} role="progressbar">Complete
              </div>
            </div>
          </div>
        </div>
        <div className="card w-80 glass bg-white sm:m-auto md:m-0">
          <figure><img className="h-44 pt-10"
                       src="https://images.credly.com/images/0a6743b4-cec3-469a-bd76-8ca923841b7d/blob.png"
                       alt="car!" /></figure>
          <div className="card-body">
            <h2 className="card-title">University of New South Wales</h2>
            <p>Bachelor of Laws</p>
            <div className="card-actions justify-center">
              <div className="radial-progress bg-[#004ca3] text-primary-content border-4 border-[#004ca3]"
                   style={{ "--value": 42 }} role="progressbar">42%
              </div>
            </div>
          </div>
        </div>
      </div>


      <div style={{ width: "100%" }} id="work">
        <h2 className={styles.rainbow} style={{
          fontWeight: 900,
          fontSize: "2.5rem",
          maxWidth: "1200px",
          width: "80%",
          margin: "auto",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          color: "#004ca3"
        }}>Work Overview</h2>
      </div>
      <div className="py-8 sm:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Experience in a variety of positions within teams of varying sizes and purposes
          </h2>
          <div
            className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div className="tooltip" data-tip="Tech Intern (Dec 2023 -)">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://upload.wikimedia.org/wikipedia/en/0/04/Macquarie_Group_logo.svg"
                alt="Macquarie"
                width={158}
                height={48}
              />
            </div>
            <div className="tooltip" data-tip="Software Engineer (May 2021 - Nov 2023)">
              <img
                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                src={Jade}
                alt="Jade.io"
                width={158}
                height={48}
              />
            </div>
            <div className="tooltip" data-tip="Operations Intern (Feb 2022 - Jul 2022)">
              <img
                className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
                src="https://www.bankingday.com/uploads/2022/Q3/Volt-logo-August2022.png"
                alt="Tuple"
                width={158}
                height={48}
              />
            </div>
            <div className="tooltip" data-tip="Co-President (Oct 2022 - Oct 2023)">
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://unswfintech.com/wp-content/uploads/2022/05/red-horizontal-logo.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
            </div>
            <div className="tooltip" data-tip="Co-President (Oct 2023 -)">
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
      </div>

      <div className="pt-8 pb-8 sm:pt-8 sm:pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Corporate and professional recognition for competition performance and participation
          </h2>
          <div
            className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="tooltip" data-tip="Tech Bootcamp - 2nd Place (Feb 2023)">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Accenture_logo.svg/2560px-Accenture_logo.svg.png"
                alt="Accenture"
                width={158}
                height={48}
              />
            </div>
            <div className="tooltip" data-tip="Algothon Trading Challenge - Judge (Sep 2023)">
              <img
                className="col-span-2 max-h-9 w-full object-contain lg:col-span-1"
                src="https://seeklogo.com/images/S/sig-susquehanna-logo-9D23400D03-seeklogo.com.png"
                alt="Jade.io"
                width={158}
                height={48}
              />
            </div>
            <div className="tooltip" data-tip="Future Essay Challenge - 1st Place (Dec 2022)">
              <img
                className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                src="https://nswbar.asn.au/uploads/general-images/2._NSW_Bar_Association_vertical_lockup_.png"
                alt="Tuple"
                width={158}
                height={48}
              />
            </div>
            <div className="tooltip" data-tip="Arc Executive Training - President (Dec 2022)">
              <img
                className="col-span-2 max-h-32 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://images.credly.com/size/340x340/images/f528fb62-e430-4af3-95ba-910209e198c2/image.png"
                alt="SavvyCal"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 pb-24 sm:pt-8 sm:pb-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Membership in Professional Associations
          </h2>
          <div
            className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="tooltip" data-tip="Associate Member">
              <img
                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                src="https://careers.lawsociety.com.au/wp-content/themes/law-society/images/logo.png"
                alt="Macquarie"
                width={158}
                height={48}
              />
            </div>
            <div className="tooltip" data-tip="Associate Member">
              <img
                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                src="https://ntdigitalawards.org.au/sites/default/files/sponsor/logo/2023/ACS-Logo_ForWhiteBackground_NoSpacing-SpecialUse-RGB%20%281%29.png"
                alt="Jade.io"
                width={158}
                height={48}
              />
            </div>
            <div className="tooltip" data-tip="Student Member">
              <img
                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/2048px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png"
                alt="Tuple"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "100%" }} id="skills">
        <h2 className={styles.rainbow} style={{
          fontWeight: 900,
          fontSize: "2.5rem",
          maxWidth: "1200px",
          width: "80%",
          margin: "auto",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          color: "#004ca3"
        }}>Skills</h2>
      </div>
      <BubbleUI key={1} options={options} className="myBubbleUI h-[30rem]">
        {children}
      </BubbleUI>


      <div style={{ width: "100%" }} id="timeline">
        <h2 className={styles.rainbow} style={{
          fontWeight: 900,
          fontSize: "2.5rem",
          maxWidth: "1200px",
          width: "80%",
          margin: "auto",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          color: "#004ca3"
        }}>Timeline</h2>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical max-w-[1200px] mx-auto my-6 sm:px-10">
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Dec 2020</time>
            <div className="text-lg font-black">Graduated High School</div>
            97.95 ATAR and 100 LAT (Law Admissions Test)
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
            </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
            </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Feb 2022</time>
            <div className="text-lg font-black">Joined Volt Bank</div>
            Hired for a three month internship within IT Operations at Volt Bank. Held this internship and job at
            Jade.io concurrently.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
            </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
            </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">Dec 2023</time>
            <div className="text-lg font-black">Joined Macquarie Bank</div>
            Hired as a Summer Digital Intern working within the Banking and Financial Services aligned Corporate
            Operations Group.
          </div>
        </li>

      </ul>
    </Layout>
  );
};

export default IndexPage;

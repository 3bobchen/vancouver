import * as React from "react";
import actions from "../styles/actions.css";

const Actions = () => {
  return (
    <div className={"actionRow"} style={{
      display: "flex",
      flexDirection: "column",
      background: "white",
      maxWidth: "950px",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "4rem",
      borderRadius: "1rem",
      boxShadow: "rgba(0, 76, 163, 0.25) 0px 0px 10px 0.5px"
    }}>
      <div className={"actionRow"}>
        <div style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: "4rem", flexDirection: "row", justifyContent: "space-between" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={"4rem"} height={"4rem"}
                 style={{ background: "#fffbeb", borderRadius: "1rem", color: "#bc6521" }} className="h-2 w-2"
                 fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            {/*<a href={"./professional/education"}>*/}
            {/*  <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*       style={{ display: "flex", justifyContent: "center", alignSelf: "center", color: "#bc6521" }}*/}
            {/*       width={"2rem"}*/}
            {/*       height={"2rem"} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"*/}
            {/*       strokeWidth={2}>*/}
            {/*    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />*/}
            {/*  </svg>*/}
            {/*</a>*/}
          </div>
          <div style={{ flex: 1 }}>
            <h2> Education </h2>
            <ul>
              <li>
                Bachelor of Science (Computer Science)
                <ul><li>UNSW expected 2024</li></ul>
              </li>
              <li>
                Bachelor of Laws
                <ul><li>100<sup>th</sup> Percentile - Law Admissions Test</li></ul>
                <ul><li>UNSW (discontinuing)</li></ul>
              </li>
              <li>
                Higher School Certificate
                <ul><li>97.95 ATAR</li></ul>
                <ul><li>Baulkham Hills High School 2020</li></ul>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: "4rem", flexDirection: "row", justifyContent: "space-between" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={"4rem"} height={"4rem"}
                 style={{ background: "#f0fdfa", borderRadius: "1rem", color: "#0d746c" }} className="h-6 w-6"
                 fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {/*<a href={"./professional/experience"}>*/}
            {/*  <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*       style={{*/}
            {/*         display: "flex",*/}
            {/*         justifyContent: "center",*/}
            {/*         alignSelf: "center",*/}
            {/*         color: "#0d746c"*/}
            {/*       }}*/}
            {/*       width={"2rem"}*/}
            {/*       height={"2rem"} className="h-6 w-6" fill="none" viewBox="0 0 24 24"*/}
            {/*       stroke="currentColor"*/}
            {/*       strokeWidth={2}>*/}
            {/*    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />*/}
            {/*  </svg>*/}
            {/*</a>*/}
          </div>
          <div style={{ flex: 1 }}>
            <h2> Work Experience </h2>
            <ul>
              <li>
                Jade <a href="https://openlaw.org.au/">(Open law)</a>
                <ul>
                  <li>Junior Software Engineer</li>
                  <li>Junior JADE Editor</li>
                </ul>
              </li>
              <li>
                Volt
                <ul><li>IT Operations Intern</li></ul>
              </li>
              <li>
                NSW Electoral Commission
                <ul><li>Declaration Voting Officer</li></ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={"actionRow"}>
        <div style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: "4rem", flexDirection: "row", justifyContent: "space-between" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={"4rem"} height={"4rem"}
                 style={{ background: "#fff1f2", borderRadius: "1rem", color: "#bb0834" }} className="h-6 w-6"
                 fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
            {/*<a href={"./professional/tprojects"}>*/}
            {/*  <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*       style={{ display: "flex", justifyContent: "center", alignSelf: "center", color: "#bb0834" }}*/}
            {/*       width={"2rem"}*/}
            {/*       height={"2rem"} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"*/}
            {/*       strokeWidth={2}>*/}
            {/*    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />*/}
            {/*  </svg>*/}
            {/*</a>*/}
          </div>
          <div style={{ flex: 1 }}>
            <h2> Technical Projects </h2>
            <ul>
              <li>
                this website!
              </li>
              <li>
                <a target="_blank" href="https://openlaw.org.au/">Open law</a> <em><b>website</b></em>
                <ul>
                  <li>Full Stack (FE, CMS, UI)</li>
                </ul>
              </li>
              <li>
                <a target="_blank" href="https://apps.apple.com/app/law-stream/id1605899766">Lawstream</a> <em><b>iPad OS app</b></em>
                <ul>
                  <li>Interface design and implementation</li>
                </ul>
              </li>
              <li>
                <a target="_blank" href="https://aba.openlaw.org.au/">Australian Practice and Procedure Collection</a> <em><b>website</b></em>
                <ul>
                  <li>UI styling</li>
                </ul>
              </li>
              <li>
                <a target="_blank" href="https://barnews.nswbar.asn.au/">Barnews</a> <em><b>magazine</b></em>
                <ul>
                  <li>Full Stack (FE, Adobe ID, HTML parsing)</li>
                </ul>
              </li>
              <li>
                <a target="_blank" href="https://freerooms.staging.csesoc.unsw.edu.au/">Freerooms</a> <em><b>website</b></em>
                <ul>
                  <li>Frontend (Next.js app)</li>
                </ul>
              </li>
              <li>
                <a target="_blank" href="https://unsw-fintech-society.github.io/algothon2022/">Algothon</a> <em><b>website and dev-ops</b></em>
                <ul>
                  <li>Full stack</li>
                  <li>Git and Github management for contestants</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: "4rem", flexDirection: "row", justifyContent: "space-between" }}>
            <svg width={"4rem"} height={"4rem"}
                 style={{ background: "#f4f3ff", borderRadius: "1rem", color: "#6e29d9" }}
                 xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            {/*<a href={"./creative/cprojects"}>*/}
            {/*  <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*       style={{ display: "flex", justifyContent: "center", alignSelf: "center", color: "#6e29d9" }}*/}
            {/*       width={"2rem"}*/}
            {/*       height={"2rem"} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"*/}
            {/*       strokeWidth={2}>*/}
            {/*    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />*/}
            {/*  </svg>*/}
            {/*</a>*/}
          </div>
          <div style={{ flex: 1 }}>
            <h2> Creative Projects </h2>
            <ul>
              <li>
                <a target="_blank" href="https://youtube.com/playlist?list=PL6UPziNcy13K9-S2NvrK-CzxRGp_xnk6q">CSESoc Creative </a> <em><b>videos</b></em>
                <ul>
                  <li>Adobe After Effects Editing</li>
                  <li>Adobe Premiere Pro Editing</li>
                </ul>
              </li>
              <li>
                <a target="_blank" href="https://openlaw.org.au/training/">Jade Training</a> <em><b>videos</b></em>
                <ul>
                  <li>Adobe Premiere Pro Editing</li>
                </ul>
              </li>
              <li>
                <a target="_blank" href="https://podcasts.apple.com/au/podcast/the-lawfluent-podcast/id1607945576">LawFluent</a> <em><b>podcast</b></em>
                <ul>
                  <li>Adobe Audition Editing</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={"actionRow"}>
        <div style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: "4rem", flexDirection: "row", justifyContent: "space-between" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={"4rem"} height={"4rem"}
                 style={{ background: "#f0f9ff", borderRadius: "1rem", color: "#0e6da3" }} className="h-6 w-6"
                 fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {/*<a href={"./professional/skills"}>*/}
            {/*  <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*       style={{ display: "flex", justifyContent: "center", alignSelf: "center", color: "#0e6da3" }}*/}
            {/*       width={"2rem"}*/}
            {/*       height={"2rem"} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"*/}
            {/*       strokeWidth={2}>*/}
            {/*    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />*/}
            {/*  </svg>*/}
            {/*</a>*/}
          </div>
          <div style={{ flex: 1 }}>
            <h2> Volunteering </h2>
            <ul>
              <li>
                <a target="_blank" href="https://unswfintech.com/">UNSW Fintech Society</a>
                <ul>
                  <li>Co-President</li>
                  <li>Events Director</li>
                </ul>
              </li>
              <li>
                <a target="_blank" href="https://www.csesoc.unsw.edu.au/">UNSW Computer Science Engineering Society</a>
                <ul>
                  <li>Freerooms Project Director</li>
                  <li>Creative Subcommittee</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: "4rem", flexDirection: "row", justifyContent: "space-between" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={"4rem"} height={"4rem"}
                 style={{ background: "#edf2ff", borderRadius: "1rem", color: "#4135c9" }} className="h-6 w-6"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
            {/*<a href={"./contact"}>*/}
            {/*  <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*       style={{ display: "flex", justifyContent: "center", alignSelf: "center", color: "#4135c9" }}*/}
            {/*       width={"2rem"}*/}
            {/*       height={"2rem"} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"*/}
            {/*       strokeWidth={2}>*/}
            {/*    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />*/}
            {/*  </svg>*/}
            {/*</a>*/}
          </div>
          <div style={{ flex: 1 }}>
            <h2> Memberships </h2>
            <ul>
              <li>
                <a target="_blank" href="https://www.acs.org.au/">ACS (Australian Computer Society)</a>
                <ul>
                  <li>Associate Member</li>
                </ul>
              </li>
              <li>
                <a target="_blank" href="https://www.lawsociety.com.au/">The Law Society of New South Wales</a>
                <ul>
                  <li>Associate Member</li>
                </ul>
              </li>
              <li>
                <a target="_blank" href="https://www.acm.org/">Association for Computing Machinery</a>
                <ul>
                  <li>Student Member</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actions;
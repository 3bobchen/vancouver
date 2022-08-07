import * as React from "react";
import styles from "../styles/actions.css";

const Actions = () => {
  return (
    <span
      style={{ maxWidth: "1300px", marginLeft: "auto", marginRight: "auto", marginBottom: "4rem", marginTop: "2rem" }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        background: "white",
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "1rem",
        boxShadow: "rgba(0, 76, 163, 0.25) 0px 0px 10px 0.5px"
      }}>
      <div className={"actionRow"}>
        <div style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 2, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
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
            <svg xmlns="http://www.w3.org/2000/svg"
                 style={{ display: "flex", justifyContent: "center", alignSelf: "center" }} width={"2rem"}
                 height={"2rem"} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                 strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <h2> Education </h2>
          </div>
          <div style={{ flex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend aliquet nunc ac fringilla. Duis
            volutpat lorem nunc, vel laoreet dui tempor non. Nulla semper vehicula lacinia. Integer imperdiet
            ullamcorper velit eu sagittis. Aliquam ac lacus sed quam ultricies sagittis et non massa. Nunc vitae nunc
            non nibh tempus dictum.
          </div>
        </div>

        <div style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 2, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={"4rem"} height={"4rem"}
                 style={{ background: "#f0fdfa", borderRadius: "1rem", color: "#0d746c" }} className="h-6 w-6"
                 fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
            <svg xmlns="http://www.w3.org/2000/svg"
                 style={{ display: "flex", justifyContent: "center", alignSelf: "center" }} width={"2rem"}
                 height={"2rem"} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                 strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <h2> Work Experience </h2>
          </div>
          <div style={{ flex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend aliquet nunc ac fringilla. Duis
            volutpat lorem nunc, vel laoreet dui tempor non. Nulla semper vehicula lacinia. Integer imperdiet
            ullamcorper velit eu sagittis. Aliquam ac lacus sed quam ultricies sagittis et non massa. Nunc vitae nunc
            non nibh tempus dictum.
          </div>
        </div>
      </div>

        <div className={"actionRow"}>
        <div style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 2, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={"4rem"} height={"4rem"}
                 style={{ background: "#f0f9ff", borderRadius: "1rem", color: "#0e6da3" }} className="h-6 w-6"
                 fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
</svg>
            <svg xmlns="http://www.w3.org/2000/svg"
                 style={{ display: "flex", justifyContent: "center", alignSelf: "center" }} width={"2rem"}
                 height={"2rem"} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                 strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <h2> Skills </h2>
          </div>
          <div style={{ flex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend aliquet nunc ac fringilla. Duis
            volutpat lorem nunc, vel laoreet dui tempor non. Nulla semper vehicula lacinia. Integer imperdiet
            ullamcorper velit eu sagittis. Aliquam ac lacus sed quam ultricies sagittis et non massa. Nunc vitae nunc
            non nibh tempus dictum.
          </div>
        </div>

        <div style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 2, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={"4rem"} height={"4rem"}
                 style={{ background: "#fff1f2", borderRadius: "1rem", color: "#bb0834" }} className="h-6 w-6"
                 fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
</svg>
            <svg xmlns="http://www.w3.org/2000/svg"
                 style={{ display: "flex", justifyContent: "center", alignSelf: "center" }} width={"2rem"}
                 height={"2rem"} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                 strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <h2> Projects </h2>
          </div>
          <div style={{ flex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend aliquet nunc ac fringilla. Duis
            volutpat lorem nunc, vel laoreet dui tempor non. Nulla semper vehicula lacinia. Integer imperdiet
            ullamcorper velit eu sagittis. Aliquam ac lacus sed quam ultricies sagittis et non massa. Nunc vitae nunc
            non nibh tempus dictum.
          </div>
        </div>
      </div>

        <div className={"actionRow"}>
        <div style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 2, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={"4rem"} height={"4rem"}
                 style={{ background: "#f4f3ff", borderRadius: "1rem", color: "#6e29d9" }} className="h-6 w-6"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            <svg xmlns="http://www.w3.org/2000/svg"
                 style={{ display: "flex", justifyContent: "center", alignSelf: "center" }} width={"2rem"}
                 height={"2rem"} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                 strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <h2> Interests & Public Participation </h2>
          </div>
          <div style={{ flex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend aliquet nunc ac fringilla. Duis
            volutpat lorem nunc, vel laoreet dui tempor non. Nulla semper vehicula lacinia. Integer imperdiet
            ullamcorper velit eu sagittis. Aliquam ac lacus sed quam ultricies sagittis et non massa. Nunc vitae nunc
            non nibh tempus dictum.
          </div>
        </div>

        <div style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 2, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={"4rem"} height={"4rem"}
                 style={{ background: "#edf2ff", borderRadius: "1rem", color: "#4135c9" }} className="h-6 w-6"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
  <path strokeLinecap="round" strokeLinejoin="round"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
</svg>
            <svg xmlns="http://www.w3.org/2000/svg"
                 style={{ display: "flex", justifyContent: "center", alignSelf: "center" }} width={"2rem"}
                 height={"2rem"} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                 strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <h2> Contact & Networking </h2>
          </div>
          <div style={{ flex: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend aliquet nunc ac fringilla. Duis
            volutpat lorem nunc, vel laoreet dui tempor non. Nulla semper vehicula lacinia. Integer imperdiet
            ullamcorper velit eu sagittis. Aliquam ac lacus sed quam ultricies sagittis et non massa. Nunc vitae nunc
            non nibh tempus dictum.
          </div>
        </div>
      </div>
    </div>
    </span>
  );
};

export default Actions;
import * as React from "react";
import * as styles from "../styles/actions.css";

const Actions = () => {
  return (
    <span style={{ maxWidth: "1300px", marginLeft: "auto", marginRight: "auto" }}>
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
                   style={{ background: "#fffbeb", borderRadius: "1rem" }} className="h-2 w-2" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                 style={{ background: "#f0fdfa", borderRadius: "1rem" }} className="h-2 w-2" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
    </div>
    </span>
  );
};

export default Actions;
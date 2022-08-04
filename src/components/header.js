import * as React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"

const Header = () => (
    <header
        style={{
            margin: `0 auto`,
            padding: `var(--space-4) var(--size-gutter)`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
            position: "fixed",
            zIndex: 2
        }}
    >
        <span className={"logo small"}>
                            BC
        </span>
        <div className="dropdown">
            <Link
                to="/"
                style={{
                    fontSize: `var(--font-lg)`,
                    textDecoration: `none`,
                }}
            >
                <strong>Professional Portfolio</strong>
            </Link>
            <div className="dropdown-content">
                <p style={{marginBottom: "1vh", marginTop: 0}}>Education</p>
                <p style={{marginBottom: "1vh", marginTop: 0}}>Experience</p>
                <p style={{marginBottom: 0, marginTop: "1vh"}}>Skills and Projects</p>
            </div>
        </div>
        <div className="dropdown">
            <Link
                to="/"
                style={{
                    fontSize: `var(--font-lg)`,
                    textDecoration: `none`,
                }}
            >
                <strong>Creative Portfolio</strong>
            </Link>
            <div className="dropdown-content">
                <p style={{marginBottom: "1vh", marginTop: 0}}>Creative Coding</p>
                <p style={{marginBottom: "1vh", marginTop: 0}}>Trailer Animations</p>
                <p style={{marginBottom: 0, marginTop: "1vh"}}>Video</p>
                <p style={{marginBottom: 0, marginTop: "1vh"}}>Logos</p>
            </div>
        </div>
        <div className="dropdown">
            <Link
                to="/"
                style={{
                    fontSize: `var(--font-lg)`,
                    textDecoration: `none`,
                }}
            >
                <strong>Files</strong>
            </Link>
            <div className="dropdown-content">
                <p style={{marginBottom: 0, marginTop: 0}}>PDF Resume</p>
            </div>
        </div>
        <Link
            to="/"
            style={{
                fontSize: `var(--font-lg)`,
                textDecoration: `none`,
                backgroundColor: '#004ca3',
                color: '#eff1fd',
                padding: '5px 15px',
                borderRadius: '10px'
            }}
        >
            Contact
        </Link>

    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header

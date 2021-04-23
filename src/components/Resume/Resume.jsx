
import "./resume.css"

const Resume = () => {
    return (
        <div className="resume">
            <div className="ts-skills"> 
            <strong>Tech Skills:</strong>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>Javascripit</li>
            <li>Html/CSS</li>
            <li>React</li>
            </div>
            <div className="other-skills">
            <strong>Other Skills:</strong>
            <li>Interpersonal Skills</li>
            <li>Critical Thinking</li>
            <li>Problem Solving</li>
            <li>Teamwork Skills</li>
            <li>Biligual</li>
            </div>
            <div className="la-skills">
            <strong>Languages:</strong>
            <li>English</li>
            <li>Russian</li>
            
            </div>
                <a href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:6a294eb9-73d2-4dab-8edd-496802295ace"><button className="resume-button">Resume</button></a>
        </div>
    )
}

export default Resume

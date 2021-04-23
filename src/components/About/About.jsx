import React from 'react'
import "./about.css"

const About = () => {
    return (
        <div className="about-me">
            <h1>About me</h1><br/>
            
                <h3>Get To Know Me</h3> <br/>
                <p>My name is Diana Rybikov. I grew up in a biligual home.<br/>
                I am fluent in Russian and English I have an understand<br/> of Ukrainian.
                Some Of my favorite hobbies are drawing, <br/>painting, puzzles, and hanging out with my family.
                I also love<br/> taking my dog on hikes or just overall spending time with him.
                </p><br/>
                <div className="sky-view">
                <img 
                src={`${process.env.PUBLIC_URL}/sky-view.jpg`}
                alt='sky'
                />

                </div>
                
                <h3>Past Professional Experience</h3><br/>
                <p> I have gone to school for Medical Assisant, CNA,<br/> 
                    and Psychology. I have done interships at hostiptals, clinics,<br/>
                    and retirement homes. Before joining the flatiron <br/>
                    program, I worked at an eye clinic. My experience there <br/>
                    really pushed me to purse a different career choice. With <br/> 
                    that, I landing on Web Development. I found that my passion <br/> 
                    on problem solving is used constantly through out the day <br/>
                    as a developer.

                </p>
            
        </div>
    )
}

export default About

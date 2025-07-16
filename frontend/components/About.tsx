import { Link } from "react-router-dom"
const About = () => {
    return (
        <div id = 'about'>
        <div id = 'about-page'>
            <div id = 'about-problem'>
            <h3>Problem</h3>
            <h6>As we all know iterating on someones code isn’t a huge issue BUT the main thing we all can have issues with is the first few
                 hours/days just trying to understand what it is that the previous developers were doing. This can range from them being disorganised,
                  having inconsistent styling, or even working on a codebase that has no pseudocode! Again, we’ve all had to deal with it one way or another,
                   and depending on how serious the issue is, it could end up feeling like a genuine waste of time.
            </h6>
            </div>
            <div id = 'about-solution'>
            <h3>Solution</h3>
            <h6>
                A Visual Studio Code extension that analyzes the files a developer is actively working on. Users can right-click within the editor
                 to request a summary of either an entire file or a specific function. After a brief processing period, the extension generates a 
                 concise summary that includes the file’s purpose and its core functionality. This provides developers with a real-time knowledge
                  snapshot, helping them quickly understand and navigate unfamiliar or complex code.
            </h6>
            </div>
        </div>
        <h2 id = 'about-title'>Meet the team</h2>
         <div id = 'about-team'>
            <div id = 'about-christian'>
            <h3>Christian Sellers</h3>
           <img src = '/person.png' id = 'about-christian-picture' />
            <div id = 'about-christian-links'>
           <div id = 'about-christian-linkedin'>
            <img src = '/linkedIn.png' /><a href = 'https://www.linkedin.com/in/paul-sellers-1b4729278' target="_blank" id = 'about-christian-linkedin-link'>LinkedIn</a>
            </div>
            <div id = 'about-christian-github'>
            <img src = '/github.png' /><a href = 'https://github.com/ElectroSpark115' target="_blank" id = 'about-christian-github-link'>Github link</a>
            </div>
            </div>
            </div>
            <div id = 'about-fabian'>
            <h3>Fabian Corluka</h3>
           <img src = '/person.png' id = 'about-fabian-picture' />
           <div id = 'about-fabian-links'>
           <div id = 'about-fabian-linkedin'>
            <img src = '/linkedIn.png' /><a href = 'https://www.linkedin.com/in/fabian-corluka' target="_blank" id = 'about-fabian-linkedin-link'>LinkedIn</a>
            </div>
            <div id = 'about-fabian-github'>
            <img src = '/github.png' /><a href = 'https://github.com/ohfabe' target="_blank" id = 'about-fabian-github-link'>Github link</a>
            </div>
            </div>
            </div>
            <div id = 'about-chris'>
            <h3>Chris Hegyesi</h3>
            <img src = '/person.png' id = 'about-chris-picture' />
            <div id = 'about-chris-links'>
           <div id = 'about-chris-linkedin'>
            <img src = '/linkedIn.png' /><a href = 'https://www.linkedin.com/in/christopher-hegyesi-2b0402348/' target="_blank" id = 'about-chris-linkedin-link'>LinkedIn</a>
            </div>
            <div id = 'about-chris-github'>
            <img src = '/github.png' /><a href = 'https://github.com/Chrishegyesi' target="_blank" id = 'about-chirs-github-link'>Github link</a>
            </div>
            </div>
            </div>
         </div>
         <div id = 'about-vision'>
            <div id = 'about-vision-message'>
            <h5>To make understanding code instant and effortless. We’re building tools that give developers clear, real-time insight into unfamiliar code—reducing ramp-up time, improving collaboration, and setting a new standard for how teams navigate complex codebases.<Link to = '/contactus'>Contact Us</Link></h5>
         </div>
         </div>
        </div>
    )
}

export default About
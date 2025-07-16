import { useState, type SetStateAction } from "react"
const Home = () => {
    const [videoIndex, setVideoIndex] = useState<number>(0)

    const videoTitles: string[] = [
        'summarize file',
        'summarize function',
        'generate psuedocode',
        'generate time-complexity'
    ]

    const videos: string[] = [
        '/summarizeFile.mp4',
        '/summarizeFunction.mp4',
        '/generatePseudocode.mp4',
        '/generateTimeComplexity.mp4'
    ]

const currentVideo = (index: SetStateAction<number>) => {
setVideoIndex(index)
}

    const previousVideo = () => {
        setVideoIndex((prev) => prev === 0 ? videos.length - 1 : prev - 1)
    }

    const nextVideo = () => {
        setVideoIndex((prev) => prev === videos.length - 1 ? 0 : prev + 1)
    }
    return (
        <div id = 'home'>
        {/* <h2 id = 'home-slogan'>Get to know your Codebase. Build smarter.</h2> */}
        {/* <h3 id = 'home-demo'>video/gif demo</h3> */}
        <div id = 'home-video'>
          <div id = 'home-video-bar'>
             <div id = 'home-video-title'>
             <button id = 'home-left-arrow-button' onClick = {previousVideo}><img id = 'home-left-arrow' src = '/leftArrow.png' /></button>
            {videoTitles.map((value, index) => (
                 <button onClick = {() => currentVideo(index)} key = {index} id = 'home-video-titles' style = {{ backgroundColor: index === videoIndex ? 'white' : 'black', boxShadow: index === videoIndex ? '0px 0px 10px white' : 'none'}}>{value}</button>
            ))}
            <button id = 'home-right-arrow-button' onClick = {nextVideo}><img id = 'home-right-arrow' src = '/rightArrow.png' /></button>
            </div>
        <video autoPlay loop muted id = 'home-demo' src = {videos[videoIndex]}></video>
                <ul id = 'home-benefits'>
<li> 🚀 Faster Onboarding
Instantly understand unfamiliar code without digging through every line.
</li>
<li>🧠 Real-Time Summarization
Get concise explanations of files or functions directly inside VS Code.
</li>
<li>🛠️ Seamless Workflow Integration
Right-click to summarize—no need to switch tools or leave your editor.
</li>
<li>📚 Improved Knowledge Sharing
Helps teams stay aligned by making code easier to understand for everyone.
</li>
<li>⏱️ Reduced Ramp-Up Time
Spend less time deciphering logic and more time building features.
</li>
<li>🔍 Ideal for Legacy Code
Make sense of poorly documented or outdated codebases in seconds.
</li>
            </ul>
        </div>
        </div>
            <div id = 'home-install-box'>
        <h3 id = 'home-install'>Download NeuroFile extension to your VSCode here !<button><a href="vscode://">  NeuroFile</a></button></h3>
        </div>
        </div>
    )
}

export default Home
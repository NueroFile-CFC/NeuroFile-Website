import { useState, type SetStateAction } from "react"
const Home = () => {
    const [videoIndex, setVideoIndex] = useState<number>(0)

    const videoTitles: string[] = [
        'summarize file',
        'summarize function',
        'generate pseudocode',
        'generate complexity',
        'summarize folder',
        'summarize project'
    ]

    const videos: string[] = [
        '/file.mp4',
        '/selectedCode.mp4',
        '/pseudocode.mp4',
        '/complexity.mp4',
        '/folder.mp4',
        '/codebase.mp4'
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
                 <button onClick = {() => currentVideo(index)} key = {index} id = 'home-video-titles' style = {{background: index === videoIndex ? 'white' : 'radial-gradient(circle, #051a34, rgb(0, 0, 0))', boxShadow: index === videoIndex ? '0px 0px 10px white, 0px 0px 10px white' : '0 0 10px #1893D4', color: index === videoIndex ? '#1893D4': 'white', border: index === videoIndex ? '1px solid white' : '1px solid #1791D2' }}>{value}</button>
            ))}
            <button id = 'home-right-arrow-button' onClick = {nextVideo}><img id = 'home-right-arrow' src = '/rightArrow.png' /></button>
            </div>
        <video autoPlay loop muted id = 'home-demo' src = {videos[videoIndex]}></video>
            </div>
                </div>
                <div id = 'home-benefits'>
<p> 🚀 Faster Onboarding
Instantly understand unfamiliar code without digging through every line.
</p>
<p>🧠 Real-Time Summarization
Get concise explanations of files or functions directly inside VS Code.
</p>
<p>🛠️ Seamless Workflow Integration
Right-click to summarize—no need to switch tools or leave your editor.
</p>
<p>📚 Improved Knowledge Sharing
Helps teams stay aligned by making code easier to understand for everyone.
</p>
<p>⏱️ Reduced Ramp-Up Time
Spend less time deciphering logic and more time building features.
</p>
<p>🔍 Ideal for Legacy Code
Make sense of poorly documented or outdated codebases in seconds.
</p>
        </div>
            <div id = 'home-install-box'>
        <h3 id = 'home-install'>Download NeuroFile extension to your VSCode here!<button><a href="vscode://">  NeuroFile</a></button></h3>
        </div>
        </div>
    )
}

export default Home
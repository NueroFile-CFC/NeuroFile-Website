const Installation = () => {
    return (
        <div id = 'installation-page'>
            <h1 id = 'installation-title'>Installation Steps</h1>
            <div id = 'installation-steps'>
                <div id = 'installation-first-step'>
                    <div id = 'installation-first-step-titles'>
                <h4>1. Open Visual Studio Code</h4>
                <p>If Visual Studio Code is not already installed on your device, you can download it <a href = 'https://code.visualstudio.com/download' target = '_blank'>here</a>. Once installed, launch the Visual Studio Code application on your computer.</p>
                </div>
                <img src = '/VSCodeNewWindow.png' id = 'installation-first-step-pic' />
                </div>
                <div id = 'installation-second-step'>
                   <div id = 'installation-second-step-titles'>
                <h4>2. Access the Extensions View</h4>
                <p>On the left sidebar, click the Extensions icon, which looks like four squares. Alternatively, you can use the keyboard shortcut 'Ctrl+Shift+X' on Windows/Linux or 'Cmd+Shift+X' on macOS to open the extensions view.</p>
                </div>
                <img src = '/VSCodeExtension.png' id = 'installation-second-step-pic' />
                </div>
                <div id = 'installation-third-step'>
                   <div id = 'installation-third-step-titles'>
                <h4>3. Search for NeuroFile</h4>
                <p>In the Extensions view's search bar, type "NeuroFile" to find the extension. You should see the NeuroFile extension listed in the search results.</p>
                </div>
                <img src = '/VSCodeExtensionSearch.png' id = 'installation-third-step-pic' />
                </div>
                 <div id = 'installation-fourth-step'>
                   <div id = 'installation-fourth-step-titles'>
                <h4>4. Install the Extension</h4>
                <p>Click the "Install" button next to the NeuroFile extension listing. VS Code will automatically download and install the extension.</p>
                </div>
                <img src = '/VSCodeExtensionInstall.png' id = 'installation-fourth-step-pic' />
                </div>
                   <div id = 'installation-fifth-step'>
                   <div id = 'installation-fifth-step-titles'>
                <h4>5. Reload Visual Studio Code</h4>
                <p>After installation, reload your VS Code window by opening the Command Palette. You can do this by either pressing Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (macOS), or by clicking the View tab in the top menu bar and selecting Command Palette. Then, search for and select “Developer: Reload Window” to complete the reload.</p>
                </div>
                <img src = '/VSCodeExtensionReload.png' id = 'installation-fifth-step-pic' />
                </div>
                 <div id = 'installation-sixth-step'>
                   <div id = 'installation-sixth-step-titles'>
                <h4>6. Add Your OpenAI API Key</h4>
<p>
To use NeuroFile, you'll need to add your own OpenAI API key. Open the Command Palette by pressing Ctrl+Shift+P(Windows/Linux) or Cmd+Shift+P (macOS), or click the View tab in the top menu and select Command Palette. Then, type in "NeuroFile" and select the option to enter your API key. If you don’t already have an OpenAI API key, you can create an account and generate a key <a href="https://platform.openai.com/docs/overview" target="_blank">here</a>.
</p>
                </div>
                <img src = '/VSCodeExtensionApi.png' id = 'installation-sixth-step-pic' />
                </div>
            </div>
            <div id = 'installation-seventh-step'>
                   <div id = 'installation-seventh-step-titles'>
                <h4>7. Start Using NeuroFile</h4>
                <p>NeuroFile extension is ready to use. You can now access its features by right-clicking in the editor. If you encounter any issues during installation, ensure that you have the latest version of Visual Studio Code installed and restart.</p>
                </div>
                <img src = '/VSCodeExtensionFinal.png' id = 'installation-seventh-step-pic' />
                </div>
        </div>
    )
}

export default Installation 

// const Installation = () => {
//     return (
//         <div id = 'installation-page'>
//             <h1 id = 'installation-title'>Installation Steps</h1>
//             <div id = 'installation-steps'>
//                 <div id = 'installation-first-step'>
//                     <div id = 'installation-first-step-titles'>
//                 <h4>1. Open Visual Studio Code</h4>
//                 <p>If Visual Studio Code is not already installed on your device, you can download it <a href = 'https://code.visualstudio.com/download' target = '_blank'>here</a>. Once installed, launch the Visual Studio Code application on your computer.</p>
//                 </div>
//                 <img src = '/VSCodeNewWindow.png' id = 'installation-first-step-pic' />
//                 </div>
//                 <div id = 'installation-second-step'>
//                    <div id = 'installation-second-step-titles'>
//                 <h4>2. Access the Extensions View</h4>
//                 <p>On the left sidebar, click the Extensions icon, which looks like four squares. Alternatively, you can use the keyboard shortcut 'Ctrl+Shift+X' on Windows/Linux or 'Cmd+Shift+X' on macOS to open the extensions view.</p>
//                 </div>
//                 <img src = '/VSCodeExtension.png' id = 'installation-second-step-pic' />
//                 </div>
//                 <div id = 'installation-third-step'>
//                    <div id = 'installation-third-step-titles'>
//                 <h4>3. Search for NeuroFile</h4>
//                 <p>In the Extensions view's search bar, type "NeuroFile" to find the extension. You should see the NeuroFile extension listed in the search results.</p>
//                 </div>
//                 <img src = '/VSCodeExtensionSearch.png' id = 'installation-third-step-pic' />
//                 </div>
//                  <div id = 'installation-fourth-step'>
//                    <div id = 'installation-fourth-step-titles'>
//                 <h4>4. Install the Extension</h4>
//                 <p>Click the "Install" button next to the NeuroFile extension listing. VS Code will automatically download and install the extension.</p>
//                 </div>
//                 <img src = '/VSCodeExtensionInstall.png' id = 'installation-fourth-step-pic' />
//                 </div>
//                    <div id = 'installation-fifth-step'>
//                    <div id = 'installation-fifth-step-titles'>
//                 <h4>5. Reload Visual Studio Code</h4>
//                 <p>After installation, reload your VS Code window by opening the Command Palette. You can do this by either pressing Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (macOS), or by clicking the View tab in the top menu bar and selecting Command Palette. Then, search for and select “Developer: Reload Window” to complete the reload.</p>
//                 </div>
//                 <img src = '/VSCodeExtensionReload.png' id = 'installation-fifth-step-pic' />
//                 </div>
//                     <div id = 'installation-sixth-step'>
//                    <div id = 'installation-sixth-step-titles'>
//                 <h4>6. Start Using NeuroFile</h4>
//                 <p>Once reloaded, the NeuroFile extension is ready to use. You can now access its features by right-clicking in the editor. If you encounter any issues during installation, ensure that you have the latest version of Visual Studio Code installed.</p>
//                 </div>
//                 <img src = '/VSCodeExtensionFinal.png' id = 'installation-sixth-step-pic' />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Installation
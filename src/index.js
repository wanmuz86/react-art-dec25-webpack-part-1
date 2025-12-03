// cross check this file with main.js 
// almost the same function, render whatever in App component in root div
const { createRoot } = require("react-dom/client");
import App from './App';

const container = document.getElementById("root")
if (!container){
    throw new Error("Root container not available");
}

const root = createRoot(contaner);
root.render(<App/>)
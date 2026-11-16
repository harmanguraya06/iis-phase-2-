import {BrowserRouter, Routes, Route} from "react-router-dom";

import Phone from "./pages/Phone";
import LiveFeed from "./pages/LiveFeed";
//import AddVisitor from "./pages/AddVisitor";
//import IdentityCorrection from "./pages/IdentityCorrection";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Phone />} />
                <Route path="/liveFeed" element={<LiveFeed />} />
                {/* <Route path="/identityCorrection" element={<IdentityCorrection />} /> */}
                {/* <Route path="/addVisitor" element={<AddVisitor />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
import Header from "./components/Header.jsx";
import {Routes, Route} from "react-router";
import Home from "./pages/Home.jsx";
import Steam from "./pages/Steam.jsx";
import Other from "./pages/Other.jsx";
import Currency from "./pages/Currency.jsx";
import Gifts from "./pages/Gifts.jsx";
import Keys from "./pages/Keys.jsx";

function App() {

    return (
        <>
            <div className="wrapper">
                <Header/>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/steam" element={<Steam/>}/>
                        <Route path="/other-services" element={<Other/>}/>
                        <Route path="/currency" element={<Currency/>}/>
                        <Route path="/gifts" element={<Gifts/>}/>
                        <Route path="/keys" element={<Keys/>}/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App

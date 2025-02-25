import GiftsSlider from "./GiftsSlider.jsx";
import {useState} from "react";
import NavSection from "./NavSection.jsx";
import KeysSlider from "./KeysSlider.jsx";


export default function GiftsGame() {
    const [tab, setTab] = useState('gift');
    return (
        <>
            <div className="slide">
                <NavSection active={tab} onChange={(current) => setTab(current)}/>
                {tab === 'gift' && (
                    <GiftsSlider/>
                )}

                {tab === 'key' && (
                    <KeysSlider/>
                )}
            </div>
        </>
    );
}
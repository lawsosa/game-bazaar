import {Gamepad2} from "lucide-react";

export default function NavSection() {
    return (
        <>
            <div className="game">
                <div className="game__quantity">
                    <h1 className="game__quantity__title"><Gamepad2 size={35}/> Игры </h1>
                    <p className='game__quantity__value' style={{color: '#ababab'}}>52000+</p>
                    <div className="game__quantity__gifts-keys">

                    </div>
                </div>
            </div>
        </>
    )
};
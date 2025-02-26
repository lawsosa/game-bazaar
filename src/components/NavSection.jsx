import {Gamepad2} from "lucide-react";
import Button from "/src/components/ui/Button.jsx";

export default function NavSection({active, onChange}) {

    return (
        <>
            <div className="game">
                <div className="game__quantity">
                    <h1 className="game__quantity__title"><Gamepad2 size={35}/> Игры </h1>
                    <p className='game__quantity__value' style={{color: '#ababab'}}>52000+</p>
                    <div className="game__quantity__gifts-keys">
                        <Button className="game__quantity__gifts-keys__button" isActive={active === 'gift'} onClick={() =>
                            onChange('gift')}>Гифтом</Button >
                        <Button className="game__quantity__gifts-keys__button" isActive={active === 'key'} onClick={() =>
                            onChange('key')}>Ключами</Button>
                    </div>
                </div>
            </div>
        </>
    )
};
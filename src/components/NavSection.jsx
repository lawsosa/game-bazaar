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
                        <Button isActive={active === 'gift'} onClick={() => onChange('gift')}>Главная</Button >
                        <Button isActive={active === 'key'} onClick={() => onChange('key')}>Обратная Связь</Button>
                    </div>
                </div>
            </div>
        </>
    )
};
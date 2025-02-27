import {KeyRound} from "lucide-react";

export default function NavSectionDigital() {
    return (
        <>
            <div className="game">
                <div className="game__quantity">
                    <h1 className="game__quantity__title">
                        <KeyRound size={32}/> Магазин цифровых товаров <svg className="game__quantity__title__svg" xmlns="http://www.w3.org/2000/svg"
                                                                            width="20" height="36" viewBox="0 0 20 36"
                                                                            fill="none">
                        <path d="M4 26L12 18L4 10" stroke="white" stroke-width="4" stroke-linecap="round"
                              stroke-linejoin="round"></path>
                    </svg>
                    </h1>
                </div>
            </div>
        </>
    )
}
import {NavLink} from "react-router";

const links = [
    {
        id: 1,
        label: "Пополняй Steam",
        link: "/steam",
        img: "steam-icon.svg",
    },
    {
        id: 2,
        label: "Пополняй другие сервисы",
        link: "/other-services",
        img: "ps-icon.svg"
    },
    {
        id: 3,
        label: "Игровая валюта",
        link: "/currency",
        img: "currency-icon.svg"
    },
    {
        id: 4,
        label: "Покупай гифты",
        link: "/gifts",
        img: "gifts-icon.svg"
    },
    {
        id: 5,
        label: "Покупай ключи",
        link: "/keys",
        img: "keys-icon.svg"
    }
]

export default function Header() {
    return (
        <>
            <div className='background-header'>
                <header>
                    <div className='header container'>
                        <div className='logo'>
                            <NavLink to="/">GameBazaar</NavLink>
                        </div>
                        <nav className="header-links">
                            <ul className='header-links-list'>
                                {links.map((link) => (
                                    <li key={link.id}><NavLink className="header-links-list-link"
                                                               style={({isActive}) => ({
                                        background: isActive && "#439393",
                                    })} to={link.link}> <img src={`/icons/${link.img}`} alt=""/>{link.label}</NavLink></li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    )
}



// const links = [
//     {
//         id: 1,
//         label: "серега топ",
//         link: "/steam",
//         img: "steam-icon.svg",
//         class: "steaaaam"
//     },



// {links.map((link) => (
//     <li key={link.id}><NavLink className={link.class ? `header-links-list-link-${link.class}` : "header-links-list-link"} style={({isActive}) => ({
//         background: isActive && "#439393",
//     })} to={link.link}> <img src={`/icons/${link.img}`} alt=""/>{link.label}</NavLink></li>
// ))}
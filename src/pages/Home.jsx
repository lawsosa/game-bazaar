import GiftsGame from "../components/GiftsGame.jsx";
import DigitalGoodsStore from "../components/DigitalGoodsStore.jsx";

// const slides = [
//     {
//
//     },
// ]

export default function Home() {

    return (
        <>
            <div className="steam-balance">
                <h1 className='steam-balance__replenishment'><img
                    className='steam-balance__replenishment__img' src="/public/icons/icons8-steam.svg" alt=""/>
                    Пополнение баланса Steam
                </h1>
                <div className='steam-balance__blocks'>
                    <div className='steam-balance__block__login'>
                        <h2 className='steam-balance__block__title'>По логину</h2>
                        <p className='steam-balance__block__description'>Моментально и безопасно</p>
                        <img className='steam-balance__block__img' src="/public/icons/icons9-steam.svg" alt=""/>
                    </div>
                    <div className="steam-balance__block__skins">
                        <h2 className="steam-balance__block__title">Скинами</h2>
                        <p className="steam-balance__block__description">Комиссия 5%</p>
                        <img className='steam-balance__block__img' src="/public/img/768-ImageSkins.DRRLRw3w.webp"
                             alt=""/>
                    </div>
                    <div className="steam-balance__block__gift-cards">
                        <h2 className="steam-balance__block__title">Подарочные карты</h2>
                        <p className="steam-balance__block__description">Для регионов: Турция, Казахстан и другие</p>
                        <img className='steam-balance__block__img' src="/public/img/1440-ImageGiftCards.BDt7O9XJ.webp"
                             alt=""/>
                    </div>
                </div>
            </div>

            <GiftsGame className="game"/>

            <DigitalGoodsStore className="game" />
        </>
    )
}
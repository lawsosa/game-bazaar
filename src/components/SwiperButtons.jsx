import {useSwiper} from "swiper/react";
import Button from "./ui/Button.jsx";
import {ArrowLeft, ArrowRight} from "lucide-react";

export default function SwiperButtons() {
    const swiper = useSwiper(   );
    return (

        <div className="swiper-buttons">
            <Button className="swiper-button-prev" onClick={() => swiper.slidePrev()}><ArrowLeft/></Button>
            <Button className="swiper-button-next" onClick={() => swiper.slideNext()}><ArrowRight/></Button>
        </div>
    )
}
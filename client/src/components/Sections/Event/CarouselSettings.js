import Arrow from '../../Arrow';

export const CarouselSettings = {
    dots: true,
    inifite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow direction="left"/>,
    prevArrow: <Arrow direction="right"/>,
    centerMode: true,
    responsive : [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3.5
            }
        }, 
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2.5
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 1.5,
                centerMode: true
            }
        }
    ]

}


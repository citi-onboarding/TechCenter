import Arrow from '../../Arrow';

export const mainCarouselSettings = {
    dots: true,
    inifite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="left"/>,
    prevArrow: <Arrow direction="right"/>,
    centerMode: true
}

export const mobileCarouselSettings = {
    dots: true,
    inifite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="left"/>,
    prevArrow: <Arrow direction="right"/>,
    centerMode: true
}
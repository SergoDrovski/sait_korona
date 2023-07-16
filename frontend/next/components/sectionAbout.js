import delve from "dlv";
import Image from 'next/image';
import {imageLoader} from "@/lib/image";
import {createSwiperReviews} from '@/lib/sliderConfig';
import React, {useEffect} from "react";

export default function about({ data }) {
    const titleAbout = delve(data, "titleAbout");
    const textAbout = delve(data, "textAbout");
    const gallery = delve(data, "gallereya.data");

    // загрузка настроек слайдера
    useEffect(() => {
        createSwiperReviews();
    }, [""]);

    return (
        <section className="interior" id={data.link ?? ''}>
            <div className="container">
                <div className="interior__wrap bt">
                    <h2 className="interior__title title">{titleAbout ?? ''}</h2>

                    <div className="interior__description">
                        <p>
                            {textAbout ?? ''}
                        </p>
                    </div>
                    <div className="slider-gallery swiper">
                        <div className="gallery-navigations">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                        <SliderContainer sliders={gallery ?? []} />
                    </div>
                </div>
            </div>
        </section>
    )
}

function SliderContainer({sliders}) {
    const renderedSlide = sliders.map((slide, index) => {
        const photo = delve(slide, "attributes");

        return (
            <div className="gallery-slide swiper-slide">
                <Image className="gallery-img"
                       loader={imageLoader}
                       src={photo.url ?? ""}
                       alt={photo.name ?? ""}
                       width={photo.width ?? ""}
                       height={photo.height ?? ""}
                />
            </div>
        )
    })
    return (
        <div className="gallery-wrapper swiper-wrapper">
            {renderedSlide}
        </div>
    )
}



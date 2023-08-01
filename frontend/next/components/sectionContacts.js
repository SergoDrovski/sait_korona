import Image from 'next/image';
import Script from "next/script";
export default function contacts({ data }) {
    if (!data) return null
    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts__wrap bt">
                    <h2 className="contacts__title title">{data.title ?? ''}</h2>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Adbc7dc0e75bf3c2e50707a94afd3b380d809d61dc361e3db8f154c69853dbd14&amp;source=constructor"
                        width="100%"
                        height="450"
                        loading="lazy"
                        frameBorder="0"
                        className="map"
                    ></iframe>
                    <div className="contacts__inner">
                        <div className="contacts__left contacts__column">
                            <Image
                                className="contacts__icon contacts__icon-left"
                                src="/images/phone.svg"
                                alt="phone icon"
                                width="22"
                                height="22"
                            />
                            <p className="contacts__text"
                               dangerouslySetInnerHTML={{ __html: data.tel }}
                            >
                            </p>
                            <p className="contacts__text">
                                {data.email ?? ''}
                            </p>
                        </div>
                        <div className="contacts__cener contacts__column">
                            <Image
                                className="contacts__icon contacts__icon-left"
                                src="/images/time.svg"
                                alt="time icon"
                                width="22"
                                height="22"
                            />
                            <p
                                className="contacts__text"
                                dangerouslySetInnerHTML={{ __html: data.workingTime }}
                            >
                            </p>
                        </div>
                        <div className="contacts__right contacts__column">
                            <Image
                                className="contacts__icon contacts__icon-left"
                                src="/images/location.svg"
                                alt="location icon"
                                width="22"
                                height="22"
                            />
                            <p className="contacts__text">
                                {data.address ?? ''}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
import Image from 'next/image';
export default function contacts({ data }) {
    if (!data) return null
    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts__wrap bt">
                    <h2 className="contacts__title title">{data.title ?? ''}</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2409.631278952093!2d39.07922755867341!3d44.09262846722271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f3ff0da48a6625%3A0x6a65ac4be1f3d3e4!2z0YPQuy4g0JPQsNCz0LDRgNC40L3QsCwgMjUsINCi0YPQsNC_0YHQtSwg0JrRgNCw0YHQvdC-0LTQsNGA0YHQutC40Lkg0LrRgNCw0LksINCg0L7RgdGB0LjRjywgMzUyODAw!5e0!3m2!1sru!2sge!4v1688973420409!5m2!1sru!2sge"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
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
                            <p className="contacts__text">
                                {data.tel ?? ''}<br/>
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
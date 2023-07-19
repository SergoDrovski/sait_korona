import delve from "dlv";

export default function preview({ data }) {
    if (!data) return null
    const titlePreview = delve(data, "titlePreview");
    const descriptionPreview = delve(data, "descriptionPreview");

    return (
        <section className="preview" id={data.link ?? ''}>
            <div className="container">
                <div className="preview__wrap">
                    <h1 className="preview__title title">
                        {titlePreview ?? ''}
                    </h1>
                    <p className="preview__subtitle">
                        {descriptionPreview ?? ''}
                    </p>
                    <div className="btn-wrap btn-outer-outline">
                        <a className="preview__btn btn" href="#order">
                                <span className="book__btn-icon btn-icon"
                                ><svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 0C4.48603 0 0 4.48603 0 10C0 15.514 4.48603 20 10 20C15.514 20 20 15.514 20 10C20 4.48603 15.514 0 10 0ZM10 1.5C14.7033 1.5 18.5 5.2967 18.5 10C18.5 14.7033 14.7033 18.5 10 18.5C5.2967 18.5 1.5 14.7033 1.5 10C1.5 5.2967 5.2967 1.5 10 1.5ZM13.7353 6.99317C13.5406 6.99884 13.3556 7.0801 13.2197 7.21973L8.75 11.6895L6.78028 9.71973C6.59216 9.52381 6.31283 9.44488 6.05 9.5134C5.78718 9.58192 5.58192 9.78718 5.5134 10.05C5.44488 10.3128 5.5238 10.5922 5.71973 10.7803L8.21973 13.2803C8.51263 13.5731 8.98738 13.5731 9.28028 13.2803L14.2803 8.28028C14.5017 8.0646 14.5682 7.73516 14.4477 7.4505C14.3272 7.16584 14.0443 6.98427 13.7353 6.99317Z"
                                        fill="#A7997B"
                                    />
                                  </svg>
                                </span>
                                            <span>{data.buttonPreview.label ?? ''}</span>
                        </a>
                        <div className="btn-top-line"></div>
                        <div className="btn-right-line"></div>
                        <div className="btn-bottom-line"></div>
                        <div className="btn-left-line"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
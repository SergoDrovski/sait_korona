import delve from "dlv";
import Image from 'next/image';
import {imageLoader} from "@/lib/image";


function FoodItem({item}) {
    const name = delve(item, "attributes.name");
    const opisanie = delve(item, "attributes.opisanie");
    const url = delve(item, "attributes.foto.data.attributes.url");
    const alt = delve(item, "attributes.foto.data.attributes.name");
    return (
        <li className="menu__item">
            <Image
                   className="menu__img"
                   loader={imageLoader}
                   src={url ?? ""}
                   alt={alt ?? ""}
                   width="72"
                   height="72"
            />
            <div className="menu__inner">
                <p className="menu__name">{name ?? ''}</p>
                <p className="menu__description">
                    {opisanie ?? ''}
                </p>
            </div>
        </li>
    );
}


function FoodList({list}) {
    const renderItemFood = list.map((item) => {
        const titleList = delve(item, "titleList");
        const collectFoods = delve(item, "foods.data");
        return (
            <div className="menu__left">
                <h3 className="menu__subtitle">{titleList ?? ''}</h3>
                <ul className="menu__list">
                    {collectFoods.map( (item) => <FoodItem item={item}/>)}
                </ul>
            </div>
        )
    })

    return (
        <div className="menu__column">
            {renderItemFood}
        </div>);
}


export default function topMenu({ data, handleShowMenu}) {
    if (!data) return null
    const titleMenu = delve(data, "titleMenu");
    const buttonMenu = delve(data, "buttonMenu");
    const foodList = delve(data, "foodList");


    return (
        <section className="menu">
            <div className="container">
                <div className="menu__wrap bt">
                    <h2 className="menu__title title">{titleMenu ?? ''}</h2>
                    <FoodList list={foodList}/>
                    <div className="btn-wrap btn-outer-outline">
                        <button className="menu__btn btn" onClick={handleShowMenu}>
                            <span className="menu__icon btn-icon">
                  <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M7.87499 8.4375L8.31249 18.2031C8.32812 18.8437 7.81249 19.375 7.17187 19.375C6.53124 19.375 6.01562 18.8437 6.03124 18.2031L6.46874 8.4375H6.37499C5.57812 8.4375 4.93749 7.75 5.01562 6.95312L5.37499 0.625H8.96874L9.24999 7.03125C9.26562 7.79688 8.64062 8.4375 7.87499 8.4375Z"
                        fill="#A7997B"
                    />
                    <path
                        d="M14.9375 19.375H14.4688C13.6094 19.375 12.9062 18.6719 12.9062 17.8125L13.375 11.5625C12.5156 11.5625 11.8125 10.8594 11.8125 10V3.75C11.8125 2.03125 13.2188 0.625 14.9375 0.625V19.375Z"
                        fill="#A7997B"
                    />
                    <path
                        d="M5.39063 0.390625C5.26563 0.390625 5.15625 0.484375 5.14063 0.609375L4.82812 6.875C4.82812 7.95313 5.35937 8.625 6.21875 8.67188L5.79687 18.2031C5.78125 18.5781 5.92187 18.9375 6.1875 19.2031C6.45312 19.4688 6.79688 19.625 7.17188 19.625C7.54688 19.625 7.89063 19.4844 8.15625 19.2031C8.42188 18.9375 8.5625 18.5781 8.54688 18.2031L8.125 8.67188C8.98438 8.625 9.51563 7.95313 9.51563 6.875L9.20313 0.625C9.20313 0.5 9.07812 0.390625 8.95312 0.40625C8.82812 0.40625 8.71875 0.515625 8.73438 0.65625L9.04688 6.89062C9.04688 7.29687 8.95313 8.21875 8.03125 8.21875C8 8.21875 7.98438 8.21875 7.95313 8.23438C7.92188 8.21875 7.89062 8.21875 7.85937 8.21875C7.73437 8.21875 7.625 8.32813 7.64063 8.46875L8.07813 18.2344C8.07813 18.4844 8 18.7188 7.82812 18.8906C7.65625 19.0625 7.42188 19.1719 7.17188 19.1719C6.92188 19.1719 6.6875 19.0781 6.51563 18.8906C6.34375 18.7188 6.25 18.4844 6.26562 18.2344L6.70313 8.46875C6.70313 8.34375 6.60938 8.23437 6.48438 8.21875C6.45313 8.21875 6.42188 8.21875 6.39063 8.23438C6.375 8.23438 6.34375 8.21875 6.3125 8.21875C5.39063 8.21875 5.29688 7.29688 5.29688 6.90625L5.60938 0.65625C5.60938 0.5 5.51563 0.390625 5.39063 0.390625Z"
                        fill="#A7997B"
                    />
                    <path
                        d="M6.70312 5.3125V0.625C6.70312 0.5 6.59375 0.390625 6.46875 0.390625C6.34375 0.390625 6.23438 0.5 6.23438 0.625V5.3125C6.23438 5.4375 6.34375 5.54688 6.46875 5.54688C6.59375 5.54688 6.70312 5.4375 6.70312 5.3125Z"
                        fill="#A7997B"
                    />
                    <path
                        d="M7.95312 5.3125V0.625C7.95312 0.5 7.84375 0.390625 7.71875 0.390625C7.59375 0.390625 7.48438 0.5 7.48438 0.625V5.3125C7.48438 5.4375 7.59375 5.54688 7.71875 5.54688C7.84375 5.54688 7.95312 5.4375 7.95312 5.3125Z"
                        fill="#A7997B"
                    />
                    <path
                        d="M12.6719 17.8125C12.6719 18.2969 12.8594 18.75 13.2031 19.0781C13.5469 19.4219 14 19.6094 14.4688 19.6094H14.9375C15.0625 19.6094 15.1719 19.5 15.1719 19.375V0.65625C15.1719 0.640625 15.1719 0.640625 15.1719 0.625C15.1719 0.5 15.0625 0.390625 14.9375 0.390625C13.0781 0.390625 11.5781 1.89063 11.5781 3.75V10C11.5781 10.9063 12.25 11.6563 13.125 11.7813L12.6719 17.7969V17.8125ZM12.0469 10V3.75C12.0469 2.23438 13.2188 0.984375 14.7031 0.875V19.1406H14.4688C14.1094 19.1406 13.7813 19 13.5312 18.75C13.2812 18.5 13.1406 18.1719 13.1406 17.8125L13.6094 11.5781C13.6094 11.5156 13.5937 11.4531 13.5469 11.4062C13.5 11.3594 13.4375 11.3281 13.375 11.3281C12.6406 11.3281 12.0469 10.7344 12.0469 10Z"
                        fill="#A7997B"
                    />
                  </svg>
                </span>
                            <span>{buttonMenu.label ?? ''}</span>
                        </button>
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



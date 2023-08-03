
import delve from "dlv";
import Image from 'next/image';
import {imageLoader} from "@/lib/image";
import React, {useState, useEffect} from "react";
import {scroll} from "@/lib/animate";

function CategoryList ({list, setStateMenu, stateMenu}) {

    function handleChangeMenu(e) {
        e.preventDefault();
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
            .test(navigator.userAgent)) {
            // scroll to nav item
            e.target.scrollIntoView({block: "nearest", inline: "center", behavior: "smooth"});
        }

        let i = e.target.dataset.key;
        setStateMenu({activeCategory: i});
    }
    const listItems = [];
    list.forEach((category,i) => {
        const foodsCollect = delve(category, "attributes.foods.data");
        if(foodsCollect.length !== 0 ) {
            const categoryName = delve(category, "attributes.name");

            listItems.push((
                <li className="menu-item" key={category.id} >
                    <a
                        data-key={i}
                        className={Number(stateMenu.activeCategory) === i  ? 'active' : ''}
                        href="#"
                        onClick={handleChangeMenu}
                    >
                        {categoryName ?? ''}
                    </a>
                </li>
            ))
        }
    });




    return (
        <ul className="nav-list">
            {listItems}
        </ul>
    )
}


function MenuList ({list, stateMenu}) {

    let allMenuList = [];
    list.forEach((category,i) => {
        const foodsCollect = delve(category, "attributes.foods.data");
        if(foodsCollect.length !== 0 ) {
            const categoryName = delve(category, "attributes.name");
            allMenuList.push((
                <li className={`categoryItem ${Number(stateMenu.activeCategory) === i  ? 'active' : ''}`}>
                    <h2 className="menu__title title">{categoryName ?? ''}</h2>
                    <div className="menu__column">
                        <ul className="menu__list">
                            <ListItems foodsCollect={foodsCollect}/>
                        </ul>
                    </div>
                </li>
            ))
        }
    });

    return (
        <div className={`list-menu `} >
            <section className="menu bt">
                <div className="container">
                    <div className="menu__wrap">
                        <ul>
                            {allMenuList}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

function ListItems ({foodsCollect}) {
    return foodsCollect.map((food,i) => {
        return (
            <li className="menu__item" key={food.id} data-key={i}>
                <div className="uc_post_flex_style_one_item ue-item">
                    <div className="uc_post_flex_style_one_image">
                        <div className="uc_post_image">
                            <Image
                                className="menu__img"
                                loader={imageLoader}
                                src={food.attributes.foto.data.attributes.url ?? ""}
                                alt={food.attributes.foto.data.attributes.name ?? ""}
                                width={food.attributes.foto.data.attributes.width ?? ""}
                                height={food.attributes.foto.data.attributes.height ?? ""}
                            />
                        </div>
                    </div>
                    <div className="uc_content padding">
                        <div className="uc_title">
                            <a href="#">{food.attributes.name ?? ''}</a>
                            <p className="ves">
                                <span className="">{`${food.attributes.cena ?? ''} / `}</span>{food.attributes.massa ?? ''}
                            </p>
                        </div>
                    </div>
                </div>
            </li>
        )
    });
}


export default function WidgetMenu({collectionMenu, handleShowMenu, statusMenu}) {
    let filterCollectionMenu = collectionMenu.filter((item,i)=> {
        let foodsCollect = delve(item, "attributes.foods.data");
        if(foodsCollect) {
            return foodsCollect.length !== 0
        }
        return false
    })

    if(filterCollectionMenu.length === 0) return null


    const [stateMenu, setStateMenu] = useState({activeCategory: 0});

    return (
        <div className={`widget-menu ${statusMenu.show ? 'show' : 'close'}`}>
            <nav className="navigate-menu navigate-menu__mob">
                <header className="header header--mob">
                    <div className="content-container">
                        <div className="header__wrap">
                            <div className={`button-menu header__button-menu ${statusMenu.show ? 'active-button' : ''}`}>
                                <button type="button" className={`navbar-toggle ${statusMenu.show ? 'toggled' : ''}`} data-toggle="collapse" onClick={handleShowMenu}>
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="logo__wrap">
                                <picture>
                                    <source media="(min-width: 768px)" srcSet="/images/logo-new-mob2.svg"/>
                                    <img className="logo" src="/images/logo-new-mob2.svg" alt="ресторан Корона"/>
                                </picture>
                            </div>
                            <div className="elem"></div>
                        </div>
                    </div>
                </header>

                <CategoryList
                    list={filterCollectionMenu}
                    setStateMenu={setStateMenu}
                    stateMenu={stateMenu}
                />
            </nav>
            <MenuList
                list={filterCollectionMenu}
                stateMenu={stateMenu}
            />

        </div>
    )
}
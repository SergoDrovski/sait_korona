
import delve from "dlv";
import Image from 'next/image';
import {imageLoader} from "@/lib/image";
import React, {useState} from "react";

function CategoryList ({list, setStateMenu, stateMenu}) {

    function handleChangeMenu(e) {
        e.preventDefault();
        let i = e.target.dataset.key;
        setStateMenu({activeCategory: i});
    }

    const listItems = list.map((category,i) => {

        const categoryName = delve(category, "attributes.name");

        return (
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
        )
    });


    return (
        <ul className="nav-list">
            {listItems}
        </ul>
    )
}


function MenuList ({list, stateMenu}) {

    let currentMenu = list[stateMenu.activeCategory];
    let nameMenu = currentMenu.attributes.name;

    const listItems = currentMenu.attributes.foods.data.map((food,i) => {
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
                            <a href="#">
                                {food.attributes.name ?? ''}
                            </a>
                            <p className="ves">{food.attributes.massa ?? ''}</p>
                        </div>
                        <div
                            className="ue-description"
                            dangerouslySetInnerHTML={{ __html: food.attributes.calories }}
                        ></div>
                        <div className="ue_grid_item_bottom">
                            <div className="ue_grid_prices">
                                <div className="uc_price">
                                      <span className="woocommerce-Price-amount amount">
                                          {food.attributes.cena ?? ''}
                                      </span>
                                </div>
                            </div>
                            <div className="uc_post_flex_style_one_button">
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    });


    return (
        <div className={`list-menu `}  key={stateMenu.activeCategory}>
            <section className="menu bt">
                <div className="container">
                    <div className="menu__wrap">
                        <h2 className="menu__title title">{nameMenu ?? ''}</h2>
                        <div className="menu__column">
                            <ul className="menu__list">
                                {listItems}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}


export default function WidgetMenu({collectionMenu, handleShowMenu, statusMenu}) {
    if(collectionMenu.length === 0) return null

    const [stateMenu, setStateMenu] = useState({activeCategory: 0});


    return (
        <div className={`widget-menu ${statusMenu.show ? 'show' : ''}`}>
            <nav className="navigate-menu navigate-menu__mob">
                <CategoryList
                    list={collectionMenu}
                    setStateMenu={setStateMenu}
                    stateMenu={stateMenu}
                />
            </nav>
            <MenuList
                list={collectionMenu}
                stateMenu={stateMenu}
            />

        </div>
    )
}
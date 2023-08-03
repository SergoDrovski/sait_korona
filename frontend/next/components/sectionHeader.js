import delve from "dlv";
import Image from 'next/image';
import {imageLoader} from "@/lib/image";
import {observeAnimate} from "@/lib/animate.js";

export default function header({ data, handleShowMenu, statusMenu }) {
    if (!data) return null
    const titleHeader = delve(data, "titleHeader");
    const logoImages = delve(data, "logoHeader");

    return (
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
                    { !statusMenu.show && <div className="menu-sidebar">
                        <p className="menu-sidebar__text">Меню</p>
                        <div className="button-menu menu-sidebar__btn">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" onClick={handleShowMenu}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <p className="menu-sidebar__text">Ресторана</p>
                    </div> }
                    <div className="logo__wrap">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/images/logo-new2.svg"/>
                            <img className="logo" src="/images/logo-new-mob2.svg" alt="ресторан Корона"/>
                        </picture>
                    </div>
                    <div className="elem"></div>
                </div>
            </div>
        </header>
    )
}

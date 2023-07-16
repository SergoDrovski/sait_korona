import React from "react";
import header from './sectionHeader';
import preview from './sectionPreview';
import about from './sectionAbout';
import topMenu from './sectionTopMenu';
import {widgetOrder} from './sectionWidgetOrder';
import contacts from './sectionContacts';

const Sections = {
    header,
    preview,
    about,
    topMenu,
    widgetOrder,
    contacts,
}

export default function Content({contentData, handleShowMenu, statusMenu}) {
    const renderedSection = [];

    for (let key in contentData) {
        if(Sections[key]){
            let Component = Sections[key];
            renderedSection.push(<Component
                data={contentData[key]}
                handleShowMenu={handleShowMenu}
                statusMenu={statusMenu}
            />)
        }
    }

    return <>{renderedSection}</>
}
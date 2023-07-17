import React, {useState, useEffect} from "react";
import delve from "dlv";
import Head from 'next/head'
import WidgetMenu from '../components/widgetMenu';
import Content from '../components/content';
import {getStrapiData} from '@/lib/api/apiSer';
import {scroll} from "@/lib/animate";

export async function getStaticProps() {
    try {
        const {preview} = await getStrapiData();
        return {
            props: {...preview},
            revalidate: 60,
        }
    } catch (error) {
        return {
            props: { preview: null },
            revalidate: 60,
        };
    }
}

export default function Home({homepage, categories}) {
    useEffect(() => {
        scroll();
    }, [""]);

    const collectionMenu = delve(categories, "data");
    const content = delve(homepage, "data.attributes");


    const [stateMenu, setShowMenu] = useState({show: false});



    function handleShowMenu(e) {
        e.preventDefault();
        const body = document.body;
        body.classList.toggle('overflowY');
        setShowMenu({show: !stateMenu.show});
    }

    return (
        <>
            <Head>
                <title>Ресторан Корона в городе Туапсе</title>
                <meta name="description" content="Ресторан Корона в городе Туапсе. Забронировать стол ☎ 8 (903) 411-44-16"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="keywords" content="Ресторан в Туапсе, кафе в Туапсе, обед,ужин,забронировать стол"/>
                <meta name="robots" content="index,follow"/>
                <link rel="icon" href="/images/favicon2.svg"/>
            </Head>
            <Content
                contentData={content}
                handleShowMenu={handleShowMenu}
                statusMenu={stateMenu}
            />
            <WidgetMenu
                collectionMenu={collectionMenu}
                handleShowMenu={handleShowMenu}
                statusMenu={stateMenu}
            />
        </>
    )
}
import React, {useState, useEffect} from "react";
import delve from "dlv";
import Head from 'next/head'
import WidgetMenu from '../components/widgetMenu';
import {getStrapiData} from '@/lib/api/apiSer';
import {scroll} from "@/lib/animate";
import { useRouter } from 'next/router';

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

    const router = useRouter();

    const collectionMenu = delve(categories, "data");
    const content = delve(homepage, "data.attributes");

    const [stateMenu, setShowMenu] = useState({show: true});



    function handleShowMenu(e) {
        e.preventDefault();
        setShowMenu({show: !stateMenu.show});
        router.push('/');
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
            <WidgetMenu
                collectionMenu={collectionMenu ?? []}
                handleShowMenu={handleShowMenu}
                statusMenu={stateMenu}
            />
        </>
    )
}
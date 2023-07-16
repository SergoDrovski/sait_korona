const token = process.env.TOKEN_TELEGRAM;
const chat_id_order = process.env.CHAT_ID_ORDER;


export default async function handler(req, res) {
    const isPhone = req.body?.phone !== undefined ?? req.body.phone !== "";
    const isText = req.body?.text !== undefined ?? req.body.text !== "";
    console.log("phone " + isPhone)
    console.log("text " + isText)
    try {
        if (isText || isPhone) {
            const chat_id = req.query.id ? `-${req.query.id}` : chat_id_order;
            const URL = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html`
            const today = new Date();
            const day = today.toLocaleDateString('en-US');
            const now = today.toLocaleTimeString('en-US');
            let txt = `${now} ${day}` + "%0A";
            for (let prop in req.body) {
                txt += `<b>${prop}</b>: ${req.body[prop]}%0A`;
            }
            const telegramRes = await fetch(URL, {
                body: `text=${txt}`,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                method: "post",
            })
            const json = await telegramRes.json();
            if (!json.ok) {
                throw new Error('fail request!')
            }
            return res.status(200).json({
                data: {...json},
                errors: null
            })
        } else {
            return res.status(404).json({errors: 'Некоректные данные!'});
        }

    } catch (e) {
        return res.status(500).json({
            data: null,
            errors: e.message
        })
    }
}
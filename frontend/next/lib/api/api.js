
export default async function sendForm(data, action) {
    const headers = {'Content-Type': 'application/json'}
    const res = await fetch(action, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(data),
    })
    return await res.json();
}
export async function fetcher([query = '', { variables } = {}]) {
    const headers = {'Content-Type': 'application/json'}

    const res = await fetch("http://strapi:1337/graphql", {
        headers,
        method: 'POST',
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json.data
}


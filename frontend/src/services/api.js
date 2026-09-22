const BASE_URL = "https://jikan.lucashdo.com/v1"

async function request(path) {
    const response = await fetch(`${BASE_URL}${path}`)
    if (!response.ok) {
        throw new Error(`API ERROR:  ${response.status}`)
    }
    // console.log("response", response);

    const json = await response.json()
    return json.data
}

function getTopAnime() {
    return request("/top/anime")
}

function searchAnime(query) {
    return request(`/anime?q=${query}`)
}

export { getTopAnime, searchAnime }
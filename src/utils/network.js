export const getApiResource = async (url) => {

    try {
        const response = await fetch(url)

        if (!response.ok) {
            console.error('Could not fetch', response.status);
            return false
        }

        return await response.json()
    } catch (error) {
        console.error('Could not fetch.', error.message)
        return false
    }

}

// (async () => {
//     const body = await getApiResource(SWAPI_PEOPLE)
//     console.log(body)
// })()

// Аналог через промисы, кстати

// export const getApiResource = (url) => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((body) => console.log(body))
//     .catch(error => console.log(error.message))
// }

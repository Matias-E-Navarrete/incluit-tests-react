const getData = (api) => {
    return fetch(api.toString())
        .then(response => response.json())
        .then(response => response)
        .catch(error => error)
}

export default getData
export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else if (response.status >= 400 && response.status < 500) {
        return response
    } else if (response.status == 0) {
        return response
    } else {
        var error = new Error(response.code);
        error.response = response;
        throw error
    }
}

export function postRequest(api, data = {}, callback) {
    return fetch(api, {
        method: 'POST',
        credentials: 'include',
        mode: 'no-cors',
        body: JSON.stringify(data)
    }).then(checkHttpStatus).then(response => callback(response))
}
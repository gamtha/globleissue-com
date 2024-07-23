function sendRequest(method, url, data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else if (xhr.readyState === 4) {
            callback(xhr.responseText, null);
        }
    };
    xhr.send(JSON.stringify(data));
}

let env = "http://localhost:8080/"
export function getRequest(url){
    return fetch(env+url).then(res=>res.json())
}

export function postRequest(url, payload){
    console.log(payload)
    return fetch(env+url, {
        method:'post',   
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
        body:JSON.stringify(payload)}
    ).then(res=>res.json())
}

export function deleteRequest(url){
    return fetch(env+url, {
        method:'DELETE'
    }
    ).then(res=>res.json())
}
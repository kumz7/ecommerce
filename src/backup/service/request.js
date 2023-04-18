export function Request(url){
    return fetch(url).then(res=>{return res.json()}).then(res=>{console.log(res); return res})
}
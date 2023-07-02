import axios from "axios"; 

export const YandexAuth = (props) => {
    var params = window.location.href
        .replace('#', '&')
        .replace('?', '')
        .split('&')
        .reduce(
            function (p, e) {
                var a = e.split('=');
                p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            },
            {}
        );
    let token = params["access_token"];

    if (token) {
        console.log("OAuth" + " " + token);
        /*axios.get('https://login.yandex.ru/info?format=jwt',   {
            headers : {
                'Authorization': "OAuth" + " " + token
            }
            
        }).then(res => {
            console.log(res)
        })*/
    }

    return (
        <div>
            <h1>Авторизация Яндекс</h1>
            <a href="https://oauth.yandex.ru/authorize?response_type=token&client_id=47c264e6ebe643e5a3e4b44973fa6e5d">Войти через Яндекс</a>
        </div>

    );
}
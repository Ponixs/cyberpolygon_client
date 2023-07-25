import axios from "axios"; 
import * as YaAuthSuggest from 'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js';

export const YandexAuth = (props) => {
    console.log(YaAuthSuggest.init);
    /*YaAuthSuggest.init({
        client_id: 'c46f0c53093440c39f12eff95a9f2f93',
        response_type: 'token',
        redirect_uri: 'https://example.com/suggest/token'
     },
     'https://example.com'
  )
  .then(({
     handler
  }) => handler())
  .then(data => console.log('Сообщение с токеном', data))
  .catch(error => console.log('Обработка ошибки', error))*/
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
        axios.get('https://login.yandex.ru/info?format=jwt',   {
            headers : {
                'Authorization': "OAuth" + " " + token,
            },
            withCredentials: true
            
        }, ).then(res => {
            console.log(res)
        })
    }

    return (
        <div>
            
        </div>

    );
}
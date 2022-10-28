const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    let isRequestOk = request.status === 200 && request.readyState === 4;
    let isRequestNotOk = request.readyState === 4;
    if(isRequestOk){
        const data = request.responseText;
        return console.log(data);
    }
    if(isRequestNotOk){
        return console.log('Erro no request');
    }
});

request.open('GET', `http://numbersapi.com/random/math`);
request.send();
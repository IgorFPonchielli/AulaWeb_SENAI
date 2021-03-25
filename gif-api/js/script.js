$(function () {

    function randomGiphy_url() {
        var url_base = "https://api.giphy.com/v1/gifs/random";
        var api_key = "?api_key=VG19zLwpzrrikiRijv6OyA4PPecZ8CZn"
        var url = url_base + api_key;
        return url;
    }

    function searchGiphy_url(search) {
        var url_base =  "https://api.giphy.com/v1/gifs/search";
        var api_key = "?api_key=VG19zLwpzrrikiRijv6OyA4PPecZ8CZn";
        var searchGif = "&q=" + search + "&limit=25&offset=0"
        var url = url_base + api_key + searchGif;
        return url
    }

    $("#randomGif").click(function (e) {
        e.preventDefault(); //não atualizar a pagina
        console.log("Botão clicado");
        var url = randomGiphy_url();
        $.ajax(url, {
            type: 'GET',
            beforeSend: function () {
                $('.result').after('<p class="loading">Aguarde! Garregando... </p>')
            },
            error: function () {
                $('.result').after('<p class="loading">Deu ruim</p>')
            },
            success: function (dados) {
                mostrarRandomGif(dados);
                console.log(dados.data.embed_url)
            },
            complete: function () {
                $(".loading").remove()
            }
        })
    })

    $("#searchGif").click(function (e) {
        e.preventDefault(); //não atualizar a pagina
        console.log("Botão clicado");
        var url = searchGiphy_url("shrek");
        $.ajax(url, {
            type: 'GET',
            beforeSend: function () {
                $('.result').after('<p class="loading">Aguarde! Garregando... </p>')
            },
            error: function () {
                $('.result').after('<p class="loading">Deu ruim</p>')
            },
            success: function (dados) {
                pesquisarGif(dados);
                //console.log(dados)
            },
            complete: function () {
                $(".loading").remove()
            }
        })
    })

    function mostrarRandomGif(dados) {       
            $('.result').html(`<iframe src="${dados.data.embed_url}" width="480" height="480" frameBorder="0"
                            class="giphy-embed" allowFullScreen></iframe>`)
    }

    function pesquisarGif(dados) {
        $.each(dados, (i, el) => {
            console.log(el)            
            $('.result').html(`<tr class="linha">
                            <iframe src="${el.embed_url}" width="80" height="80" frameBorder="0"
                            class="giphy-embed" allowFullScreen></iframe>
                          </tr>
            `)
            //<td class="endereco">${el.address.street}, ${el.address.suite}, ${el.address.city} - ${el.address.zipcode}</td>
        });
    }
})
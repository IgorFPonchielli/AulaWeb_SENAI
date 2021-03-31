$(function () {

    $(".btn").click(function (e) {
        $("#results").html("");
        var url = "https://api.giphy.com/v1/gifs/search?";
        var busca;
        var limite = $("#selectLimit").val();
        var params = {
            q: busca,
            tag: busca,
            limit: ((limite == null) ? 3 : limite),
            lang: "pt",
            api_key: "VG19zLwpzrrikiRijv6OyA4PPecZ8CZn",
            fmt: "json"
        };
        if ($(this).hasClass("searchGif")) {

            if($(".inputSearch").val() == "") {
                alert("Informe um termo no campo acima.")
            }

            busca = $(".inputSearch").val();
            delete params.tag;
            params.q = busca;
        }
        if ($(this).hasClass("trending")) {
            url = "https://api.giphy.com/v1/gifs/trending?";
        }
        if ($(this).hasClass("randomGif")) {
            url = "https://api.giphy.com/v1/gifs/random?";
            busca = $(".inputSearch").val();
            delete params.q;  
            params.tag = busca;          
        }

        $.ajax({
            url: url + $.param(params),
            method: "GET",
            beforeSend: function () {
                $('#results').after('<p class="message-alert text-white text-center">Aguarde! Garregando... </p>')
            },
            error: function () {
                $('#results').after('<p class="message-alert text-white text-center">Falhou!</p>')                       
            },
            success: function (dados) {
                console.log(url + $.param(params))
                console.log(dados)
                if(params.tag != undefined && params.q === undefined) {
                     randomGif(dados)
                } else {
                    mostrarGifs(dados, params);
               }            
            },
            complete: function () {
                $(".message-alert").remove()
            }
        });
    });

    function randomGif(dados) {     
        
        var urlOriginal = "*";

        if(dados.data.source != "") {
            urlOriginal = dados.data.source
        } else {
            urlOriginal = dados.data.url
        }

        $('#results').append(`
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card mb-12 box-shadow">
                    <img src="${dados.data.images.fixed_height.url}"
                        class="card-img-top" alt="${dados.data.title}">
                    <div class="card-body">
                        <h6>${dados.data.title}</h6>
                        <p class="card-text">Rating: <b class="text-uppercase">${dados.data.rating}</b></p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <a href="${urlOriginal}" target="_blank">                                    
                                <input type="button" class="btn btn-sm btn-outline-secondary" value="Ir para conteudo original">
                            </a>                                   
                            </div>
                        </div>
                    </div>                        
                </div>
            </div>
        </div`)
    }
        

    function mostrarGifs(dados, params) {  
        
        var urlOriginal = "*";
        
        for (i = 0; i < params.limit; i++) { 
            if(i % 3 == 0) {
                $('#results').append('<div class="row">');
            }
            if(dados.data[i].source != "") {
                urlOriginal = dados.data[i].source
            } else {
                urlOriginal = dados.data[i].url
            }

            $('#results .row:last-child').append(`
            <div class="col-md-4 align-self-center">
                <div class="card mb-4 box-shadow">
                    <img src="${dados.data[i].images.fixed_height.url}"
                        class="card-img-top" alt="${dados.data[i].title}">
                    <div class="card-body">
                        <h6>${dados.data[i].title}</h6>
                        <p class="card-text">Rating: <b class="text-uppercase">${dados.data[i].rating}</b></p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <a href="${urlOriginal}" target="_blank">                                    
                                    <input type="button" class="btn btn-sm btn-outline-secondary" value="Ir para conteudo original">
                                </a>       
                            </div>
                        </div>
                    </div>                        
                </div>
            </div>`)
        }
}
    
})
$(function () {

        //window.open(canvas.toDataURL('image/png'));
        /*var gh = 'https://media4.giphy.com/media/KmlTchPoFQT84/200.gif?cid=1cc52221337ef3fdada5299d62b9ffb4963d92133a95b8af&rid=200.gif&ct=g';

        var a  = document.createElement('a');
        a.href = gh;
        a.download = 'image.png';

        a.click()*/

    $(".btn").click(function (e) {
        $("#results").html("");
        // Beginning API call
        var url = "https://api.giphy.com/v1/gifs/search?";
        var busca;
        var params = {
            q: busca,
            tag: busca,
            limit: 9,
            api_key: "VG19zLwpzrrikiRijv6OyA4PPecZ8CZn",
            fmt: "json"
        };
        if ($(this).hasClass("searchGif")) {
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

        if ($(this).hasClass("btn-download")) {
            console.log("clicou no download")
        }

        $.ajax({
            url: url + $.param(params),
            method: "GET",
            beforeSend: function () {
                $('#results').after('<p class="loading">Aguarde! Garregando... </p>')
            },
            error: function () {
                $('#results').after('<p class="loading">Deu ruim</p>')
            },
            success: function (dados) {
                console.log(url + $.param(params))
                console.log(dados)
                if(params.tag != undefined && params.q === undefined) {
                     randomGif(dados)
                     console.log(dados)
                } else {
                    mostrarGifs(dados, params);
               }            
            },
            complete: function () {
                $(".loading").remove()
            }
        });
    });

    function randomGif(dados) {          
            $('#results').append(`
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card mb-12 box-shadow">
                        <img src="${dados.data.images.fixed_height.url}"
                            class="card-img-top">
                        <div class="card-body">
                            <p class="card-text">Rating: <b class="text-uppercase">${dados.data.rating}</b></p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">                                    
                                <input type="button" class="btn btn-download btn-sm btn-outline-secondary" value="Download">                                    
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div`)
    }
        

    function mostrarGifs(dados, params) {   
        for (i = 0; i < params.limit; i++) { 
            if(i % 3 == 0) {
                $('#results').append('<div class="row">');
            }
            $('#results .row:last-child').append(`
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img src="${dados.data[i].images.fixed_height.url}"
                        class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">Rating: <b class="text-uppercase">${dados.data[i].rating}</b></p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <input type="button" class="btn btn-download btn-sm btn-outline-secondary" value="Download"> 
                            </div>
                        </div>
                    </div>                        
                </div>
            </div>`)
        }
}
    
})
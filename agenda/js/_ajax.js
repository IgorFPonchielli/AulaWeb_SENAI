$(function(){
    const tbody = $(".table tbody");

    function obterDados() {
        $.ajax("https://jsonplaceholder.typicode.com/users", {
            type : 'GET',
            beforeSend: function() {
                $('.table').after('<p class="loading">Aguarde! Garregando... </p>')
            },
            error: function() {
                $('.table').after('<p class="loading">Deu ruim</p>')
            },
            success: function(dados) {
                mostrarDados(dados);
            },
            complete: function() {
                $(".loading").remove()
            }
        })

    }

    function mostrarDados(dados) {
        $.each(dados, (i, el) => {
            tbody.append(`<tr class="linha">
                            <th scope="row">${el.id}</th>
                            <td class="nome">${el.name}</td>
                            <td class="username">${el.username}</td>
                            <td class="email">${el.email}</td>
                            <td class="endereco">${el.address.street}, ${el.address.suite}, ${el.address.city} - ${el.address.zipcode}</td>
                          </tr>
            `)
        });
    }

    obterDados();
    tbody.on('click', (e) => {    
        $linha = $(e.target).closest(".linha");
        $("#name").val($linha.children(".nome").text());
        $("#username").val($linha.children(".username").text());
        $("#email").val($linha.children(".email").text());
        $("#endereco").val($linha.children(".endereco").text());
    })
})
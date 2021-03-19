$(function() {
    var jogador = 1;
    var jogadorVencedor = "";
    var imgVencedor;
    var qtdJogadas = 0;

    function colunasIguais(a, b, c) {
        var colunaA = $("#coluna" + a);
        var colunaB = $("#coluna" + b);
        var colunaC = $("#coluna" + c);

        var backgroundA = $(colunaA).css("background-image");
        var backgroundB = $(colunaB).css("background-image");
        var backgroundC = $(colunaC).css("background-image");

        if ((backgroundA == backgroundB) && (backgroundB == backgroundC) && (backgroundA != "none" && backgroundA != "")) {
            if (backgroundA.indexOf("1.png") >= 0) {
                jogadorVencedor = $("#jogador1").val();
            } else {
                jogadorVencedor = $("#jogador2").val();
            }
            return true;
        } else {
            return false;
        }
    }

    function verificarFimJogo() {   
        
        qtdJogadas++;

        if (colunasIguais(1, 2, 3) || colunasIguais(4, 5, 6) || colunasIguais(7, 8, 9)  ||
        colunasIguais(1, 4, 7) || colunasIguais(2, 5, 8) || colunasIguais(3, 6, 9) ||
        colunasIguais(1, 5, 9) || colunasIguais(3, 5, 7)) 
        {
            $("#resultado").html("<h2> PLAYER " + jogadorVencedor + " WINS!</h2>")
            $("#resultado").append("<img src='" + imgVencedor + ".png' alt='"+ imgVencedor +"' width='30px'>")
            $(".coluna").off("click");    
        } else if (qtdJogadas >= 9) {
            $("#resultado").html("<h2> EMPATE!</h2>")
            $(".coluna").off("click");
        }        
    }

    $(".coluna").click(function() {
        var bg = $(this).css("background-image");
        if (bg == "none" || bg == "") {
            var fig = "url(" + jogador.toString() + ".png)";
            $(this).css("background", fig);
            imgVencedor = jogador
            jogador = (jogador == 1 ? 2 : 1);
            verificarFimJogo(); 
        }
    });

})
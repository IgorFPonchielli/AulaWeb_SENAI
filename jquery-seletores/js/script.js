$(function() {
    
    $("#txt").val("Texto alterado com jquery")
    $(".email").val("email alterado com jquery")
    
    //$("p:not(.destaque), li").css("opacity", ".5")
    //$("p, li").css("color", "#999");
    //$(".container > ul > li").css("color", "black");

    $(".destaque ~ p").addClass("destaque")
    $("li:first").css("color", "green")
    $("li:first-child").css("color", "green")
    $("li:last").css("color", "green")
    $("li:last-child").css("color", "green")
    
    //lt -> less than / gt -> greater than
    $("p:lt(2)").css({
        "color":"orange",
        fontSize: "22px"
    })

    $("a[title]").css("color", "red")
    $("a:not([title])").hide();
    $("li:odd").css("background-color", "black")
    $("li:even").css("background-color", "red")
    $("p:contains(afo 6)").css("color", "orange")
    $("p:contains(afo 7)").css("color", "blue")
    $("p:has(i)").css("color", "purple")
    $("p:empty").text("Este parágrafo estava vazio")
    $("p:hidden").show()


})
$("ul").on("click", "li", function() {
    $(this).toggleClass("selected");
});

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(350, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var txt = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + txt + "</li>");
    }
});

$(".input-toggle").click(function() {
    $("input[type='text']").fadeToggle();
});
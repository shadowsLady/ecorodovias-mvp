$(document).ready(function() {

    sessionStorage.setItem("opcaoServico", true);

});

$(".messages").animate({
    scrollTop: $(document).height()
}, "fast");

$("#profile-img").click(function() {
    $("#status-options").toggleClass("active");
});

$(".expand-button").click(function() {
    $("#profile").toggleClass("expanded");
    $("#contacts").toggleClass("expanded");
});

$("#status-options ul li").click(function() {
    $("#profile-img").removeClass();
    $("#status-online").removeClass("active");
    $("#status-away").removeClass("active");
    $("#status-busy").removeClass("active");
    $("#status-offline").removeClass("active");
    $(this).addClass("active");

    if ($("#status-online").hasClass("active")) {
        $("#profile-img").addClass("online");
    } else if ($("#status-away").hasClass("active")) {
        $("#profile-img").addClass("away");
    } else if ($("#status-busy").hasClass("active")) {
        $("#profile-img").addClass("busy");
    } else if ($("#status-offline").hasClass("active")) {
        $("#profile-img").addClass("offline");
    } else {
        $("#profile-img").removeClass();
    };

    $("#status-options").removeClass("active");
});

function newMessage() {
    message = $(".message-input input").val();

    if (sessionStorage.getItem("opcaoServico") == "true") {
        if ($.trim(message) != '1' && $.trim(message) != '2' && $.trim(message) != '3' && $.trim(message) != '4' || $.trim(message) == '') {
            return false;
        } else {
            sessionStorage.setItem("opcaoServico", false);

            $('<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
            $('.message-input input').val(null);
            $('.contact.active .preview').html('<span>You: </span>' + message);
            $(".messages").animate({
                scrollTop: $(document).height()
            }, "fast");

            switch ($.trim(message)) {

                case "1":
                    $('<li class="replies"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>Ok, para solicitar o guincho, precisamos saber onde te encontrar, compartilhe sua localização conosco</p></li>').appendTo($('.messages ul'));
                    $('.message-input input').val(null);
                    $('.contact.active .preview').html('<span>You: </span> Ok, para solicitar o guincho, precisamos saber onde te encontrar, compartilhe sua localização conosco');
                    $(".messages").animate({
                        scrollTop: $(document).height()
                    }, "fast");
                    break;
            }

        }
    }
    if (message.includes('iframe')) {

        $('<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' + '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8436.305110455109!2d-46.59780175325357!3d-23.7842524104097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4735f206b833%3A0x625725f28a1dc125!2sSP-160%20-%20Batistini%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1574509887257!5m2!1spt-BR!2sbr" width="200" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>' + '</p></li>').appendTo($('.messages ul'));
        $('.message-input input').val(null);
        $('.contact.active .preview').html('<span>You: </span>' + '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8436.305110455109!2d-46.59780175325357!3d-23.7842524104097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4735f206b833%3A0x625725f28a1dc125!2sSP-160%20-%20Batistini%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1574509887257!5m2!1spt-BR!2sbr" width="200" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>');
        $(".messages").animate({
            scrollTop: $(document).height()
        }, "fast");


        $('<li class="replies"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>Ok, qual o tipo do veículo?<br>digite 1 para passeio<br>digite 2 para carga<br>digite 3 para moto</p></li>').appendTo($('.messages ul'));
        $('.message-input input').val(null);
        $('.contact.active .preview').html('<span>You: </span> Ok, para solicitar o guincho, precisamos saber onde te encontrar, compartilhe sua localização conosco');
        $(".messages").animate({
            scrollTop: $(document).height()
        }, "fast");
    } else if ($.trim(message) == '') {
        return false;
    }
};

$('.submit').click(function() {
    newMessage();
});

$('.fa-map-marker').click(function() {
    $(".message-input input").val('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8436.305110455109!2d-46.59780175325357!3d-23.7842524104097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4735f206b833%3A0x625725f28a1dc125!2sSP-160%20-%20Batistini%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1574509887257!5m2!1spt-BR!2sbr" width="200" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>');
    newMessage();
});

$(window).on('keydown', function(e) {
    //if (e.which == 13) {
    //  newMessage();
    // return false;
    //}
});
//# sourceURL=pen.js
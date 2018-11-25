$(document).ready(function(){

    $("#myTopNav").on("click","a", function (event) {

//отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();
//збираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){

    $("#MainCats").on("click","a", function (event) {

//отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();
//збираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

function scrollToCat(idsh) {

}

function changeImg(source)
{
    document.pict1.src = 'img/' + source + '.png';
};
function changeImg2(source)
{
    document.pict2.src = 'img/' + source + '.png';
};
function changeImg3(source)
{
    document.pict3.src = 'img/' + source + '.png';
};
function changeCat(source) {
    document.cat_photo.src = 'img/' + source + '.png';
}
function changeUp(source) {
    document.toTop.src = 'img/' + source + '.png';
}

function fill_form(source){
    document.getElementById('form_cat_name').value = source ;
}
$(function() {

    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function() {

        $('body,html').animate({scrollTop:0},800);

    });

});


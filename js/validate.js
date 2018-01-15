$(document).ready(function() {

    $('[type="submit"]').on("click", function() {
        return validate($(this).parents(".js_validate"));
    });


});

function validate(form, paramId) {
    var error_class = "has-error";
    var norma_class = "has-success";
    var item = form.find("[required]");
    var e = 0;
    var reg = undefined;
    var pass = form.find('.password').val();
    var pass_1 = form.find('.password_1').val();
    var email = false;
    var password = false;
    var passportSeries = false;
    var passportNumber = false;
    var passportReestr = false;
    var passportNumberDoc = false;
    var phone = false;
    var card = false;
    var passport = false;
    var inn = false;
    var cyrilic = false;
    var numberNotZero = false;
    var studentId = false;

    var flagValidInn = false; // флаг валидности ИНН

    function mark(object, expression) {
        if (expression) {
            object.parent('div').addClass(error_class).removeClass(norma_class);
            if (email && (object.val().length == 0)) {}
            if (email && (object.val().length > 0)) {}
            if (password && (object.val().length > 0)) {}
            if (phone && (object.val().length > 0)) {}
            if (card && (object.val().length > 0)) {}
            if (numberNotZero && (object.val().length > 0)) {}
            if (inn && (object.val().length > 0) && !flagValidInn) { $('#error_check_inn').removeClass('hidden'); }

            $(object.closest(".js-address")).removeClass('hidden'); // если валидация не прошла, открываем поля с адресом

            e++;
        } else
            object.parent('div').addClass(norma_class).removeClass(error_class);
    }
    var idValidate = (paramId != undefined) ? '[id="' + paramId + '"]' : '';
    form.find("[required]" + idValidate).each(function() {
        switch ($(this).attr("data-validate")) {
            case undefined:
                mark($(this), $.trim($(this).val()).length === 0);
                break;
            case "email":
                email = true;
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                mark($(this), !reg.test($.trim($(this).val())));
                email = false;
                break;
            case "phone":
                phone = true;
                reg = /[0-9 -()+]$/;
                mark($(this), !reg.test($.trim($(this).val())));
                phone = false;
                break;
            case "pass":
                password = true;
                reg = /(?=^.{6,}$)(?=.*\d.*)(?=.*[A-ZА-Я].*)(?=.*[a-zа-я].*)(?=.*\W?.*).*$/;
                mark($(this), !reg.test($.trim($(this).val())));
                password = false;
                break;
            case "card":
                card = true;
                reg = /\d\d\d\d \d\d\d\d \d\d\d\d \d\d\d\d/;
                mark($(this), !reg.test($.trim($(this).val())));
                card = false;
                break;
            case "passport":
                passport = true;
                reg = /\W\W\d\d\d\d\d\d/;
                mark($(this), !reg.test($.trim($(this).val())));
                passport = false;
                break;
            case "passportSeries":
                passportSeries = true;
                reg = /\W\W/;
                mark($(this), !reg.test($.trim($(this).val())));
                passportSeries = false;
                break;
            case "passportNumber":
                passportNumber = true;
                reg = /\d\d\d\d\d\d/;
                mark($(this), !reg.test($.trim($(this).val())));
                passportNumber = false;
                break;
            case "passportReestr":
                passportReestr = true;
                reg = /\d\d\d\d\d\d\d\d-\d\d\d\d\d/;
                mark($(this), !reg.test($.trim($(this).val())));
                passportReestr = false;
                break;
            case "passportNumberDoc":
                passportNumberDoc = true;
                reg = /\d\d\d\d\d\d\d\d\d/;
                mark($(this), !reg.test($.trim($(this).val())));
                passportNumberDoc = false;
                break;
            case "inn":
                inn = true;
                reg = /\d\d\d\d\d\d\d\d\d\d/;
                var innVal = $.trim($(this).val());
                flagValidInn = isValidInn(innVal);
                mark($(this), !reg.test(innVal) || !flagValidInn);
                inn = false;
                break;
            case "pass1":
                mark($(this), (pass_1 !== pass || $.trim($(this).val()).length === 0));
                break;
            case "number_not_zero":
                numberNotZero = true;
                reg = /[1-9]\d*/;
                mark($(this), !reg.test($.trim($(this).val())));
                numberNotZero = false;
                break;
            case "cyrilic":
                cyrilic = true;
                reg = /^[ІіЇїЄєЁёҐґа-яА-Я\-\s`,\."]+$/;

                mark($(this), !reg.test($.trim($(this).val())));
                cyrilic = false;
                break;
            case "studentId":
                studentId = true;
                reg = /\S{2,20}/;
                mark($(this), !reg.test($.trim($(this).val())));
                studentId = false;
                break;
            default:
                reg = new RegExp($(this).attr("data-validate"), "g");
                mark($(this), !reg.test($.trim($(this).val())));
                break
        }
    })
    $('.js_valid_radio').each(function() {
        var inp = $(this).find('input.required');
        var rezalt = 0;
        for (var i = 0; i < inp.length; i++) {
            if ($(inp[i]).is(':checked') === true) {
                rezalt = 1;
                break;
            } else {
                rezalt = 0;
            }
        }
        if (rezalt === 0) {
            $(this).addClass(error_class).removeClass(norma_class);
            e = 1;
        } else {
            $(this).addClass(norma_class).removeClass(error_class);
        }
    })
    if (e == 0) {
        return true;
    } else {
        form.find(".has-error").eq(0).children();
        return false;
    }
}
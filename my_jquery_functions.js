$(document).ready(function () {
    $("#tabs").tabs();

    /*Надпись "Автопортрет" исчезает и появляется при клике*/
    $("#hide").click(function () {
        $("#h3").hide(1000);
    });
    $("#show").click(function () {
        $("#h3").show(1000);
    });

    /*При наведении курсора на заголовок, появляется сообщение*/
    $("h1").mouseenter(function () {
        alert("Van Gogh");
    });

    /*Изменение цвета поля формы при установке курсора*/
    $("input").focus(function () {
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function () {
        $(this).css("background-color", "#E3F2F7");
    });

    /* При нажатии на кнопку разворачиваются/скрываются факты */
    $("#button1").click(function () {
        $("#note1").fadeToggle(1000);
        $("#note2").fadeToggle(2000);
    });

    /*Кнопка "Узнать больше"*/
    $("#button2").click(function () {
        alert($("#s1").attr("href"));
    });

    /*Кнопка "Очистить таблицу"*/
    $("#button3").click(function () {
        $("td").empty();
    });

    /*Кнопка "Изменить цвет" меняет цвет предложения*/
    $("#button4").click(function () {
        $("td").toggleClass("blue");
    });

    /* Задаётся значение цвета фона для всех совпадающих элементов*/
    $("#button5").click(function () {
        $("p").css("background-color", "#E3F2F7");
    });

    /* Разворачивает блок с текстом "Признание и продажи" при нажатии*/
    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
    });

     /*Оформляемый элемент*/
    $("#but1").click(function () {
        $("#testcontainer").hide($("#effect1").val(), {}, 1000);
    });
    $("#but2").click(function () {
        $("#testcontainer").show($("#effect1").val(), {}, 1000);
    });


/*Плагины*/

    /* Перетаскиваемое окно*/
    $("#drag").draggable();

    /*Можно расставить пункты списка в желаемом порядке*/
    $("#sortable").sortable();
    $("#sortable").disableSelection();


/*Виджеты*/

    /* окно с нескольктими видами открытия*/
    $("#tabs").tabs();
    //Код первой вкладки (стандартное использование)
    $("#accordion1").accordion();
    //Код второй вкладки (без подгона высоты)
    $("#accordion2").accordion({ autoHeight: false });
    //Код третьей вкладки (сворачивание активной вкладки)
    $("#accordion3").accordion({ autoHeight: false, collapsible: true });
    //Код четвертой вкладки (открытие при наведении)
    $("#accordion4").accordion({ autoHeight: false, event: "mouseover" });

    /*Диалоговое окно*/
    $("#dialog1").dialog();



   




});


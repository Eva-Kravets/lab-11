$(document).ready(function () {
    $("#tabs").tabs();

    /*������� "�����������" �������� � ���������� ��� �����*/
    $("#hide").click(function () {
        $("#h3").hide(1000);
    });
    $("#show").click(function () {
        $("#h3").show(1000);
    });

    /*��� ��������� ������� �� ���������, ���������� ���������*/
    $("h1").mouseenter(function () {
        alert("Van Gogh");
    });

    /*��������� ����� ���� ����� ��� ��������� �������*/
    $("input").focus(function () {
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function () {
        $(this).css("background-color", "#E3F2F7");
    });

    /* ��� ������� �� ������ ���������������/���������� ����� */
    $("#button1").click(function () {
        $("#note1").fadeToggle(1000);
        $("#note2").fadeToggle(2000);
    });

    /*������ "������ ������"*/
    $("#button2").click(function () {
        alert($("#s1").attr("href"));
    });

    /*������ "�������� �������"*/
    $("#button3").click(function () {
        $("td").empty();
    });

    /*������ "�������� ����" ������ ���� �����������*/
    $("#button4").click(function () {
        $("td").toggleClass("blue");
    });

    /* ������� �������� ����� ���� ��� ���� ����������� ���������*/
    $("#button5").click(function () {
        $("p").css("background-color", "#E3F2F7");
    });

    /* ������������� ���� � ������� "��������� � �������" ��� �������*/
    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
    });

     /*����������� �������*/
    $("#but1").click(function () {
        $("#testcontainer").hide($("#effect1").val(), {}, 1000);
    });
    $("#but2").click(function () {
        $("#testcontainer").show($("#effect1").val(), {}, 1000);
    });


/*�������*/

    /* ��������������� ����*/
    $("#drag").draggable();

    /*����� ���������� ������ ������ � �������� �������*/
    $("#sortable").sortable();
    $("#sortable").disableSelection();


/*�������*/

    /* ���� � ������������ ������ ��������*/
    $("#tabs").tabs();
    //��� ������ ������� (����������� �������������)
    $("#accordion1").accordion();
    //��� ������ ������� (��� ������� ������)
    $("#accordion2").accordion({ autoHeight: false });
    //��� ������� ������� (������������ �������� �������)
    $("#accordion3").accordion({ autoHeight: false, collapsible: true });
    //��� ��������� ������� (�������� ��� ���������)
    $("#accordion4").accordion({ autoHeight: false, event: "mouseover" });

    /*���������� ����*/
    $("#dialog1").dialog();



   




});


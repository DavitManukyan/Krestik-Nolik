$(document).ready(function() {
    let exit_flag = false;
    let exit_flag1 = false;
    let znak_user = 'x';
    let znak_comp = 'o';
    let start = '';
    let num;
    let fontSize = 0;
    let rand_num = 1;
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $(".popup_in1").on("click", ".button_count", function() {
        let val = $(".inp").val();
        div = val //khaytararenq senc vor cankacac funkciai mej ereva
        qanak = div * div; //khaytararenq senc vor cankacac funkciai mej ereva --GLOBAL POPOXAKAN KSTEXCI aranc var,let
        rand_num = Math.round((Math.random() * (qanak - 1) + 1));
        if (div < 3) {
            $(".krestiki_noliki").outerWidth("100px");
            fontSize = 25;
        } else if (div < 8) {
            $(".krestiki_noliki").outerWidth("250px")
            fontSize = 30;
        } else if (div < 25) {
            $(".krestiki_noliki").outerWidth("450px")
            fontSize = 20;
        } else {
            $(".krestiki_noliki").outerWidth("800px")
            fontSize = 15;
        }

        let width_div = $(".krestiki_noliki").width()
        width_div_in = width_div / div;
        $(".popup1").css("display", "none")
        getHtml();
        $(".block").each(function() {
            $(this).outerWidth(width_div_in + "px").outerHeight(width_div_in + "px").css({ "lineHeight": `${width_div_in}px`, "fontSize": fontSize })
        })
    })

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //aystex khaskananq ove skselu xax@
    $('.comp_class').on("click", function() {
        num = 1;
        start = "comp"
        user();

        $('.cell' + rand_num).text(znak_comp).addClass('add');
        $('.popup').css('display', 'none');
    });

    $('.user_class').on("click", function() {
        num = 2;
        start = "user"
        user();
        $('.popup').css('display', 'none');
    });

    function user() {
        if (num == 1) {
            znak_user = 'o';
            znak_comp = 'x';
        } else if (num == 2) {
            znak_user = 'x';
            znak_comp = 'o';
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $('body').on("click", ".game .block", function() {
        if (exit_flag) { 
            return false;
        }
        let that = $(this)
        if ($(this).text() == '') {
            $(this).text(znak_user).addClass('add');
            if (exit_flag == false) {
                foo1(that, znak_user);
                foo2(that, znak_user);
                foo3(that, znak_user);
                foo4(that, znak_user);
                rand_number();
                for (let i = 1; i < qanak + 1; i++) {
                    foo1($('.cell' + i), znak_comp);
                    foo2($('.cell' + i), znak_comp);
                    foo3($('.cell' + i), znak_comp);
                    foo4($('.cell' + i), znak_comp);
                    nobody();
                }

                nobody();
            } else exit_flag = true;
        }

    });

    ///////////////////////////////////////////////////////////////////////////////////////

    function rand_number() {
        find_val = false;
        let val_div = div;
        let start_user = start;
        let qanak_div = qanak;

        
        if (exit_flag == false && find_val == false) {
            for (let i = 1; i < qanak + 1; i++) {
                find1(val_div, start_user, $('.cell' + i));
                find2(val_div, start_user, $('.cell' + i));
                find3(val_div, start_user, $('.cell' + i));
                find4(val_div, start_user, $('.cell' + i));
            }
        }

        if (exit_flag == false && find_val == false) {
            for (let i = 1; i < qanak + 1; i++) {
                find11(val_div, start_user, $('.cell' + i));
                find22(val_div, start_user, $('.cell' + i));
                find33(val_div, start_user, $('.cell' + i));
                find44(val_div, start_user, $('.cell' + i));
            }
        }

        if (($('.add').length != qanak) && (find_val == false) && (exit_flag == false)) {
            let i = true;
            while (i) {
                let rand_num1 = Math.round((Math.random() * (qanak - 1) + 1));
                if ($('.cell' + rand_num1).text() == '') {
                    $('.cell' + rand_num1).text(znak_comp).addClass('add');
                    i = false;
                }
            }
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function getHtml() {
        let html = '';
        let count = 0;
        for (let i = 1, k = 0; i < div + 1, k < div; i++, k++) {
            html += `<div class="block${i} block_parent clearfix" id="block${i}">`;
            for (let y = 1, g = 0; y < div + 1, g < div; y++, g++) {
                count++;
                html += `<div class='block cell${count} bl${y}' id="${k}${g}" data-div="${count}" data-count="${y}"></div>`;
            }
            html += `</div>`;
        }
        $(".game").html(html)
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function foo1(that, value) {
        //  if (exit_flag == false) {
        let parent = that.parent();
        let child = parent.children();
        let x = 0;
        let arr = []
        child.each(function(index, elem) {
            if ($(this).text() == value) {
                x++;
                if (x == div) {
                    child.each(function() {
                        exit_flag = true;
                        $(this).css("backgroundColor", 'red');
                        if (value == "x" && start == "user") {
                            $('.result').text('Դուք հաղթեցիք').css('color', '#84E1C3');
                            $('.reset').css('display', 'block');
                        } else if (value == "o" && start == "comp") {
                            $('.result').text('Դուք հաղթեցիք').css('color', '#84E1C3');
                            $('.reset').css('display', 'block');
                        } else {
                            $('.result').text('Դուք պարտվեցիք!').css('color', '#FD001A');
                            $('.reset').css('display', 'block');
                        }

                    })
                }
            }
        });
        //    }
    }

    function foo2(that, value) {
        //    if (exit_flag == false) {
        let data_div = that.data('div');
        let vl = 0;
        let popoxakan = 1;
        let array_val = [];
        let div_number = parseInt(div);
        for (let i = data_div; i > 0; i -= div_number) {
            popoxakan = i;
        }

        for (let i = popoxakan; i < qanak + 1; i += div_number) {
            let ss = $(".cell" + [i])[0].id;
            if (($("#" + ss).text() == value)) {
                vl++;
                array_val.push([ss])
                if (vl == div_number) {
                    exit_flag = true;
                    for (let i = 0; i < array_val.length; i++) {
                        $("#" + array_val[i]).css("backgroundColor", 'red');
                        if (value == "x" && start == "user") {
                            $('.result').text('Դուք հաղթեցիք').css('color', '#84E1C3');
                            $('.reset').css('display', 'block');
                        } else if (value == "o" && start == "comp") {
                            $('.result').text('Դուք հաղթեցիք').css('color', '#84E1C3');
                            $('.reset').css('display', 'block');
                        } else {
                            $('.result').text('Դուք պարտվեցիք!').css('color', '#FD001A');
                            $('.reset').css('display', 'block');
                        }
                    }
                }
            }
        }
        //    }
    }

    function foo3(that, value) {
        //    if (exit_flag == false) {
        let data_div = that.data('div');
        let vl = 0;
        let popoxakan = 1;
        let array_val = [];
        let array_val1 = [];
        let div_number = parseInt(div);
        let o = 0;

        for (let i = data_div; i > 0; i -= div_number + 1) {
            popoxakan = i;
        }

        for (let i = popoxakan; i < qanak + 1; i += div_number + 1) {
            let ss = $(".cell" + [i])[0].id;
            if (($("#" + ss).text() == value)) {
                vl++;
                array_val.push([ss])
                if (vl == div_number) {
                    exit_flag = true;
                    for (let i = 0; i < array_val.length; i++) {
                        $("#" + array_val[i]).css("backgroundColor", 'red');
                        if (value == "x" && start == "user") {
                            $('.result').text('Դուք հաղթեցիք').css('color', '#84E1C3');
                            $('.reset').css('display', 'block');

                        } else if (value == "o" && start == "comp") {
                            $('.result').text('Դուք հաղթեցիք').css('color', '#84E1C3');
                            $('.reset').css('display', 'block');
                        } else {
                            $('.result').text('Դուք պարտվեցիք!').css('color', '#FD001A');
                            $('.reset').css('display', 'block');

                        }
                    }
                }
            }
        }

        //   }
    }

    function foo4(that, value) {
        //  if (exit_flag == false) {
        let count = 0;
        let array_val = [];
        let div_number = parseInt(div);
        let open = div_number;

        for (let i = 0; i < div_number; i++) {
            for (let y = 0; y < open; y++) {
                if (y == open - 1 && $("#" + [i] + [y]).text() == value) {
                    open--;
                    count++;
                    let ss = $("#" + [i] + [y])[0].id;
                    array_val.push([ss])
                    if (count == div_number) {
                        exit_flag = true;
                        for (let i = 0; i < array_val.length; i++) {
                            $("#" + array_val[i]).css("backgroundColor", 'red');
                            if (value == "x" && start == "user") {
                                $('.result').text('Դուք հաղթեցիք').css('color', '#84E1C3');
                                $('.reset').css('display', 'block');
                            } else if (value == "o" && start == "comp") {
                                $('.result').text('Դուք հաղթեցիք').css('color', '#84E1C3');
                                $('.reset').css('display', 'block');
                            } else {
                                $('.result').text('Դուք պարտվեցիք!').css('color', '#FD001A');
                                $('.reset').css('display', 'block');
                            }
                        }
                    }
                }
            }
        }
        //    }
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function nobody() {
        if (exit_flag == false && exit_flag1 == false) {
            let count = 0;
            $(".block").each(function() {
                if ($(this).hasClass("add")) {
                    count++;
                }
                if (count == qanak) {
                    $('.result').text('Ոչ ոքի').css('color', '#84E1C3');
                    $('.reset').css('display', 'block');
                    exit_flag = true;
                }
            })
        }
    }


    $('.reset').on("click", function() {
        $('.popup, .popup1').css('display', 'block');
        for (let i = 1; i < qanak + 1; i++) {
            $('.cell' + [i]).text("").css("background-color", "#fff");
            $('.result').text('');
            $('.reset').css('display', 'none');
            $('.block').removeClass('add');
            exit_flag = false;
            exit_flag1 = false;
            find_val == false;
        }
    });



    /////////////////////////////////////////////////////////////////////////////////////
    //Kstugi ete menq 2hat nuynic drelenq kpagi toxov.
    function find1(val_div, start_user, that) {
        if (find_val == false) {
            let o = 0;
            let parent = that.parent();
            let child = parent.children();
            let array_val_o = [];
            child.each(function() {
                //KSTUGI ETE HAMAKARGICH@ UNI NUYNIC IRAN@ AVTOMAT KTEXADRI VERJIN@
                if (((start_user == "user" && ($(this).text() == "o")) || (start_user == "comp" && ($(this).text() == "x"))) && find_val == false) {
                    o++;
                    array_val_o.push($(this)[0].id)
                    if (o == (val_div - 1)) {
                        let el_o = $("#" + array_val_o[0]);
                        let parent_el_o = el_o.parent();
                        let child_el_o = parent_el_o.children();
                        child_el_o.each(function() {
                            if ($(this).text() == '') {
                                if (start_user == "comp") {
                                    val_name = 'x';
                                } else if (start_user == "user") {
                                    val_name = 'o';
                                }
                                $(this).text(val_name).addClass('add');
                                find_val = true;
                            }
                        })
                    }
                }
            })
        }
    }

    function find11(val_div, start_user, that) {
        if (find_val == false) {
            let x = 0;
            let array_val = [];
            let parent = that.parent();
            let child = parent.children();
            child.each(function() {
                //KSTUGI ETE MENQ UNENQ NUYNIC_KMNA MIAT VOR HAXTENQ AVTOMAT AYD KPAKI_toxov
                if (((start_user == "user" && ($(this).text() == "x")) || (start_user == "comp" && ($(this).text() == "o"))) && find_val == false) {
                    x++;
                    array_val.push($(this)[0].id)
                    if (x == (val_div - 1)) {
                        let el = $("#" + array_val[0]);
                        let parent_el = el.parent();
                        let child_el = parent_el.children();
                        child_el.each(function() {
                            if ($(this).text() == '') {
                                if (start_user == "comp") {
                                    val_name = 'x';

                                } else if (start_user == "user") {
                                    val_name = 'o';

                                }
                                $(this).text(val_name).addClass('add');
                                find_val = true;
                            }
                        })
                    }
                }
            })
        }
    }


    function find2(val_div, start_user, that) {
        if (find_val == false) {
            let data_div = that.data('div');
            let popoxakan1 = 1;
            let o = 0;
            let div_number = parseInt(div); 
            for (let i = data_div; i > 0; i -= div_number) {
                popoxakan = i;
            }
            //ETE IRAN@ MNA MIAT KTEXADRI VOR HAXTI --SYUNAKOV
            for (let i = 1; i < qanak + 1; i++) {
                if ((($(".cell" + i).text() == "x" && start_user == "comp") || ($(".cell" + i).text() == "o" && start_user == "user")) && find_val == false) {
                    o = 0;
                    popoxakan1 = $(".cell" + i).data('count');

                    for (let y = 1; y < qanak + 1; y++) {
                        if ($(".cell" + y).data('count') == popoxakan1) {
                            if (start_user == "comp") {
                                var_name1 = 'x';
                            } else if (start_user == "user") {
                                var_name1 = 'o';
                            }
                            if ($(".cell" + y).text() == var_name1) {
                                o++
                                if (o == div_number - 1) {
                                    for (let i = 1; i < qanak + 1; i++) {
                                        if (($(".cell" + i).data('count') == popoxakan1) && $(".cell" + i).text() == "") {
                                            $(".cell" + i).text(var_name1).addClass('add')
                                            find_val = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    function find22(val_div, start_user, that) {
        if (find_val == false) {
            let data_div = that.data('div');
            let popoxakan = 1;
            let x = 0;
            let array_val = [];
            let div_number = parseInt(div); 
            for (let i = data_div; i > 0; i -= div_number) {
                popoxakan = i;
            }
            //KSTUGI ETE MENQ UNENQ NUYNIC_KMNA MIAT VOR HAXTENQ AVTOMAT AYD KPAKI--SYUNAKOV
            for (let i = popoxakan; i < qanak + 1; i += div_number) {
                let ss = $(".cell" + [i])[0].id;
                if (((start_user == "user" && ($("#" + ss).text() == "x")) || (start_user == "comp" && ($("#" + ss).text() == "o"))) && find_val == false) {
                    x++;
                    array_val.push($(".cell" + i)[0].id);
                    if (x == (val_div - 1)) {
                        let el = $("#" + array_val[0]).data('count');
                        for (let i = 0; i < div_number; i++) {
                            for (let y = 0; y < div_number; y++) {
                                if (($("#" + [i] + [y]).data('count') == el) && ($("#" + [i] + [y]).text() == "")) {
                                    if (start_user == "comp") {
                                        var_name1 = 'x';
                                    } else if (start_user == "user") {
                                        var_name1 = 'o';
                                    }
                                    $("#" + [i] + [y]).text(var_name1).addClass('add');
                                    find_val = true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    function find3(val_div, start_user, that) {
        if (that[0].id == "00" && find_val == false) {
            let div_number = parseInt(div);
            let count = 0;

            //inq@ khaxti ete mna miat
            for (let i = 1; i < qanak + 1; i += div_number + 1) {
                let ss = $(".cell" + [i])[0].id;
                if ((($(".cell" + i).text() == "x" && start_user == "comp") || ($(".cell" + i).text() == "o" && start_user == "user")) && find_val == false) {
                    if (start_user == "comp") {
                        var_name7 = 'x';
                    } else if (start_user == "user") {
                        var_name7 = 'o';
                    }
                    if ($(".cell" + i).text() == var_name7) {
                        count++;
                        if (count == div_number - 1) {
                            for (let i = 1; i < qanak + 1; i += div_number + 1) {
                                if ($(".cell" + i).text() == "") {
                                    $(".cell" + i).text(var_name7).addClass('add');
                                    find_val = true;
                                }
                            }
                        }
                    }

                }
            }
        }
    }


    function find33(val_div, start_user, that) {
        if (that[0].id == "00" && find_val == false) {
            let div_number = parseInt(div);
            let count = 0;

            //CHI TOXI VOR MENQ HAXTENQ
            for (let i = 1; i < qanak + 1; i += div_number + 1) {
                let ss = $(".cell" + [i])[0].id;
                if (((start_user == "user" && ($("#" + ss).text() == "x")) || (start_user == "comp" && ($("#" + ss).text() == "o"))) && find_val == false) {
                    if (start_user == "comp") {
                        var_name5 = 'o';
                        var_name6 = 'x';
                    } else if (start_user == "user") {
                        var_name5 = 'x';
                        var_name6 = 'o';
                    }
                    if ($(".cell" + i).text() == var_name5) {
                        count++;
                        if (count == div_number - 1) {
                            for (let i = 1; i < qanak + 1; i += div_number + 1) {
                                if ($(".cell" + i).text() == "") {
                                    $(".cell" + i).text(var_name6).addClass('add');
                                    find_val = true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    function find4(val_div, start_user, that) {
        if (find_val == false) {
            let array_val = [];
            let div_number = parseInt(div);
            let open = div_number - 1;
            let open1 = div_number - 1;
            let count = 0;

            if (start_user == "comp") {
                var_name10 = 'x';
            } else if (start_user == "user") {
                var_name10 = 'o';
            }
            //inq@ khaxti ete mna miat
            for (let i = 0; i < div_number; i++) {
                for (let y = open; y < open + 1; y++) {
                    open--;
                    let ss = $("#" + [i] + [y])[0].id;
                    array_val.push(ss)
                }
            }
            for (let i = 0; i < div_number; i++) {
                for (let y = open1; y < open1 + 1; y++) {
                    open1--;
                    if ($("#" + [i] + [y]).text() == var_name10) {
                        count++;
                    }
                }
            }
            if (count == div_number - 1) {
                for (let i = 0; i < array_val.length; i++) {
                    let ss = array_val[i];
                    if ($("#" + ss).text() == "") {
                        find_val = true;
                        $("#" + ss).text(var_name10).addClass('add');
                    }
                }
            }
        }
    }

    function find44(val_div, start_user, that) {
        if (find_val == false) {
            let array_val = [];
            let div_number = parseInt(div);
            let open = div_number - 1;

            if (start_user == "comp") {
                var_name10 = 'x';
            } else if (start_user == "user") {
                var_name10 = 'o';
            }

            for (let i = 0; i < div_number; i++) {
                for (let y = open; y < open + 1; y++) {
                    open--;
                    let ss = $("#" + [i] + [y])[0].id;
                    array_val.push(ss)
                }
            }

            //CHI TOXI VOR MENQ HAXTENQ
            let count_x = 0;
            for (let i = 0; i < array_val.length; i++) {
                let ss = $("#" + array_val[i]).text();
                if (((start_user == "user" && (ss == "x")) || (start_user == "comp" && (ss == "o"))) && find_val == false) {
                    count_x++;
                    if (count_x == div_number - 1) {
                        for (let i = 0; i < array_val.length; i++) {
                            if ($("#" + array_val[i]).text() == "") {
                                find_val = true;
                                $("#" + array_val[i]).text(var_name10).addClass('add');
                            }
                        }
                    }
                }
            }
        }
    }
});
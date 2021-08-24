let point = 0;

window.onscroll = function showHeader() {
    console.log(window.pageYOffset);
    var header = document.querySelector('.header')

    if (window.pageYOffset > 300) {
        header.classList.add('header-fixed');
        header.classList.remove('header-top');
    }
    else if (window.pageYOffset < 10) {
        header.classList.remove('header-fixed');
        header.classList.add('header-top');
    }
}

window.addEventListener('scroll', function () {
    var scrollDistance = window.pageYOffset;
    var list = document.querySelectorAll('.section')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el, i) {
        var x = 300;
        if (window.innerWidth > 1366) {
            x = 600;
        }
        else if (window.innerWidth > 1920) {
            x = 1000;
        }

        if (el.offsetTop - x - document.querySelector('.header').clientHeight <= scrollDistance) {
            var list1 = document.querySelectorAll('.link')
            var listArray1 = Array.prototype.slice.call(list1);
            listArray1.forEach(function (el) {
                if (el.classList.contains('active')) {
                    el.classList.remove('active')
                }
            });
            var list2 = document.querySelectorAll('.link-line')
            var listArray2 = Array.prototype.slice.call(list2);
            listArray2.forEach(function (el) {
                if (el.classList.contains('active-line')) {
                    el.classList.remove('active-line')
                }
            });
            var elClass = '.link' + i;
            var elLineClass = '.line' + i;
            document.querySelector(elClass).classList.add('active');
            document.querySelector(elLineClass).classList.add('active-line');

            if (i == 0) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress1')
            }
            else if (i == 1) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress2')
            }
            else if (i == 2) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress3')
            }

            else if (i == 3) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress4')
            }
            else if (i == 4) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress5')
            }

            else if (i == 5) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress6')
            }

            else if (i == 6) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress7')
            }

            else if (i == 7) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress8')
            }
        }
    })
})

function clearClass() {
    let el = document.querySelector('.image-progress');

    if (el.classList.contains('image-progress1')) {
        el.classList.remove('image-progress1');
        return 0;
    }

    if (el.classList.contains('image-progress2')) {
        el.classList.remove('image-progress2');
        return 0;
    }

    if (el.classList.contains('image-progress3')) {
        el.classList.remove('image-progress3');
        return 0;
    }

    if (el.classList.contains('image-progress4')) {
        el.classList.remove('image-progress4');
        return 0;
    }

    if (el.classList.contains('image-progress5')) {
        el.classList.remove('image-progress5');
        return 0;
    }

    if (el.classList.contains('image-progress6')) {
        el.classList.remove('image-progress6');
        return 0;
    }

    if (el.classList.contains('image-progress7')) {
        el.classList.remove('image-progress7');
        return 0;
    }

    if (el.classList.contains('image-progress8')) {
        el.classList.remove('image-progress8');
        return 0;
    }
}

function hoverButton() {
    var list = document.querySelectorAll('#glossaryImg')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        el.src = "./images/book-white.svg"
    })
}

function hoverButtonOut() {
    var list = document.querySelectorAll('#glossaryImg')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        el.src = "./images/book-orange.svg"
    })
}

function hoverButtonModal() {
    var list = document.querySelectorAll('.btn')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        el.classList.remove('btn');
        el.classList.add('btn-active');
        var list1 = document.querySelectorAll('.btn-p-not-active')
        var listArray1 = Array.prototype.slice.call(list1);
        listArray1.forEach(function (el) {
            el.classList.remove('btn-p-not-active')
            el.classList.add('btn-p-active')
        })
    })
}

function hoverButtonModalOut() {

    var list = document.querySelectorAll('.btn-active')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        el.classList.remove('btn-active');
        el.classList.add('btn');

        var list1 = document.querySelectorAll('.btn-p-active')
        var listArray1 = Array.prototype.slice.call(list1);
        listArray1.forEach(function (el) {
            el.classList.remove('btn-p-active')
            el.classList.add('btn-p-not-active')
        })
    })
}

function showModal() {
    var page = document.querySelector('html');
    var list = document.querySelectorAll('.modal-window')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        if (el.classList.contains('modal')) {
            el.classList.remove('modal');
            el.classList.add('modal-off');
            page.classList.remove('scroll-off')

        }
        else if (el.classList.contains('modal-off')) {
            el.classList.remove('modal-off');
            el.classList.add('modal');
            page.classList.add('scroll-off')
        }
    })
}


function showPopApp(el) {


    if (window.screen.width >= 1110) {
        switch (el.id) {
            case 'close':
                document.querySelector('.info-popapp').classList.add('info-popapp-pos');
                document.querySelector('.info-popapp').style.top = '0px';
                break;
            case 'a':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').style.left = "auto";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "<a>около 5%</a>";
                document.querySelector('.info-popapp-text').innerHTML = "<a href='https://rosstat.gov.ru' target = '_blank'>https://rosstat.gov.ru</a>";
                break;
            case 'b':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').style.left = "auto";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "<a>около 60%</a>";
                document.querySelector('.info-popapp-text').innerHTML = "<a href='https://rosstat.gov.ru' target = '_blank'>https://rosstat.gov.ru</a>";
                break;
            case 'c':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').style.left = "auto";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "6,0 м3/т";
                document.querySelector('.info-popapp-text').innerHTML = "Данные компаний.";
                break;
            case 'd':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').style.left = "auto";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = " Cu (8-45%)";
                document.querySelector('.info-popapp-text').innerHTML = "Богатый концентрат – Cu 25-45%.<br>Бедный концентрат – Cu до 25%, он подвергается доп. обжигу для окисления S и Fe и увеличение содержания Cu";
                break;
            case 'e':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').style.left = "auto";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Получение из шихты";
                document.querySelector('.info-popapp-text').innerHTML = "Состоит из медного концентрата и флюсов. В кач-ве топлива добавляют кокс (7-8% от общей массы)";
                break;
            case 'f':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').style.left = "auto";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Не более 2,5%";
                document.querySelector('.info-popapp-text').innerHTML = 'По оценке Банка.';
                break;
            case 'g':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').style.left = "auto";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "98,3% воды";
                document.querySelector('.info-popapp-text').innerHTML = "Данные компании.";
                break;
            case 'h':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').style.left = "auto";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "За последние годы";
                document.querySelector('.info-popapp-text').innerHTML = 'Данные компании.';
                break;
            case 'i':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Постановление Правительства";
                document.querySelector('.info-popapp-text').innerHTML = "Постановление Правительства РФ №1683 от 16 декабря 2019 г.";
                break;
            case 'j':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "№223-ФЗ";
                document.querySelector('.info-popapp-text').innerHTML = "Федеральный закон «О закупках товаров, работ, услуг отдельными видами юридических лиц» от 18.07.2011 N223-ФЗ.";
                break;
            case 'k':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "№44-ФЗ";
                document.querySelector('.info-popapp-text').innerHTML = "Федеральный закон «О контрактной системе в сфере закупок товаров, работ, услуг для обеспечения государственных и муниципальных нужд» от 05.04.2013 N44-ФЗ.";
                break;
            case 'l':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "СПИК";
                document.querySelector('.info-popapp-text').innerHTML = "Специальный инвестиционный контракт. Актуальные правила установлены Постановлением Правительства РФ №1048 от 16 июля 2020 г.";
                break;
            case 'm':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Субсидии";
                document.querySelector('.info-popapp-text').innerHTML = "Постановление Правительства РФ №1464 от 16 ноября 2019 г.";
                break;
        }
    }

    if (window.screen.width < 1110) {
        switch (el.id) {
            case 'close':
                document.querySelector('.info-popapp').classList.add('info-popapp-pos');
                document.querySelector('.info-popapp').style.top = '0px';
                document.querySelector('.info-popapp').style.top = '0px';
                document.querySelector('html').classList.remove('scroll-off');
                break;
            case 'a':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "<a>около 5%</a>";
                document.querySelector('.info-popapp-text').innerHTML = "<a href='https://rosstat.gov.ru' target = '_blank'>https://rosstat.gov.ru</a>";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'b':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "<a>около 60%</a>";
                document.querySelector('.info-popapp-text').innerHTML = "<a href='https://rosstat.gov.ru' target = '_blank'>https://rosstat.gov.ru</a>";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'c':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "6,0 м3/т";
                document.querySelector('.info-popapp-text').innerHTML = "Данные компаний.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'd':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = " Cu (8-45%)";
                document.querySelector('.info-popapp-text').innerHTML = "Богатый концентрат – Cu 25-45%.<br>Бедный концентрат – Cu до 25%, он подвергается доп. обжигу для окисления S и Fe и увеличение содержания Cu";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'e':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Получение из шихты";
                document.querySelector('.info-popapp-text').innerHTML = "Состоит из медного концентрата и флюсов. В кач-ве топлива добавляют кокс (7-8% от общей массы)";
                break;
            case 'f':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Не более 2,5%";
                document.querySelector('.info-popapp-text').innerHTML = 'По оценке Банка.';
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'g':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "98,3% воды";
                document.querySelector('.info-popapp-text').innerHTML = "Данные компании.";
                document.querySelector('html').classList.add('scroll-off');
                break;

            case 'h':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "За последние годы";
                document.querySelector('.info-popapp-text').innerHTML = 'Данные компании.';
                document.querySelector('html').classList.add('scroll-off');
                break;

            case 'i':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Постановление Правительства";
                document.querySelector('.info-popapp-text').innerHTML = "Постановление Правительства РФ №1683 от 16 декабря 2019 г.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'j':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "№223-ФЗ";
                document.querySelector('.info-popapp-text').innerHTML = "Федеральный закон «О закупках товаров, работ, услуг отдельными видами юридических лиц» от 18.07.2011 N223-ФЗ.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'k':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "№44-ФЗ";
                document.querySelector('.info-popapp-text').innerHTML = "Федеральный закон «О контрактной системе в сфере закупок товаров, работ, услуг для обеспечения государственных и муниципальных нужд» от 05.04.2013 N44-ФЗ.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'l':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "СПИК";
                document.querySelector('.info-popapp-text').innerHTML = "Специальный инвестиционный контракт. Актуальные правила установлены Постановлением Правительства РФ №1048 от 16 июля 2020 г.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'm':
                document.querySelector('.info-popapp').style.top = window.scrollY + 73 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Субсидии";
                document.querySelector('.info-popapp-text').innerHTML = "Постановление Правительства РФ №1464 от 16 ноября 2019 г.";
                document.querySelector('html').classList.add('scroll-off');
                break;
        }

    }
}


function openNav() {
    document.querySelector('.nav-border').classList.toggle('nav-border-dis')
}

function closeNav() {
    document.querySelector('.nav-border').classList.toggle('nav-border-dis')
}

function dropDownContent(el) {
    el.classList.toggle('close');
}


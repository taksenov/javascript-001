
1) В html-разметке http://superiorcheck.ru/op/
для блока с классом class="tovar_cat" 
http://joxi.ru/Vm6v7edfQzLlmZ
Нужно внести следующие правки: http://joxi.ru/l2Z168eHBNvymJ
*добавить класс для <h5 class="tovar-name">TIS 03-40</h5>
*добавить классы для <input type="checkbox" class="compare-me unchek-me">

2) Заменить вот этот блок http://joxi.ru/Dr8vEeNfdPXl26
 на html-разметку, которая ниже

=====================================
<!-- filtr block -->
<div class="filtr">

    <div class="filtr__inner">

        <div class="filtr__option_1">
            <div class="filtr__option_1__inner">
                <div class="filtr__option_1__caption">
                    <span>
                        Длина кабеля (м):
                    </span>
                </div>
                <div class="filtr__option_1__list">
                    <ul>
                        <li>
                            <a href="#" class="link_dashed" id="length20">
                                20
                            </a>
                        </li>
                        <li>
                            <a href="#" class="link_dashed" id="length40">
                                40
                            </a>
                        </li>
                        <li>
                            <a href="#" class="link_dashed" id="length60">
                                60
                            </a>
                        </li>
                        <li>
                            <a href="#" class="link_dashed" id="length80">
                                80
                            </a>
                        </li>
                        <li>
                            <a href="#" class="link_dashed" id="length120">
                                120
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="filtr__option_2">
            <div class="filtr__option_2__caption">
                <span>
                    Диаметр труб (мм):
                </span>
            </div>


            <div id="slider" class="filtr__option_2__slider"></div>

            <div class="filtr_op_2__range_main">
                <div class="filtr__option_2__range range__text">
                    от
                </div>

                <div class="filtr__option_2__range range__marg-left">
                    <input type="text" id="firstdiam" value="10" class="range__input"/>
                </div>

                <div class="filtr__option_2__range range__text">
                    до
                </div>

                <div class="filtr__option_2__range range__marg-left">
                    <input type="text" id="seconddiam" value="500" class="range__input"/>
                </div>
            </div>

        </div>

        <div class="filtr__option_3">
                <div class="filtr__option_3__caption">
                    <span>
                        Влагозащита:
                    </span>
                </div>
                <div class="filtr__option_3__list">
                    <ul>
                        <li>
                            <a href="#" class="link_dashed" id="ip64">
                                ip64
                            </a>
                        </li>
                        <li>
                            <a href="#" class="link_dashed" id="ip65">
                                ip65
                            </a>
                        </li>
                        <li>
                            <a href="#" class="link_dashed" id="ip68">
                                ip68
                            </a>
                        </li>
                    </ul>
                </div>
        </div>

        <div class="filtr__option_4">
            <div class="filtr__option_4__checkbox filtr__option_4__checkbox_unchecked" id="rangecount">
                Счетчик расстояния
            </div>
            <div class="filtr__option_4__checkbox filtr__option_4__checkbox_unchecked" id="locator">
                Трансмиттер/локатор
            </div>
            <div class="filtr__option_4__checkbox filtr__option_4__checkbox_unchecked" id="autolevel">
                Автоуровнень
            </div>
        </div>

        <div class="filtr__option_5">
            <div class="filtr__button" id="filtersubmit">
                <span>
                    Применить фильтр
                </span>
            </div>
            <div class="filtr__reset">
                <div class="filtr__option_5__checkbox">
                    <a class="link_dashed" href="#" id="filterreset">
                        Очистить фильтр
                    </a>
                </div>
            </div>
        </div>

    </div>


</div>
<!-- filtr block -->
=====================================

3) В <head></head> файла index.html подключить следующие стили 
http://joxi.ru/bmokVQvTwXKYmy
* по необходимости прошу откорректировать пути

=====================================
<!-- стили для фильтра -->
<link rel="stylesheet" href="css/filter.css"/>
<link rel="stylesheet" href="ui-slider/jquery-ui.css"/>
<!-- стили для модального окна со сравнением товаров -->
<!-- FancyBox -->
<link rel="stylesheet" href="fancy/jquery.fancybox.css">
=====================================

4) В конце html-файла перед </body> подключить следующие скрипты 
http://joxi.ru/Q2KV7d0uMdDamj
* по необходимости прошу откорректировать пути

=====================================
<!-- Подключение скрипта с фильтром -->
<script type="text/javascript" src="ui-slider/jquery-ui.js"></script>
<script type="text/javascript" src="js/filter.js"></script>
<!-- Подключение скрипта с модулем сравнения -->
<script type="text/javascript" src="js/compare.js"></script>
<script type="text/javascript" src="js/comparemodal.js"></script>
<!-- FancyBox -->
<script type="text/javascript" src="fancy/jquery.fancybox.js"></script>
=====================================

5) в html файл добавить после футера код модального окна
http://joxi.ru/L21vbeRfvOEkAX

=====================================
<!-- модальное окно для сравнения товаров -->
<div style="display:none">
    <div id="order-popup-contact-person">

    <div class="modal-window__text">

        <div class="compare__table">
            <table border="0">
            <caption class="compare_modal__caption">Сравнение товаров</caption>
                <tr class="compare_table__header">
                    <th></th>
                    <th class="model1 compare__caption_align"></th>
                    <th class="model2 compare__caption_align"></th>
                </tr>

                <tr>
                    <td>Тип кейса</td>
                    <td class="casetype1"></td>
                    <td class="casetype2"></td>
                </tr>

                <tr>
                    <td>Общий вес</td>
                    <td class="grossweight1"></td>
                    <td class="grossweight2"></td>
                </tr>

                <tr>
                    <td>Диаметр труб</td>
                    <td class="pipediameter1"></td>
                    <td class="pipediameter2"></td>
                </tr>

                <tr>
                    <td>Длина кабеля</td>
                    <td class="cablelength1"></td>
                    <td class="cablelength2"></td>
                </tr>

                <tr>
                    <td>Цветной монитор</td>
                    <td class="colormonitor1"></td>
                    <td class="colormonitor2"></td>
                </tr>

                <tr>
                    <td>Диагональ монитора</td>
                    <td class="diagonalmolitor1"></td>
                    <td class="diagonalmolitor2"></td>
                </tr>

                <tr>
                    <td>Количество светодиодов</td>
                    <td class="numberleds1"></td>
                    <td class="numberleds2"></td>
                </tr>

                <tr>
                    <td>Угол обзора камеры</td>
                    <td class="cameraangle1"></td>
                    <td class="cameraangle2"></td>
                </tr>
                <tr>
                    <td>Влагозащищенность камеры</td>
                    <td class="dampproof1"></td>
                    <td class="dampproof2"></td>
                </tr>

                <tr>
                    <td>Диаметр камеры</td>
                    <td class="cameradiameter1"></td>
                    <td class="cameradiameter2"></td>
                </tr>
                <tr>
                    <td>Функция записи</td>
                    <td class="recording1"></td>
                    <td class="recording2"></td>
                </tr>

                <tr>
                    <td>Воспроизведение</td>
                    <td class="playback1"></td>
                    <td class="playback2"></td>
                </tr>
                <tr>
                    <td>Питание</td>
                    <td class="powertype1"></td>
                    <td class="powertype2"></td>
                </tr>

                <tr>
                    <td>Время работы аккумулятора</td>
                    <td class="batterytime1"></td>
                    <td class="batterytime2"></td>
                </tr>
                <tr>
                    <td>Встроенный трансмиттер</td>
                    <td class="transmitter1"></td>
                    <td class="transmitter2"></td>
                </tr>

                <tr>
                    <td>Счетчик расстояния</td>
                    <td class="counter1"></td>
                    <td class="counter2"></td>
                </tr>
                <tr>
                    <td>Автоуровень</td>
                    <td class="autolevel1"></td>
                    <td class="autolevel2"></td>
                </tr>
                <tr>
                    <td class="compare__prise_block">Цена</td>
                    <td class="price1 compare__prise_block"></td>
                    <td class="price2 compare__prise_block"></td>
                </tr>

                <tr>
                    <td class="non__border_bottom"></td>
                    <td class="non__border_bottom">
                        <div class="zak-mod">
                            <a class="zakaz zakaz-mod compare__from_modal" rel="leanModal" name="callback" href="#zakaz">
                                <button class="order-big open-consult-modal zakazat compare__button">
                                    <span>
                                        Заказать
                                    </span>
                                </button>
                            </a>
                        </div>
                    </td>
                    <td class="non__border_bottom">
                        <div class="zak-mod">
                            <a class="zakaz zakaz-mod compare__from_modal" rel="leanModal" name="callback" href="#zakaz">
                                <button class="order-big open-consult-modal zakazat compare__button">
                                    <span>
                                        Заказать
                                    </span>
                                </button>
                            </a>
                        </div>
                    </td>
                </tr>

            </table>
            </div>
    </div>
    </div>
</div> <!-- модальное окно для сравнения товаров -->
=====================================

6) Адрес на гитхабе откуда можно слить файлы:
https://github.com/taksenov/javascript-001















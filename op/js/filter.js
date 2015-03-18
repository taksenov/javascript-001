/**
 * Created by admin on 12.03.2015.
 */

(function() {

    var app = {

        // -- инициализация при загрузке js
        initialize : function () {
            var _this = this;

            _this.setUpListeners();
            _this.uiSlider();

            app.dampProof = '';          //переменная для типа влагозащиты
            app.cableLength = '';        //длина кабеля
            app.rangeCount = 0;          //чекбокс счетчика расстояния
            app.locator = 0;             //чекбокс трансмиттер/локатор
            app.autoLevel = 0;           //чекбокс автоуровень

            // JSON-Массив с характеристиками всех товаров. (можно использовать и ajax)
            //расшифровка массива
            // 1 = name; 2 = длина кабеля; 3 = влагозащита;
            // 4 = рабочие диаметры min; 5 = рабочие диаметры max;
            // 6 = счетчик расстояния; 7 = трансмиттер-локатор; 8 = автоуровень;
            app.arrayMaster = {
                'item1':  { 'model': 'TIS 01-20',    'cabellength': '20',  'dampproof': 'ip64', 'mindiam': '50', 'maxdiam': '200', 'counter': 0, 'locator': 0, 'autolevel': 0 },
                'item2':  { 'model': 'TIS 02-20',    'cabellength': '20',  'dampproof': 'ip65', 'mindiam': '50', 'maxdiam': '500', 'counter': 1, 'locator': 1, 'autolevel': 0 },
                'item3':  { 'model': 'TIS 03-40',    'cabellength': '40',  'dampproof': 'ip65', 'mindiam': '50', 'maxdiam': '500', 'counter': 1, 'locator': 1, 'autolevel': 0 },
                'item4':  { 'model': 'TIS 04-40',    'cabellength': '40',  'dampproof': 'ip65', 'mindiam': '50', 'maxdiam': '500', 'counter': 1, 'locator': 1, 'autolevel': 0 },
                'item5':  { 'model': 'TIS 05-40',    'cabellength': '40',  'dampproof': 'ip65', 'mindiam': '50', 'maxdiam': '500', 'counter': 1, 'locator': 0, 'autolevel': 0 },
                'item6':  { 'model': 'TIS 06-40',    'cabellength': '40',  'dampproof': 'ip65', 'mindiam': '10', 'maxdiam': '200', 'counter': 1, 'locator': 0, 'autolevel': 0 },
                'item7':  { 'model': 'TIS 07-40',    'cabellength': '40',  'dampproof': 'ip68', 'mindiam': '50', 'maxdiam': '500', 'counter': 1, 'locator': 1, 'autolevel': 0 },
                'item8':  { 'model': 'TIS 08-80SR',  'cabellength': '80',  'dampproof': 'ip68', 'mindiam': '50', 'maxdiam': '500', 'counter': 1, 'locator': 1, 'autolevel': 0 },
                'item9':  { 'model': 'TIS 08-80SR2', 'cabellength': '80',  'dampproof': 'ip68', 'mindiam': '50', 'maxdiam': '500', 'counter': 1, 'locator': 1, 'autolevel': 1 },
                'item10': { 'model': 'TIS 09-120/1', 'cabellength': '120', 'dampproof': 'ip68', 'mindiam': '60', 'maxdiam': '500', 'counter': 1, 'locator': 1, 'autolevel': 1 },
                'item11': { 'model': 'TIS 09-120M',  'cabellength': '120', 'dampproof': 'ip68', 'mindiam': '60', 'maxdiam': '500', 'counter': 1, 'locator': 1, 'autolevel': 1 },
                'item12': { 'model': 'TIS 09-120L',  'cabellength': '120', 'dampproof': 'ip68', 'mindiam': '60', 'maxdiam': '500', 'counter': 1, 'locator': 1, 'autolevel': 1 }
            };

            // пустой массив в который попадают названия отфильтрованных товаров
            app.arrayItemNames = [];

            // при загрузке диаметры нулевые
            app.firstDiam = 0;
            app.secondDiam = 0;



        },
         // -- инициализация при загрузке js

        // -- обработчик событий над DOM элементами на странице
        setUpListeners: function () {

            // -- выбор длины кабеля
            $('#length20').on('click', app.setLength20);
            $('#length40').on('click', app.setLength40);
            $('#length60').on('click', app.setLength60);
            $('#length80').on('click', app.setLength80);
            $('#length120').on('click', app.setLength120);
            // -- выбор длины кабеля

            // -- выбор типа влагозащиты
            $('#ip64').on('click', app.setDampProof64);
            $('#ip65').on('click', app.setDampProof65);
            $('#ip68').on('click', app.setDampProof68);
            // -- выбор типа влагозащиты

            // -- выбор дполнительных опций
            $('#rangecount').on('click', app.checkRangeCount);
            $('#locator').on('click', app.checkLocator);
            $('#autolevel').on('click', app.checkAutoLevel);
            // -- выбор дполнительных опций

            // -- сброс настроек фильтра
            $('#filterreset').on('click', app.filterReset);
            // -- сброс настроек фильтра

            // -- кнопка применить фильтр
            $('#filtersubmit').on('click', app.filterSubmit);
            // -- кнопка применить фильтр

            // -- изменение в левом окошке слайдера
            $('#firstdiam').on('change', app.changeTextInLeftInput);
            $('#seconddiam').on('change', app.changeTextInRightInput);
            // -- изменение в левом окошке слайдера

        },
        // -- обработчик событий над DOM элементами на странице

        // -- функции вызываемые из setUpListeners ===============

        // -- функция изменения текста в левом инпуте
        changeTextInRightInput: function () {

            var rightInputValue = parseInt( $(this).val() ),
                leftInputValue = parseInt( $( "#firstdiam" ).val( ) );

            if ( rightInputValue < leftInputValue ) {
                rightInputValue = leftInputValue;
                $( "#seconddiam" ).val( leftInputValue );
            }

            app.uiSliderFromInputs( leftInputValue, rightInputValue  );

        },
        changeTextInLeftInput: function () {

            var leftInputValue = parseInt( $(this).val() ),
                rightInputValue = parseInt( $( "#seconddiam" ).val( ) );

            if ( leftInputValue > rightInputValue ) {
                leftInputValue = rightInputValue;
                $( "#firstdiam" ).val( leftInputValue );
            }

            app.uiSliderFromInputs( leftInputValue, rightInputValue  );

        },
        // -- функция изменения текста в левом инпуте

        // -- функция сравнения параметров фильтра с массивом данных и запись в массив с моделями
        compareParameters: function ( arrOfParameters , arrFromMainArray, model, objOfIndexes ) {

            app.elements = [];

            for ( var i in arrOfParameters ) {

                if (arrOfParameters[i] === arrFromMainArray[i]) {
                    app.elements[i] = 1;
                } else {
                    app.elements[i] = 0;
                }

            }

            if ( objOfIndexes['6'] === 1 && objOfIndexes['7'] === 1 ) {

                if (
                    app.arrFromMainArrayFirstDiam >= app.arrFromMainArrayMinDiam
                    &&
                    app.arrFromMainArraySecondDiam <= app.arrFromMainArrayMaxDiam
                ) {

                    app.elements.push(1);
                } else {
                    app.elements.push(0);
                }
            }

            for (var i = 0; i < app.elements.length; i++) {
                if ( app.elements[i] === 0 ) {
                    return false;
                }

            }

            app.arrayItemNames.push(model);

        },
        // -- функция сравнения параметров фильтра с массивом данных и запись в массив с моделями

        // -- функция применить фильтр
        filterSubmit: function (e) {

            e.preventDefault();
            app.arrayItemNames = [];
            app.elements = [];

            // получить в переменные значеня диаметров труб
            if ( parseInt($( "#firstdiam" ).val(  )) === 10 && parseInt($( "#seconddiam" ).val(  )) === 500  ) {
                app.firstDiam = 0;
                app.secondDiam = 0;
            } else {
                app.firstDiam = parseInt($( "#firstdiam" ).val(  ));
                app.secondDiam = parseInt($( "#seconddiam" ).val(  ));
            }

            // -- очистка фильра, показать все блоки
            var allItems = $(document).find('.tovar-name');

            // -- очистка фильра, показать все блоки
            $.each( allItems , function(index, val) {

                var currentItem = $(val);

                    currentItem.parent().css(
                        {
                            'display' : 'block'
                        }
                    );

            });

            // -- проверка на то пустой фильтр или нет
            if (
            app.dampProof === ''
            &&
            app.cableLength === ''
            &&
            app.rangeCount === 0
            &&
            app.locator === 0
            &&
            app.autoLevel === 0
            &&
            app.firstDiam === 0
            &&
            app.secondDiam === 0
            ) {
                alert('Параметры фильтра не установлены');
                return false;
            }

            // -- создание объекта с выбранными настройками фильтра
            var arrOfParameters = {},
                arrFromMainArray = {},
                objOfIndexes = [];
                app.model = '';

            arrOfParameters[0]             = app.dampProof;
            arrOfParameters[0].trim();
            objOfIndexes['1']              = 1;

            arrOfParameters[1]             = app.cableLength;
            arrOfParameters[1].trim();
            objOfIndexes['2']              = 1;

            arrOfParameters[2]             = app.rangeCount;
            objOfIndexes['3']              = 1;

            arrOfParameters[3]             = app.locator;
            objOfIndexes['4']              = 1;

            arrOfParameters[4]             = app.autoLevel;
            objOfIndexes['5']              = 1;

            app.arrFromMainArrayFirstDiam   = app.firstDiam;
            objOfIndexes['6']              = 1;

            app.arrFromMainArraySecondDiam  = app.secondDiam;
            objOfIndexes['7']              = 1;
          // -- создание объекта с выбранными настройками фильтра

            // -- если значение фильтра не установлено то убрать его из объекта и почистить его индекс
            if ( arrOfParameters[0] === '' ) {
                delete arrOfParameters[0];
                objOfIndexes['1'] = 0;
            }
            if ( arrOfParameters[1] === '') {
                delete arrOfParameters[1];
                objOfIndexes['2'] = 0;
            }
            if ( arrOfParameters[2] === 0) {
                delete arrOfParameters[2];
                objOfIndexes['3'] = 0;
            }
            if ( arrOfParameters[3] === 0) {
                delete arrOfParameters[3];
                objOfIndexes['4'] = 0;
            }
            if ( arrOfParameters[4] === 0) {
                delete arrOfParameters[4];
                objOfIndexes['5'] = 0;
            }
            if ( app.arrFromMainArrayFirstDiam === 0 ) {
                objOfIndexes['6'] = 0;
            }
            if ( app.arrFromMainArraySecondDiam === 0 ) {
                objOfIndexes['7'] = 0;
            }

            // -- отбор в массив app.arrayItemNames соответствующих настройкам фильтра названиям товаров
            $.each( app.arrayMaster, function ( i, b ) {

                if ($.isPlainObject(b)) {

                    // -- заполняем объект только теми данными, что есть у нас в настройках фильтра
                    if ( objOfIndexes['1'] === 1 ) {
                        arrFromMainArray[0] = b.dampproof;
                        arrFromMainArray[0].trim();
                    }
                    if ( objOfIndexes['2'] === 1 ) {
                        arrFromMainArray[1] = b.cabellength;
                        arrFromMainArray[1].trim();
                    }
                    if ( objOfIndexes['3'] === 1 ) {
                        arrFromMainArray[2] = b.counter;
                    }
                    if ( objOfIndexes['4'] === 1 ) {
                        arrFromMainArray[3] = b.locator;
                    }
                    if ( objOfIndexes['5'] === 1 ) {
                        arrFromMainArray[4] = b.autolevel;
                    }
                    if ( objOfIndexes['6'] === 1 ) {
                        app.arrFromMainArrayMinDiam = parseInt(b.mindiam);
                    } else {
                        app.arrFromMainArrayMinDiam = 0;
                    }
                    if ( objOfIndexes['7'] === 1 ) {
                        app.arrFromMainArrayMaxDiam = parseInt(b.maxdiam);
                    } else {
                        app.arrFromMainArrayMaxDiam = 0;
                    }

                    app.model = b.model;

                    app.compareParameters ( arrOfParameters , arrFromMainArray, app.model, objOfIndexes );

                }

            });

            // -- функция поиска в массиве
            function findInArray(array, value) {

                for(var i=0; i<array.length; i++) {
                    if (array[i] === value) return true;
                }

                return false;
            }

            // -- проверка на соотвествия условиям фильтра и сокрытие не подходящих блоков с товаром
            //var allItems = $(document).find('.tovar-name');

            // поиск нужных товаров в DOM дереве и сокрытие неподходящих по условиям фильтра
            $.each( allItems , function(index, val) {

                var currentItem = $(val),
                    itemText = currentItem.text(),
                    items = app.arrayItemNames;

                if ( (findInArray(items, itemText)) ) {
                    // если все хорошо, то ничего не делаем.

                } else {

                    currentItem.parent().css(
                        {
                            'display' : 'none'
                        }
                    );

                }
            })

        },
        // -- функция применить фильтр

        // -- функция сброса всех настроек фильтра
        filterReset: function (e) {

            e.preventDefault();

            app.dampProof = '';
            app.cableLength = '';
            app.rangeCount = 0;
            app.locator = 0;
            app.autoLevel = 0;
            $( "#firstdiam" ).val( 10 );
            $( "#seconddiam" ).val( 500 );
            app.arrayItemNames = [];

            // -- очистка фильра, показать все блоки
            var allItems = $(document).find('.tovar-name');

            // -- очистка фильра, показать все блоки
            $.each( allItems , function(index, val) {

                var currentItem = $(val);

                    currentItem.parent().css(
                        {
                            'display' : 'block'
                        }
                    );

            });

            $('#length20').removeClass('filtr__option_3__checked');
            $('#length40').removeClass('filtr__option_3__checked');
            $('#length60').removeClass('filtr__option_3__checked');
            $('#length80').removeClass('filtr__option_3__checked');
            $('#length120').removeClass('filtr__option_3__checked');
            $('#ip64').removeClass('filtr__option_3__checked');
            $('#ip65').removeClass('filtr__option_3__checked');
            $('#ip68').removeClass('filtr__option_3__checked');

            $('#rangecount').removeClass('filtr__option_4__checkbox_checked');
            $('#rangecount').addClass('filtr__option_4__checkbox_unchecked');

            $('#locator').removeClass('filtr__option_4__checkbox_checked');
            $('#locator').addClass('filtr__option_4__checkbox_unchecked');

            $('#autolevel').removeClass('filtr__option_4__checkbox_checked');
            $('#autolevel').addClass('filtr__option_4__checkbox_unchecked');

            app.uiSlider();

        },
        // -- функция сброса всех настроек фильтра

        // -- функции выбора дополнительных опций
        checkRangeCount: function () {

            if ( app.rangeCount === 0 ) {
                // -- чекбокс установлен
                app.rangeCount = 1;
                $('#rangecount').removeClass('filtr__option_4__checkbox_unchecked');
                $('#rangecount').addClass('filtr__option_4__checkbox_checked');
            } else if ( app.rangeCount === 1 ) {
                // -- чекбокс снят
                app.rangeCount = 0;
                $('#rangecount').addClass('filtr__option_4__checkbox_unchecked');
                $('#rangecount').removeClass('filtr__option_4__checkbox_checked');
            }
        },
        checkLocator: function () {
            if ( app.locator === 0 ) {
                // -- чекбокс установлен
                app.locator = 1;
                $('#locator').removeClass('filtr__option_4__checkbox_unchecked');
                $('#locator').addClass('filtr__option_4__checkbox_checked');
            } else if ( app.locator === 1 ) {
                // -- чекбокс снят
                app.locator = 0;
                $('#locator').addClass('filtr__option_4__checkbox_unchecked');
                $('#locator').removeClass('filtr__option_4__checkbox_checked');
            }
        },
        checkAutoLevel: function () {
            if ( app.autoLevel === 0 ) {
                // -- чекбокс установлен
                app.autoLevel = 1;
                $('#autolevel').removeClass('filtr__option_4__checkbox_unchecked');
                $('#autolevel').addClass('filtr__option_4__checkbox_checked');
            } else if ( app.autoLevel === 1 ) {
                // -- чекбокс снят
                app.autoLevel = 0;
                $('#autolevel').addClass('filtr__option_4__checkbox_unchecked');
                $('#autolevel').removeClass('filtr__option_4__checkbox_checked');
            }
        },
        // -- функции выбора дополнительных опций

        // -- настройки для выбора влагозащиты
        setDampProof64: function (e) {
            e.preventDefault();

            app.dampProof = 'ip64';
            $('#ip64').addClass('filtr__option_3__checked');
            $('#ip65').removeClass('filtr__option_3__checked');
            $('#ip68').removeClass('filtr__option_3__checked');

        },
        setDampProof65: function (e) {
            e.preventDefault();

            app.dampProof = 'ip65';
            $('#ip64').removeClass('filtr__option_3__checked');
            $('#ip65').addClass('filtr__option_3__checked');
            $('#ip68').removeClass('filtr__option_3__checked');

        },
        setDampProof68: function (e) {
            e.preventDefault();

            app.dampProof = 'ip68';
            $('#ip64').removeClass('filtr__option_3__checked');
            $('#ip65').removeClass('filtr__option_3__checked');
            $('#ip68').addClass('filtr__option_3__checked');

        },
        // -- настройки для выбора влагозащиты


        // -- настройки длины кабеля
        setLength20: function (e) {

            e.preventDefault();

            app.cableLength = '20';
            $('#length20').addClass('filtr__option_3__checked');
            $('#length40').removeClass('filtr__option_3__checked');
            $('#length60').removeClass('filtr__option_3__checked');
            $('#length80').removeClass('filtr__option_3__checked');
            $('#length120').removeClass('filtr__option_3__checked');

        },
        setLength40: function (e) {
            e.preventDefault();

            app.cableLength = '40';
            $('#length20').removeClass('filtr__option_3__checked');
            $('#length40').addClass('filtr__option_3__checked');
            $('#length60').removeClass('filtr__option_3__checked');
            $('#length80').removeClass('filtr__option_3__checked');
            $('#length120').removeClass('filtr__option_3__checked');

        },
        setLength60: function (e) {
            e.preventDefault();

            app.cableLength = '60';
            $('#length20').removeClass('filtr__option_3__checked');
            $('#length40').removeClass('filtr__option_3__checked');
            $('#length60').addClass('filtr__option_3__checked');
            $('#length80').removeClass('filtr__option_3__checked');
            $('#length120').removeClass('filtr__option_3__checked');

        },
        setLength80: function (e) {
            e.preventDefault();

            app.cableLength = '80';
            $('#length20').removeClass('filtr__option_3__checked');
            $('#length40').removeClass('filtr__option_3__checked');
            $('#length60').removeClass('filtr__option_3__checked');
            $('#length80').addClass('filtr__option_3__checked');
            $('#length120').removeClass('filtr__option_3__checked');

        },
        setLength120: function (e) {
            e.preventDefault();

            app.cableLength = '120';
            $('#length20').removeClass('filtr__option_3__checked');
            $('#length40').removeClass('filtr__option_3__checked');
            $('#length60').removeClass('filtr__option_3__checked');
            $('#length80').removeClass('filtr__option_3__checked');
            $('#length120').addClass('filtr__option_3__checked');

        },
        // -- настройки длины кабеля

        // -- настройки слайдера (диаметр труб)
        uiSlider: function () {

            $( "#slider" ).slider({
                min: 10,
                max: 500,
                step: 1,
                range: true,
                values: [ 10, 500 ],
                slide: function( event, ui ) {
                    $( "#firstdiam" ).val( ui.values[ 0 ] );
                    $( "#seconddiam" ).val( ui.values[ 1 ] );
                    //app.firstDiam = 0;
                    //app.secondDiam = 0;
                }
            });

            // -- добавляем свои классы для левой и правой ручек
            $.each( $(document).find('.ui-slider-handle'), function (i, val) {

                if ( (i+1) === 1 ) {
                    $(val).addClass('left-ui-handler');
                } else if ((i+1) === 2 ) {
                    $(val).addClass('right-ui-handler');
                }

            });

        },
        uiSliderFromInputs: function (left, right) {

            if ( left < 10 ) {
                $( "#firstdiam" ).val( 10 );
            }
            if ( left > 500 ) {
                $( "#firstdiam" ).val( 500 );
            }

            if ( right < 10 ) {
                $( "#seconddiam" ).val( 10 );
            }
            if ( right > 500 ) {
                $( "#seconddiam" ).val( 500 );
            }

            $( "#slider" ).slider({
                min: 10,
                max: 500,
                step: 1,
                range: true,
                values: [ left, right ],
                slide: function( event, ui ) {
                    $( "#firstdiam" ).val( ui.values[ 0 ] );
                    $( "#seconddiam" ).val( ui.values[ 1 ] );
                }
            });

            // -- добавляем свои классы для левой и правой ручек
            $.each( $(document).find('.ui-slider-handle'), function (i, val) {

                if ( (i+1) === 1 ) {
                    $(val).addClass('left-ui-handler');
                } else if ((i+1) === 2 ) {
                    $(val).addClass('right-ui-handler');
                }

            });

        }
        // -- настройки слайдера (диаметр труб)


        // -- функции вызываемые из setUpListeners ===============

    }

    app.initialize();

}());































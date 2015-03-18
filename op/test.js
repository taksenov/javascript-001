/**
 * Created by admin on 16.03.2015.
 */
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
                'item1':  { 'model': 'TIS 01-20',    'cabellength': '20',  'dampproof': 'ip65', 'mindiam': '50', 'maxdiam': '200', 'counter': 0, 'locator': 0, 'autolevel': 0 },
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

        },
        // -- обработчик событий над DOM элементами на странице

        // -- функции вызываемые из setUpListeners ===============

        // -- функция применить фильтр
        filterSubmit: function (e) {

            e.preventDefault();
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
            ) {
                //console.log('Параметры фильтра не установлены');
                alert('Параметры фильтра не установлены');
                return false;
            }

            // -- отбор в массив app.arrayItemNames соответствующих настройкам фильтра названиям товаров
            $.each( app.arrayMaster, function ( i, b ) {

                if ($.isPlainObject(b)) {

                    // -- собственно сам фильтр в этом условии
                    if (
                        app.cableLength === b.cabellength
                        &&
                        app.dampProof === ''
                        &&
                        app.rangeCount === 0
                        &&
                        app.locator === 0
                        &&
                        app.autoLevel === 0

                    ) {

                        if (
                            app.cableLength === b.cabellength
                            &&
                            $( "#firstdiam" ).val() >= parseInt(b.mindiam)
                            &&
                            $( "#seconddiam" ).val() <= parseInt(b.maxdiam)
                        ) {
                            app.arrayItemNames.push(b.model);
                        }
                    }
                    else if (
                        app.cableLength === b.cabellength
                        &&
                        app.dampProof === b.dampproof
                        &&
                        app.rangeCount === 0
                        &&
                        app.locator === 0
                        &&
                        app.autoLevel === 0

                    ) {
                        if (
                            app.cableLength === b.cabellength
                            &&
                            app.dampProof === b.dampproof
                            &&
                            $( "#firstdiam" ).val() >= parseInt(b.mindiam)
                            &&
                            $( "#seconddiam" ).val() <= parseInt(b.maxdiam)
                        ) {
                            app.arrayItemNames.push(b.model);
                        }
                    } else if (
                        app.cableLength === b.cabellength
                        &&
                        app.dampProof === b.dampproof
                        &&
                        app.rangeCount === 1
                        //&&
                        //app.locator === 0
                        //&&
                        //app.autoLevel === 0

                    ) {
                        if (
                            app.cableLength === b.cabellength
                            &&
                            app.dampProof === b.dampproof
                            &&
                            $( "#firstdiam" ).val() >= parseInt(b.mindiam)
                            &&
                            $( "#seconddiam" ).val() <= parseInt(b.maxdiam)
                            &&
                            app.rangeCount === b.counter
                        ) {
                            app.arrayItemNames.push(b.model);
                        }
                    } else if (
                        app.cableLength === b.cabellength
                        &&
                        app.dampProof === b.dampproof
                        //&&
                        //app.rangeCount === 0
                        &&
                        app.locator === 1
                        //&&
                        //app.autoLevel === 0

                    ) {
                        if (
                            app.cableLength === b.cabellength
                            &&
                            app.dampProof === b.dampproof
                            &&
                            $( "#firstdiam" ).val() >= parseInt(b.mindiam)
                            &&
                            $( "#seconddiam" ).val() <= parseInt(b.maxdiam)
                            //&&
                            //app.rangeCount === b.counter
                            &&
                            app.locator === b.locator
                        ) {
                            app.arrayItemNames.push(b.model);
                        }
                    } else if (
                        app.cableLength === b.cabellength
                        &&
                        app.dampProof === b.dampproof
                        //&&
                        //app.rangeCount === 1
                        //&&
                        //app.locator === 1
                        &&
                        app.autoLevel === 1

                    ) {
                        if (
                            app.cableLength === b.cabellength
                            &&
                            app.dampProof === b.dampproof
                            &&
                            $( "#firstdiam" ).val() >= parseInt(b.mindiam)
                            &&
                            $( "#seconddiam" ).val() <= parseInt(b.maxdiam)
                            //&&
                            //app.rangeCount === b.counter
                            //&&
                            //app.locator === b.locator
                            &&
                            app.autoLevel === b.autolevel
                        ) {
                            app.arrayItemNames.push(b.model);
                        }
                    }

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
                }
            });

        }
        // -- настройки слайдера (диаметр труб)


        // -- функции вызываемые из setUpListeners ===============

    }

    app.initialize();

}());






























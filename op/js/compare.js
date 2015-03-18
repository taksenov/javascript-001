/**
 * Created by admin on 17.03.2015.
 */

(function() {

    var app = {

        // -- инициализация при загрузке js
        initialize : function () {
            var _this = this;

            _this.setUpListeners();

            // JSON-Массив с характеристиками всех товаров. (можно использовать и ajax)
            //расшифровка массива
            //Тип кейса						caseType
            //ранжир						caseTypeScale
            //Общий вес						grossWeight
            //ранжир						grossWeightScale
            //Диаметр труб					pipeDiameter
            //ранжир						pipeDiameterScale
            //Длина кабеля					cableLength
            //ранжир						cableLengthScale
            //Цветной монитор				colorMonitor
            //ранжир						colorMonitorScale
            //Диагональ монитора			diagonalMolitor
            //ранжир						diagonalMolitorScale
            //Количество светодиодов		numberLEDs
            //ранжир						numberLEDsScale
            //Угол обзора камеры			cameraAngle
            //ранжир						cameraAngleScale
            //Влагозащищенность камеры		dampProof
            //ранжир						dampProofScale
            //Диаметр камеры				cameraDiameter
            //ранжир						cameraDiameterscale
            //Функция записи				recording
            //ранжир						recordingScale
            //Воспроизведение				playBack
            //ранжир						playBackScale
            //Питание						powerType
            //ранжир						powerTypeScale
            //Время работы аккумулятора		batteryTime
            //ранжир						batteryTimeScale
            //Встроенный трансмиттер		transmitter
            //ранжир						transmitterScale
            //Счетчик расстояния			counter
            //ранжир						counterScale
            //Автоуровень					autoLevel
            //ранжир						autoLevelScale
            app.arrayMaster = {
                'item1':  { 'model': 'TIS 01-20',         'price': '69 900 руб.' ,                 'caseType': 'стандартный',  'caseTypeScale': '10', 'grossWeight': '8 кг',    'grossWeightScale': '8',  'pipeDiameter': '50 - 200 мм',  'pipeDiameterScale': '150',  'cableLength': '20 м',   'cableLengthScale': '20',   'colorMonitor': 'да',   'colorMonitorScale': '1',   'diagonalMolitor': '7"',   'diagonalMolitorScale': '7',    'numberLEDs': '12',   'numberLEDsScale': '12',     'cameraAngle': '90°',        'cameraAngleScale': '90',      'dampProof': 'IP64',      'dampProofScale': '10',       'cameraDiameter': '23 мм',      'cameraDiameterscale': '23',      'recording': 'НЕТ',                'recordingScale': '0',        'playBack': 'НЕТ',                'playBackScale': '0',         'powerType': 'батарея или сеть 220В',      'powerTypeScale': '30',    'batteryTime': '5 часов',      'batteryTimeScale': '5',      'transmitter': 'нет',        'transmitterScale': '0',      'counter': 'нет',         'counterScale': '0',      'autoLevel': 'нет',       'autoLevelScale': '0' },
                'item2':  { 'model': 'TIS 02-20',         'price': '89 900 руб.' ,                 'caseType': 'стандартный',  'caseTypeScale': '10', 'grossWeight': '10 кг',   'grossWeightScale': '10', 'pipeDiameter': '50 - 500 мм',  'pipeDiameterScale': '450',  'cableLength': '20 м',   'cableLengthScale': '20',   'colorMonitor': 'да',   'colorMonitorScale': '1',   'diagonalMolitor': '7"',   'diagonalMolitorScale': '7',    'numberLEDs': '12',   'numberLEDsScale': '12',     'cameraAngle': '90°',        'cameraAngleScale': '90',      'dampProof': 'IP65',      'dampProofScale': '20',       'cameraDiameter': '23 мм',      'cameraDiameterscale': '23',      'recording': 'на флеш-карту',      'recordingScale': '10',       'playBack': 'Видео и фото',       'playBackScale': '10',        'powerType': 'батарея или сеть 220В',      'powerTypeScale': '30',    'batteryTime': '7 часов',      'batteryTimeScale': '7',      'transmitter': 'опция',      'transmitterScale': '10',     'counter': 'опция',       'counterScale': '10',     'autoLevel': 'нет',       'autoLevelScale': '0' },
                'item3':  { 'model': 'TIS 03-40',         'price': '119 900 руб.' ,                 'caseType': 'инженерный',   'caseTypeScale': '20', 'grossWeight': '12 кг',   'grossWeightScale': '12', 'pipeDiameter': '50 - 500 мм',  'pipeDiameterScale': '450',  'cableLength': '40 м',   'cableLengthScale': '40',   'colorMonitor': 'да',   'colorMonitorScale': '1',   'diagonalMolitor': '7"',   'diagonalMolitorScale': '7',    'numberLEDs': '12',   'numberLEDsScale': '12',     'cameraAngle': '120°',       'cameraAngleScale': '120',     'dampProof': 'IP65',      'dampProofScale': '20',       'cameraDiameter': '23 мм',      'cameraDiameterscale': '23',      'recording': 'на SD-карту',        'recordingScale': '30',       'playBack': 'Видео и фото',       'playBackScale': '10',        'powerType': 'батарея или сеть 220В',      'powerTypeScale': '30',    'batteryTime': '7 часов',      'batteryTimeScale': '7',      'transmitter': 'опция',      'transmitterScale': '10',     'counter': 'опция',       'counterScale': '10',     'autoLevel': 'нет',       'autoLevelScale': '0' },
                'item4':  { 'model': 'TIS 04-40',         'price': '149 900 руб.' ,                 'caseType': 'инженерный',   'caseTypeScale': '20', 'grossWeight': '12 кг',   'grossWeightScale': '12', 'pipeDiameter': '50 - 500 мм',  'pipeDiameterScale': '450',  'cableLength': '40 м',   'cableLengthScale': '40',   'colorMonitor': 'да',   'colorMonitorScale': '1',   'diagonalMolitor': '7"',   'diagonalMolitorScale': '7',    'numberLEDs': '12',   'numberLEDsScale': '12',     'cameraAngle': '120°',       'cameraAngleScale': '120',     'dampProof': 'IP65',      'dampProofScale': '20',       'cameraDiameter': '23 мм',      'cameraDiameterscale': '23',      'recording': 'на SD-карту',        'recordingScale': '30',       'playBack': 'Видео и фото',       'playBackScale': '10',        'powerType': 'батарея или сеть 220В',      'powerTypeScale': '30',    'batteryTime': '7 часов',      'batteryTimeScale': '7',      'transmitter': 'опция',      'transmitterScale': '10',     'counter': 'опция',       'counterScale': '10',     'autoLevel': 'нет',       'autoLevelScale': '0' },
                'item5':  { 'model': 'TIS 05-40',         'price': '149 900 руб.' ,                 'caseType': 'инженерный',   'caseTypeScale': '20', 'grossWeight': '14,5 кг', 'grossWeightScale': '14', 'pipeDiameter': '50 - 500 мм',  'pipeDiameterScale': '450',  'cableLength': '40 м',   'cableLengthScale': '40',   'colorMonitor': 'да',   'colorMonitorScale': '1',   'diagonalMolitor': '7"',   'diagonalMolitorScale': '7',    'numberLEDs': '12',   'numberLEDsScale': '12',     'cameraAngle': '135°',       'cameraAngleScale': '135',     'dampProof': 'IP68',      'dampProofScale': '30',       'cameraDiameter': '23 мм',      'cameraDiameterscale': '23',      'recording': 'на SD-карту',        'recordingScale': '30',       'playBack': 'Видео и фото',       'playBackScale': '10',        'powerType': 'батарея или сеть 220В',      'powerTypeScale': '30',    'batteryTime': '8 часов',      'batteryTimeScale': '8',      'transmitter': 'нет',        'transmitterScale': '0',      'counter': 'есть',        'counterScale': '20',     'autoLevel': 'нет',       'autoLevelScale': '0' },
                'item6':  { 'model': 'TIS 06-40',         'price': '159 900 руб.' ,                 'caseType': 'инженерный',   'caseTypeScale': '20', 'grossWeight': '12 кг',   'grossWeightScale': '12', 'pipeDiameter': '10 - 200 мм',  'pipeDiameterScale': '190',  'cableLength': '40 м',   'cableLengthScale': '40',   'colorMonitor': 'да',   'colorMonitorScale': '1',   'diagonalMolitor': '7"',   'diagonalMolitorScale': '7',    'numberLEDs': '4',    'numberLEDsScale': '4',      'cameraAngle': '60°',        'cameraAngleScale': '60',      'dampProof': 'IP65',      'dampProofScale': '20',       'cameraDiameter': '6 мм',       'cameraDiameterscale': '6',       'recording': 'на SD-карту',        'recordingScale': '30',       'playBack': 'Видео и фото',       'playBackScale': '10',        'powerType': 'батарея или сеть 220В',      'powerTypeScale': '30',    'batteryTime': '7 часов',      'batteryTimeScale': '7',      'transmitter': 'нет',        'transmitterScale': '0',      'counter': 'подарок',     'counterScale': '30',     'autoLevel': 'нет',       'autoLevelScale': '0' },
                'item7':  { 'model': 'TIS 07-40',         'price': '199 900 руб.' ,                 'caseType': 'инженерный',   'caseTypeScale': '20', 'grossWeight': '18 кг',   'grossWeightScale': '18', 'pipeDiameter': '50 - 500 мм',  'pipeDiameterScale': '450',  'cableLength': '40 м',   'cableLengthScale': '40',   'colorMonitor': 'да',   'colorMonitorScale': '1',   'diagonalMolitor': '7"',   'diagonalMolitorScale': '7',    'numberLEDs': '12',   'numberLEDsScale': '12',     'cameraAngle': '120°',       'cameraAngleScale': '120',     'dampProof': 'IP68',      'dampProofScale': '30',       'cameraDiameter': '23 мм',      'cameraDiameterscale': '23',      'recording': 'на SD-карту',        'recordingScale': '30',       'playBack': 'Видео и фото',       'playBackScale': '10',        'powerType': 'батарея или сеть 220В',      'powerTypeScale': '30',    'batteryTime': '7 часов',      'batteryTimeScale': '7',      'transmitter': 'есть',       'transmitterScale': '20',     'counter': 'подарок',     'counterScale': '30',     'autoLevel': 'нет',       'autoLevelScale': '0' },
                'item8':  { 'model': 'TIS 08-80SR',       'price': '199 900 руб.' ,                 'caseType': 'инженерный',   'caseTypeScale': '20', 'grossWeight': '17 кг',   'grossWeightScale': '17', 'pipeDiameter': '50 - 500 мм',  'pipeDiameterScale': '450',  'cableLength': '80 м',   'cableLengthScale': '80',   'colorMonitor': 'да',   'colorMonitorScale': '1',   'diagonalMolitor': '7"',   'diagonalMolitorScale': '7',    'numberLEDs': '12',   'numberLEDsScale': '12',     'cameraAngle': '120°',       'cameraAngleScale': '120',     'dampProof': 'IP68',      'dampProofScale': '30',       'cameraDiameter': '23 мм',      'cameraDiameterscale': '23',      'recording': 'на SD-карту',        'recordingScale': '30',       'playBack': 'Видео и фото',       'playBackScale': '10',        'powerType': 'батарея или сеть 220В',      'powerTypeScale': '30',    'batteryTime': '7 часов',      'batteryTimeScale': '7',      'transmitter': 'опция',      'transmitterScale': '10',     'counter': 'подарок',     'counterScale': '30',     'autoLevel': 'нет',       'autoLevelScale': '0' },
                'item9':  { 'model': 'TIS 08-80SR2',      'price': '239 900 руб.' ,                 'caseType': 'инженерный',   'caseTypeScale': '20', 'grossWeight': '24 кг',   'grossWeightScale': '24', 'pipeDiameter': '50 - 500 мм',  'pipeDiameterScale': '450',  'cableLength': '80 м',   'cableLengthScale': '80',   'colorMonitor': 'да',   'colorMonitorScale': '1',   'diagonalMolitor': '7"',   'diagonalMolitorScale': '7',    'numberLEDs': '42',   'numberLEDsScale': '42',     'cameraAngle': '120°',       'cameraAngleScale': '120',     'dampProof': 'IP68',      'dampProofScale': '30',       'cameraDiameter': '40 мм',      'cameraDiameterscale': '40',      'recording': 'на SD-карту',        'recordingScale': '30',       'playBack': 'Видео и фото',       'playBackScale': '10',        'powerType': 'батарея или сеть 220В',      'powerTypeScale': '30',    'batteryTime': '7 часов',      'batteryTimeScale': '7',      'transmitter': 'опция',      'transmitterScale': '10',     'counter': 'подарок',     'counterScale': '30',     'autoLevel': 'есть',      'autoLevelScale': '20'},
                'item10': { 'model': 'TIS 09-120/1',      'price': '279 900 руб.' ,                 'caseType': 'инженерный',   'caseTypeScale': '20', 'grossWeight': '40 кг',   'grossWeightScale': '40', 'pipeDiameter': '60 - 500 мм',  'pipeDiameterScale': '440',  'cableLength': '120 м',  'cableLengthScale': '120',  'colorMonitor': 'да',   'colorMonitorScale': '1',   'diagonalMolitor': '7"',   'diagonalMolitorScale': '7',    'numberLEDs': '30',   'numberLEDsScale': '30',     'cameraAngle': '120°',       'cameraAngleScale': '120',     'dampProof': 'IP68',      'dampProofScale': '30',       'cameraDiameter': '50 мм',      'cameraDiameterscale': '50',      'recording': 'на SD-карту',        'recordingScale': '30',       'playBack': 'Видео и фото',       'playBackScale': '10',        'powerType': 'батарея или сеть 220В',      'powerTypeScale': '30',    'batteryTime': '7 часов',      'batteryTimeScale': '7',      'transmitter': 'опция',      'transmitterScale': '10',     'counter': 'подарок',     'counterScale': '30',     'autoLevel': 'есть',      'autoLevelScale': '20'},
                'item11': { 'model': 'TIS 09-120M',       'price': '299 900 руб.' ,                 'caseType': 'Нет',          'caseTypeScale': '0',  'grossWeight': '38 кг',   'grossWeightScale': '38', 'pipeDiameter': '60 - 500 мм',  'pipeDiameterScale': '440',  'cableLength': '120 м',  'cableLengthScale': '120',  'colorMonitor': 'да',   'colorMonitorScale': '1',   'diagonalMolitor': '7"',   'diagonalMolitorScale': '7',    'numberLEDs': '30',   'numberLEDsScale': '30',     'cameraAngle': '120°',       'cameraAngleScale': '120',     'dampProof': 'IP68',      'dampProofScale': '30',       'cameraDiameter': '50 мм',      'cameraDiameterscale': '50',      'recording': 'на SD-карту',        'recordingScale': '30',       'playBack': 'Видео и фото',       'playBackScale': '10',        'powerType': 'батарея или сеть 220В',      'powerTypeScale': '30',    'batteryTime': '7 часов',      'batteryTimeScale': '7',      'transmitter': 'опция',      'transmitterScale': '10',     'counter': 'подарок',     'counterScale': '30',     'autoLevel': 'есть',      'autoLevelScale': '20'},
                'item12': { 'model': 'TIS 09-120L',       'price': '399 900 руб.',                 'caseType': 'инженерный',   'caseTypeScale': '20', 'grossWeight': '47 кг',   'grossWeightScale': '47', 'pipeDiameter': '60 - 500 мм',  'pipeDiameterScale': '440',  'cableLength': '120 м',  'cableLengthScale': '120',  'colorMonitor': 'да',   'colorMonitorScale': '1',   'diagonalMolitor': '15"',  'diagonalMolitorScale': '15',   'numberLEDs': '30',   'numberLEDsScale': '30',     'cameraAngle': '120°',       'cameraAngleScale': '120',     'dampProof': 'IP68',      'dampProofScale': '30',       'cameraDiameter': '50 мм',      'cameraDiameterscale': '50',      'recording': 'на SD-карту',        'recordingScale': '30',       'playBack': 'Видео и фото',       'playBackScale': '10',        'powerType': 'батарея или сеть 220В',      'powerTypeScale': '30',    'batteryTime': '7 часов',      'batteryTimeScale': '7',      'transmitter': 'есть',       'transmitterScale': '20',     'counter': 'подарок',     'counterScale': '30',     'autoLevel': 'есть',      'autoLevelScale': '20' }
            };

            // переменная не дающая передать более двух товаров в сравнение
            app.onlyTwoItems = 0;

            // массив с названиями двумя выбранных товаров
            app.arrayOfTwoItems = [];

            //
            app.model = [];

            //
            app.arrFromMainArray1 = [];
            app.arrFromMainArray2 = [];

            //
            app.arrayOfTwoPrices = [];





        },
         // -- инициализация при загрузке js

        // -- обработчик событий над DOM элементами на странице
        setUpListeners: function () {

            // -- выбран чекбокс отбора в сравнение
            $('.compare-me').on('click', app.addItemToCompare);
            // -- выбран чекбокс отбора в сравнение

            // -- нажата кнопка сравнить
            $('.red_button2').on('click', app.compareItems);
            // -- нажата кнопка сравнить

            // -- кнопка почистить сравнение
            $('.srav').on('click', app.clearCompare);
            // -- кнопка почистить сравнение

            // -- нажата кнопка заказа в модалке
            $('.compare__from_modal').on('click', app.fancyClose);
            // -- нажата кнопка заказа в модалке

            // -- кнопка заказать в модалке
            $('#from-zakaz-to-order-1').on('click', app.sendZakazToOrder1);
            $('#from-zakaz-to-order-2').on('click', app.sendZakazToOrder2);
            // -- кнопка заказать в модалке


        },
        // -- обработчик событий над DOM элементами на странице

        // -- функции вызываемые из setUpListeners ===============

        // -- передача названия товара в модалку заказа
        sendZakazToOrder1: function () {
            $('.tovar-mane-in-order').html( app.model1 );
        },
        sendZakazToOrder2: function () {
            $('.tovar-mane-in-order').html( app.model2 );
        },
        // -- передача названия товара в модалку заказа

        fancyClose: function () {
            $.fancybox.close();
        },

        clearCompare: function () {
            $('.compare-me').removeClass('chek-me');
            $('.compare-me').addClass('unchek-me');
            $('.compare-me').removeAttr("checked");

            app.onlyTwoItems = 0;

            app.arrayOfTwoItems = [];
            app.model = [];
            app.model1 = '';
            app.price1 = '';
            app.model2 = '';
            app.price2 = '';
            app.arrFromMainArray1 = [];
            app.arrFromMainArray2 = [];

            $('.casetype1').removeClass('compare-red').removeClass('compare-green');
            $('.casetype2').removeClass('compare-red').removeClass('compare-green');
            $('.grossweight1').removeClass('compare-red');
            $('.grossweight2').removeClass('compare-red');
            $('.grossweight1').removeClass('compare-green');
            $('.grossweight2').removeClass('compare-green');
            $('.pipediameter1').removeClass('compare-red').removeClass('compare-green');
            $('.pipediameter2').removeClass('compare-red').removeClass('compare-green');
            $('.cablelength1').removeClass('compare-red').removeClass('compare-green');
            $('.cablelength2').removeClass('compare-red').removeClass('compare-green');
            $('.colormonitor1').removeClass('compare-red').removeClass('compare-green');
            $('.colormonitor2').removeClass('compare-red').removeClass('compare-green');
            $('.diagonalmolitor1').removeClass('compare-red').removeClass('compare-green');
            $('.diagonalmolitor2').removeClass('compare-red').removeClass('compare-green');
            $('.numberleds1').removeClass('compare-red').removeClass('compare-green');
            $('.numberleds2').removeClass('compare-red').removeClass('compare-green');
            $('.cameraangle1').removeClass('compare-red').removeClass('compare-green');
            $('.cameraangle2').removeClass('compare-red').removeClass('compare-green');
            $('.dampproof1').removeClass('compare-red').removeClass('compare-green');
            $('.dampproof2').removeClass('compare-red').removeClass('compare-green');
            $('.cameradiameter1').removeClass('compare-red').removeClass('compare-green');
            $('.cameradiameter2').removeClass('compare-red').removeClass('compare-green');
            $('.recording1').removeClass('compare-red').removeClass('compare-green');
            $('.recording2').removeClass('compare-red').removeClass('compare-green');
            $('.playback1').removeClass('compare-red').removeClass('compare-green');
            $('.playback2').removeClass('compare-red').removeClass('compare-green');
            $('.powertype1').removeClass('compare-red').removeClass('compare-green');
            $('.powertype2').removeClass('compare-red').removeClass('compare-green');
            $('.batterytime1').removeClass('compare-red').removeClass('compare-green');
            $('.batterytime2').removeClass('compare-red').removeClass('compare-green');
            $('.transmitter1').removeClass('compare-red').removeClass('compare-green');
            $('.transmitter2').removeClass('compare-red').removeClass('compare-green');
            $('.counter1').removeClass('compare-red').removeClass('compare-green');
            $('.counter2').removeClass('compare-red').removeClass('compare-green');
            $('.autolevel1').removeClass('compare-red').removeClass('compare-green');
            $('.autolevel2').removeClass('compare-red').removeClass('compare-green');


        },


        // -- сравнение двух товаров
        compareItems: function () {

            $('.casetype1').removeClass('compare-red').removeClass('compare-green');
            $('.casetype2').removeClass('compare-red').removeClass('compare-green');
            $('.grossweight1').removeClass('compare-red');
            $('.grossweight2').removeClass('compare-red');
            $('.grossweight1').removeClass('compare-green');
            $('.grossweight2').removeClass('compare-green');
            $('.pipediameter1').removeClass('compare-red').removeClass('compare-green');
            $('.pipediameter2').removeClass('compare-red').removeClass('compare-green');
            $('.cablelength1').removeClass('compare-red').removeClass('compare-green');
            $('.cablelength2').removeClass('compare-red').removeClass('compare-green');
            $('.colormonitor1').removeClass('compare-red').removeClass('compare-green');
            $('.colormonitor2').removeClass('compare-red').removeClass('compare-green');
            $('.diagonalmolitor1').removeClass('compare-red').removeClass('compare-green');
            $('.diagonalmolitor2').removeClass('compare-red').removeClass('compare-green');
            $('.numberleds1').removeClass('compare-red').removeClass('compare-green');
            $('.numberleds2').removeClass('compare-red').removeClass('compare-green');
            $('.cameraangle1').removeClass('compare-red').removeClass('compare-green');
            $('.cameraangle2').removeClass('compare-red').removeClass('compare-green');
            $('.dampproof1').removeClass('compare-red').removeClass('compare-green');
            $('.dampproof2').removeClass('compare-red').removeClass('compare-green');
            $('.cameradiameter1').removeClass('compare-red').removeClass('compare-green');
            $('.cameradiameter2').removeClass('compare-red').removeClass('compare-green');
            $('.recording1').removeClass('compare-red').removeClass('compare-green');
            $('.recording2').removeClass('compare-red').removeClass('compare-green');
            $('.playback1').removeClass('compare-red').removeClass('compare-green');
            $('.playback2').removeClass('compare-red').removeClass('compare-green');
            $('.powertype1').removeClass('compare-red').removeClass('compare-green');
            $('.powertype2').removeClass('compare-red').removeClass('compare-green');
            $('.batterytime1').removeClass('compare-red').removeClass('compare-green');
            $('.batterytime2').removeClass('compare-red').removeClass('compare-green');
            $('.transmitter1').removeClass('compare-red').removeClass('compare-green');
            $('.transmitter2').removeClass('compare-red').removeClass('compare-green');
            $('.counter1').removeClass('compare-red').removeClass('compare-green');
            $('.counter2').removeClass('compare-red').removeClass('compare-green');
            $('.autolevel1').removeClass('compare-red').removeClass('compare-green');
            $('.autolevel2').removeClass('compare-red').removeClass('compare-green');



            if ( app.onlyTwoItems < 2 ) {
                    alert('Для сравнения необходимо выбрать два товара');
                    return false;
            }


            $.each( app.arrayMaster, function ( i, b ) {

                if ($.isPlainObject(b)) {

                    if ( app.arrayOfTwoItems[0] === b.model ) {
                            app.model1 = b.model;
                            app.price1 = b.price;
                            app.arrFromMainArray1[0] = b.caseType;
                            app.arrFromMainArray1[1] = parseInt(b.caseTypeScale);
                            app.arrFromMainArray1[2] = b.grossWeight;
                            app.arrFromMainArray1[3] = parseInt(b.grossWeightScale);
                            app.arrFromMainArray1[4] = b.pipeDiameter;
                            app.arrFromMainArray1[5] = parseInt(b.pipeDiameterScale);
                            app.arrFromMainArray1[6] = b.cableLength;
                            app.arrFromMainArray1[7] = parseInt(b.cableLengthScale);
                            app.arrFromMainArray1[8] = b.colorMonitor;
                            app.arrFromMainArray1[9] = parseInt(b.colorMonitorScale);
                            app.arrFromMainArray1[10] = b.diagonalMolitor;
                            app.arrFromMainArray1[11] = parseInt(b.diagonalMolitorScale);
                            app.arrFromMainArray1[12] = b.numberLEDs;
                            app.arrFromMainArray1[13] = parseInt(b.numberLEDsScale);
                            app.arrFromMainArray1[14] = b.cameraAngle;
                            app.arrFromMainArray1[15] = parseInt(b.cameraAngleScale);
                            app.arrFromMainArray1[16] = b.dampProof;
                            app.arrFromMainArray1[17] = parseInt(b.dampProofScale);
                            app.arrFromMainArray1[18] = b.cameraDiameter;
                            app.arrFromMainArray1[19] = parseInt(b.cameraDiameterscale);
                            app.arrFromMainArray1[20] = b.recording;
                            app.arrFromMainArray1[21] = parseInt(b.recordingScale);
                            app.arrFromMainArray1[22] = b.playBack;
                            app.arrFromMainArray1[23] = parseInt(b.playBackScale);
                            app.arrFromMainArray1[24] = b.powerType;
                            app.arrFromMainArray1[25] = parseInt(b.powerTypeScale);
                            app.arrFromMainArray1[26] = b.batteryTime;
                            app.arrFromMainArray1[27] = parseInt(b.batteryTimeScale);
                            app.arrFromMainArray1[28] = b.transmitter;
                            app.arrFromMainArray1[29] = parseInt(b.transmitterScale);
                            app.arrFromMainArray1[30] = b.counter;
                            app.arrFromMainArray1[31] = parseInt(b.counterScale);
                            app.arrFromMainArray1[32] = b.autoLevel;
                            app.arrFromMainArray1[33] = parseInt(b.autoLevelScale);
                        } else if ( app.arrayOfTwoItems[1] === b.model ) {
                            app.model2 = b.model;
                            app.price2 = b.price;
                            app.arrFromMainArray2[0] = b.caseType;
                            app.arrFromMainArray2[1] = parseInt(b.caseTypeScale);
                            app.arrFromMainArray2[2] = b.grossWeight;
                            app.arrFromMainArray2[3] = parseInt(b.grossWeightScale);
                            app.arrFromMainArray2[4] = b.pipeDiameter;
                            app.arrFromMainArray2[5] = parseInt(b.pipeDiameterScale);
                            app.arrFromMainArray2[6] = b.cableLength;
                            app.arrFromMainArray2[7] = parseInt(b.cableLengthScale);
                            app.arrFromMainArray2[8] = b.colorMonitor;
                            app.arrFromMainArray2[9] = parseInt(b.colorMonitorScale);
                            app.arrFromMainArray2[10] = b.diagonalMolitor;
                            app.arrFromMainArray2[11] =parseInt(b.diagonalMolitorScale);
                            app.arrFromMainArray2[12] = b.numberLEDs;
                            app.arrFromMainArray2[13] =parseInt(b.numberLEDsScale);
                            app.arrFromMainArray2[14] = b.cameraAngle;
                            app.arrFromMainArray2[15] =parseInt(b.cameraAngleScale);
                            app.arrFromMainArray2[16] = b.dampProof;
                            app.arrFromMainArray2[17] =parseInt(b.dampProofScale);
                            app.arrFromMainArray2[18] = b.cameraDiameter;
                            app.arrFromMainArray2[19] =parseInt(b.cameraDiameterscale);
                            app.arrFromMainArray2[20] = b.recording;
                            app.arrFromMainArray2[21] =parseInt(b.recordingScale);
                            app.arrFromMainArray2[22] = b.playBack;
                            app.arrFromMainArray2[23] =parseInt(b.playBackScale);
                            app.arrFromMainArray2[24] = b.powerType;
                            app.arrFromMainArray2[25] =parseInt(b.powerTypeScale);
                            app.arrFromMainArray2[26] = b.batteryTime;
                            app.arrFromMainArray2[27] =parseInt(b.batteryTimeScale);
                            app.arrFromMainArray2[28] = b.transmitter;
                            app.arrFromMainArray2[29] =parseInt(b.transmitterScale);
                            app.arrFromMainArray2[30] = b.counter;
                            app.arrFromMainArray2[31] =parseInt(b.counterScale);
                            app.arrFromMainArray2[32] = b.autoLevel;
                            app.arrFromMainArray2[33] =parseInt(b.autoLevelScale);
                        }
                }

            });

                //console.log(app.model1);
                //console.log(app.arrFromMainArray1);
                //console.log('==============================');
                //console.log(app.model2);
                //console.log(app.arrFromMainArray2);

            $('.model1').html( app.model1 );
            $('.model2').html( app.model2 );

            $('.price1').html( app.price1 );
            $('.price2').html( app.price2 );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[1] < app.arrFromMainArray2[1] ) {
                $('.casetype1').addClass('compare-red');
                $('.casetype2').addClass('compare-green');
            } else if ( app.arrFromMainArray1[1] > app.arrFromMainArray2[1] ) {
                $('.casetype1').addClass('compare-green');
                $('.casetype2').addClass('compare-red');
            } else if ( app.arrFromMainArray1[1] === app.arrFromMainArray2[1] ) {
                $('.casetype1').addClass('compare-green');
                $('.casetype2').addClass('compare-green');
            } else {
                $('.casetype1').addClass('compare-green');
                $('.casetype2').addClass('compare-red');
            }

            $('.casetype1').html( app.arrFromMainArray1[0] );
            $('.casetype2').html( app.arrFromMainArray2[0] );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[3] > app.arrFromMainArray2[3] ) {
                $('.grossweight1').addClass('compare-red');
                $('.grossweight2').addClass('compare-green');
            } else if ( app.arrFromMainArray1[3] < app.arrFromMainArray2[3] ) {
                $('.grossweight1').addClass('compare-green');
                $('.grossweight2').addClass('compare-red');
            } else if ( app.arrFromMainArray1[3] === app.arrFromMainArray2[3] ) {
                $('.grossweight1').addClass('compare-green');
                $('.grossweight2').addClass('compare-green');
            } else {
                $('.grossweight1').addClass('compare-green');
                $('.grossweight2').addClass('compare-red');
            }

            $('.grossweight1').html( app.arrFromMainArray1[2] );
            $('.grossweight2').html( app.arrFromMainArray2[2] );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[5] < app.arrFromMainArray2[5] ) {
                $('.pipediameter1').addClass('compare-red');
                $('.pipediameter2').addClass('compare-green');
            } else if ( app.arrFromMainArray1[5] === app.arrFromMainArray2[5] ) {
                $('.pipediameter1').addClass('compare-green');
                $('.pipediameter2').addClass('compare-green');
            } else {
                $('.pipediameter1').addClass('compare-green');
                $('.pipediameter2').addClass('compare-red');
            }

            $('.pipediameter1').html( app.arrFromMainArray1[4] );
            $('.pipediameter2').html( app.arrFromMainArray2[4] );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[7] > app.arrFromMainArray2[7] ) {
                $('.cablelength1').addClass('compare-green');
                $('.cablelength2').addClass('compare-red');
            } else if ( app.arrFromMainArray1[7] < app.arrFromMainArray2[7] ) {
                $('.cablelength1').addClass('compare-green');
                $('.cablelength2').addClass('compare-red');
            } else if ( app.arrFromMainArray1[7] === app.arrFromMainArray2[7] ) {
                $('.cablelength1').addClass('compare-green');
                $('.cablelength2').addClass('compare-green');
            } else {
                $('.cablelength1').addClass('compare-green');
                $('.cablelength2').addClass('compare-red');
            }

            $('.cablelength1').html( app.arrFromMainArray1[6] );
            $('.cablelength2').html( app.arrFromMainArray2[6] );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[9] < app.arrFromMainArray2[9] ) {
                $('.colormonitor1').addClass('compare-red');
                $('.colormonitor2').addClass('compare-green');
            } else if ( app.arrFromMainArray1[9] === app.arrFromMainArray2[9] ) {
                $('.colormonitor1').addClass('compare-green');
                $('.colormonitor2').addClass('compare-green');
            } else {
                $('.colormonitor1').addClass('compare-green');
                $('.colormonitor2').addClass('compare-red');
            }

            $('.colormonitor1').html( app.arrFromMainArray1[8] );
            $('.colormonitor2').html( app.arrFromMainArray2[8] );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[11] < app.arrFromMainArray2[11] ) {
                $('.diagonalmolitor1').addClass('compare-red');
                $('.diagonalmolitor2').addClass('compare-green');
            } else if ( app.arrFromMainArray1[11] === app.arrFromMainArray2[11] ) {
                $('.diagonalmolitor1').addClass('compare-green');
                $('.diagonalmolitor2').addClass('compare-green');
            } else {
                $('.diagonalmolitor1').addClass('compare-green');
                $('.diagonalmolitor2').addClass('compare-red');
            }

            $('.diagonalmolitor1').html( app.arrFromMainArray1[10] );
            $('.diagonalmolitor2').html( app.arrFromMainArray2[10] );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[13] < app.arrFromMainArray2[13] ) {
                $('.numberleds1').addClass('compare-red');
                $('.numberleds2').addClass('compare-green');
            } else if ( app.arrFromMainArray1[13] === app.arrFromMainArray2[13] ) {
                $('.numberleds1').addClass('compare-green');
                $('.numberleds2').addClass('compare-green');
            } else {
                $('.numberleds1').addClass('compare-green');
                $('.numberleds2').addClass('compare-red');
            }

            $('.numberleds1').html( app.arrFromMainArray1[12] );
            $('.numberleds2').html( app.arrFromMainArray2[12] );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[15] < app.arrFromMainArray2[15] ) {
                $('.cameraangle1').addClass('compare-red');
                $('.cameraangle2').addClass('compare-green');
            } else if ( app.arrFromMainArray1[15] > app.arrFromMainArray2[15] ) {
                $('.cameraangle1').addClass('compare-green');
                $('.cameraangle2').addClass('compare-red');
            } else if ( app.arrFromMainArray1[15] === app.arrFromMainArray2[15] ) {
                $('.cameraangle1').addClass('compare-green');
                $('.cameraangle2').addClass('compare-green');
            } else {
                $('.cameraangle1').addClass('compare-green');
                $('.cameraangle2').addClass('compare-red');
            }

            $('.cameraangle1').html( app.arrFromMainArray1[14] );
            $('.cameraangle2').html( app.arrFromMainArray2[14] );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[17] < app.arrFromMainArray2[17] ) {
                $('.dampproof1').addClass('compare-red');
                $('.dampproof2').addClass('compare-green');
            } else if ( app.arrFromMainArray1[17] === app.arrFromMainArray2[17] ) {
                $('.dampproof1').addClass('compare-green');
                $('.dampproof2').addClass('compare-green');
            } else {
                $('.dampproof1').addClass('compare-green');
                $('.dampproof2').addClass('compare-red');
            }

            $('.dampproof1').html( app.arrFromMainArray1[16] );
            $('.dampproof2').html( app.arrFromMainArray2[16] );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[19] > app.arrFromMainArray2[19] ) {
                $('.cameradiameter1').addClass('compare-red');
                $('.cameradiameter2').addClass('compare-green');
            } else if ( app.arrFromMainArray1[19] === app.arrFromMainArray2[19] ) {
                $('.cameradiameter1').addClass('compare-green');
                $('.cameradiameter2').addClass('compare-green');
            } else {
                $('.cameradiameter1').addClass('compare-green');
                $('.cameradiameter2').addClass('compare-red');
            }

            $('.cameradiameter1').html( app.arrFromMainArray1[18] );
            $('.cameradiameter2').html( app.arrFromMainArray2[18] );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[21] < app.arrFromMainArray2[21] ) {
                $('.recording1').addClass('compare-red');
                $('.recording2').addClass('compare-green');
            } else if ( app.arrFromMainArray1[21] === app.arrFromMainArray2[21] ) {
                $('.recording1').addClass('compare-green');
                $('.recording2').addClass('compare-green');
            } else {
                $('.recording1').addClass('compare-green');
                $('.recording2').addClass('compare-red');
            }

            $('.recording1').html( app.arrFromMainArray1[20] );
            $('.recording2').html( app.arrFromMainArray2[20] );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[23] < app.arrFromMainArray2[23] ) {
                $('.playback1').addClass('compare-red');
                $('.playback2').addClass('compare-green');
            } else if ( app.arrFromMainArray1[23] === app.arrFromMainArray2[23] ) {
                $('.playback1').addClass('compare-green');
                $('.playback2').addClass('compare-green');
            } else {
                $('.playback1').addClass('compare-green');
                $('.playback2').addClass('compare-red');
            }

            $('.playback1').html( app.arrFromMainArray1[22] );
            $('.playback2').html( app.arrFromMainArray2[22] );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[25] < app.arrFromMainArray2[25] ) {
                $('.powertype1').addClass('compare-red');
                $('.powertype2').addClass('compare-green');
            } else if ( app.arrFromMainArray1[25] === app.arrFromMainArray2[25] ) {
                $('.powertype1').addClass('compare-green');
                $('.powertype2').addClass('compare-green');
            } else {
                $('.powertype1').addClass('compare-green');
                $('.powertype2').addClass('compare-red');
            }

            $('.powertype1').html( app.arrFromMainArray1[24] );
            $('.powertype2').html( app.arrFromMainArray2[24] );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[27] < app.arrFromMainArray2[27] ) {
                $('.batterytime1').addClass('compare-red');
                $('.batterytime2').addClass('compare-green');
            } else if ( app.arrFromMainArray1[27] === app.arrFromMainArray2[27] ) {
                $('.batterytime1').addClass('compare-green');
                $('.batterytime2').addClass('compare-green');
            } else {
                $('.batterytime1').addClass('compare-green');
                $('.batterytime2').addClass('compare-red');
            }

            $('.batterytime1').html( app.arrFromMainArray1[26] );
            $('.batterytime2').html( app.arrFromMainArray2[26] );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[29] < app.arrFromMainArray2[29] ) {
                $('.transmitter1').addClass('compare-red');
                $('.transmitter2').addClass('compare-green');
            } else if ( app.arrFromMainArray1[29] === app.arrFromMainArray2[29] ) {
                $('.transmitter1').addClass('compare-green');
                $('.transmitter2').addClass('compare-green');
            } else {
                $('.transmitter1').addClass('compare-green');
                $('.transmitter2').addClass('compare-red');
            }

            $('.transmitter1').html( app.arrFromMainArray1[28] );
            $('.transmitter2').html( app.arrFromMainArray2[28] );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[31] < app.arrFromMainArray2[31] ) {
                $('.counter1').addClass('compare-red');
                $('.counter2').addClass('compare-green');
            } else if ( app.arrFromMainArray1[31] === app.arrFromMainArray2[31] ) {
                $('.counter1').addClass('compare-green');
                $('.counter2').addClass('compare-green');
            } else {
                $('.counter1').addClass('compare-green');
                $('.counter2').addClass('compare-red');
            }

            $('.counter1').html( app.arrFromMainArray1[30] );
            $('.counter2').html( app.arrFromMainArray2[30] );

            //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

            if ( app.arrFromMainArray1[33] < app.arrFromMainArray2[33] ) {
                $('.autolevel1').addClass('compare-red');
                $('.autolevel2').addClass('compare-green');
            } else if ( app.arrFromMainArray1[33] === app.arrFromMainArray2[33] ) {
                $('.autolevel1').addClass('compare-green');
                $('.autolevel2').addClass('compare-green');
            } else {
                $('.autolevel1').addClass('compare-green');
                $('.autolevel2').addClass('compare-red');
            }

            $('.autolevel1').html( app.arrFromMainArray1[32] );
            $('.autolevel2').html( app.arrFromMainArray2[32] );

        },
        // -- сравнение двух товаров

        // -- добавление товара в сравнение
        addItemToCompare: function () {

            // unchek-me чекбокс не установлен
            // chek-me   чекбокс установлен

            var _this = $(this);

            if ( _this.hasClass('unchek-me') ) {
                _this.removeClass('unchek-me');
                _this.addClass('chek-me');

                if ( app.onlyTwoItems === 2 ) {
                    app.onlyTwoItems = 2;
                    _this.addClass('unchek-me');
                    _this.removeClass('chek-me');
                    alert('Для сравнения можно выбрать только два товара');
                    return false;
                } else if ( app.onlyTwoItems >= 0 && app.onlyTwoItems < 2 ) {
                    app.onlyTwoItems = app.onlyTwoItems + 1;
                    app.arrayOfTwoItems.push(_this.parents('.tovar_cat').find('.tovar-name').text());
                    app.arrayOfTwoPrices.push(_this.parents('.tovar_cat').find('.price-cat p').text());
                }

            } else if ( _this.hasClass('chek-me') ) {
                _this.addClass('unchek-me');
                _this.removeClass('chek-me');

                if ( app.onlyTwoItems > 0 && app.onlyTwoItems <= 2 ) {
                    app.onlyTwoItems = app.onlyTwoItems - 1;

                    for (var i = 0; i < app.arrayOfTwoItems.length; i++) {
                        if ( app.arrayOfTwoItems[i] === _this.parents('.tovar_cat').find('.tovar-name').text() ) {
                            app.arrayOfTwoItems.splice(i, 1);
                        }
                    }

                }

            }

        }
        // -- добавление товара в сравнение
        // -- функции вызываемые из setUpListeners ===============

    }

    app.initialize();

}());













































































































































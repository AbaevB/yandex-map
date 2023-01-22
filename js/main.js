
// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [6.26440301983966,-75.57854799999998],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15
        });

        // Создание геообъекта с типом точка (метка).
var myGeoObject = new ymaps.GeoObject({
  geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [6.26440301983966,-75.57854799999998] // координаты точки
  }
});

// Создадим метку.
var placemark = new ymaps.Placemark([6.254118027567698,-75.56434302105711], {
  balloonContent: '<img src="img/medellin.jpeg"/>',
  iconContent: "Медельин"}
, {
  preset: "islands#yellowStretchyIcon",
  // Отключаем кнопку закрытия балуна.
  balloonCloseButton: false,
   // Балун будем открывать и закрывать кликом по иконке метки.
  hideIconOnBalloonOpen: false
});


// Размещение геообъекта на карте.
myMap.geoObjects.add(myGeoObject);
myMap.geoObjects.add(placemark);
    }

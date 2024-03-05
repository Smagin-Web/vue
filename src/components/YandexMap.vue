<template>
  <div ref="map" class="map"></div>
</template>

<script>
export default {
  name: 'YandexMap',
  mounted() {
    this.loadMap();
  },
  methods: {
    loadMap() {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ВАШ\_API\_КЛЮЧ&lang=ru\_RU';
      script.onload = () => {
        this.initMap();
      };
      document.head.appendChild(script);
    },
    initMap() {
      ymaps.ready(() => {
        const map = new ymaps.Map(this.$refs.map, {
          center: [55.76, 37.64], // Замените на нужные координаты
          zoom: 10,
        });
        map.behaviors.disable('scrollZoom');
      });
    },
  },
};
</script>

<style>
.map {
  width: 100%;
  height: 400px; /* Укажите нужные размеры */
}
</style>
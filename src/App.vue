<template>
  <v-app>
    <navbar-component></navbar-component>
    <div id="carousel">
      <carousel-component></carousel-component>
    </div>
    <spacer-component></spacer-component>
    <div id="services">
      <services-component></services-component>
    </div>
    <spacer-component></spacer-component>
    <div id="about">
      <about-component></about-component>
    </div>
    <spacer-component></spacer-component>
    <div id="gallery">
      <gallery-component></gallery-component>
    </div>
    <spacer-component></spacer-component>
    <div id="contact">
      <contact-component></contact-component>
    </div>
    <footer-component></footer-component>
  </v-app>
</template>


<script>
import SpacerComponent from './components/SpacerComponent.vue';

import CarouselComponent from './components/CarouselComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import ServicesComponent from './components/ServicesComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import GalleryComponent from './components/GalleryComponent.vue';
export default {
  name: 'App',

  components: {
    SpacerComponent,
    NavbarComponent,
    CarouselComponent,
    ServicesComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    GalleryComponent
  },

  data: () => ({
    //
  }),
}
</script>

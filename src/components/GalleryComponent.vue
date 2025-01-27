<template>
    <div class="services">
        <!-- Section Title -->
        <div class="services-section">
            <h2>Galerie</h2>
        </div>

        <!-- Image Grid -->
        <v-row>
            <template v-for="(image, index) in images" :key="index">
                <v-col :cols="4">
                    <!-- Box around image -->
                    <div class="image-box">
                        <!-- Lazy Load Wrapper -->
                        <v-lazy :min-height="200" :options="{ threshold: 0.5 }" transition="fade-transition">
                            <!-- Applying slide-in animation -->
                            <v-img :src="image" height="100%" cover class="image-hover slide-in" :class="{
                                'slide-left': index % 2 === 0,
                                'slide-right': index % 2 !== 0
                            }">
                            </v-img>
                        </v-lazy>
                    </div>
                </v-col>
            </template>
        </v-row>
    </div>
</template>

<script setup>
const images = [

    '/services/IMG_2.jpg',
    '/services/IMG_3.jpg',
    '/services/IMG_13.jpg',
    '/services/IMG_4.jpg',
    '/services/IMG_5.jpg',
    '/services/IMG_12.jpg',
    '/services/IMG_7.jpg',
    '/services/IMG_8.jpg',
    '/services/IMG_11.png',
    '/services/IMG_9.jpg',
    '/services/IMG_10.jpg',



];
</script>

<style scoped>
html,
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    /* Disable horizontal scrolling */
}

.services {
    background: #e7e0e0;
    padding: 20px;
}

.services-section {
    text-align: center;
    margin-bottom: 40px;
}

.services-section h2 {
    font-size: 3rem;
    font-weight: 600;
    color: #333;
}

.v-row {
    margin: auto;
    width: 80%;
}

/* Box styling around images */
.image-box {
    position: relative;
    border: 1px solid #ddd;
    padding: 4px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.image-box:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
}

/* Slide-in animation */
@keyframes slide-left {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-right {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-left {
    animation: slide-left 0.8s ease-out;
}

.slide-right {
    animation: slide-right 0.8s ease-out;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .services-section h2 {
        font-size: 2rem;
    }

    .v-col {
        flex: 0 0 100%;
        min-width: 100%;
    }

    .v-img {
        min-height: 200px;
        width: 100%;
        object-fit: cover;
    }
}
</style>

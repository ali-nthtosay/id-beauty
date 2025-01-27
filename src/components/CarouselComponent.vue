<template>
    <v-carousel height="900" show-arrows="hover" cycle hide-delimiter-background>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet height="100%" style="background: transparent;">
                <div class="d-flex fill-height justify-center align-end" :style="{
                    backgroundImage: `url(${images[i]})`,
                    backgroundSize: ' contain',
                    backgroundPosition: 'center',
                }">
                    <div class="white--text text-shadow responsive-text seo-carousel-text" style="
                            text-align: center;
                            padding: 10px 20px;
                            background: rgba(255, 255, 255, 0.8);
                            border-radius: 10px;
                            margin-bottom: 5%;
                        ">
                        <h1>{{ slide.heading }}</h1>
                        <p>{{ slide.description }}</p>
                    </div>
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data() {
        return {
            images: [
                '/carousel/image_5.jpg',
                '/carousel/image_3.jpg',

                '/carousel/image_12.jpg',
                '/carousel/image_11.jpg',
                '/carousel/image_10.jpg',
            ],
            slides: [
                {
                    heading: 'Welcome to Luxury Nails – Your Personal Haven of Elegance',
                    description: 'Experience the finest nail care in a luxurious and relaxing environment.',
                },
                {
                    heading: 'Explore Our Exquisite Nail Art Collections',
                    description: 'Discover stunning designs crafted to perfection by our skilled professionals.',
                },
                {
                    heading: 'Relax and Rejuvenate with Premium Spa Treatments',
                    description: 'Indulge in relaxation with our top-tier spa and wellness services.',
                },
                {
                    heading: 'Finest Manicure and Pedicure Services',
                    description: 'Pamper yourself with our expert care and tailored treatments.',
                },
                {
                    heading: 'Custom Nail Designs That Shine',
                    description: 'Unleash your style with bespoke designs that make a statement.',
                },
            ],
        };
    },
};
</script>

<style scoped>
html,
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    /* Disable horizontal scrolling */
}

/* Text shadow for better visibility */
.text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

/* Responsive text sizes */
.responsive-text {
    font-size: 2rem;
    /* Default size for larger screens */
}

@media (max-width: 768px) {
    .responsive-text {
        font-size: 1.5rem;
        /* Adjust for medium screens */
    }
}

@media (max-width: 480px) {
    .responsive-text {
        font-size: 1.2rem;
        /* Adjust for smaller screens */
    }
}

/* Additional SEO styling for carousel text */
.seo-carousel-text h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
    font-weight: 700;
}

.seo-carousel-text p {
    font-size: 1.2rem;
    color: #555;
    margin: 0;
    line-height: 1.5;
}
</style>

<template>
    <div class="services">
        <div class="services-section">
            <!-- Title for the section -->
            <h2 class="text-4xl font-extrabold text-left text-gray-800 tracking-wide leading-snug mb-8">
                UNSERE LEISTUNGEN
            </h2>
        </div>
        <div class="grid-container">
            <div class="grid-item" v-for="(image, index) in images" :key="index">
                <fwb-card :img-alt="titles[index]" class="custom-card" @click="openModal(index)">
                    <img :src="image" :alt="titles[index]" class="card-image" />
                    <div class="p-5 bg-white">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {{ titles[index] }}
                        </h5>
                    </div>
                </fwb-card>
            </div>
        </div>

        <!-- Modal -->
        <div v-if="selectedCard !== null" class="modal-overlay" @click.self="closeModal">
            <div class="modal-content">
                <h3 class="modal-title">{{ titles[selectedCard] }}</h3>
                <img :src="images[selectedCard]" :alt="titles[selectedCard]" class="modal-image" />
                <p class="modal-description">
                    {{ seoDescriptions[selectedCard] }}
                </p>
                <button class="modal-close" @click="closeModal">Schließen</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Reactive arrays for images, titles, and SEO descriptions
const images = ref([
    '/services-images/image1.JPG',
    '/services-images/image2.JPG',
    '/services-images/image4.JPG',
    '/services-images/image5.JPG',
    '/services-images/image6.JPG',
    '/services-images/image7.JPG',
]);

const titles = ref([
    'Aquarelle Lippen',
    'Wimpernverlängerung',
    'Pediküre',
    'Maniküre',
    'Make up',
    'Powder Brows',
]);

const seoDescriptions = ref([
    'Aquarelle Lippen: Erleben Sie natürlich wirkende Pigmentierungen, die Ihren Lippen Volumen und eine lebendige Farbe verleihen.',
    'Wimpernverlängerung: Genießen Sie lange, volle Wimpern mit unseren hochwertigen Extensions – elegant und komfortabel.',
    'Pediküre: Verwöhnen Sie Ihre Füße mit einer luxuriösen Pediküre, einschließlich Peeling, Massage und Lackierung.',
    'Maniküre: Lassen Sie Ihre Hände mit einer professionellen Maniküre strahlen – individuelle Designs und langanhaltende Ergebnisse.',
    'Make up: Unsere Experten kreieren für jeden Anlass den perfekten Look, der Ihre natürliche Schönheit unterstreicht.',
    'Powder Brows: Perfekt geformte und definierte Augenbrauen mit unserer Powder-Brows-Behandlung – Schönheit und Präzision vereint.',
]);

// Track the selected card index
const selectedCard = ref(null);

// Open modal for a specific card
function openModal(index) {
    selectedCard.value = index;
}

// Close the modal
function closeModal() {
    selectedCard.value = null;
}
</script>

<style scoped>
/* General styles for the page */
.services {
    background: #e7e0e0;
    padding-top: 30px;
}

.services-section {
    margin-top: 40px;
    margin-left: 100px;
}

h2 {
    text-align: left;
    font-size: 4.25rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 2rem;
}

.grid-container {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 20px;
}

.grid-item {
    display: flex;
    justify-content: center;
}

.custom-card {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    max-width: 500px;
    height: 500px;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    background-color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Add a hover effect for a subtle scale */
.custom-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
}

.card-image {
    width: 100%;
    height: 75%;
    object-fit: cover;
}

.p-5 {
    padding: 20px;
}

/* Smaller modal styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    border-radius: 10px;
    width: 90%;
    max-width: 400px;
    /* Reduced width */
    padding: 15px;
    /* Reduced padding */
    text-align: center;
    position: relative;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-title {
    font-size: 1.75rem;
    /* Smaller title font */
    font-weight: bold;
    margin-bottom: 10px;
}

.modal-image {
    width: 100%;
    height: auto;
    margin: 15px 0;
    /* Smaller margin */
    border-radius: 10px;
    object-fit: cover;
}

.modal-description {
    font-size: 0.9rem;
    /* Smaller description font */
    color: #333;
    margin-bottom: 15px;
}

.modal-close {
    background: #ef4444;
    color: white;
    border: none;
    padding: 8px 15px;
    /* Smaller button */
    font-size: 0.9rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.modal-close:hover {
    background: #dc2626;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 640px) {
    .services-section h2 {
        font-size: 34px;
    }

    .grid-container {
        grid-template-columns: 1fr;
    }

    .custom-card {
        max-width: 100%;
        height: 400px;
    }
}
</style>

<template>
    <div class="info-container">
        <div class="info-row">
            <!-- Öffnungszeiten -->
            <div class="info-section-one text-left">
                <h2>Öffnungszeiten</h2>
                <ul>
                    <li>Montag - Freitag: 10:00 - 20:00</li>
                    <li>Sonntag: Geschlossen</li>
                </ul>
            </div>

            <!-- Kontakt -->
            <div class="info-section-two text-center">
                <div class="features-container">
                    <v-container>
                        <v-row class="d-flex align-center justify-center">
                            <v-col cols="12" md="8">
                                <div class="features-content">
                                    <v-icon class="feature-icon" large color="primary"
                                        aria-label="Buchen und verwalten">
                                        mdi-calendar-check
                                    </v-icon>
                                    <h3 class="feature-title">
                                        Buchen und verwalten Sie Ihre Termine unterwegs
                                    </h3>
                                </div>
                            </v-col>
                            <v-col cols="12" md="8">
                                <div class="features-content">
                                    <v-icon class="feature-icon" large color="primary"
                                        aria-label="Erinnerungen erhalten">
                                        mdi-bell-alert
                                    </v-icon>
                                    <h3 class="feature-title">
                                        Überprüfen Sie bevorstehende Termine und erhalten Sie automatische Erinnerungen
                                    </h3>
                                </div>
                            </v-col>
                            <v-col cols="12" md="8">
                                <div class="features-content">
                                    <v-icon class="feature-icon" large color="primary"
                                        aria-label="Lieblingsbehandlungen">
                                        mdi-heart
                                    </v-icon>
                                    <h3 class="feature-title">
                                        Buchen Sie Ihre Lieblingsbehandlung in wenigen Sekunden nochmal
                                    </h3>
                                </div>
                            </v-col>
                        </v-row>
                        <div class="container">
                            <a target="_blank" rel="noopener noreferrer"
                                href="https://n822055.alteg.io/company/771948/personal/menu?fbclid=PAAaauVBXUKT06WrekGnwoBV59SI_uUcwOmxNg8l_MIfCMlsq0DrHUC8iF0vo_aem_AX_fn9g3_HfK9NDCRrQ4zZv51ieJmuZl6P2Lb4QJa4kZksoFLVkxvw79EI-0Gh_5THk&o=">
                                <button class="termin-button" aria-label="Termin buchen">Termin Buchen</button>
                            </a>
                        </div>
                    </v-container>
                </div>
            </div>

            <!-- Adresse with Google Map -->
            <div class="info-section-three">
                <div class="info-section">
                    <h2>Kontakt</h2>
                    <p>Telefon: <a href="tel:017623652106" aria-label="Telefonnummer">0176 236 52106</a></p>
                    <p>Email: <a href="mailto:idbeauty.berlin@gmail.com"
                            aria-label="Email">idbeauty.berlin@gmail.com</a></p>
                    <br>

                    <h2>Adresse:</h2>
                    <p>Gasteiner Str. 3</p>
                    <p>10717 Berlin</p>
                    <p>Deutschland</p>
                    <br>

                    <h2>Folgen Sie Uns</h2>
                    <div>
                        <div class="social-links" style="display: flex; align-items: center; gap: 10px;">
                            <a href="https://www.instagram.com/id_beautysalon_academy/" target="_blank"
                                rel="noopener noreferrer" aria-label="Instagram">
                                <img :src="instaLogo" alt="Instagram Logo" class="insta-logo" />
                            </a>
                            <a href="https://www.facebook.com/share/17p7JUYrVP/?mibextid=wwXIfr" target="_blank"
                                rel="noopener noreferrer" aria-label="Facebook">
                                <img :src="FacebookLogo" alt="Facebook Logo" class="insta-logo" />
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Embed Google Map -->
                <div class="google-map-container">
                    <iframe title="ID Beauty Salon & Academy Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.5323296742345!2d13.3253505!3d52.4876029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b9e3116807bb421%3A0x6f84952bdf5ccb8!2sID%20Beauty%20Salon%20%26%20Academy!5e0!3m2!1sde!2sde!4v1736714220649!5m2!1sde!2sde"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import instaLogo from "@/assets/insta-logo.png";
import FacebookLogo from "@/assets/facebook-logo.jpeg";

export default {
    name: "InstaIcon",
    data() {
        return {
            instaLogo,
            FacebookLogo,
        };
    },
};
</script>


<style scoped>
.insta-logo {
    width: 40px;
    /* Adjust size as needed */
    height: 40px;
    cursor: pointer;
}

.insta-logo:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    /* Adds a shadow */
    border: 2px solid #e1306c;
    /* Adds a pinkish border (Instagram's color) */
}

.features-container {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.features-content {
    display: flex;

    /* Space between icon and text */
    text-align: left;
    /* Ensure text alignment to the left */
}

.feature-icon {
    font-size: 2.5rem;
}

.feature-title {
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    margin: 0;
}

.info-container {

    background-color: #ecd9d9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.info-row {
    display: flex;
    margin-top: 20px;
}

.info-section {
    display: flex;
    flex-direction: column;
    min-width: 250px;
    margin: 10px 250px 0 30px;

}

.info-section-one {
    flex: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    padding: 50px 0 0 50px;
}

.info-section-two {
    flex: 3;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

}

.info-section-three {
    flex: 4;
    background-color: white;
    flex-wrap: nowrap;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;

}

h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #2c3e50;
}

p,
li {
    font-size: 1rem;
    color: #555;
}

ul {
    list-style: none;
    padding: 0 0 0 20px;
}

/* Google Map Container */
.google-map-container {

    margin-top: 10px;
    width: 100%;
    max-width: 500px;
    max-height: 500px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}


.termin-button {
    position: relative;
    padding: 10px 50px;
    margin: 0 15px;
    color: #101111;
    background: none;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    transition: 0.5s;
    overflow: hidden;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0007);
}

.termin-button:hover {
    background-color: #FF00BF;
    color: #111;
    box-shadow: 0 0 50px #21ebff;
    transition-delay: 0.1s;
}

.termin-button:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid #21ebff;
    border-left: 2px solid #21ebff;
    transition: 0.3s;
}

.termin-button:hover:before {
    width: 100%;
    height: 100%;
}

.termin-button:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #28ff21;
    border-right: 2px solid #21ebff;
    transition: 0.2s;
}

.termin-button:hover:after {
    width: 100%;
    height: 100%;
}

.container {
    margin: 70px;
    display: flex;
    justify-content: space-evenly;
}

/* Mobile Optimization */
@media (max-width: 768px) {
    .info-section-three p {
        white-space: nowrap;
        /* Prevent line breaks */
        overflow: hidden;
        /* Handle overflow gracefully */
        text-overflow: ellipsis;
        /* Show ellipsis if necessary */
    }

    .info-row {
        flex-direction: column;
        align-items: center;

        gap: 20px;
    }

    .info-section-three {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

    .info-section {
        margin-left: 350px;
        padding: 40px 200px;

    }

    .google-map-container iframe {
        width: 100%;
        height: 250px;
    }

    .info-section-one {
        padding-right: 30px;
        padding-bottom: 40px;
        min-width: 90%;
    }

    .info-section-two {
        min-width: 80%;
    }

    .features-container {
        padding: 20px 10px;
    }

    .feature-icon {
        font-size: 2rem;
    }

    .feature-title {
        font-size: 1rem;
    }

    .termin-button {
        margin-right: 120px;
    }
}
</style>

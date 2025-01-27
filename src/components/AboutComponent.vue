<template>
    <div class="beautysalon-container">
        <div class="row">
            <div class="image-container-one">
                <img src="/carousel/salon1.jpg" alt="Eleganter Beautysalon in Berlin" class="image" />
            </div>
            <div class="image-container-two">
                <img src="/carousel/salon2.jpg" alt="Professionelle Kosmetikbehandlung im Beautysalon" class="image" />
                <div>
                    <img src="/carousel/salon4.jpg" alt="Entspannende Atmosphäre im Salon" class="image3" />
                </div>
            </div>
            <div class="text-container">
                <h1>Ihr Beautysalon in Berlin – Schönheit trifft Kompetenz</h1>

                <p>
                    Willkommen in Ihrem <strong>Beautysalon in Berlin</strong>, wo Ihre Schönheit und Zufriedenheit im
                    Mittelpunkt stehen.
                    Unsere erfahrenen Fachkräfte bieten Ihnen ein umfassendes Angebot an
                    <strong>Kosmetikdienstleistungen</strong>,
                    die perfekt auf Ihre Bedürfnisse abgestimmt sind.
                </p>

                <h2>Höchste Hygienestandards für Ihre Sicherheit</h2>
                <p>
                    Die Gesundheit unserer Kundinnen liegt uns besonders am Herzen. Aus diesem Grund setzen wir auf
                    einen
                    dreistufigen <strong>Sterilisationsprozess</strong>, der die höchste Reinheit gewährleistet:
                </p>
                <ul>
                    <li><strong>Desinfektion:</strong> Entfernung sichtbarer Verunreinigungen und Keimreduktion.</li>
                    <li><strong>Reinigung:</strong> Gründliche Säuberung aller Werkzeuge.</li>
                    <li><strong>Sterilisation:</strong> Abtötung sämtlicher Mikroorganismen durch
                        Hochtemperaturverfahren.</li>
                </ul>

                <h2>Ständige Weiterbildung für beste Ergebnisse</h2>
                <p>
                    Unser Team nimmt regelmäßig an Weiterbildungen teil, um Ihnen die neuesten
                    <strong>Kosmetiktrends</strong> und
                    <strong>Techniken</strong> anbieten zu können. Egal ob <strong>Make-up</strong>,
                    <strong>Maniküre</strong> oder
                    <strong>Wimpernverlängerung</strong> – bei uns sind Sie in den besten Händen.
                </p>

                <h2>Warum unser Beautysalon in Berlin Ihre erste Wahl ist</h2>
                <p>
                    Entscheiden Sie sich für uns, weil wir Ihnen mehr bieten:
                </p>
                <ul>
                    <li><strong>Höchste Hygienestandards:</strong> Für Ihre Sicherheit und Wohlbefinden.</li>
                    <li><strong>Kompetentes Team:</strong> Experten mit stetiger Weiterbildung.</li>
                    <li><strong>Individuelle Beratung:</strong> Lösungen, die perfekt auf Ihre Wünsche zugeschnitten
                        sind.</li>
                </ul>

                <p>
                    Gönnen Sie sich eine Auszeit und lassen Sie sich von uns verwöhnen. Vereinbaren Sie jetzt Ihren
                    Termin
                    und erleben Sie, was es heißt, perfekt gepflegt zu sein.
                </p>

                <p><strong>Weil Sie es sich wert sind!</strong></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BeautysalonComponent",
};
</script>





<style scoped>
.beautysalon-container {
    margin: 40px 0;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    /* Fills 40% of viewport height */
}

.row {
    display: flex;
    width: 85%;
    /* Row occupies 65% of the page width */
    align-items: stretch;
    gap: 30px;
    /* Optional spacing between items */
}

.image3 {
    width: 400px;
    height: 400px;
    bottom: 0;
    left: -300px;
    position: absolute;
    border-radius: 10px;
}

.image-container {
    flex: 0 0 25%;
    /* Each image-container gets 25% of the row's width */
}

.image-container-one {
    padding-bottom: 50px;
}

.image-container-two {
    position: relative;
    padding-top: 100px;
}

.text-container {
    flex: 0 0 45%;
    /* The text-container gets 50% of the row's width */
    padding: 25px;
    /* Add padding for spacing */
    background-color: #f9f9f9;
    /* Subtle light background for contrast */
    border-radius: 10px;
    /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* Softer, slightly larger shadow */
    font-family: 'Roboto', sans-serif;
    /* Modern, clean font */
    line-height: 1.8;
    /* Improved line spacing for readability */
    color: #333;
    /* Neutral text color for good contrast */
}

.text-container h1 {
    font-size: 2rem;
    /* Larger, eye-catching title */
    font-weight: 700;
    /* Bold for emphasis */
    color: #2c3e50;
    /* Darker shade for the heading */
    margin-bottom: 20px;
    /* Space below the heading */
}

.text-container h2 {
    font-size: 1.5rem;
    /* Subheading slightly smaller than h1 */
    font-weight: 600;
    /* Semi-bold for distinction */
    color: #34495e;
    /* Complementary dark color */
    margin-top: 25px;
    /* Space above the subheading */
    margin-bottom: 15px;
    /* Space below the subheading */
    border-bottom: 2px solid #ddd;
    /* Adds a subtle underline effect */
    padding-bottom: 5px;
}

.text-container p {
    font-size: 1rem;
    /* Standard paragraph size */
    margin-bottom: 15px;
    /* Space between paragraphs */
    color: #555;
    /* Softer gray for the text */
}

.text-container a {
    color: #3498db;
    /* Blue links */
    text-decoration: none;
    /* Remove underline */
    font-weight: 500;
    /* Slightly bold links */
}

.text-container a:hover {
    text-decoration: underline;
    /* Add underline on hover */
}

.image {
    width: 100%;
    /* Ensures images fill their containers */
    height: 800px;
    /* Maintain aspect ratio */
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
    .row {
        display: flex;
        flex-direction: column;
        /* Stack elements vertically */
        width: 85%;
        /* Adjust width for smaller screens */
    }

    .text-container h1 {
        font-size: 1.5rem;
    }

    .text-container h2 {
        font-size: 1.2rem;
    }

    .text-container p {
        font-size: 0.9rem;
    }

    .text-container {
        flex-grow: 3;
    }

    .image-container-two {
        display: none;

        /* Hide for very small screens */
    }

    .image-container-one {
        flex-grow: 1;
        /* Hide for very small screens */
    }

    .image3 {
        display: none;
    }

}
</style>
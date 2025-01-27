<template>
    <div class="container">
        <button class="termin-button">Termin Buchen</button>
    </div>
</template>

<style scoped>
.termin-button {
    position: relative;
    padding: 10px 50px;
    margin: 0 15px;
    color: #313333;
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
</style>
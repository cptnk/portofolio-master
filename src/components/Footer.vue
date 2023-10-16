<template>
    <div v-bind:class="mode === 'light' ? 'light_drop' : ''" class="back-drop">
        <figure class="figure-container" v-if="mode !== 'light'">
            <div class="figure_box yellow"></div>
            <div class="figure_box purple"></div>
            <div class="figure_box teal"></div>
        </figure>
        <footer class="container" id="cvFooter">
            <div class="row flex-row flex-row-justify footer-links">
                <a href="/">Home</a> <a href="/#/cv">Curriculum Vitae</a> <a href="/#/imprint">Imprint</a>
            </div>
        </footer>
        <div class="copyright">©{{year}} cptnk</div>
    </div>
</template>

<style scoped>
    .back-drop {
        position: relative;
        background-color: #2c3e50;
        padding-top: 7rem;
        padding-bottom: 7rem;
    }
    .light_drop {
        padding-top: 2rem;
        padding-bottom: 3.5rem;
        background-color: #fff;
        border-top: 1px solid #2c3e50;
    }

    #cvFooter {
        transform: translateY(0);
    }
    .footer-links {
        gap: 1rem;
    }
    .copyright {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
    }
    .light_drop .copyright {
        color: #2c3e50;
    }
    .figure-container {
        position: absolute;
        top: 0;
        left: 2rem;
        height: 14rem;
        width: 300px;
    }

    @keyframes tilt-n-move-shaking {
        0% { transform: translate(0, 0) rotate(45deg); }
        25% { transform: translate(5px, 15px) rotate(45deg); }
        50% { transform: translate(5px, 10px) rotate(45deg); }
        75% { transform: translate(-5px, -15px) rotate(45deg); }
        100% { transform: translate(0, 0) rotate(45deg); }
    }

    @keyframes tilt-n-move-shaking-purple {
        0% { transform: translate(0, 0) rotate(45deg); }
        25% { transform: translate(3px, 12px) rotate(45deg); }
        50% { transform: translate(3px, 7px) rotate(45deg); }
        75% { transform: translate(-3px, -12px) rotate(45deg); }
        100% { transform: translate(0, 0) rotate(45deg); }
    }

    @keyframes tilt-n-move-shaking-teal {
        0% { transform: translate(0, 0) rotate(45deg); }
        25% { transform: translate(5px, 15px) rotate(45deg); }
        50% { transform: translate(5px, 10px) rotate(45deg); }
        75% { transform: translate(-5px, -15px) rotate(45deg); }
        100% { transform: translate(0, 0) rotate(45deg); }
    }

    .figure_box {
        transform: rotate(45deg);
        width: 200px;
        height: 50px;
        filter: drop-shadow(0 0 0.15rem black);
    }

    .yellow {
        background-color: #ffff00;
        animation: tilt-n-move-shaking ease-in-out 15s infinite;
    }

    .purple {
        background-color: #ff00ff;
        animation: tilt-n-move-shaking-purple ease-in 15s infinite;
    }

    .teal {
        background-color: #00ffff;
        animation: tilt-n-move-shaking-teal ease-out 15s infinite;
    }

    @media (max-width: 992px) {
        .figure-container {
            display: none;
        }
    }
</style>

<script>
export default {
    name: 'Footer',
    props: ['mode'],
    data () {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>

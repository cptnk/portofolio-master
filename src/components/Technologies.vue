<template>
    <div class="container" id="technologiesContainer">
        <div class="col-12">
            <h2>Technologies</h2>
        </div>
        <div class="row flex-row flex-row-justify">
            <div class="col-12 col-lg-5" id="tech-gl">
                <ul class="stack-list">
                    <li class="stack-item">
                        <img src="../assets/static/python.png"/>
                    </li>
                    <li class="stack-item">
                        <img src="../assets/static/php_logo.svg"/>
                    </li>
                    <li class="stack-item">
                        <img src="../assets/static/jabascript.png"/>
                    </li>
                    <li class="stack-item">
                        <img src="../assets/static/django.svg"/>
                    </li>
                    <li class="stack-item">
                        <img src="../assets/static/vuejs_logo.svg"/>
                    </li>
                    <li class="stack-item">
                        <img src="../assets/static/typo3_logo.svg"/>
                    </li>
                    <li class="stack-item">
                        <img src="../assets/static/zf_logo.png"/>
                    </li>
                    <li class="stack-item">
                        <img src="../assets/static/laravel.svg"/>
                    </li>
                    <li class="stack-item">
                        <img src="../assets/static/symfony2.svg"/>
                    </li>
                    <li class="stack-item">
                        <img src="../assets/static/react.svg"/>
                    </li>
                    <li class="stack-item">
                        <img src="../assets/static/aws.svg"/>
                    </li>
                    <li class="stack-item">
                        <img src="../assets/static/gitlab.svg"/>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-lg-7">
                <section class="technologies-section">
                    <h2>Knowledge and Interests;</h2>
                    <div class="tech-item backend-tech">
                        <h4>Backend</h4>
                        <div class="flex-container">
                            <div class="two-x-tow-item">
                                <h5 class="odd">PHP</h5>
                                <ul class="odd tech-stack-list">
                                    <li>{{ (new Date()).getFullYear() - 2013 }} years of professional experience</li>
                                    <li>Interested in OOP practice and modern programming paradigms as well as testing</li>
                                    <li>Professional knowledge in Zend Framework, Laravel, TYPO3, Laravel, Symfony and WordPress</li>
                                </ul>
                            </div>
                            <div class="two-x-tow-item">
                                <h5>Python</h5>
                                <ul class="tech-stack-list">
                                    <li>1 year of professional experience</li>
                                    <li>Not my favourite language and it has been some time since I last extensively worked with it</li>
                                    <li>Professional knowledge in Django</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="tech-item Frontend-tech">
                        <h4>Frontend</h4>
                        <div class="flex-container">
                            <div class="two-x-tow-item">
                                <h5 class="odd">JavaScript</h5>
                                <ul class="odd tech-stack-list">
                                    <li>{{ (new Date()).getFullYear() - 2015 }} years of professional experience </li>
                                    <li>Interested in es6 and browser support for various features</li>
                                    <li>Professional knowledge in Vue.js, jQuery, Angular, ReactJs and Three.js</li>
                                </ul>
                            </div>
                            <div class="two-x-tow-item">
                                <h5>CSS</h5>
                                <ul class="tech-stack-list">
                                    <li>{{ (new Date()).getFullYear() - 2013 }} years of professional experience</li>
                                    <li>Interested in Pre-Processors, SVG Animation, Grid Layout and Flex</li>
                                    <li>Uses SCSS used LESS in the past</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="tech-item general-tech">
                        <h4>General</h4>
                        <div class="flex-container">
                            <div class="two-x-tow-item">
                                <h5 class="odd">Deployment and VCS</h5>
                                <ul class="odd tech-stack-list">
                                    <li>Currently uses Git but used SVN previously</li>
                                    <li>Currently uses AWS</li>
                                    <li>Interested in AWS</li>
                                    <li>Used Fabric and DPLOY and Jenkins in the past</li>
                                    <li>Automated testing done with AWS test setup</li>
                                    <li>Interested in JavaScript based testing frameworks like Karma</li>
                                </ul>
                            </div>
                            <div class="two-x-tow-item">
                                <h5>Design</h5>
                                <ul class="tech-stack-list">
                                    <li>Proficient with Adobe (Illustrator, Photoshop)</li>
                                    <li>Proficient with (Windows, Linux, MacOS)</li>
                                    <li>Proficient with the setup of computer hardware</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'Technologies',
    data () {
      return {
        // title: 'Home of Stanislaw Gutsch'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #technologiesContainer {
        margin-top: 7rem;
    }

    #tech-gl {
        position: relative;
        width: 100%;
    }

    .stack-list {
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        z-index: 2;
        position: relative;
        padding-left: 0;
    }

    h2 {
        display: none;
    }

    @media (max-width: 992px) {
        .stack-list {
            flex-flow: row;
            margin-bottom: 5rem;
            flex-wrap: wrap;
        }
        h2 {
            display: block;
        }
    }

    .stack-list .stack-item {
        width: calc(100px - 2rem);
        height: calc(75px - 2rem);
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    .stack-list .stack-item img {
        object-fit: contain;
        font-family: 'object-fit: contain;';
        width: calc(100px - 2rem);
        height: calc(75px - 2rem);
    }

    .general-tech {
        background-color: #2c3e50;
    }

    .general-tech .odd {
        border-right: .5rem solid #2c3e50;
    }

    .general-tech h4 {
        color: #ff00ff;
    }

    .general-tech h5 {
        text-decoration: underline;
        text-decoration-color: #ff00ff;
    }

    .Frontend-tech {
        background-color: #2c3e50;
    }

    .Frontend-tech .odd {
        border-right: .5rem solid #2c3e50;
    }

    .Frontend-tech h4 {
        color: #00ffff;
    }

    .Frontend-tech h5 {
        text-decoration: underline;
        text-decoration-color: #00ffff;
    }

    .backend-tech {
        background-color: #2c3e50;
    }

    .backend-tech h4 {
        color: #ffff00;
    }

    .backend-tech .odd {
        border-right: .5rem solid #2c3e50;
    }

    .backend-tech h5 {
        text-decoration: underline;
        text-decoration-color: #ffff00;
    }

    .tech-item {
        padding: .5rem;
    }

    .tech-item .flex-container {
        background-color: #fff;
    }

    .tech-item li {
        padding: .75rem .75rem;
    }

    .tech-item h4 {
        font-family: 'Pixelify Sans';
        margin-bottom: 0;
        padding: 0 1rem 1rem;
        font-weight: bold;
        text-align: center;
    }

    .tech-item:nth-of-type(1) h4 {
        padding-top: .5rem;
    }

    .tech-item h5 {
        padding: 1rem;
        text-align: center;
        margin-bottom: 0;
    }

    .tech-item .two-x-tow-item ul  {
        margin-bottom: 0;
        padding-bottom: 1rem;
    }

    .tech-stack-list {
        list-style-type: none;
    }

    .tech-stack-list li {
        position: relative;
    }

    .tech-stack-list li:before {
        content: '';
        position: absolute;
        left: -1rem;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
        height: 5px;
        border: 1px solid #2c3e50;
        width: 10px;
    }

    .general-tech .tech-stack-list li:before {
        background-color: #ff00ff;
    }

    .backend-tech .tech-stack-list li:before {
        background-color: #ffff00;
    }

    .Frontend-tech .tech-stack-list li:before {
        background-color: #00ffff;
    }

    @media (max-width: 992px) {
        .tech-item .flex-container {
            flex-flow: column;
        }

        .tech-item .two-x-tow-item {
            width: 100%;
        }

        .general-tech .odd {
            border-right: none;
        }

        .Frontend-tech .odd {
            border-right: none;
        }

        .backend-tech .odd {
            border-right: none;
        }
    }
</style>

<template>
    <div class="container" id="technologiesContainer">
        <div class="row flex-row flex-row-justify">
            <div class="col-12 col-lg-5" id="tech-gl">
                <ul class="stack-list">
                    <li class="stack-item">
                        <img src="../assets/static/php_logo.svg"/>
                    </li>
                    <li class="stack-item">
                        <img src="../assets/static/jabascript.png"/>
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
                </ul>
            </div>
            <div class="col-12 col-lg-7">
                <section class="technologies-section">
                    <h2>Knowledge and Interests;</h2>
                    <div class="tech-item backend-tech">
                        <h4>Backend</h4>
                        <div class="flex-container">
                            <div class="two-x-tow-item">
                                <h5 class="odd">php</h5>
                                <ul class="odd tech-stack-list">
                                    <li>{{ (new Date()).getFullYear() - 2013 }} years of professional experience</li>
                                    <li>Interested in oop practice and modern programming paradigms</li>
                                    <li>Professional knowledge in Zendframework, Laravel, Typo3 and Wordpress</li>
                                </ul>
                            </div>
                            <div class="two-x-tow-item">
                                <h5>python</h5>
                                <ul class="tech-stack-list">
                                    <li>1 year of professional experience</li>
                                    <li>By now the skills are dated a little</li>
                                    <li>Professional knowledge in django</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="tech-item Frontend-tech">
                        <h4>Frontend</h4>
                        <div class="flex-container">
                            <div class="two-x-tow-item">
                                <h5 class="odd">Javascript</h5>
                                <ul class="odd tech-stack-list">
                                    <li>{{ (new Date()).getFullYear() - 2015 }} years of professional experience </li>
                                    <li>Interested in es6 and browser support for various features</li>
                                    <li>Professional knowledge in Vue.js, jQuery, Angular and Three.js</li>
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
                                    <li>Uses Git used SVN</li>
                                    <li>Interested in Jenkins Used fabric and dploy in the past</li>
                                    <li>Automated Testing done with codeception and selenium</li>
                                    <li>Interested in Javascript based testing frameworks like karma</li>
                                </ul>
                            </div>
                            <div class="two-x-tow-item">
                                <h5>Design</h5>
                                <ul class="tech-stack-list">
                                    <li>Knows how to use Adobe (Illustrator, Photoshop)</li>
                                    <li>Knows how to use (Windows, Linux, MacOS)</li>
                                    <li>Knows how to setup computer hardware</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
        <script id="vertex-shader-tech" type="x-shader/x-fragment">
            varying vec2 vUv;
			void main()	{
				vUv = uv;
				gl_Position = vec4( position, 1.0 );
			}
        </script>
        <script type="x-shader/x-fragment" id="fragment-shader-tech">
        uniform float time;
        uniform vec2 mouse;
        uniform vec2 resolution;

        void main()
        {
            vec2 r = resolution,
            o = gl_FragCoord.xy - r/2.;
            o = vec2(length(o + 2.) / r.y - .4, atan(o.y,o.x));
            vec4 s = .1*cos(1.618*vec4(0,.1,.2,.3) + time + o.y + sin(o.y) * sin(time)*2.),
            e = s.yzwx,
            f = min(o.x-s,e-o.x);
            gl_FragColor = vec4(1, 1, 1, 1) - clamp(f*r.y,0.,2.1);
        }
        </script>
    </div>
</template>
<script>
  import * as THREE from 'three';

  export default {
    name: 'Technologies',
    data () {
      return {
        // title: 'Home of Stanislaw Gutsch'
      }
    },
    mounted: function () {
      let vertexShader = this.$el.querySelector('#vertex-shader-tech').textContent;
      let fragmentShader = this.$el.querySelector('#fragment-shader-tech').textContent;
      let scene = new THREE.Scene();
      let camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      let geometry = new THREE.PlaneBufferGeometry(2, 2);
      let uniforms = {
        time: {value: 1.0},
        resolution: {type: 'v2', value: new THREE.Vector2()}
      };

      let renderer = new THREE.WebGLRenderer();
      let techGl = this.$el.querySelector('#tech-gl');

      uniforms.resolution.value.x = techGl.clientWidth;
      uniforms.resolution.value.y = techGl.clientHeight;

      renderer.setSize(techGl.clientWidth, techGl.clientHeight);
      techGl.appendChild(renderer.domElement);

      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.left = '0';
      renderer.domElement.style.top = '0';
      renderer.domElement.style.zIndex = '1';

      let material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
      })
      let mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh);

      let animate = function (timestamp) {
        requestAnimationFrame(animate);

        uniforms.time.value = timestamp / 4000;

        renderer.render(scene, camera);
      };
      this.$nextTick(function () {
        animate();
      });
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
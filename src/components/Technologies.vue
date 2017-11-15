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
                        <h4>Back us endus</h4>
                        <div class="flex-container">
                            <div class="two-x-tow-item">
                                <h5>php</h5>
                                <ul>
                                    <li>{{ (new Date()).getFullYear() - 2013 }} years of professional experience</li>
                                    <li>Interested in oop practice and modern programming paradigms</li>
                                    <li>Professional knowledge in Zendframework, Laravel, Typo3 and Wordpress</li>
                                </ul>
                            </div>
                            <div class="two-x-tow-item">
                                <h5>python</h5>
                                <ul>
                                    <li>1 year of professional experience</li>
                                    <li>By now the skills are dated a little</li>
                                    <li>Professional knowledge in django</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="tech-item Frontend-tech">
                        <h4>front us endus</h4>
                        <div class="flex-container">
                            <div class="two-x-tow-item">
                                <h5>Javascript</h5>
                                <ul>

                                </ul>
                            </div>
                            <div class="two-x-tow-item">
                                <h5>CSS</h5>
                                <ul>
                                    <li>{{ (new Date()).getFullYear() - 2013 }} of professional experience</li>
                                    <li>Interested in Pre-Processors, SVG Animation, Grid Layout and Flex</li>
                                    <li>Uses SCSS used LESS in the past</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="tech-item general-tech">
                        <h4>the rope aka general interests</h4>
                    </div>
                    <p>

                    </p>
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
        background-color: #ff00ff;
    }

    .Frontend-tech {
        background-color: #00ffff;
    }

    .backend-tech {
        background-color: #ffff00;
    }

    .tech-item {
        padding: .5rem;
    }

    .tech-item .flex-container {
        background-color: #fff;
    }

    .tech-item h4 {
        margin-bottom: 0;
        color: #2c3e50;
    }
</style>
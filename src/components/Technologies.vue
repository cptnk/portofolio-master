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
                    <p>
                        Originally I started learning C++ during my teens in an community college near Koblenz in the wonderful
                        state of Rhineland Palatinate.
                        <br><br>After getting a degree in informatics and business I completed an 1 year lasting training which involved web-development
                        in the <a href="https://www.python.org/">Python</a> programming language and a framework called <a href="https://www.djangoproject.com/">Django</a><br><br>

                        I eventually tried majoring in a theoretical software development degree which I changed to a medical informatics degree. In the end I chose not to graduate<br>
                        and continue in the web-development field.
                        <br><br>

                        As of today I worked for 2 companies and freelanced for a year. Currently I mostly work with Javascript/PHP in combination of various Frameworks, Build-tools and <br>
                        Preprocessors.

                        Ironically I have the most experience in the Framework I like the least (just like any other developer) which is Typo3 which at this point probably amounts to 4 years<br>
                        (on and off).<br><br>

                        Sadly my current company does not give me the chance to work in my favorite framework namely Zendframework in which I was a active part of the community.<br><br>

                        At the end of the day it doesn't really matter in my humble opinion as long as it get's the job done.
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
    }

    .stack-list .stack-item {
        padding: 2rem;
        width: 100px;
        height: 75px;
    }

    .stack-list .stack-item img {
        object-fit: contain;
        width: calc(100px - 2rem);
        height: calc(75px - 2rem);
    }
</style>
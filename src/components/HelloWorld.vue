<template>
    <div class="hello">
        <section id="headgl"></section>
        <figure id="logo">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <img src="../assets/static/logo.png" alt="cptnk-logo" height="110" width="160"/>
                    </div>
                </div>
            </div>
        </figure>
        <div class="container">
            <div class="row flex-row flex-row-justify">
                <div class="col-12 col-lg-8">
                    <section class="about-me-section">
                        <h1>{{ startHeadline }}</h1>
                        <p>
                            Hello my name is Stanislaw Gutsch and I write web-applications for a living.<br>
                            My daily routine usually includes using JavaScript/PHP/CSS and the sophisticated deployment tool we use at the
                            <a href="kreativrudel.de">company</a> I work for.
                            <br>
                            <br>
                            I currently enjoy applying <a href="https://de.wikipedia.org/wiki/OpenGL_Shading_Language">GLSL</a> and <a href="https://threejs.org/">three.js</a> as a hobby
                            during my time off. An example of that is presented at the top of this web page.
                        </p>
                    </section>
                </div>
                <div class="col-12 col-lg-4">
                    <aside class="social-box">
                        <h3>get in touch</h3>
                        <div class="social-links">
                            <a id="so-flair-override" href="https://stackoverflow.com/story/thatcptnkguy"
                               style="background-image: url(https://stackoverflow.com/users/flair/2505150.png?theme=clean);">
                            </a>
                            <a href="https://twitter.com/cptnkapu"><i class="icon-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/stanislaw-gutsch-95a1b314a/"><i class="icon-linkedin-rect"></i></a>
                            <a href="https://github.com/cptnk"><i class="icon-github"></i></a>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
        <script id="vertex-shader" type="x-shader/x-fragment">
       varying vec2 vUv;
			void main()	{
				vUv = uv;
				gl_Position = vec4( position, 1.0 );
			}

        </script>
        <script id="fragment-shader" type="x-shader/x-fragment">
            varying vec2 vUv;
			uniform float time;
			uniform vec2 mouse;
            uniform vec2 resolution;

            const int layers = 16;
            const float speed = 0.035;

            float nrand (vec2 co) {
                float a = fract(cos(co.x * 8.3e-3 + co.y) * 4.7e5);
                float b = fract(sin(co.x * 0.3e-3 + co.y) * 1.0e5);
                return a * .5 + b * .5;
            }

            float genstars (float starsize, float density, float intensity, vec2 seed)
            {
                float rnd = nrand(floor(seed * starsize));
                float stars = pow(rnd,density) * intensity;
                return stars;
            }
            vec3 White = vec3(1,1,1);

            float forest(float x) {
                return abs(mod(x, 1.7) - 0.85);
            }

            void main( void ) {
            vec2 offset = vec2(time * 8.25,0);

            vec2 star = 1.0 * (gl_FragCoord.xy / resolution) - 1.0;
            star.y *= resolution.y / resolution.x;
            star.y += time * speed;

            star *= 150.0;

            float intensity = genstars(10., 35., 2.5, star + offset);
            intensity += genstars(5., 50., 12.5, star);

            vec2 position = (gl_FragCoord.xy - resolution / 3.) / resolution.x;
            position.x += time * speed;

            float c = 1.2;
            float k = 1.3;

            for (int j = 0; j < layers; j++)
            {
                float h = 0.;
                float p = 1.5;
                for (int i = 0; i < 20; i++)
                {
                p *= sin(position.x * 0.1) * 0.2 + 1.2;
                h += abs(sin(p * 100.)) * (0.5*forest(position.x*p) - 0.25 - position.y / sqrt(k)) / p;
                }
                c = ceil(sign(h) * .5) * k;
                if (c > 0.) break;
                k -= 1.4 / float(layers);
                position.x -= 10. + time * speed / float(layers);
                position.y -= 0.1 / float(layers);
            }
            gl_FragColor = vec2(intensity + c, 21).xxxy;
        }
        </script>
    </div>
</template>

<script>
  import * as THREE from 'three';

  export default {
    name: 'HelloWorld',
    data () {
      return {
        startHeadline: 'Cptnks life as a developer;',
        title: 'Home of Stanislaw Gutsch'
      }
    },
    head: {
      title: function () {
        return {
          inner: this.title
        }
      }
    },
    mounted: function () {
      let vertexShader = this.$el.querySelector('#vertex-shader').textContent;
      let fragmentShader = this.$el.querySelector('#fragment-shader').textContent;
      let scene = new THREE.Scene();
      let camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      let geometry = new THREE.PlaneBufferGeometry(2, 2);
      let uniforms = {
        time: {value: 1.0},
        resolution: {type: 'v2', value: new THREE.Vector2()}
      };

      let renderer = new THREE.WebGLRenderer();
      uniforms.resolution.value.x = window.innerWidth;
      uniforms.resolution.value.y = (window.innerHeight / 2);
      renderer.setSize(window.innerWidth, (window.innerHeight / 2));
      this.$el.querySelector('#headgl').appendChild(renderer.domElement);

      let material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
      })
      let mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh);

      let animate = function (timestamp) {
        requestAnimationFrame(animate);

        uniforms.time.value = timestamp / 1000;

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
    .social-box {
        border: 1px solid #2c3e50;
    }

    .social-box h3 {
        background-color: #2c3e50;
        color: #fff;
        text-align: center;
        padding: .75rem 0 .75rem;
    }

    #so-flair-override {
        background-size: cover;
        background-position-x: right;
        display: inline-block;
        height: 60px;
        width: 60px;
    }

    .social-links {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    .social-links a {
        padding: .5rem .5rem;
    }

    .social-links i {
        font-size: 1.75rem;
    }

    #logo {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    #logo img {
        padding-left: 1.5rem;
    }
</style>

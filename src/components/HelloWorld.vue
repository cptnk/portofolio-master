<template>
    <div class="hello">
        <section id="headgl"></section>
        <figure class="pixelart-to-css">
        </figure>
        <div class="container">
            <div class="row flex-row flex-row-justify">
                <div class="col-12 col-lg-8">
                    <section class="about-me-section">
                        <h1>{{ startHeadline }}</h1>
                        <p>
                            Hello my name is Stanislaw Gutsch and I write web-applications for a living.<br>
                            My daily routine usually includes using react/php and the sophisticated deployment tool we use at the
                            <a href="https://tutool.io/">company</a> I work for.
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
        <technologies></technologies>
        <cv></cv>
        <Footer></Footer>
        <script id="vertex-shader" type="x-shader/x-fragment">
       varying vec2 vUv;
			void main()	{
				vUv = uv;
				gl_Position = vec4( position, 1.0 );

			}

        </script>
        <script id="fragment-shader" type="x-shader/x-fragment">
            uniform float time;
            uniform vec2 mouse;
            uniform vec2 resolution;

            void main() {
              vec2 r = resolution;
              vec2 o = gl_FragCoord.xy - r / 2.0;
              o = vec2(length(o + 2.0) / r.y - 0.4, atan(o.y, o.x));

              // Apply pixelation effect
              float pixelationFactor = 0.001;
              vec2 pixelSize = vec2(pixelationFactor);
              vec2 texCoord = floor(o / pixelSize) * pixelSize;

              vec4 s = 0.1 * cos(1.618 * vec4(0.0, 0.1, 0.2, 0.3) + time + o.y + sin(o.y) * sin(time) * 2.0);
              vec4 e = s.yzwx;
              vec4 f = min(o.x - s, e - o.x);
              gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0) - clamp(f * r.y, 0.0, 2.1);
            }
        </script>
    </div>
</template>

<script>
  import * as THREE from 'three';
  import Technologies from './Technologies.vue';
  import Cv from './Cv.vue';
  import Footer from './Footer.vue'

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
      mounted () {
          let vertexShader = this.$el.querySelector('#vertex-shader').textContent;
          let fragmentShader = this.$el.querySelector('#fragment-shader').textContent;

          let scene = new THREE.Scene();
          let camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
          let geometry = new THREE.PlaneBufferGeometry(2, 2);
          let uniforms = {
              time: { value: 1.0 },
              resolution: { type: 'v2', value: new THREE.Vector2() }
          };

          let renderer = new THREE.WebGLRenderer({antialias: false});
          uniforms.resolution.value.x = window.innerWidth;
          uniforms.resolution.value.y = window.innerHeight / 2;
          renderer.setSize(window.innerWidth, window.innerHeight / 2);
          this.$el.querySelector('#headgl').appendChild(renderer.domElement);

          let material = new THREE.ShaderMaterial({
              uniforms: uniforms,
              vertexShader: vertexShader,
              fragmentShader: fragmentShader
          });

          let mesh = new THREE.Mesh(geometry, material);
          scene.add(mesh);

          let animate = function (timestamp) {
              requestAnimationFrame(animate);
              uniforms.time.value = timestamp * 0.0009;
              renderer.render(scene, camera);
          };

          animate();
      },
      components: {
          Technologies, Cv, Footer
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pixelart-to-css {
        position: absolute;
        left: calc(50% - 200px);
        height: 10px;
        width: 10px;
        top: 3rem;
        box-shadow: 210px 30px 0 0 rgba(255,39,255,1), 220px 30px 0 0 rgba(255,39,255,1), 230px 30px 0 0 rgba(255,39,255,1), 240px 30px 0 0 rgba(255,39,255,1), 280px 30px 0 0 rgba(1,255,247,1), 290px 30px 0 0 rgba(1,255,247,1), 300px 30px 0 0 rgba(1,255,247,1), 310px 30px 0 0 rgba(1,255,247,1), 360px 30px 0 0 rgba(255,255,4,1), 370px 30px 0 0 rgba(255,255,4,1), 380px 30px 0 0 rgba(255,255,4,1), 390px 30px 0 0 rgba(255,255,4,1), 200px 40px 0 0 rgba(255,39,255,1), 210px 40px 0 0 rgba(255,39,255,1), 220px 40px 0 0 rgba(255,39,255,1), 230px 40px 0 0 rgba(255,39,255,1), 270px 40px 0 0 rgba(1,255,247,1), 280px 40px 0 0 rgba(1,255,247,1), 290px 40px 0 0 rgba(1,255,247,1), 300px 40px 0 0 rgba(1,255,247,1), 350px 40px 0 0 rgba(255,255,4,1), 360px 40px 0 0 rgba(255,255,4,1), 370px 40px 0 0 rgba(255,255,4,1), 380px 40px 0 0 rgba(255,255,4,1), 190px 50px 0 0 rgba(255,39,255,1), 200px 50px 0 0 rgba(255,39,255,1), 210px 50px 0 0 rgba(255,39,255,1), 220px 50px 0 0 rgba(255,39,255,1), 260px 50px 0 0 rgba(1,255,247,1), 270px 50px 0 0 rgba(1,255,247,1), 280px 50px 0 0 rgba(1,255,247,1), 290px 50px 0 0 rgba(1,255,247,1), 340px 50px 0 0 rgba(255,255,4,1), 350px 50px 0 0 rgba(255,255,4,1), 360px 50px 0 0 rgba(255,255,4,1), 370px 50px 0 0 rgba(255,255,4,1), 180px 60px 0 0 rgba(255,39,255,1), 190px 60px 0 0 rgba(255,39,255,1), 200px 60px 0 0 rgba(255,39,255,1), 210px 60px 0 0 rgba(255,39,255,1), 250px 60px 0 0 rgba(1,255,247,1), 260px 60px 0 0 rgba(1,255,247,1), 270px 60px 0 0 rgba(1,255,247,1), 280px 60px 0 0 rgba(1,255,247,1), 330px 60px 0 0 rgba(255,255,4,1), 340px 60px 0 0 rgba(255,255,4,1), 350px 60px 0 0 rgba(255,255,4,1), 360px 60px 0 0 rgba(255,255,4,1), 170px 70px 0 0 rgba(255,39,255,1), 180px 70px 0 0 rgba(255,39,255,1), 190px 70px 0 0 rgba(255,39,255,1), 200px 70px 0 0 rgba(255,39,255,1), 240px 70px 0 0 rgba(1,255,247,1), 250px 70px 0 0 rgba(1,255,247,1), 260px 70px 0 0 rgba(1,255,247,1), 270px 70px 0 0 rgba(1,255,247,1), 320px 70px 0 0 rgba(255,255,4,1), 330px 70px 0 0 rgba(255,255,4,1), 340px 70px 0 0 rgba(255,255,4,1), 350px 70px 0 0 rgba(255,255,4,1), 80px 80px 0 0 rgba(44,62,80,1), 90px 80px 0 0 rgba(44,62,80,1), 100px 80px 0 0 rgba(44,62,80,1), 130px 80px 0 0 rgba(44,62,80,1), 140px 80px 0 0 rgba(44,62,80,1), 150px 80px 0 0 rgba(44,62,80,1), 160px 80px 0 0 rgba(255,39,255,1), 170px 80px 0 0 rgba(255,39,255,1), 180px 80px 0 0 rgba(44,62,80,1), 190px 80px 0 0 rgba(44,62,80,1), 200px 80px 0 0 rgba(44,62,80,1), 210px 80px 0 0 rgba(44,62,80,1), 220px 80px 0 0 rgba(44,62,80,1), 230px 80px 0 0 rgba(1,255,247,1), 240px 80px 0 0 rgba(44,62,80,1), 250px 80px 0 0 rgba(1,255,247,1), 260px 80px 0 0 rgba(1,255,247,1), 290px 80px 0 0 rgba(44,62,80,1), 310px 80px 0 0 rgba(44,62,80,1), 320px 80px 0 0 rgba(255,255,4,1), 330px 80px 0 0 rgba(255,255,4,1), 340px 80px 0 0 rgba(44,62,80,1), 70px 90px 0 0 rgba(44,62,80,1), 130px 90px 0 0 rgba(44,62,80,1), 150px 90px 0 0 rgba(255,39,255,1), 160px 90px 0 0 rgba(44,62,80,1), 170px 90px 0 0 rgba(255,39,255,1), 180px 90px 0 0 rgba(255,39,255,1), 200px 90px 0 0 rgba(44,62,80,1), 220px 90px 0 0 rgba(1,255,247,1), 230px 90px 0 0 rgba(1,255,247,1), 240px 90px 0 0 rgba(44,62,80,1), 250px 90px 0 0 rgba(44,62,80,1), 290px 90px 0 0 rgba(44,62,80,1), 300px 90px 0 0 rgba(255,255,4,1), 310px 90px 0 0 rgba(44,62,80,1), 320px 90px 0 0 rgba(255,255,4,1), 330px 90px 0 0 rgba(44,62,80,1), 70px 100px 0 0 rgba(44,62,80,1), 130px 100px 0 0 rgba(44,62,80,1), 140px 100px 0 0 rgba(255,39,255,1), 150px 100px 0 0 rgba(255,39,255,1), 160px 100px 0 0 rgba(44,62,80,1), 170px 100px 0 0 rgba(255,39,255,1), 200px 100px 0 0 rgba(44,62,80,1), 210px 100px 0 0 rgba(1,255,247,1), 220px 100px 0 0 rgba(1,255,247,1), 230px 100px 0 0 rgba(1,255,247,1), 240px 100px 0 0 rgba(44,62,80,1), 260px 100px 0 0 rgba(44,62,80,1), 290px 100px 0 0 rgba(44,62,80,1), 300px 100px 0 0 rgba(255,255,4,1), 310px 100px 0 0 rgba(44,62,80,1), 320px 100px 0 0 rgba(44,62,80,1), 70px 110px 0 0 rgba(44,62,80,1), 130px 110px 0 0 rgba(44,62,80,1), 140px 110px 0 0 rgba(44,62,80,1), 150px 110px 0 0 rgba(44,62,80,1), 160px 110px 0 0 rgba(255,39,255,1), 200px 110px 0 0 rgba(44,62,80,1), 210px 110px 0 0 rgba(1,255,247,1), 220px 110px 0 0 rgba(1,255,247,1), 230px 110px 0 0 rgba(1,255,247,1), 240px 110px 0 0 rgba(44,62,80,1), 270px 110px 0 0 rgba(44,62,80,1), 280px 110px 0 0 rgba(255,255,4,1), 290px 110px 0 0 rgba(44,62,80,1), 300px 110px 0 0 rgba(255,255,4,1), 310px 110px 0 0 rgba(44,62,80,1), 320px 110px 0 0 rgba(44,62,80,1), 70px 120px 0 0 rgba(44,62,80,1), 120px 120px 0 0 rgba(255,39,255,1), 130px 120px 0 0 rgba(44,62,80,1), 140px 120px 0 0 rgba(255,39,255,1), 150px 120px 0 0 rgba(255,39,255,1), 190px 120px 0 0 rgba(1,255,247,1), 200px 120px 0 0 rgba(44,62,80,1), 210px 120px 0 0 rgba(1,255,247,1), 220px 120px 0 0 rgba(1,255,247,1), 240px 120px 0 0 rgba(44,62,80,1), 270px 120px 0 0 rgba(255,255,4,1), 280px 120px 0 0 rgba(44,62,80,1), 290px 120px 0 0 rgba(44,62,80,1), 300px 120px 0 0 rgba(255,255,4,1), 310px 120px 0 0 rgba(44,62,80,1), 330px 120px 0 0 rgba(44,62,80,1), 80px 130px 0 0 rgba(44,62,80,1), 90px 130px 0 0 rgba(44,62,80,1), 100px 130px 0 0 rgba(44,62,80,1), 110px 130px 0 0 rgba(255,39,255,1), 120px 130px 0 0 rgba(255,39,255,1), 130px 130px 0 0 rgba(44,62,80,1), 140px 130px 0 0 rgba(255,39,255,1), 180px 130px 0 0 rgba(1,255,247,1), 190px 130px 0 0 rgba(1,255,247,1), 200px 130px 0 0 rgba(44,62,80,1), 210px 130px 0 0 rgba(1,255,247,1), 240px 130px 0 0 rgba(44,62,80,1), 260px 130px 0 0 rgba(255,255,4,1), 270px 130px 0 0 rgba(255,255,4,1), 280px 130px 0 0 rgba(255,255,4,1), 290px 130px 0 0 rgba(44,62,80,1), 310px 130px 0 0 rgba(44,62,80,1), 340px 130px 0 0 rgba(44,62,80,1), 90px 140px 0 0 rgba(255,39,255,1), 100px 140px 0 0 rgba(255,39,255,1), 110px 140px 0 0 rgba(255,39,255,1), 120px 140px 0 0 rgba(255,39,255,1), 170px 140px 0 0 rgba(1,255,247,1), 180px 140px 0 0 rgba(1,255,247,1), 190px 140px 0 0 rgba(1,255,247,1), 200px 140px 0 0 rgba(1,255,247,1), 250px 140px 0 0 rgba(255,255,4,1), 260px 140px 0 0 rgba(255,255,4,1), 270px 140px 0 0 rgba(255,255,4,1), 280px 140px 0 0 rgba(255,255,4,1), 80px 150px 0 0 rgba(255,39,255,1), 90px 150px 0 0 rgba(255,39,255,1), 100px 150px 0 0 rgba(255,39,255,1), 110px 150px 0 0 rgba(255,39,255,1), 160px 150px 0 0 rgba(1,255,247,1), 170px 150px 0 0 rgba(1,255,247,1), 180px 150px 0 0 rgba(1,255,247,1), 190px 150px 0 0 rgba(1,255,247,1), 240px 150px 0 0 rgba(255,255,4,1), 250px 150px 0 0 rgba(255,255,4,1), 260px 150px 0 0 rgba(255,255,4,1), 270px 150px 0 0 rgba(255,255,4,1), 70px 160px 0 0 rgba(255,39,255,1), 80px 160px 0 0 rgba(255,39,255,1), 90px 160px 0 0 rgba(255,39,255,1), 100px 160px 0 0 rgba(255,39,255,1), 150px 160px 0 0 rgba(1,255,247,1), 160px 160px 0 0 rgba(1,255,247,1), 170px 160px 0 0 rgba(1,255,247,1), 180px 160px 0 0 rgba(1,255,247,1), 230px 160px 0 0 rgba(255,255,4,1), 240px 160px 0 0 rgba(255,255,4,1), 250px 160px 0 0 rgba(255,255,4,1), 260px 160px 0 0 rgba(255,255,4,1), 60px 170px 0 0 rgba(255,39,255,1), 70px 170px 0 0 rgba(255,39,255,1), 80px 170px 0 0 rgba(255,39,255,1), 90px 170px 0 0 rgba(255,39,255,1), 140px 170px 0 0 rgba(1,255,247,1), 150px 170px 0 0 rgba(1,255,247,1), 160px 170px 0 0 rgba(1,255,247,1), 170px 170px 0 0 rgba(1,255,247,1), 220px 170px 0 0 rgba(255,255,4,1), 230px 170px 0 0 rgba(255,255,4,1), 240px 170px 0 0 rgba(255,255,4,1), 250px 170px 0 0 rgba(255,255,4,1), 50px 180px 0 0 rgba(255,39,255,1), 60px 180px 0 0 rgba(255,39,255,1), 70px 180px 0 0 rgba(255,39,255,1), 80px 180px 0 0 rgba(255,39,255,1), 130px 180px 0 0 rgba(1,255,247,1), 140px 180px 0 0 rgba(1,255,247,1), 150px 180px 0 0 rgba(1,255,247,1), 160px 180px 0 0 rgba(1,255,247,1), 210px 180px 0 0 rgba(255,255,4,1), 220px 180px 0 0 rgba(255,255,4,1), 230px 180px 0 0 rgba(255,255,4,1), 240px 180px 0 0 rgba(255,255,4,1);
    }
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
        filter: brightness(100%);
        padding: .5rem .5rem;
    }

    .social-links i {
        font-size: 1.75rem;
    }

    #logo {
        position: absolute;
        top: 1rem;
        left: 0;
    }



    #logo img {
        padding-left: 1.5rem;
    }
    .container {
        transform: translateY(-15vh);
    }
</style>

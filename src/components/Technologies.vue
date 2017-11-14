<template>
    <div class="container" id="technologiesContainer">
        <div class="row">
            <div class="col-12 col-lg-4" id="tech-gl">

            </div>
            <div class="col-12 col-lg-8">
                <section class="technologies-section">
                    <h2>Knowledge and Interests</h2>
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
        height: 40vh;
        width: 100%;
    }
</style>
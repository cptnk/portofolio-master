<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <section class="cv-section">
                    <h2>Cv</h2>
                </section>
            </div>
        </div>
        <div id="cv-gl"></div>
        <script id="vertex-shader-cv" type="x-shader/x-fragment">
            varying vec2 vUv;
			void main()	{
				vUv = uv;
				gl_Position = vec4( position, 1.0 );
			}
        </script>
        <script type="x-shader/x-fragment" id="fragment-shader-cv">
        uniform float time;
        uniform vec2 mouse;
        uniform vec2 resolution;


        float sdBox( vec2 p, vec2 b )
        {
          vec2 d = abs(p) - b;
          return min(max(d.x,d.y),0.0) + length(max(d,0.0));
        }

        float map(vec3 p)
        {
            float cube = 1.2;

            p = -abs(p);
            float d1 = p.y + (1.0 - (sin(p.x) * sin(p.y) * sin(p.z)) );

            //vec2 p1 = p.xz;
            vec2 p1 = mod(p.xz, vec2(.8)) - vec2(.4);
            float c1 = sdBox(p1,vec2(cube));

            //return c1;
            return max(c1, d1);
        }

        void main()
        {
            vec2 pos = (gl_FragCoord.xy*1.1 - resolution.xy) / resolution.y;
            vec3 camPos = vec3(-.18,.0,1.);
            vec3 camDir = normalize(vec3(0.3, 0.0, -.0));
            camPos -=  vec3(0.0,0.0,time*0.5);
            vec3 camUp  = normalize(vec3(0.1, 1.0, 0.0));
            vec3 camSide = cross(camDir, camUp);
            float focus = 0.8;

            vec3 rayDir = normalize(camSide*pos.x + camUp*pos.y + camDir*focus - 0.095);
            vec3 ray = camPos;
            int march = 0;
            float d = 0.0;

            float total_d = 0.0;
            const int MAX_MARCH = 64;
            const float MAX_DIST = 100.0;
            for(int mi=0; mi<MAX_MARCH; ++mi) {
                d = map(ray);
                march=mi;
                total_d += d;
                ray += rayDir * d;
                if(d<0.01) {break; }
                if(total_d>MAX_DIST) {
                    total_d = MAX_DIST;
                    march = MAX_MARCH-1;
                    break;
                }
            }

            float fog = min(.5, (.5 / float(MAX_MARCH)) * float(march))*.5;
            vec3  fog2 = 0.2 * vec3(0, 0, 0) * total_d;
            gl_FragColor = vec4(vec3(1.5, 1.5, 1.5)*fog + fog2, 1.0);
        }
        </script>
    </div>
</template>
<script>
  import * as THREE from 'three';
  export default {
    name: 'Cv',
    data () {
      return {
        lifeMilestone: [
          {
            title: 'Born n stuff',
            desc: 'Issyk Alma-Ata',
            date: '18.12.1987'
          },
          {
            title: 'Community College',
            desc: 'Issyk Alma-Ata',
            link: 'http://www.august-horch-schule.de/',
            date: 'idk-2004 - idk-2006'
          }
        ]
      }
    },
    mounted: function () {
      let vertexShader = this.$el.querySelector('#vertex-shader-cv').textContent;
      let fragmentShader = this.$el.querySelector('#fragment-shader-cv').textContent;
      let scene = new THREE.Scene();
      let camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      let geometry = new THREE.PlaneBufferGeometry(2, 2);
      let uniforms = {
        time: {value: 1.0},
        resolution: {type: 'v2', value: new THREE.Vector2()}
      };

      let renderer = new THREE.WebGLRenderer();
      let techGl = this.$el.querySelector('#cv-gl');

      uniforms.resolution.value.x = window.innerWidth;
      uniforms.resolution.value.y = techGl.clientHeight;

      renderer.setSize(window.innerWidth, techGl.clientHeight);
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

        uniforms.time.value = timestamp / 500;

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
    #cv-gl {
        height: 20vh;
        width: 100%;
        position: absolute;
        left: 0;
    }
    .cv-section {
        margin-bottom: 20vh;
    }
</style>
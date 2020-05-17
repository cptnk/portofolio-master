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
                            My daily routine usually includes using JavaScript/PHP and the sophisticated deployment tool we use at the
                            <a href="www.real.de">company</a> I work for.
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
        <script id="vertex-shader" type="x-shader/x-fragment">
       varying vec2 vUv;
			void main()	{
				vUv = uv;
				gl_Position = vec4( position, 1.0 );

			}

        </script>
        <script id="fragment-shader" type="x-shader/x-fragment">
// enjoy
// you can have it as a windows Demo exe File with Music
//
// skype: alien 5ive

#ifdef GL_ES
precision mediump float;
#endif
uniform float time;
uniform vec2 resolution;
#define iTime time
#define iResolution resolution
const vec4 iMouse = vec4(0.0);

#define POSTPROCESS
#define RAYMARCHING_STEP 35
#define RAYMARCHING_JUMP 1.

const float PI = 3.14159265359;
float snoise(vec3 v);
float vmax(vec3 v) {return max(max(v.x, v.y), v.z);}
float fBox(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d, vec3(0))) + vmax(min(d, vec3(0)));
}
float fOpUnionRound(float a, float b, float r) {
	vec2 u = max(vec2(r - a,r - b), vec2(0));
	return max(r, min (a, b)) - length(u);
}

float map( in vec3 pos ) {
    float time = iTime;
    pos -= snoise(pos*0.1+time);
	float d = -10. + pos.y + snoise(pos/41.+time)*10. + snoise(pos/10.+time)*3.+ snoise(pos/80.+time)*15.+ snoise(pos);
    pos += snoise(pos+time)+snoise(pos*2.+time);
    d = fOpUnionRound( d, fBox(pos-vec3(4.,10.,0.),vec3(10.5,9.,15.)), 6.);
	return d;
}


float castRay( in vec3 ro, in vec3 rd, inout float depth )
{
	float t = 0.0;
	float res;
	for( int i=0; i<RAYMARCHING_STEP; i++ )
	{
		vec3 pos = ro+rd*t;
		res = map( pos );
		if( res < 0.01 || t > 150. ) break;
		t += res*RAYMARCHING_JUMP;
		depth += 1./float(RAYMARCHING_STEP);
	}
	return t;
}

float hash( float n ){
	return fract(sin(n)*3538.5453);
}


#ifdef POSTPROCESS
vec3 postEffects( in vec3 col, in vec2 uv, in float time )
{
	// vigneting
	col *= 0.7+0.3*pow( 16.0*uv.x*uv.y*(1.0-uv.x)*(1.0-uv.y), 0.1 );
	return col;
}
#endif

vec3 render( in vec3 ro, in vec3 rd, in vec2 uv )
{
	float depth = 0.;
	float t = castRay(ro,rd,depth);
    vec3 color = vec3(depth*uv.y,depth/5.,depth);
    color += smoothstep(0.3,0.6,depth)*vec3(0.2,0.2,0.1);
    color += smoothstep(0.6,1.,depth)*vec3(0.2,0.8,0.1);
    return color;
}


mat3 setCamera( in vec3 ro, in vec3 ta, float cr )
{
	vec3 cw = normalize(ta-ro);
	vec3 cp = vec3(sin(cr), cos(cr),0.0);
	vec3 cu = normalize( cross(cw,cp) );
	vec3 cv = normalize( cross(cu,cw) );
	return mat3( cu, cv, cw );
}

vec3 orbit(float phi, float theta, float radius)
{
	return vec3(
		radius * sin( phi ) * cos( theta ),
		radius * cos( phi ) + cos( theta ),
		radius * sin( phi ) * sin( theta )
	);
}



float mandelBrot(vec2 p) {
	p.x = p.x * 3.5 - 2.5;
	p.y = p.y * 2.0 - 1.0;

	vec2 xy = vec2(0.);
	int itter = 0;
	const int maxItter = 128;

	for(int i = 0; i < maxItter; i++) {
		if (dot(xy, xy) > 4.) {
			break;
		}

		float xtemp = dot(vec2(xy.x, -xy.y), xy) + p.x;
		xy.y = 2.0 * xy.x * xy.y + p.y;
		xy.x = xtemp;
		itter++;
	}

	return float(itter) / float(maxItter);
}

void mainImage( out vec4 fragColor, in vec2 coords )
{
	float time = iTime;
	vec2 uv = coords.xy / iResolution.xy;
	vec2 mouse = iMouse.xy / iResolution.xy;
	vec2 q = coords.xy/iResolution.xy;
	vec2 p = -1.0+2.0*q;
	p.x *= iResolution.x/iResolution.y;

	//Camera
	float radius = 60.;
	vec3 ro = orbit(PI/2.-.5,PI/2.+sin(time)*.35,radius);
	vec3 ta  = vec3(0.0, 0., 0.0);
	mat3 ca = setCamera( ro, ta, 0. );
	vec3 rd = ca * normalize( vec3(p.xy,1.2) );

	vec3 color = render( ro, rd, uv );
	#ifdef POSTPROCESS
	color = postEffects( color, uv, time );
	#endif
	fragColor = vec4(color,1.0);
}


lowp vec4 permute(in lowp vec4 x){return mod(x*x*34.+x,289.);}
lowp float snoise(in mediump vec3 v){
  const lowp vec2 C = vec2(0.16666666666,0.33333333333);
  const lowp vec4 D = vec4(0,.5,1,2);
  lowp vec3 i  = floor(C.y*(v.x+v.y+v.z) + v);
  lowp vec3 x0 = C.x*(i.x+i.y+i.z) + (v - i);
  lowp vec3 g = step(x0.yzx, x0);
  lowp vec3 l = (1. - g).zxy;
  lowp vec3 i1 = min( g, l );
  lowp vec3 i2 = max( g, l );
  lowp vec3 x1 = x0 - i1 + C.x;
  lowp vec3 x2 = x0 - i2 + C.y;
  lowp vec3 x3 = x0 - D.yyy;
  i = mod(i,289.);
  lowp vec4 p = permute( permute( permute(
	  i.z + vec4(0., i1.z, i2.z, 1.))
	+ i.y + vec4(0., i1.y, i2.y, 1.))
	+ i.x + vec4(0., i1.x, i2.x, 1.));
  lowp vec3 ns = .142857142857 * D.wyz - D.xzx;
  lowp vec4 j = -49. * floor(p * ns.z * ns.z) + p;
  lowp vec4 x_ = floor(j * ns.z);
  lowp vec4 x = x_ * ns.x + ns.yyyy;
  lowp vec4 y = floor(j - 7. * x_ ) * ns.x + ns.yyyy;
  lowp vec4 h = 1. - abs(x) - abs(y);
  lowp vec4 b0 = vec4( x.xy, y.xy );
  lowp vec4 b1 = vec4( x.zw, y.zw );
  lowp vec4 sh = -step(h, vec4(0));
  lowp vec4 a0 = b0.xzyw + (floor(b0)*2.+ 1.).xzyw*sh.xxyy;
  lowp vec4 a1 = b1.xzyw + (floor(b1)*2.+ 1.).xzyw*sh.zzww;
  lowp vec3 p0 = vec3(a0.xy,h.x);
  lowp vec3 p1 = vec3(a0.zw,h.y);
  lowp vec3 p2 = vec3(a1.xy,h.z);
  lowp vec3 p3 = vec3(a1.zw,h.w);
  lowp vec4 norm = inversesqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  lowp vec4 m = max(.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.);
  return .5 + 12. * dot( m * m * m, vec4( dot(p0,x0), dot(p1,x1),dot(p2,x2), dot(p3,x3) ) );
}void main(void)
{
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
        </script>
    </div>
</template>

<script>
  import * as THREE from 'three';
  import Technologies from './Technologies.vue';
  import Cv from './Cv.vue';

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
    },
      components: {
          Technologies, Cv
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

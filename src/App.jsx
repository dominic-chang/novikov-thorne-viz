import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three';
import Stats from 'stats-js';
import './App.css'

var renderer, uniforms, vShader, fShader, camera, scene, acc_disk, theta, stats, shader_material, geometry, texture1, texture2;
var loader = new THREE.FileLoader();

stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

function isUndefined(obj) {
  return typeof obj === 'undefined';
}

function App() {
  const [temperature, setTemperature] = useState(5772)
  const [enableGravLensing, setGravLensing] = useState(false)
  const [enableRelativisticBeaming, setRelativisticBeaming] = useState(false)
  const [enableDopplerEffect, setDopplerEffect] = useState(false)
  const [enableGravitationalRedshift, setGravitationalRedshift] = useState(false)

  const [canvasWidth, setCanvasWidth] = useState(0.7*window.innerWidth)
  const [canvasHeight, setCanvasHeight] = useState(0.7*window.innerHeight)
  const temperatureRef = useRef(5772)// Used to terminate animation loop if temperature state has changed
  const gradLensingRef = useRef(false)
  
  useEffect(() => {
    const handleResize = () => {setCanvasWidth(0.7*window.innerWidth); setCanvasHeight(0.7*window.innerHeight);}
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  useEffect(() => {

    if(isUndefined(renderer)) {
      renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('canvas'),
      antialias: false,
      });
    }
    renderer.setClearColor(0x000000);
    renderer.setSize(canvasWidth, canvasHeight);

    if(isUndefined(camera)) {
      camera = new THREE.PerspectiveCamera(
      10,
      canvasWidth / canvasHeight,
      0.1, 
      10
      );
    }

    if(isUndefined(scene)){
      scene = new THREE.Scene();
    }

    var numFilesLeft = 2;

    function runMoreIfDone() {
        --numFilesLeft;
        if (numFilesLeft == 0) {
            more();
        }
    }

    if(isUndefined(vShader) || isUndefined(fShader)){
      loader.load('../src/glsl/fragment.glsl', function ( data ) {fShader =  data; runMoreIfDone(); },);
      loader.load('../src/glsl/vertex.glsl', function ( data ) {vShader =  data; runMoreIfDone(); },);
    }else {more();}

    //return () => {termination.current = true;}
  })

  function more() {
    if(isUndefined(geometry)){
      geometry = new THREE.PlaneGeometry(2, 2);
    }

    if(isUndefined(texture2)){
      console.log("loading texture2")
      texture2 = new THREE.TextureLoader().load('/images/eso0932a.png')//.load('space.png')
    }
    if(isUndefined(texture1)){
      console.log("loading texture1")
      texture1 = new THREE.TextureLoader().load('/images/clouds-gray.jpeg')
    }

    if(isUndefined(uniforms)){
      uniforms = {
      theta :    {value: 0},
      disk_temperature: {value: temperature},
      texture1:  {value:texture1},
      textureft: {value:texture2},
      uResolution: {
          value: new THREE.Vector2(canvasWidth, canvasHeight),
        },
      enable_grav_lensing: {value: enableGravLensing},
      }
    }

    if(isUndefined(shader_material)){
      console.log("creating shader_material")
      shader_material = new THREE.ShaderMaterial({
      uniforms:       uniforms,
      vertexShader:   vShader,
      fragmentShader: fShader,
      transparent:    true
      });
    }

    if(isUndefined(acc_disk)){
      acc_disk = new THREE.Mesh(geometry, shader_material);

      acc_disk.position.z = -1;
      scene.add(acc_disk);
    }

    animate();
  }
  function animate(){
    stats.begin();
    var d = new Date();
    theta = d.getTime()/5000 % 2*Math.PI
    if (Math.abs(theta - Math.PI/2.) < 0.005 || Math.abs(theta - 3.*Math.PI/2.) < 0.005){
        theta += 0.01;
    }
    acc_disk.material.uniforms.theta.value = theta;// + 3.14 * (Math.abs(Math.sin(theta)))/2.;
    acc_disk.material.uniforms.disk_temperature.value = temperature;
    uniforms.uResolution.value.x = canvasWidth;
    uniforms.uResolution.value.y = canvasHeight;
    uniforms.enable_grav_lensing.value = enableGravLensing;

    renderer.render(scene, camera)
    stats.end();
    console.log(enableGravLensing, gradLensingRef.current)
    if(temperatureRef.current === temperature && gradLensingRef.current === enableGravLensing){
      requestAnimationFrame(animate);
    }
  }

  return (
    <>
      <div>
        <div style={{position: "relative", alignItems: "center", backgroundColor: "black" }}>
          <canvas id="canvas" style={{ marginLeft: "auto", marginRight: "auto", display: "block", width: canvasWidth, minHeight: "30em", }}></canvas>
          <div className="overlay">
            <div className="checkbox-buttons">
              <label>
                <input
                  type="checkbox"
                  value={enableGravLensing}
                  onChange={(e) => {setGravLensing(!enableGravLensing); gradLensingRef.current = !gradLensingRef.current}}
                />
                Gravitational Lensing 
              </label>
              <label>
                <input
                  type="checkbox"
                  value={enableRelativisticBeaming}
                  onChange={(e) => setRelativisticBeaming(!enableRelativisticBeaming)}
                />
                Relativistic Beaming
              </label>
              <label>
                <input
                  type="checkbox"
                  value={enableDopplerEffect}
                  onChange={(e) => setDopplerEffect(!enableDopplerEffect)}
                />
                Doppler Effect
              </label>
              <label>
                <input
                  type="checkbox"
                  value={enableGravitationalRedshift}
                  onChange={(e) => setGravitationalRedshift(!enableGravitationalRedshift)}
                />
                Gravitational Redshift
              </label>
            </div>
            <div className="slider" >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                  type="range"
                  min="3500"
                  max="1e4"
                  value={temperature}
                  onChange={(e) => {setTemperature(e.target.value); temperatureRef.current = e.target.value}} 
                />
              <label style={{}}>Temperature: {temperature} K</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App

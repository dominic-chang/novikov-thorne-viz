import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three';
import Stats from 'stats-js';
import './App.css'

var renderer, uniforms, vShader, fShader, camera, scene, accDisk, theta, stats, shaderMaterial, geometry, texture1, texture2;
var loader = new THREE.FileLoader();

var horRot = 0;
var vertRot = -Math.PI/15.0;
var isdown = false;
var lastX = 0;
var lastY = 0;

stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

function isUndefined(obj) {
  return typeof obj === 'undefined';
}

function App() {
  const [temperature, setTemperature] = useState(5772)
  const [diskSize, setDiskSize] = useState(40.0)

  const [enableGravLensing, setGravLensing] = useState(false)
  const [enableDopplerBeaming, setDopplerBeaming] = useState(false)
  const [enableDopplerShift, setDopplerShift] = useState(false)
  const [enableGravitationalRedshift, setGravitationalRedshift] = useState(false)
  const [enableBackground, setBackground] = useState(true)

  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth)
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight)
  const temperatureRef = useRef(temperature)// Used to terminate animation loop if temperature state has changed
  const gradLensingRef = useRef(enableGravLensing)
  const dopplerBeamingRef = useRef(enableDopplerBeaming)
  const dopplerShiftRef = useRef(enableDopplerShift)
  const gravRedshiftRef = useRef(enableGravitationalRedshift)
  const backgroundRef = useRef(enableBackground)
  const diskSizeRef = useRef(diskSize)

  
  useEffect(() => {
    const handleResize = () => {setCanvasWidth(window.innerWidth); setCanvasHeight(window.innerHeight);}
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  useEffect(() => {

    if(isUndefined(renderer)) {
      renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('canvas'),
      antialias: false,
      });
      renderer.domElement.addEventListener("touchstart", event => {
        event.preventDefault();
        isdown = true;
        lastX = event.changedTouches[0].pageX;
        lastY = event.changedTouches[0].pageY;
      });
      renderer.domElement.addEventListener("touchend", event => {
        event.preventDefault();
        isdown = false;
      });
      renderer.domElement.addEventListener("touchcancel", event => {
        event.preventDefault();
        isdown = false;
      }
      )
      renderer.domElement.addEventListener("touchmove", event => {
        event.preventDefault();
        if(isdown){
          horRot += (lastX-event.changedTouches[0].pageX)/100
          horRot = horRot % (2.0*Math.PI);
          if (horRot < 0){
            horRot += 2.0*Math.PI;
          }
          vertRot += (lastY-event.changedTouches[0].pageY)/100
          vertRot = vertRot % (Math.PI);
          lastX = event.changedTouches[0].pageX;
          lastY = event.changedTouches[0].pageY;
        }
      });


      renderer.domElement.addEventListener("mousedown", event => {
        event.preventDefault();
        isdown = true;
        lastX = event.offsetX;
        lastY = event.offsetY;
      });
      renderer.domElement.addEventListener("mouseup", event => {
        event.preventDefault();
        isdown = false;
      });
      renderer.domElement.addEventListener("mouseleave", event => {
        event.preventDefault();
        isdown = false;
      }
      )
      renderer.domElement.addEventListener("mousemove", event => {
        event.preventDefault();
        if(isdown){
          horRot += (lastX-event.offsetX)/100
          horRot = horRot % (2.0*Math.PI);
          if (horRot < 0){
            horRot += 2.0*Math.PI;
          }
          vertRot += (lastY-event.offsetY)/100
          vertRot = vertRot % (Math.PI);
          lastX = event.offsetX;
          lastY = event.offsetY;
        }
      });

    }
    renderer.setClearColor(0x000000);
    renderer.setSize(canvasWidth, canvasHeight);

    if(isUndefined(camera)) {
      camera = new THREE.PerspectiveCamera(
      1,
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
      loader.load('glsl/fragment.glsl', function ( data ) {fShader =  data; runMoreIfDone(); },);
      loader.load('glsl/vertex.glsl', function ( data ) {vShader =  data; runMoreIfDone(); },);
    }else {more();}

    //return () => {termination.current = true;}
  })

  function more() {
    if(isUndefined(geometry)){
      geometry = new THREE.PlaneGeometry(2, 2);
    }

    if(isUndefined(texture2)){
      console.log("loading texture2")
      texture2 = new THREE.TextureLoader().load('images/image.png')//.load('space.png')
    }
    if(isUndefined(texture1)){
      console.log("loading texture1")
      texture1 = new THREE.TextureLoader().load('images/clouds-gray.jpeg')
    }

    if(isUndefined(uniforms)){
      uniforms = {
      theta :    {value: 0},
      hor_rot:   {value: 0},
      vert_rot:   {value: 0},
      disk_temperature: {value: temperature},
      disk_size: {value: diskSize}, 
      texture1:  {value:texture1},
      textureft: {value:texture2},
      uResolution: {
          value: new THREE.Vector2(canvasWidth, canvasHeight),
        },
      enable_grav_lensing: {value: enableGravLensing},
      enable_doppler_beaming: {value: enableDopplerBeaming},
      enable_doppler_shift: {value: enableDopplerShift},
      enable_gravitational_redshift: {value: enableGravitationalRedshift},
      enable_background: {value: enableBackground},
      }
    }

    if(isUndefined(shaderMaterial)){
      console.log("creating shaderMaterial")
      shaderMaterial = new THREE.ShaderMaterial({
      uniforms:       uniforms,
      vertexShader:   vShader,
      fragmentShader: fShader,
      transparent:    true
      });
    }

    if(isUndefined(accDisk)){
      accDisk = new THREE.Mesh(geometry, shaderMaterial);

      accDisk.position.z = -1;
      scene.add(accDisk);
    }

    animate();
  }
  function animate(){
    stats.begin();
    var d = new Date();
    theta = -d.getTime()/10000 % (2*Math.PI)
    if (Math.abs(theta - Math.PI/2.) < 0.005 || Math.abs(theta - 3.*Math.PI/2.) < 0.005){
        theta += 0.01;
    }
    accDisk.material.uniforms.theta.value = theta;// + 3.14 * (Math.abs(Math.sin(theta)))/2.;
    accDisk.material.uniforms.hor_rot.value = horRot;
    accDisk.material.uniforms.vert_rot.value = vertRot;
    accDisk.material.uniforms.disk_temperature.value = temperature;
    accDisk.material.uniforms.disk_size.value = diskSize;
    

    uniforms.uResolution.value.x = canvasWidth;
    uniforms.uResolution.value.y = canvasHeight;
    uniforms.enable_grav_lensing.value = enableGravLensing;
    uniforms.enable_doppler_beaming.value = enableDopplerBeaming;
    uniforms.enable_doppler_shift.value = enableDopplerShift;
    uniforms.enable_gravitational_redshift.value = enableGravitationalRedshift;
    uniforms.enable_background.value = enableBackground;

    renderer.render(scene, camera)
    stats.end();
    if(
      temperatureRef.current === temperature && 
      gradLensingRef.current === enableGravLensing && 
      dopplerBeamingRef.current === enableDopplerBeaming &&
      dopplerShiftRef.current === enableDopplerShift &&
      gravRedshiftRef.current === enableGravitationalRedshift &&
      backgroundRef.current === enableBackground &&
      diskSizeRef.current === diskSize
    ){
      requestAnimationFrame(animate);
    }
  }

  return (
    <>
      <div >
        <div style={{position: "relative", alignItems: "center", backgroundColor: "black" }}>
          <canvas id="canvas" style={{ marginLeft: "auto", marginRight: "auto", display: "block", width: canvasWidth, }}></canvas>
          <div className="overlay">
            <div className="checkbox-buttons">
              <label>
                <input
                  type="checkbox"
                  checked={enableGravLensing}
                  onChange={(e) => {setGravLensing(e.target.checked); gradLensingRef.current = e.target.checked}}
                />
                Gravitational Lensing 
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={enableDopplerBeaming}
                  onChange={(e) => {setDopplerBeaming(e.target.checked); dopplerBeamingRef.current = e.target.checked;}}
                />
                Doppler Beaming
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={enableDopplerShift}
                  onChange={(e) => {setDopplerShift(e.target.checked); dopplerShiftRef.current = e.target.checked;}}
                />
                Doppler Shift
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={enableGravitationalRedshift}
                  onChange={(e) => {setGravitationalRedshift(e.target.checked); gravRedshiftRef.current = e.target.checked;}}
                />
                Gravitational Redshift
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={enableBackground}
                  onChange={(e) => {setBackground(e.target.checked); backgroundRef.current = e.target.checked;}}
                />
                Toggle Background 
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
              <label style={{}}>Temperature: {temperature}K</label>
              </div>
            </div>
            <div className="slider" >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={diskSize}
                  onChange={(e) => {setDiskSize(e.target.value); diskSizeRef.current = e.target.value}} 
                />
              <label style={{}}>Disk Size: {diskSize}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App

var Helix = function(opts){
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer({ antialias: true });

  var blue = 0x84D0F0,
      yellow = 0xFED162,
      purple = 0x651E59;

  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 50;

  var tubeGeom = new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
  var ballGeom = new THREE.SphereGeometry(0.8, 32, 32);

  var blueMat = new THREE.MeshBasicMaterial({ color: blue }),
      yellowMat = new THREE.MeshBasicMaterial({ color: yellow }),
      purpleMat = new THREE.MeshBasicMaterial({ color: purple });

  var strand = new THREE.Object3D();

  for(var i = 0; i <= 40; i++){
    var leftTube = new THREE.Mesh(tubeGeom, blueMat);
    leftTube.rotation.z = 90 * Math.PI / 180;
    leftTube.position.x = -3;

    var rightTube = new THREE.Mesh(tubeGeom, yellowMat);
    rightTube.rotation.z = 90 * Math.PI / 180;
    rightTube.position.x = 3;

    var rightBall = new THREE.Mesh(ballGeom, purpleMat);
    rightBall.position.x = 6;

    var leftBall = new THREE.Mesh(ballGeom, purpleMat);
    leftBall.position.x = -6;

    var row = new THREE.Object3D();
    row.add(leftTube);
    row.add(leftBall);
    row.add(rightTube);
    row.add(rightBall);

    row.position.y = i * 2;
    row.rotation.y = 30 * i * Math.PI / 180;

    strand.add(row);
  }

  strand.position.y = -40;

  scene.add(strand);

  var render = function(){
    requestAnimationFrame(render);
    strand.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  render();
  return renderer.domElement;
};

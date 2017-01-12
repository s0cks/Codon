var Helix = function(opts){
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  var leftColor = opts.colors.left || 0xFED162;
  var rightColor = opts.colors.right || 0xFED162;
  var ballColor = opts.colors.ball || 0x393939;

  renderer.setClearColor(0xF9F9F9, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 50;

  var tubeGeom = new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
  var ballGeom = new THREE.SphereGeometry(0.8, 32, 32);

  var leftMat = new THREE.MeshBasicMaterial({ color: leftColor }),
      rightMat = new THREE.MeshBasicMaterial({ color: rightColor }),
      ballMat = new THREE.MeshBasicMaterial({ color: ballColor }),
      chosenBallMat = new THREE.MeshBasicMaterial({ color: 0xDAA520 });

  var strand = new THREE.Object3D();
  var artists = opts.data,
      currentArtist = 0;

  for(var i = 0; i <= 40; i++){
    var leftTube = new THREE.Mesh(tubeGeom, leftMat);
    leftTube.rotation.z = 90 * Math.PI / 180;
    leftTube.position.x = -3;

    var rightTube = new THREE.Mesh(tubeGeom, rightMat);
    rightTube.rotation.z = 90 * Math.PI / 180;
    rightTube.position.x = 3;

    var rightBall, leftBall;

    if(currentArtist < artists.length){
      var left = Math.random() > 0.5,
          artistMaterial = new THREE.MeshBasicMaterial({ color: artists[currentArtist++].color });
      rightBall = new THREE.Mesh(ballGeom, !left ? artistMaterial : ballMat);
      rightBall.position.x = 6;
      leftBall = new THREE.Mesh(ballGeom, left ? artistMaterial : ballMat);
      leftBall.position.x = -6;
    } else{
      rightBall = new THREE.Mesh(ballGeom, ballMat);
      rightBall.position.x = 6;
      leftBall = new THREE.Mesh(ballGeom, ballMat);
      leftBall.position.x = -6;
    }

    var row = new THREE.Object3D();
    row.add(leftTube);
    row.add(leftBall);
    row.add(rightTube);
    row.add(rightBall);

    row.position.y = i * 2;
    row.rotation.y = 30 * i * Math.PI / 180;

    strand.add(row);
  }

  strand.position.y = -30;

  scene.add(strand);

  var render = function(){
    requestAnimationFrame(render);
    strand.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  render();
  return renderer.domElement;
};

//初始化渲染器
function initRenderer() {
    var renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.shadowMapSoft = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.getElementById("entryNode").appendChild(renderer.domElement);
    return renderer
}

//初始化默认灯光
function initDefaultLighting(scene) {
    var PointLight = new THREE.PointLight(0xffffff);
    PointLight.position.set(0, 20, 0)
    PointLight.shadow.mapSize.width = 1000;
    PointLight.shadow.mapSize.height = 100;
    PointLight.shadow.camera.fov = 15;
    PointLight.castShadow = true;
    PointLight.decay = 2;
    PointLight.penumbra = 0.9;
    PointLight.name = "PointLight"

    scene.add(PointLight);

    var ambientLight = new THREE.AmbientLight(0xffffff);
    ambientLight.name = "ambientLight";
    scene.add(ambientLight);

}

//初始化相机
function initCamera() {
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.set(0, 1000, 0);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    return camera;
}


//性能监测插件
function initStats(type) {

    var panelType = (typeof type !== 'undefined' && type) && (!isNaN(type)) ? parseInt(type) : 0;
    var stats = new Stats();

    stats.showPanel(panelType); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom);

    return stats;
}
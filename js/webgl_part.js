
function reMarkVideo() {
    var videoDiv = document.getElementById("video");
    videoDiv.load();
    toggleUpdateButton(videoDiv)
}
var interface = 'main';//main

var app = new Vue({

    el:'#menu',
    data:{
        isSelectShow:false,
        isShow:false,
        isShowVideo:false,
        isShowCatchPart:false,
        x:0,
        y:0,
        objectArray:[],
        current_index:-1,

        selectModelInformation:{
            selectModelIsShelf:false,
            selectModelName:'',
            selectModelIntroduce:'waitting........',
            selectModelDetials:'waitting........'
        },
        sceneArray:[]
    },
    methods:{
        UpdateScene:function(){
            var selects = document.getElementById("select_scene");
            var indexs = selects.selectedIndex;  //选中项的索引
            // console.log(selects[indexs].value)
            initScene();
            initLight();
            getData(indexs+1);
        },
        OpenBag:function(){
            function send(){
                app.isSelectShow = false;
            }
            setTimeout(send,100);
            this.isShowCatchPart = true;
            window.top.object_select.location.href = "select_object.html";
        },
        functionClose:function(){
            ChangeProperty(selectModel.material, {transparent:false,opacity:1});
            function send(){
                app.isSelectShow = false;
            }
            setTimeout(send,100)

        },
        Catch:function(){
            ChangeProperty(selectModel.material, {transparent:false,opacity:1});
            function catchModel() {
                selectModel.visible = false;
                //拿起物品
                var shelve = modelPlaced[[selectModel.name]]["shelves"];
                if (!catchModels[[shelve]]){
                    catchModels[[shelve]] = {};
                }
                if(!catchModels[[shelve]][[selectModel.name]]){
                    catchModels[[shelve]][[selectModel.name]] = []
                }
                catchModels[[shelve]][[selectModel.name]].push(selectModel)
            }
            if(modelPlaced[[selectModel.name]] && this.objectArray.length == 0){
                catchModel()
            }else if(this.objectArray.length != 0){
                if(selectModel.name != this.objectArray[this.current_index]){
                    alert("请选择正确的工器具")
                }else{
                    catchModel();
                    initStep(this.current_index+1);
                }
            }

            function send(){
                app.isSelectShow = false;
            }
            setTimeout(send,100)
        },
        Detail:function(){
            app.isShow = true;
            this.SetContatiner();
            app.isSelectShow = false;
        },
        CloseDetails:function(){
            ChangeProperty(selectModel.material, {transparent:false,opacity:1});
            function send(){
                app.isShow = false;
            }
            setTimeout(send,100)
        },
        SetContatiner:function(){
            var containerDiv = document.getElementById('container');
            containerDiv.style.setProperty("--left", this.x + 'px');
            containerDiv.style.setProperty("--top", this.y + 'px');
        },
        ShowVideo:function () {
            this.isShowVideo = true;
        },
        Back:function(){
            app.isShowVideo=false;
            reMarkVideo()
        },
        Close:function () {
            this.isShow=false;
            this.isSelectShow = false;

            function send(){
                app.isShowVideo=false;
            }
            setTimeout(send,100);
            reMarkVideo();
            ChangeProperty(selectModel.material, {transparent:false,opacity:1});
        }
    },
});

var renderer;
var camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 60);
    camera.lookAt(new THREE.Vector3(0,5,0));
}

var scene;
function initScene() {
    scene = new THREE.Scene();
}

//初始化dat.GUI简化试验流程
var gui;
function initGui() {
    //声明一个保存需求修改的相关数据的对象
    gui = {
    };
    // var datGui = new dat.GUI();  //已经删除
    //将设置属性添加到gui当中，gui.add(对象，属性，最小值，最大值）
}

var light;
//环境光
function initLight() {
    addLight('AmbientLight',0x444444);
    addLight('PointLight',0xffffff,[0,500,100],1.25);
    // addLight('PointLight',0xffffff,[100,100,100],1);
    // addLight('PointLight',0xffffff,[-100,100,100],1);
    // addLight('PointLight',0xffffff,[0,5,0]);
}
function addLight(type,color,position,intensity) {
    switch (type) {
        case 'PointLight':
            light = new THREE.PointLight(color);
            light.position.set(position[0],position[1],position[2]);
            if(intensity != undefined){
                light.intensity = intensity;
            }
            //告诉平行光需要开启阴影投射
            light.castShadow = true;
            break;
        case 'AmbientLight':
            light = new THREE.AmbientLight(color);
            break;
        case 'SpotLight ':break;
        case 'DirectinalLight ':break;
    }

    scene.add(light);
}

var shelvesName = new Set([]);
var objectModels = new Set([]);
var catchModels = {};
var shelvesLights = {};

function showModel(path,format,position,scale,rotate,type,name) {

    // 辅助工具坐标轴
    var helper = new THREE.AxesHelper(50);
    if(interface == 'main'){
        scene.add(helper);
    }

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath('lib/model/');
    //加载mtl文件
    mtlLoader.load(path+'.mtl', function (material) {
        var objLoader = new THREE.OBJLoader();
        //设置当前加载的纹理
        objLoader.setMaterials(material);
        objLoader.setPath('lib/model/');
        objLoader.load(path+'.obj', function (object) {
            object.children.forEach(function (child) {
                child.material.opacity = 1;
                if (! (child.name in ['厂房','电灯'] ) ){
                    if (child.name.startsWith('货架') || child.name == '衣架'){
                        child.realName = name;
                        shelvesName.add(name)
                    }else {
                        objectModels.add(child.name)
                    }
                }
                if(type=="货架" && child.name.startsWith("指示灯")){
                    if (!shelvesLights[name]){
                        shelvesLights[name] = {};
                    }
                    shelvesLights[name][child.name] = child
                }
            });
            if(rotate != undefined && rotate != null){
                object.rotateX(rotate['_x'])
                object.rotateY(rotate['_y'])
                object.rotateZ(rotate['_z'])
                // switch (rotate[1]) {
                //     case 'x':object.rotateX(rotate[0]);break;
                //     case 'y':object.rotateY(rotate[0]);break;
                //     case 'z':object.rotateZ(rotate[0]);break;
                // }

            }
            //将模型缩放并添加到场景当中
            if (position != undefined && position != null){
                object.position.set(position[0],position[1],position[2])
            }

            if (scale != undefined && scale != null){
                object.scale.set(scale,scale,scale);
            }

            scene.add(object);
        })
    });
}

function putBack(shelveName,modelName) {
    catchModels[[shelveName]][[modelName]].forEach(function (object) {
        object.visible = true;
    });
    catchModels[[shelveName]][[modelName]] = []
}

function initStep(i) {
    if(i!=0){
        shelveLightEmissive(app.objectArray[i-1],'close');
    }
    if(i<app.objectArray.length){
        app.current_index = i;
        shelveLightEmissive(app.objectArray[i],'open');
    }else {
        app.current_index = -1;
        app.objectArray = [];
    }

}

//初始化性能插件
var stats;
function initStats() {
    stats = new Stats();
    // document.body.appendChild(stats.dom); //已经删除
}



//用户交互插件 鼠标左键按住旋转，右键按住平移，滚轮缩放
var controls;
function initControls() {
    // function getRadius(){
    //     var spherical = new THREE.Spherical();
    //     var offset = new THREE.Vector3();
    //     var quat = new THREE.Quaternion().setFromUnitVectors( controls.object.up, new THREE.Vector3( 0, 1, 0 ) );
    //     var position = controls.object.position;
    //     offset.copy( position ).sub( controls.target );
    //     offset.applyQuaternion( quat );
    //     // angle from z-axis around y-axis
    //     spherical.setFromVector3( offset );
    //     return  spherical.radius
    // }
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    // scaleRatio =  getRadius()
    //
    //
    // controls.domElement.addEventListener(  'wheel', function (event) {
    //     scaleRatio =  getRadius();
    //
    // })
    // 使动画循环使用时阻尼或自转 意思是否有惯性
    controls.enableDamping = true;
    //动态阻尼系数 就是鼠标拖拽旋转灵敏度
    //controls.dampingFactor = 0.25;
    //是否可以缩放
    controls.enableZoom = true;
    //是否自动旋转
    controls.autoRotate = (interface != "main");
    //设置相机距离原点的最远距离
    controls.minDistance  = 1;
    //设置相机距离原点的最远距离
    controls.maxDistance  = 200;
    //是否开启右键拖拽
    controls.enablePan = true;

}

function render() {
    if (selectModel && selectModel.visible == true
        &&( Array.from(shelvesName).includes(selectModel.realName)
            || Array.from(objectModels).includes(selectModel.name) )
    ){
        var worldVector = selectModel.getWorldPosition(worldVector);
        var standardVector = worldVector.project(camera);
        var a = window.innerWidth/2;
        var b = window.innerHeight/2;
        var x = Math.round(standardVector.x * a + a);
        var y = Math.round(-standardVector.y *b +b);
        if (["货架4","货架6","衣架","工业吸尘器"].includes(selectModel.name)){
            y -= 250
        }
        var div = document.getElementById('model_function_select')
        div.style.setProperty("--left", x + 'px');
        div.style.setProperty("--top", y + 'px');
        app.x = x;
        app.y = y;
    }
    renderer.render( scene, camera );
}

//窗口变动触发的函数
function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    render();
    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {
    //更新控制器
    render();

    //更新性能插件
    stats.update();

    controls.update();

    requestAnimationFrame(animate);
}

function showInformation(x,y) {
    // var box = document.getElementById('test');
    // if (box){
    //     box.parentNode.removeChild(box);
    // }
    //
    // var div = document.createElement('div');
    // div.style.position = 'absolute';
    // div.style.display = 'block';
    //
    // div.id = 'test';
    // document.body.appendChild(div);
    // var img = document.createElement('img');
    // img.src = 'img/test.jpeg';
    // img.width = (200 - scaleRatio)*4;
    // img.height = (200 - scaleRatio)*4;
    // div.style.left = x - img.width*1.25 + 'px';
    // div.style.top = y - img.height/2 + 'px';
    // div.appendChild(img)
    app.isShow = true;
    app.SetContatiner(700,350,x,y,100/scaleRatio)
}

function ChangeProperty(material,property) {
    if(Array.isArray(material)){
        material.forEach(function (child) {
            child.transparent = property.transparent;
            child.opacity = property.opacity;
        })
    }else {
        material.transparent = property.transparent;
        material.opacity = property.opacity;
    }
}



function shelveLightEmissive(name,type){
    if(type == "open"){
        rgb =  {r:255,g:255,b:0}
    }else {
        rgb =  {r:0,g:0,b:0}
    }
    modelPlaced[[name]]["light"].forEach(function (id) {
        shelvesLights[modelPlaced[[name]]["shelves"]]["指示灯"+id].material.emissive = rgb
    })

}

var selectModel = null;
function initModel() {
    if(interface == 'main') {
        modelJson["information"].forEach(function(model){
            if(model["child"].length!=0){

                model["child"].forEach(function(child){
                    for(var i=0;i<child["position"].length;i++){
                        var child_position = [
                            model["position"][0]
                            + child["position"][i][0],
                            model["position"][1]
                            + child["position"][i][1],
                            model["position"][2]
                            + child["position"][i][2],
                        ];
                        showModel(child["path"],"obj",position = child_position,scale = 1,rotate = model["rotate"],type=child["type"],name=child["name"])
                    }
                })
            }
            showModel(model["path"],"obj",position = model["position"],scale = 1,rotate = model["rotate"],type=model["type"],name=model["name"])
        });



        //点击事件
        var raycaster = new THREE.Raycaster();
        var mouse = new THREE.Vector2();
        function onMouseClick( event ) {
            //通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.

            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            if(event.clientX  <= window.innerWidth*0.1||
                event.clientY <= window.innerHeight*0.15){
                return
            }
            // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
            raycaster.setFromCamera( mouse, camera );

            // 获取raycaster直线和所有模型相交的数组集合
            var intersects = raycaster.intersectObjects( scene.children, true);

            if (intersects.length != 0 && intersects[0].object.name != '厂房' &&
                (!intersects[0].object.name.startsWith('指示灯'))&&
                (!app.isShowVideo && !app.isShow)&&
                (!app.isSelectShow)
            ){


                if (selectModel != null){
                    // console.log(selectModel)
                    ChangeProperty(selectModel.material, {transparent:false,opacity:1});
                }
                selectModel = intersects[0].object;
                ChangeProperty(selectModel.material, {transparent:true,opacity:0.5});

                // if (!intersects[0].object.name.startsWith('平面')){
                //     selectedObject = intersects[0].object;
                //     intersects[0].object.material.color.set( 0xff0000 );
                // }
                app.isSelectShow = true;
                app.selectModelInformation.selectModelIsShelf = (Array.from(shelvesName).includes(selectModel.realName));
                app.selectModelInformation.selectModelName = selectModel.name;
                if(app.selectModelInformation.selectModelIsShelf){
                    app.selectModelInformation.selectModelIntroduce = '';
                }else {
                    app.selectModelInformation.selectModelIntroduce = tools_information[selectModel.name]['introduce'];
                    app.selectModelInformation.selectModelDetials = tools_information[selectModel.name]['details'];

                }

            }
        }

        window.addEventListener( 'click', onMouseClick, false );
    }

}

function initRender() {
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    //告诉渲染器需要阴影效果
    renderer.setClearColor(0xffffff);
    document.getElementById("painter").appendChild(renderer.domElement);

}

function draw() {
    initGui();
    initRender();
    initScene();
    initCamera();
    initLight();


    initControls();
    initStats();
    animate();
    window.onresize = onWindowResize;

}
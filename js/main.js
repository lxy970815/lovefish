var can1, can2, ctx1, ctx2, lastTime, deltaTime;

var canWidth;
var canHeight;
var bgPic = new Image();
var fruit;
var mom;
var baby;
var mx;
var my;
var wave;
var halo;
var dust;
var dustPic = [];

var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail = [];
var momEye = [];
var momBodyOra = [];
var momBodyBlue = [];
var data;
document.body.onload = game;
function game() {
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}

function init() {
    // 获得canvas context
    can1 = document.getElementById("canvas1");//fishes dust UI circle
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById("canvas2");//background fruits 
    ctx2 = can2.getContext('2d');

    can1.addEventListener('mousemove', onMouseMove, false);

    bgPic.src="./src/img/background.jpg";
    canWidth = can1.width;
    canHeight = can1.height;

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();
    mom = new momObj();
    mom.init();
    baby = new babyObj();
    baby.init();
    wave = new waveObj();
    wave.init();
    halo = new haloObj();
    halo.init();
    dust = new dustObj();
    for(var i = 0; i<7 ;i++) {
        dustPic[i] = new Image();
        dustPic[i].src = "./src/img/dust"+i+".png";
    }
    dust.init();
    mx = canWidth*0.5;
    my = canHeight*0.5;
    for(var i = 0; i <8; i++) {
        babyTail[i] = new Image();
        babyTail[i].src = "./src/img/babyTail"+0+".png";
    }
    for(var i = 0; i<2; i++) {
        babyEye[i] = new Image();
        babyEye[i].src = "./src/img/babyEye"+i+".png";
    }

    for(var i = 0; i< 20; i++) {
        babyBody[i] = new Image();
        babyBody[i].src = "./src/img/babyFade"+i+".png";
    }

    for(var i = 0; i<8; i++) {
        momTail[i] = new Image();
        momTail[i].src = "./src/img/bigTail"+i+".png";
    }
    for(var i = 0; i<2;i++) {
        momEye[i] = new Image();
        momEye[i].src = "./src/img/bigEye"+i+".png";
    }
    data = new dataObj();
    for(var i = 0; i< 8;i++) {
        momBodyOra[i] = new Image();
        momBodyBlue[i] = new Image();
        momBodyOra[i].src = "./src/img/bigSwim"+i+".png";
        momBodyBlue[i].src = "./src/img/bigSwimBlue"+i+".png";
    }
    ctx1.fillStyle = "white";
    ctx1.font = "30px Verdana";
    ctx1.textAlign = "center";
}

function gameloop() {
    // 会根据机器性能 来设置
    requestAnimFrame(gameloop);//setInterval setTimeout
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if(deltaTime > 40) deltaTime = 40;
    drawBackground();
    
    ane.draw();
    fruitMonitor();
    fruit.draw();
    ctx1.clearRect(0,0,canWidth,canHeight);
    dust.draw();
    mom.draw();
    baby.draw();
    momFruitsCollision();
    momBabyCollision();
    data.draw();
    wave.draw();
    halo.draw();
    
}

function onMouseMove(e) {
    if(!data.gameOver) {
        if(e.offSetX || e.layerX) {
            mx = e.offSetX == undefined ? e.layerX : e.offSetX;
            my = e.offSetY == undefined ? e.layerY : e.offSetY;
        }
    }
}
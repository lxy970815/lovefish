var dataObj = function() {
    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
    this.gameOver = false;
    this.alpha = 0;
    this.h = 50;
}

dataObj.prototype.reset = function() {
    this.fruitNum = 0;
    this.double = 1;
}
dataObj.prototype.draw = function() {
    var w = can1.width;
    var h = can1.height;
    
    // ctx1.fillText("num "+this.fruitNum, w*0.5, h-50);
    // ctx1.fillText("double "+this.double,w*0.5,h-80);
    ctx1.save();
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "white";
    ctx1.fillText("score: "+this.score,w*0.5,h-20);
    if(this.gameOver) {
        this.alpha += deltaTime * 0.0005;
        if(this.h>=0){
            this.h -= deltaTime*0.03;
        }
        ctx1.fillStyle = "rgba(255,255,255,"+this.alpha+")";
        ctx1.fillText("GAME OVER",w*0.5,h*0.5+this.h);
    }
    ctx1.restore();
}
dataObj.prototype.addScore = function() {
    this.score += this.fruitNum*10*this.double;
    this.reset();
}
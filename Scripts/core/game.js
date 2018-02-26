//IIFE - Immediately Invoked Function Expression
(function () {
    //Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    function Init() {
        console.log("Initializing Started.");
        Start();
    }
    function Start() {
        console.log("Starting Application.");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 Frames Per Second
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        helloLabel.rotation += 4;
        stage.update(); //Redraws the stage every frame
    }
    function Main() {
        console.log("Game Started!");
        helloLabel = new createjs.Text("Goodbye Everyone!", "40px Times New Roman", "#234121");
        helloLabel.x = 100;
        helloLabel.y = 100;
        stage.addChild(helloLabel);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map
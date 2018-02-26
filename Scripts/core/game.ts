//IIFE - Immediately Invoked Function Expression
(function(){

    //Game Variables
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    let helloLabel: createjs.Text;

    function Init() : void{
        console.log("Initializing Started.");

        Start();
    }

    function Start() : void {
        console.log("Starting Application.");

        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 Frames Per Second
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update() : void {
        helloLabel.rotation += 4;
        stage.update(); //Redraws the stage every frame
    }

    function Main() : void {
        console.log("Game Started!");

        helloLabel = new createjs.Text("Hello Everyone!", "40px Times New Roman", "#234121");
        helloLabel.x = 100;
        helloLabel.y = 100;

        stage.addChild(helloLabel);
    }

    window.onload = Init;
})();
/// <reference path="references.ts"/>
//IIFE - Immediately Invoked Function Expression
(function () {
    //Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var startButton;
    var assetManager;
    var assetManifest;
    assetManifest = [
        { id: "startButton", src: "./Assets/images/startButton.png" }
    ];
    //Prelaod the assets
    function Init() {
        console.log("Initializing Started.");
        assetManager = new createjs.LoadQueue(); //Create asset manager
        assetManager.installPlugin(createjs.Sound); //Asset Manager to load sounds
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application.");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // To hover buttons
        createjs.Ticker.framerate = 60; // 60 Frames Per Second
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update(); //Redraws the stage every frame
    }
    function startButtonMouseClick() {
        helloLabel.text = "Clicked!";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regX = helloLabel.getMeasuredHeight() * 0.5;
    }
    function Main() {
        console.log("Game Started!");
        helloLabel = new objects.Label("Goodbye Everyone!", "40px", "Times New Roman", "#000000", 200, 200, true);
        stage.addChild(helloLabel);
        startButton = new objects.Button(assetManager, "startButton", 320, 340);
        stage.addChild(startButton);
        startButton.on("click", startButtonMouseClick);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map
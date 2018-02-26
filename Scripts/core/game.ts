/// <reference path="references.ts"/>

//IIFE - Immediately Invoked Function Expression
(function(){

    //Game Variables
    let canvas = document.getElementById("canvas");
    let stage: createjs.Stage;
    let helloLabel: objects.Label;
    let startButton: objects.Button;
    let assetManager: createjs.LoadQueue;
    let assetManifest: any[];

    assetManifest = [
        {id: "startButton", src:"./Assets/images/startButton.png"}
    ]

    //Prelaod the assets
    function Init() : void{
        console.log("Initializing Started.");
        assetManager = new createjs.LoadQueue(); //Create asset manager
        assetManager.installPlugin(createjs.Sound); //Asset Manager to load sounds
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }

    function Start() : void {
        console.log("Starting Application.");

        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // To hover buttons
        createjs.Ticker.framerate = 60; // 60 Frames Per Second
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update() : void {
        stage.update(); //Redraws the stage every frame
    }

    function startButtonMouseClick(): void{
        helloLabel.text = "Clicked!";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regX = helloLabel.getMeasuredHeight() * 0.5; 
    }

    function Main() : void {
        console.log("Game Started!");

        helloLabel = new objects.Label("Goodbye Everyone!", "40px", "Times New Roman", "#000000", 200, 200, true);
        stage.addChild(helloLabel);

        startButton = new objects.Button(assetManager, "startButton", 320, 340);
        stage.addChild(startButton);

        startButton.on("click", startButtonMouseClick);
    }

    window.onload = Init;
})();
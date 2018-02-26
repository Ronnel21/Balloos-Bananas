module objects{
    export class Button extends createjs.Bitmap{

        //Private Variables

        //Public Variables

        //Constructors
        constructor(assetManager: createjs.LoadQueue, imageString:string, x:number = 0, y:number = 0) {
            super(assetManager.getResult(imageString));

            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            this.x = x;
            this.y = y;

            this.on("mouseover", this._mouseOver);
            this.on("mouseout", this._mouseOut);
        }

        //Private Methods
        private _mouseOver():void{
            this.alpha = 0.7; // 0.7 = 30% transparency
        }

        private _mouseOut():void{
            this.alpha = 1.0; // 1.0 = 0% transparency when mouse not over button
        }


        //Public Methods
    }
}
class redbox
    {
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.Body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.Body);
    }
    display(){
        var pos =this.Body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        
    }
}

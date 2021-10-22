class Bird extends BaseClass{
    constructor(x,y){
         //super: transfiere todas las propiedades 
        super(x,y,50,50); //ponemos 50,50 por que es el tamaño fijo
        //se carga también la imagen que le corresponde
        this.image=loadImage("sprites/bird.png");
    }
    display(){
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        super.display();
    }
};
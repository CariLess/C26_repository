//creamos constantes: una máquina, un mundo y un cuerpo. 
//Y decimos que van a pertenecer 
//1 Cambiamos el nombre largo a uno corto para escribir más fácil
//namespacing
const Engine = Matter.Engine; //crea un motor físico
const World = Matter.World    //crea un mundo
const Bodies = Matter.Bodies; //crea los objetos físicos que habitan en el mundo
const Constraint = Matter.Constraint;

//2 creamos variables para alojar el motor y el mundo
var motor, mundo;
//3 creamos variables para los objetos en nuestro mundo
var caja, caja2, caja3, caja4, caja5;
var ground;
var cerdito,cerdito2;
var tronco, tronco2;
var tronco_inclinado, tronco_inclinado2;

var pajaro;
var backgroundImg;

var tronco_restringido;
function preload(){
  backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
  var canvas = createCanvas(1200, 400);

  //4 creamos un motor y agregamos al mundo nuestro motor
  motor = Engine.create();
  mundo = motor.world;

  ground = new Ground(600,height,1200,20);

  caja = new Box(700,365,70,70);
  caja2 = new Box(920,365,70,70);
  cerdito = new Pig(810,395);
  tronco = new Log(810,305,300,PI/2);

  caja3 = new Box(700,285,70,70);
  caja4 = new Box(920,285,70,70);
  cerdito2 = new Pig(810,265);
  tronco2 = new Log(810,225,300,PI/2);

  tronco_inclinado2= new Log(870,165,150,-PI/4);
  tronco_inclinado = new Log(760,165,150,PI/4);
  caja5 = new Box(810,205,70,70);

  pajaro = new Bird(100,100);
  tronco_restringido = new Log(230, 180, 80, PI / 2);

  var options = {
    bodyA: pajaro.body,
    bodyB: tronco_restringido.body,
    stiffness: 0.04,
    length: 10
  }

  var chain = Constraint.create(options);
  World.add(mundo, chain);
}

function draw() {
  background(backgroundImg);
  Engine.update(motor);

  caja.display();
  caja2.display();
  ground.display();
  cerdito.display();
  tronco.display();
  caja3.display();
  caja4.display();
  ground.display();
  cerdito2.display();
  tronco2.display();
  tronco_inclinado.display();
  tronco_inclinado2.display();
  caja5.display();
  pajaro.display();
  //console.log(mouseX,mouseY);
  tronco_restringido.display();

  strokeWeight(3);
  line(pajaro.body.position.x, pajaro.body.position.y, tronco_restringido.body.position.x, tronco_restringido.body.position.y);

}
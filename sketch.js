var brick;
var ball, ballImg;
var edges;
var score = 0;
var enemy1, enemy1Img;
var enemy2, enemy2Img;
var backImg;

function preload(){

    ballImg = loadImage("ball.png");
    enemy1Img = loadImage("enemy1.png");
    enemy2Img = loadImage("enemy2.png");
    backImg = loadImage("backimg.jpg");

}

function setup () {

    createCanvas(600, 600);

    brick = createSprite(300, 550, 150, 20);
    brick.shapeColor = "white";

    enemy1 = createSprite(400, 120);
    enemy1.addImage(enemy1Img);
    enemy1.scale = 0.05;
    enemy1.velocityX = -5;

    enemy2 = createSprite(50, 80);
    enemy2.addImage(enemy2Img);
    enemy2.scale = 0.05;
    enemy2.velocityX = 5;

    ball = createSprite(300, 300, 30, 30);
    ball.addImage(ballImg);
    ball.scale = 0.07;

    ball.velocityX = 15;
    ball.velocityY = -15;

    edges = createEdgeSprites();

}

function draw () {

    background(backImg);

    brick.x = mouseX;
    

    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[2]);
    ball.bounceOff(brick);

    enemy1.bounceOff(edges[0]);
    enemy1.bounceOff(edges[1]);

    enemy2.bounceOff(edges[0]);
    enemy2.bounceOff(edges[1]);

    if(ball.isTouching(enemy1)){
        enemy1.destroy();
        score = score + 1;
    }

    if(ball.isTouching(enemy2)){
        enemy2.destroy();
        score = score + 1;
    }


    drawSprites();
    textSize(20);
    fill ("White");
    text ("SCORE : " + score, 50, 50);

    if(score == 2){

        brick.destroy();
        ball.destroy();

        textSize (30);
        fill ("black")
        text ("YOU WON THE GAME", 150, 300);

    }

}






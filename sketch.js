var cat,cat1,mouse,mouse1;
var garden,garden1;






function preload() {
    //load the images here
    cat1=loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");
    mouse1=loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png")
    garden1=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    garden=createSprite(500,400);
    garden.addAnimation("garde",garden1);

    cat=createSprite(900,600);
    cat.addAnimation("cat",cat1);
    cat.scale=0.1;

    mouse=createSprite(200,600);
    mouse.addAnimation("mouse",mouse1);
    mouse.scale=0.1;

    
    //create tom and jerry sprites here

}

function draw() {

    cat.velocityX=-3;
    if (cat.x - mouse.x < mouse.width/2 + cat.width/2
        && mouse.x - cat.x < mouse.width/2 + cat.width/2
        && cat.y - mouse.y < mouse.height/2 + cat.height/2
        && mouse.y - cat.y < mouse.height/2 + cat.height/2){
            cat.velocityX=0;
        }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}



function setup(){
    c1= createCanvas(900,900);
w1= createCapture(VIDEO);
w1.hide()
}
function preload(){
    img = loadImage('https://o.remove.bg/downloads/43fad781-b1d8-4e18-91b6-bae648f9cd8b/55-558933_transparent-hanging-heart-png-png-download-removebg-preview.png');
    img2 = loadImage('https://o.remove.bg/downloads/e0461b20-f339-44ca-b0ae-11760be11ed8/Screenshot_2023-04-01_at_1.50.41_PM-removebg-preview.png')
}

function draw(){
    image (w1,100,100,600,450);
    image (img,300,100,400,300);
    image (img2,150,150,200,150);
    
    fill ('black')
    circle(120,100,170)
    fill ('white')
    circle(250,100,100)

    fill ('black')
    circle(385,100,170)
    fill ('white')
    circle(520,100,100)

    fill ('black')
    circle(655,100,170)
    fill ('white')
    circle(655,200,100)

    fill ('black')
    circle(655,300,170)
    fill ('white')
    circle(655,400,100)

    fill ('black')
    circle(655,500,170)
    fill ('white')
    circle(530,520,100)

    fill ('black')
    circle(400,510,170)
    fill ('white')
    circle(260,520,110)
    



    fill ('white')
    circle(120,200,100)
    fill ('black')
    circle(120,300,170)

    fill ('white')
    circle(120,400,100)
    fill ('black')
    circle(120,500,170)
   
    

}

function take_snapshot(){
    save ('frame.png')
}

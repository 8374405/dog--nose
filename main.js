noseX=0;
noseY=0;
function preload(){
clow_nose=loadImage('https://i.postimg.cc/prx13kVx/pngtree-floating-cartoon-dog-nose-png-image-3140529-removebg-preview.png')

}

function setup(){
 canvas=createCanvas(300,300)
 canvas.center()
 video=createCapture(VIDEO);
 video.size(300,300)
 video.hide()

 poseNet=ml5.poseNet(video, modelloaded)
 poseNet.on('pose', gotposes)
}

function modelloaded(){
    console.log('poseNet Is Initialized')
}

function draw(){
  image(video,0,0,300,300)
    image(clow_nose,noseX-50,noseY-50,105,105)
}

function takesnapshot(){
save("mypicture.png")
}

function gotposes(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x="+ results[0].pose.nose.x)
        console.log("nose y="+ results[0].pose.nose.y)
    }
}

cow=0;
dog=0;
cat=0;
lion=0;
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nGxQI7OS3/model.json',modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    console.log("got result")
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML=results[0].label;
        cow=(results[0].confidence*100).toFixed(2)+" %";
        dog=(results[1].confidence*100).toFixed(2)+" %";
        cat=(results[2].confidence*100).toFixed(2)+" %";
        lion=(results[3].confidence*100).toFixed(2)+" %";
        document.getElementById("result_count").innerHTML="cat: "+cat+"dog: "+dog+"lion: "+lion+"cow: "+cow;
        document.getElementById("result_label").style.color="rgb("+random_r+", "+random_g+", "+random_b+")";
        document.getElementById("result_count").style.color="rgb("+random_r+", "+random_g+", "+random_b+")";
    }
    img=document.getElementById("animal_image");
    if(results[0].label=="barking"){
        img.src="dog.gif";
        

    }
    else if(results[0].label=="meowing"){
        img.src="cat.gif";
        

    }
    else if(results[0].label=="mooing"){
        img.src="cow.gif";
        

    }
    else if(results[0].label=="roaring"){
        img.src="lion.gif";
        

    }
    else{
        img.src="ugh.gif";
    }
}
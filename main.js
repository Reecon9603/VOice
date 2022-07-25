function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=m15.soundClassifier('https://teachablemachine.withgoogle.com/models/Mn558ZJ1O/',modelReady);
}    


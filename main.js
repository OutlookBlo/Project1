Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach('#camera');

    let camera_button = document.querySelector("#start-camera");
    let canvas = document.querySelector("#canvas");
    
    camera_button.addEventListener('click', async function() {
        let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
     video.srcObject = stream;
 });
 
 click_button.addEventListener('click', function() {
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        let image_data_url = canvas.toDataURL('image/jpeg');
 
        // data url of the image
        console.log(image_data_url);
 });
 
 
    function take_snapshot()
    
    Webcam.snap(function(data_uri)
    {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+ data_uri +'"/>';
    
    });
    
    console.log('ml5 version:', ml5.version);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/train/image/model.json',modelLoaded);
    
    function modelLoaded()
    {
        console.log('Model loaded!')
    }
    
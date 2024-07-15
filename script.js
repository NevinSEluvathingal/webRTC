const access={
    video:true,
    audio:true,
}
let stream;
const video=document.getElementById('my-video');
const btn=document.getElementById('share').addEventListener('click',async(e)=>{
    stream=await navigator.mediaDevices.getUserMedia(access);
    const tracks=stream.getTracks();
    tracks.forEach(element => {
        console.log(element);
        
    });

});

const btn2=document.getElementById('show-video').addEventListener('click',(e)=>{
    video.srcObject=stream;
});
const btn3=document.getElementById('stop-video').addEventListener('click',(e)=>{
    const tracks=stream.getTracks();
    tracks.forEach(element => {
        element.stop();
        
    });
})
function changesize() {
    const tracks=stream.getTracks();
    const height=document.getElementById('vid-height').value;
    const width=document.getElementById('vid-width').value;
    console.log(height);
    tracks.forEach(element => {
        const constraints={
            height:height,
            width:width,
        }
        element.applyConstraints(constraints);
        
    });
};


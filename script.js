const access={
    video:true,
    audio:true,
}
let stream;
const video=document.getElementById('my-video');
const btn=document.getElementById('share').addEventListener('click',async(e)=>{
    stream=await navigator.mediaDevices.getUserMedia(access);
    console.log(stream);
    console.log(stream.getTracks());

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


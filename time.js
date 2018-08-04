

window.onload=function(){
//   document.getElementById('id01').style.display='block';
// document.getElementById('subm').onclick = function() {document.getElementById('id01').style.display = "none";}
var timout=0.25; // in min

      var start=Date.now(),r=document.getElementById('r');
     (function f(){
      var tmn=timout*60*1e3; // convert in ms from min
      var diff=Date.now()-start,ns=(((tmn-diff)/1e3)>>0),m=(ns/60)>>0,s=ns-m*60;

if ((s>-1) && (diff>1529) && diff>tmn) {outp();}
  console.log(s,ns);
  function pad() { if (m<100) {return m="0"+m}}; pad();  // if (m<10) {return m="00"+m}

if (s>-1) { r.innerHTML="Time Left:- "+"<b>"+m+"<span>"+":"+"</span>"+((''+s).length>1?'':'0')+s+"<b>";}
        
   setTimeout(f,1e3);}) ();
   }
// var ui=document.getElementById("out");
// ui.onclick=clearTimeout(myVar);diff>tmn

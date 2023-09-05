
var currentTime ;
setInterval(function (){
    var d = new Date();   
    currentTime =  formatZero (d.getHours()) + " : " + formatZero (d.getMinutes()) + " : " + formatZero (d.getSeconds() ) + "\n" 
    document.getElementById("time").value = currentTime;
    savedTime.forEach(element => {
        if(element.getHours()==d.getHours() && element.getMinutes()==d.getMinutes() && element.getSeconds()==d.getSeconds()){
            var note_a = new Audio("alarm.mp3");

            note_a.play();
            //remove item
            const index = savedTime.indexOf(element);
            savedTime.splice(index, 1);
            alarmList()
    
            
            
           
          
        }
        console.log(savedTime)
       
       
       
    });
}
, 1000)




function formatZero (num){
    return String(num).padStart(2, '0')
}


function setTimer(){
    var newAlarm=new Date();
    newAlarm.setHours(document.getElementById("hours").value) ;
    newAlarm.setMinutes(document.getElementById("min").value) ;
    newAlarm.setSeconds(document.getElementById("sec").value) ;
    console.log(newAlarm);
    savedTime.push(newAlarm);
    alarmList()
    
}
function removeAlarm(index){
    console.log(savedTime)
    savedTime.splice(index, 1);
    alarmList()
}

function alarmList(){
    
    content="<h2>Alarms</h2>";
    //console.log(typeof savedTime[0].getHours())

    for(let i=0; i<savedTime.length;i++){
        
        content+=`<span class="deleteBtn" onclick="removeAlarm()" >x</span><p> ${formatZero(savedTime[i].getHours())}
          :  ${ formatZero (savedTime[i].getMinutes())}   
          : ${formatZero (savedTime[i].getSeconds() ) }</p>` 

    }
        
    
    document.getElementById("alarms").innerHTML=content ;

}



var savedTime = [];










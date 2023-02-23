

const endDate = new Date(2023,8,21,12,10,15,100);
console.log(endDate);

function calcTime(insertDate){
    let currentDate =Date.now();
   //  console.log(currentDate);
    let transformDate = Date.parse(insertDate);
 

    let remainingTime = -(currentDate - transformDate);
    
    let msInDay = 86400000;
    let Days = Math.floor(remainingTime/msInDay);
    

    let msInHour = 3600000;
    let Hours = Math.floor((remainingTime/msInHour ) -(Days*24));
   
 

    let msInMin = 60000;
    let Min = Math.floor((remainingTime/msInMin ) -((Days*24*60) +(Hours*60) ));


    let msInSec = 1000;
    let Sec = Math.floor((remainingTime/msInSec) -((Days*24*60*60) +(Hours*60*60)+(Min*60) ));
   
   
 return {
         Days,
         Hours,
         Min,
         Sec
     }
    
 
}    
 

  function update(){
     const timeC = calcTime(endDate);

     var displayTime = '';
     for (const item in timeC){
         displayTime += (` ${item}:${timeC[item]} `);
     }
     console.log(displayTime);
     setTimeout(update, 1000);

    
  }


  update();
  



 //1s = 1000ms

 // 1min = (1000ms*60) = 60,000ms

 // 1hour = (60,000ms*60)= 3,600,000ms

 //1day = (3,600,000ms*24)= 86,400,000ms
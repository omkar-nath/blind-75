export default function isMeetingcCalenderValid(intervals:number[][]):boolean{
    if(!intervals.length)
        return false;
     const sorted=intervals.sort((a,b)=>a[0]-b[0]);

   for(let i=0;i<intervals.length;i++){
      if(i>0)
      {
         if(sorted[i][0]<sorted[i-1][1])
         return false;
      }
   }
    return true;
     
}

// Input 
const intervals=[[1,5],[5,10],[10,15]];
console.log(isMeetingcCalenderValid(intervals))

const intervals2=[[8,10],[1,3],[2,6],[15,18]];
console.log(isMeetingcCalenderValid(intervals2));

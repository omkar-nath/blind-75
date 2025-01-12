export default function maximumWaterBetweenWalls(walls:number[]):number{
    let low=0;
    let high=walls.length-1;
    let maxAns=0;
    while(low<high){
        let currentArea=Math.min(walls[low],walls[high]) * (high-low);
        maxAns=Math.max(maxAns,currentArea);
        if(walls[low]<walls[high]){
            low++;
        }
        else{
            high--;
        }
    }
    return maxAns;
}

//Test cases
const input=[1,4,2,3]

console.log(maximumWaterBetweenWalls(input))

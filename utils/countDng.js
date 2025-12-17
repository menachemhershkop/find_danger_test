import { count } from 'console';
import fs from 'fs'
export default function countDangersWord(){
    const lists =fs.readFileSync('data/TRANSCRIPTIONS.json', 'UTF-8',(err, data)=>{if (err) throw err; console.log(data)})
    const jlist =JSON.parse(lists)
    let dangerAge = []
    // console.log(jlist);
    const dangerList= ["death", "knife", "bomb", "attack"]
    jlist.forEach(call => {
        let count = 0;
        for (let i=0; i<dangerList.length;i++){
            let age = {age:call['age']}
            if (call['content'].toLowerCase().includes(dangerList[i])){
                count++
            }
        if (count>=1){
        dangerAge.push({age:call['age'], danger_word:count})}
        
        




            

    }})
return dangerAge
}

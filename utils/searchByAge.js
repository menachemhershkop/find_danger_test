import fs from 'fs'
export default function searchByAge(age){
    const lists =fs.readFileSync('data/PEOPLE.json', 'UTF-8',(err, data)=>{if (err) throw err; console.log(data)})
    const jlist =JSON.parse(lists)
    // console.log(jlist);
    let nameList = []
    jlist.forEach(person => {
        if (person.age == age){
            nameList.push(person)
        }})
        return new Promise((res, rej) =>{
            if (nameList.length>=1){
            res(nameList)
            }
        else {
            rej("No settings were found that match your search. Try something else.")
        }
    });
   
}

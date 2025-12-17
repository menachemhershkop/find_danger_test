import countDangersWord from "./countDng.js";

// export function sort(age){
//     age.forEach( => {
        
//     });    
//     return {age:age.age, denger_word:age.denger_word}
// }



export function filterAge(){
    let listAge = countDangersWord()
    let ageRisk = listAge.filter((person)=> person.age)
    console.log(ageRisk);
    
}

filterAge()
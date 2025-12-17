import fs from 'fs'
export default async function getNames() {
    fetch('https://spiestestserver.onrender.com/people')
    .then(res => res.json())
    .then(text => fs.writeFileSync('data/PEOPLE.json', JSON.stringify(text),(err)=>{if (err) throw err; console.log("File written sucessfully")}));
}


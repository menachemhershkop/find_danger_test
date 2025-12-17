import fs from 'fs'
export default async function getMassage() {
    fetch('https://spiestestserver.onrender.com/transcriptions')
    .then(res => res.json())
    .then(text => fs.writeFileSync('data/TRANSCRIPTIONS.json', JSON.stringify(text),(err)=>{if (err) throw err; console.log("File written sucessfully")}));
}

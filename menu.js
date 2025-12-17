import input from 'analiza-sync'
import readlineSync from 'readline-sync'
import getNames from './connect/getName.js';
import getMassage from './connect/getMassage.js';
import searchByName from './utils/serchByName.js';
import searchByAge from './utils/searchByAge.js';

function menu(){
    let choices = ['Get People List','Get Call Records/Transcriptions','Search People by Name','Search People by Age','Find Dangerous People']
    let index = readlineSync.keyInSelect(choices, 'Enter your action:');
    switch (index){
        case 0:
            getNames();
            break
        case 1:
            getMassage();
            break
        case 2:
            const searchName= input("Enter name for search: ")
            searchByName(searchName).then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
            break
        case 3:
            const searchAge= input("Enter age for search: ")
            searchByAge(searchAge).then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
            break
        case 4:
            console.log(5);
            break
    }
}

menu()
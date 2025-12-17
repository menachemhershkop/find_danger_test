import readlineSync from 'readline-sync'

function menu(){
    let choices = ['Get People List','Get Call Records/Transcriptions','Search People by Name','Search People by Age','Find Dangerous People']
    let index = readlineSync.keyInSelect(choices, 'Enter your action:');
    switch (index){
        case 0:
            console.log(123456);
            break
        case 1:
            console.log(2);
            break
        case 2:
            console.log(3);
            break
        case 3:
            console.log(4);
            break
        case 4:
            console.log(5);
            break
    }
}

menu()
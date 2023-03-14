// EXO 1
function myLength(a) {
    let total = 0;
    for (i in a) {
        total++
    }
    console.log(total);
}
myLength("ffffff")


// EXO 2




// EXO 1 BIS
function exo1bis(exo1bisb) {
let numberUser = parseInt(prompt("Donne un chiffre entre 1 et 3"));
    let min = 1;
    let max = 3;
    let newMathrandom = Math.random() * (max - min) + min;
    let randomnumber = Math.round(newMathrandom);
    console.log(randomnumber);
    
while (numberUser !== 3) {
    if (numberUser === 3) {
        console.log("Exact");
        break;
    }
    else if (numberUser > 3) {
        console.log("Trop haut");
        numberUser = parseInt(prompt("Trop grand"));
        
    }
    else if (numberUser < 3) {
        console.log("Trop bas");
        numberUser = parseInt(prompt("Trop petit"));
    }
    else {
        console.log("On abandonne ?");
        break;
    }

}
return exo1bisb
}
// exo1bis()


// EXO 2 BIS
function exo2bis(exo2bisb) {
    let min = 10;
    let max = 20;
    let newMathrandom = Math.random() * (max - min) + min;
    let randomnumber = Math.round(newMathrandom);
    console.log(randomnumber);
    let numberUser = parseInt(prompt("Donne un nombre entre 10 et 20"));
    while (numberUser !== randomnumber) {
        if(numberUser === randomnumber) {
            console.log("Accepter");
            break;
        }
            else if (numberUser > randomnumber) {
                console.log("Pas Accepter");
                numberUser = parseInt(prompt("Trop grand"));
                
            }
            else if (numberUser < randomnumber) {
                console.log("Pas Accepter");
                numberUser = parseInt(prompt("Trop petit"));
                
            }
            else {
                console.log("On abandonne ?");
                break;
            }
        }
        return exo2bisb
    }

    // exo2bis()

    // EXO 3

    function exo3(exo3b) {
        let numberUser = parseInt(prompt("Donne un nombre on te donne les 10 nombres suivant"));
        let dixnumber = [];
        // let addition = numberUser + 10;
        let counter = 0;
        let countermax = counter + 10;
        while (counter <= countermax) {
            ++counter;
            console.log(i);
            dixnumber.push(i);
            
        }
        console.log(dixnumber);
        return exo3b
    }
    // exo3()

    // EXO 4

    function exo4(exo4b) {
        let numberUser = parseInt(prompt("Donne un nombre on te donne les 10 nombres suivant"));
        let dixnumber = [];
        let addition = numberUser + 10;
        for (let i = numberUser + 1; i <= addition; ++i) {
            console.log(i);
            dixnumber.push(i);
            
        }
        console.log(dixnumber);
        return exo4b
    }
    // exo4()
    // EXO 5
    function exo5(exo5b){
        let numberUser = parseInt(prompt("Donne un nombre on te donne les 10 multiplication suivant"));
        let dixnumber = [];
        for(let i = 1; i <= 10; ++i) {
            i * numberUser;
            console.log(i + "*" + numberUser + "=" + i * numberUser);
            
        }
        console.log(dixnumber);
        return exo5b
    }
    // exo5()

    function exo6(exo6b){
        let numberUser = parseInt(prompt("Donne un nombre on te donne les 10 multiplication suivant"));
        let i = 1;
        let result = 0;
        while(i < numberUser) {
            
            result = i + result;
            console.log(i + "+" + result + "=" + result);
            i++;
        }
        result = result + numberUser;
        console.log(result);
        return exo6b
    }
    // exo6()

    function exo7(exo7b){
        let numberUser = parseInt(prompt("Donne un nombre on te donne les 10 multiplication suivant"));
        let i = 1;
        let result = 1;
        while(i <= numberUser) {
            
            result = i * result;
            console.log(i + "*" + result + "=" + result);
            i++;
        }
        result = result * numberUser;
        console.log(result);
        return exo7b
    }
    // exo7()

    // EXO 8
    function exo8(exo8b) {
        let i = 1;
        let array = [];
        
        while (i <= 20) {
            
            let numberUser = parseInt(prompt("Donne un nombre on te donne les 10 multiplication suivant"));
            array.push(numberUser);
            i++;
            console.log(array);
        }
        
        let max  = Math.max(...array);
        
        console.log(max);
        let position = array.indexOf(max);
        console.log(position);
        return exo8b
    }

     // EXO 9
     function exo9(exo9b) {
        
        let array = [];
        do {
            let numberUser = parseInt(prompt("Donne un nombre on te donne les 10 multiplication suivant"));
            array.push(numberUser);
            console.log(array);
            
        }
        while (numberUser !== 0)
        
        let max  = Math.max(...array);
        
        console.log(max);
        let position = array.indexOf(max);
        console.log(position);

    }
    exo9()
    

    

   
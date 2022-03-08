const display = document.getElementById('display');
const result = document.getElementById('result');
const randomNumbers =[];
const userNumbers =[];
const n =5;
const delay =30; 

function random(spectrum,start){
    return (Math.floor(Math.random()*spectrum) +start);
}

function createDisplayArray(n,array,display){
    for(let i =0; i<n;i++){
        array.push(random(100,1));
        display.innerHTML+= array[i] + ' ';
    }
    return array;
}

function askNumbers(n,userNumbers,array){
    display.innerHTML='';
    for(let i=0;i<n;i++){
        userNumbers[i]=prompt('Inserisci il '+(i+1)+'° numero');
    }
    checkNumbers(userNumbers,array,n);
}

function checkNumbers(userNumbers,array,n){
    result.innerHTML= "Hai indovinato : ";
    display.innerHTML += 'I numeri erano : '
    let counter =0;
    for(let i=0; i<n;i++){
        display.innerHTML += array[i]+' ';
        if(userNumbers[i] == array[i]){
            result.innerHTML+= userNumbers[i]+' ';
            counter++;
        }
    }
    if(counter==n){
        result.innerHTML+="<br>  Congratulazioni! Hai indovinato tutti i numeri";
    }else{
        result.innerHTML+="<br> Bravo! Hai indovinato "+counter+" numeri";
    }
}

createDisplayArray(n,randomNumbers,display);

setTimeout(askNumbers,delay*1000, n, userNumbers,randomNumbers);



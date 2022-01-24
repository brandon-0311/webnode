/*const square = function(x){
    return x * x;
}*/

/*const square = (x) =>{
    return x * x;
}*/

//const square = (x) => x * x;  

//console.log(square(50));

const event ={
    name: 'BirthDay Party',
    guessList: ['Brandon', 'John', 'Mike'],
    printGuessList(){
        console.log('Guest List for ' + this.name);

        this.guessList.forEach((guest)=>{
            console.log(guest + ' is attending ' + this.name);
        })
    }
}

event.printGuessList();
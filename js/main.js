// Hacer una lista con los compañeros de la clase para que nos empareje de forma randomen grupos, el promp nos pedirá cuantas equipos queremos hacerla

let peopleList = ['roberto', 'carlos', 'jessica', 'laura', 'tarek', 'álvaro', 'pepe', 'víctor','diego', 'javier', 'Gian', 'joan', 'fede', 'dani', 'ian', 'robert'];

let people = [];

let team = [];

let peopleInclude = [];

const randomize = () => {
    return Math.floor(Math.random() * 16);
};

const teamMaker = () => {
    for( let i = 0;  i < peopleList.length; i++) {
        let randomPerson = peopleList[randomize()];

        // console.log(randomPerson)

        while(peopleInclude.includes(randomPerson)){
            randomPerson = peopleList[randomize()]
        
            // console.log(randomPerson)
            
        };
        team.push(randomPerson)
        peopleInclude.push(randomPerson)
        
        // console.log('-------------------->',peopleInclude)    

        if(team.length == 4){
            people.push(team)
            team =[];
        };
        
    };
    console.log(people)
 
    let pepe = document.getElementById('teams')

    pepe.innerHTML = people

    return
    
}




const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

const villageGraph = createGraph(roads);

function pickRandom(array){
    let index = Math.floor(Math.random() * array.length)
    return array[index];
}

function createGraph(edges) {
    let graph = Object.create(null);

    function addEdge (from, to) {
        if (!graph[from]) 
        {
            graph[from] = [to];
        } 
        else 
        {
            graph[from].push(to);
        }
    }

    for(let [from, to] of edges.map(e => e.split("-"))){
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph
}



class VillageState {
    constructor (place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(direction)
    {
        if (!villageGraph[this.place].includes(direction))
        {
            return this
        }
        else 
        {
            let newParcels = this.parcels.map(p => {
                //Se o pacote nao estiver com o robo (this.place != p.place) nao o mova
                if (this.place == p.place) return p;
                return {place: direction, address: p.address};
            }).filter(p => p.address != direction)

            return new VillageState(direction, newParcels)
        }
    }

    //Gera um estado aleatorio da vila
    static randomVillage(parcelsCount = 5) {

        let parcels = [];
        for (let i = 0;  i < parcelsCount; i++) {
            let place = pickRandom(Object.keys(villageGraph));
            let address;
            do
            {
                address = pickRandom(Object.keys(villageGraph));
            }while(place == address);
            parcels.push({place, address});
        }

        return new VillageState("Post Office", parcels);
    }
}

function runBot(state, robot, memory)
{
    for (let turns = 0;; turns++)
    {
        if (state.parcels.length == 0)
        {
            console.log(`Done in ${turns} turns`);
            break;
        }

        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`)
    }
}

const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

function randomBot(state) {
    let direction = pickRandom(villageGraph[state.place])
    return {direction}
}

function routeBot(state, memory){
    if (!memory || memory.length == 0){
        memory = mailRoute;
    }

    return {direction: memory[0], memory: memory.slice(1)}
}

let randomVillage = VillageState.randomVillage();

runBot(randomVillage, randomBot);




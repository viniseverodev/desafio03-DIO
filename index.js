class hero {
  constructor(name, age, type){
    this.name = name
    this.age = age
    this.type = type
  }

  attack() {
    if (this.type === "Mago"){
      attack = "magia"
    }else if (this.type === "Guerreiro"){
      attack = "espada"
    }else if (this.type === "Monge"){
      attack = "artes marciais"
    }else {
      attack = "shuriken"
    }
    return attack
  }
}

let attack =  ""
let heroRepresents = new hero ("Felipão", 23, "Monge")
heroRepresents.attack()

console.log("O " + heroRepresents.type + " atacou usando " + attack)
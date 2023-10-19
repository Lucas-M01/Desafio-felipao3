function classHero(name, age, type = "guerreiro" | "mago" | "monge" | "ninja"){
    this.name = name
    this.age = age
    this.type = type

    let ataque
    
    if(type === "guerreiro"){
        ataque = "espada"
    } else if(type === "mago"){
        ataque = "magia"
    } else if(type === "monge"){
        ataque = "artes marciais"
    } else if(type === "ninja"){
        ataque = "shuriken"
    }

    this.message = `O ${type} atacou usando ${ataque}`
}

let hero1 = new classHero("Goku", 50, "guerreiro")

console.log(hero1.message)


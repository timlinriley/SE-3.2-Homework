class Cat {
  constructor(gender,color,neutered){
    this.gender = gender;
    this.color = color;
    this.neutered = neutered;
  }
  meow(){
    console.log('meow')
  }
  chaseMouse(){
    console.log('Caught a mouse!')
  }
  purr(){
    console.log('purrrr')
  }
}
const cat1 = new Cat('male','black', true)
const cat2 = new Cat('female', 'orange',true)

console.log(cat1)
console.log(cat2)

cat1.chaseMouse()
cat1.meow()
cat1.purr()
cat2.chaseMouse()
cat2.meow()
cat2.purr()

class Pirate {
  constructor(name ,shipName, leg){
    this.name = name;
    this.ship = shipName;
    this.leg = leg;
  }
  yell(){
    console.log('aarrggh')
  }
  steal(){
    console.log("we just stole you're cargo!!")
  }
  passTheRum(){
    console.log("Where's the rum matey??")
  }
}

const pirate1 = new Pirate('steve','pirate ship1', 'wooden')
const pirate2 = new Pirate('jack', 'piracy', 'wooden')
const pirate3 = new Pirate('johnny','jollyRoger', 'wooden')

let jollyRoger = [pirate1, pirate2, pirate3]
let blackPearl = [pirate3, pirate1, pirate2]

for (i = 0; i < jollyRoger.length; i++){
  console.log(jollyRoger[i])
}

for (i = 0; i < blackPearl.length; i++){
  console.log(blackPearl[i])
}
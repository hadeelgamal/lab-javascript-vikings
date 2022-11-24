// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
  }
}
let hany = new Soldier("sss", "sss");
console.log(hany.attack());

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  battleCry() {
    return "Odin Owns You All!";
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
}
let hadeel = new Viking("Hadeel", "10", "7");
hadeel.receiveDamage(3);

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

let hisham = new Saxon("5", "2");
hisham.receiveDamage(7);

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let randoSaxon =
      this.saxonArmy[this.getRandomNumber(this.saxonArmy.length)];
      console.log(this.saxonArmy);
    if (randoSaxon.health <= 0) {
      console.log(this.saxonArmy.findIndex(randoSaxon));
      this.saxonArmy.delete(randoSaxon);
    }
    return randoSaxon.receiveDamage(
      this.vikingArmy[this.getRandomNumber(this.vikingArmy.length)].strength
    );
  }
  // saxonAttack()
  // showStatus()
  getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
}

let wer = new War();
wer.addSaxon(new Saxon(5, 7));
wer.addSaxon(new Saxon(3, 6));
wer.addSaxon(new Saxon(4, 3));
wer.addSaxon(new Saxon(5, 8));

wer.addViking(new Viking("Hoo", 4, 8));
wer.addViking(new Viking("Haa", 6, 6));
wer.addViking(new Viking("Aoo", 3, 8));
wer.addViking(new Viking("Looo", 9, 7));

console.log(wer.saxonArmy[3].receiveDamage(wer.vikingArmy[2].strength));
wer.vikingAttack();

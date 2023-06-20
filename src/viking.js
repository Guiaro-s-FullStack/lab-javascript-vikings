// Soldier
class Soldier {
  constructor(health, strength) {
    this.strength = strength
    this.health = health
  }

  attack() {
    return this.strength
  }

  receiveDamage(theDamage) {
    // this.health = this.health - theDamage
    this.health -= theDamage
  }
}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}

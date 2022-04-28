let fighter = {
	name: "Arata",
	race: "Human",
	level: 1,
	proficiencyBonus: 2,
	strength: 18,
	strengthBonus: 4,
	dexterity: 14,
	constitution: 16,
	hitPoints: 13,
	armor: "Chain Mail",
	shield: true,
	armorClass: 20,
	weapon: "Greatsword",
	minDamage: 2,
	maxDamage: 12,
}

fighter.attack = function(enemy) {
	let damageRange = this.maxDamage - this.minDamage;
	let attackRoll = Math.floor(Math.random() * 20) + this.proficiencyBonus + this.strengthBonus;
}
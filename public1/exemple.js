const fs = require('fs')
let fichier = fs.readFileSync('personne.json')
let personne = JSON.parse(fichier)
console.log(personne)
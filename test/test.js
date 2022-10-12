const assert = require('assert')

//#region EXERCICE 3 

function somme(x, y) {
    if(!x) x = 0;
    if(!y) y = 0;
    if(typeof x !== 'number' || typeof y !== 'number') throw new Error('Paramètre invalide');
    return x + y;
}


describe("#somme()", function() {
    
    it("pour les valeurs de paramètre 3 et 4, devrait retourner la valeur 7", function () {
        const result = somme(3, 4);
        assert.strictEqual(result, 7)
    })

    it("pour les valeurs de paramètre 3 et rien, devrait retourner la valeur 3", function () {
        const result = somme(3);
        assert.strictEqual(result, 3, result)
    })

    it("pour les valeurs de paramètre 3 et 'test', devrait retourner l'erreur 'paramètre invalide'", function () {
        assert.throws(()  =>{ somme(3, 'test') }, Error, 'Paramètre invalide')
    })

})

//#endregion
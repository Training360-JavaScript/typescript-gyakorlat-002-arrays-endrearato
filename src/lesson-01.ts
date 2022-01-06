export default class calculator {
    // A változókat az osztályon belül így hozhatod létre.
    active: boolean = false;

    // Hozd létre a következő változókat a megfelelő típusannotációval.
    
    /** @type {Array} points - számok tömbje, 1-től 10-ig egyesével. */
    points: number[] = [1,2,3,4,5,6,7,8,9,10];

    /** 
     * A tömb minden eleme legyen egy objektum, amely egy felhasználót reprezentál.
     * Kötelező elemek: name<string>, email<string>.
     * Inicializáld a tömböt, legyen legalább két eleme.
     * @type {Array} users - minden elem egy felhasználó.
     */
    users: Array<{name: string, email: string}> = [
        {
            name: 'John Doe',
            email: 'john@doe.com'
        },
        {
            name: 'Jane Doe',
            email: 'jane@doe.com'
        }
    ];
    
    /** 
     * A tömb minden eleme legyen egy objektum, amely egy terméket reprezentál.
     * Kötelező elemek: name<string>, price<number>, stock<number>.
     * Opcionális elemek: active<boolean>.
     * Inicializáld a tömböt, legyen legalább két eleme.
     * @type {Array} products - minden elem egy termék.
     */    
    products: Array<{name: string, price: number, stock: number, active?: boolean}> = [
        {
            name: 'asztal',
            price: 1000,
            stock: 13,
            active: true
        },
        {
            name: 'szék',
            price: 500,
            stock: 42,
            active: true
        }
    ];
    
    /** 
     * Inicializálj egy tuple típust, azaz adj neki értéket is.
     * @type {Tuple} role - number, string, boolean. 
     */
    role: [number, string, boolean]
    = [10, 'tuple', true];

}

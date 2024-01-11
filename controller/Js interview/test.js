let junkFood = [
{"pizza":"Chicago Pizza"},
{"sandwich":"veg sandwich"},
{"sandwich":"veg sandwich"},
{"pizza":"Chicago Pizza"},
{"pizza":"Chicago Pizza"},
{"softdrink":"Coca cola"}
]

let uniqueJunkFood = [];
let obj = {};
for(let i = 0; i < junkFood.length; i++){
    let obj2 = junkFood[i]
    for(let key in obj2){
        if(!obj[key]){
            obj[key] = true;
            uniqueJunkFood.push({[key]: obj2[key]})
        }
    }
}
console.log('uniqueJunkFood :>> ', uniqueJunkFood);
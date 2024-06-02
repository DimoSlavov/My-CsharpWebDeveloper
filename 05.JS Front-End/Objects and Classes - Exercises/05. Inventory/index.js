function solve(object){
     const hiros =[];

     for(const heroData of object){
        let[name,level,items]=heroData.split(' / ');
        let hero = {
            name,
            level:Number(level),
            items:items
        };

        hiros.push(hero);
     }

     hiros.sort((a, b)=>a.level - b.level);

     for(const hero of hiros){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
     }
}
solve([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])
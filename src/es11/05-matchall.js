const regex = /\b(Apple)+\b/g;

const fruit ='Apple, banana, Palta, Manzana, Apple';

for(const match of fruit.matchAll(regex)){
    console.log(match);
}
const links=[];
links[0]='https://fakestoreapi.com/products/1';
links[1]='https://fakestoreapi.com/products/2';
links[2]='https://fakestoreapi.com/products/3';
links[3]='https://fakestoreapi.com/products/4';

 const items=[];
    for(let i=0;i<4;i++){
      items[i]=await fetch(links[i],{mode:'cors'})
    .then(clas=>clas.json());
    items[i]={...items[i],totalNum:0};
    }
 export const PRODUCTS=items;
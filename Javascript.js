var valeur = prompt("Entrez votre âge");

if( valeur >=18 ){
    alert("Vous êtes majeur");
} else {
    alert("Vous êtes mineur");
}


//création de la balise ul qui va englober la liste de nombre
let ul = document.createElement("ul") //creation balise html en js, la mettre dans une variable 
for(let year = 2020; year <= 2030; year++){ // Boucle de 2020 à 2030, ajout +1 à chaque liste
    let li =  document.createElement("li") //création li dans ul, dans la boucle pour avoir autant de li que d'anneé 
    li.innerText = year // dans li apparait les années
    /* Si l'année est divisible par 4
    Et n'est pas divisible par 100 ou elle est divisible par 400 Alors...
    year % 4 signifie divisible par 4
    % = modulo */
    if(year %4 ==0 && ( year % 100!=0 || year % 400 == 0)){
        li.style.color ="red"
    }
    ul.appendChild(li) // li enfant de ul
}
body.appendChild(ul); // ul enfant de body





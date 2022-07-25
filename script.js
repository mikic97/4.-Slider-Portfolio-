let menu = document.querySelector('.header ul');
let btn = document.querySelector('.button');

btn.addEventListener("click" , () => {
    if(btn.innerText === 'MENU') {       //uzeli smo btn i premenili mu ime u menu innerTextom 
        menu.style.display = 'block'; //zatim pisemo da ako je btn jednako menu da bude display block
        btn.innerText ='CLOSE'; 
           // i kad klikenmo na menu da se ispise close, da bi zatvorili
   

    }else{
        menu.style.display = 'none';      
        btn.innerText ='MENU';
        }
});

//SLIDER galerija 

let rightBtn = document.querySelector('#right-btn');      //selektujemo dugmice za slider levo i desno
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img')

let imgNum = 0;  //krecemo sa pozicije nula

rightBtn.addEventListener("click", ()=> {
    displayNone()        //ovde pozivamo funkciju koju smo dole pre toga napravili za slider
    imgNum++;            // stavljamo ++ da bi se dodala svaki put po jedna slika

    if (imgNum === pictures.length){   //ako smo dobili da je broj slika 3, merimo lengtom
                                       //onda ga vrati opet na nulu
        imgNum = 0;
    }
    pictures[imgNum].style.display = 'block';  // koja se iz none display u block
})
leftBtn.addEventListener("click", ()=> {
    displayNone();                 
    imgNum--;                      
    if (imgNum === -1){                    //-1 uvek vrati za pojednu nazad ne idi dalje od 2 
        imgNum = pictures.length - 1;
    }

    pictures[imgNum].style.display = 'block';
   });

   //zatim ovde pravimo fuknciju
   //ova funkcija krije slike
   const displayNone = () => {
       pictures.forEach((img) => {
        img.style.display ='none';
       })

   }

   // ----------PORTFOLIO---------------

//Uzimamo dugme button funkcijom i stavljamo argument zato sto u htmlu imamo THIS

const portfolioSort = (button) => {
    let category = button.getAttribute('data-category');   
    let portfolioItems = document.querySelectorAll('.portfolio-single-item');

    portfolioItems.forEach((item) => {
        item.style.display ='none';
    });

    //prikazivanje svih stavki
   if(category === 'sve') {
       portfolioItems.forEach((item) => {
            item.style.display = 'block'
       })
   } 

   //prikazivanje pojedinacnih
   portfolioItems.forEach((item) => {
       if(item.getAttribute('data-category').includes(category)) {
            item.style.display = 'block';
        }
    })

    }; 
         
    const FILTERI = ["sve", "restorani", "hoteli", "korporacije", "ostalo", "bazeni", "skijaske-staze"]     
  
    FILTERI.forEach((item) => {
     document.getElementById(item).addEventListener("click", (event) => {
            portfolioSort(event.target)
     })  
    })


    



//-------MODAL BUTTON--------

    let openmodal = document.querySelector('.modal-section button')
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    openmodal.addEventListener("click" ,()=>{
    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
    });


// zatvaramo modal 
    let closemodal = document.querySelector('.popup-modal button')
     modalWindow = document.querySelector('.popup-modal');
     overlay = document.querySelector('.overlay');
    closemodal.addEventListener("click", ()=>{ 
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
})

//------2Modal Button--------------------------------

let openmodal2 = document.querySelector('.modal-section2 button');
let modalWindow2 = document.querySelector('.popup-modal2');
let overlay2 = document.querySelector('.overlay2');

openmodal2.addEventListener("click" , () => {
    modalWindow2.style.display = 'block'
    overlay2.style.display = 'block'   
})

let closemodal2 = document.querySelector('.popup-modal2 button');
modalWindow2 = document.querySelector('.popup-modal2');
overlay2 = document.querySelector('.overlay2');


closemodal2.addEventListener("click" , () => {
modalWindow2.style.display = 'none';
overlay2.style.display = 'none';

})

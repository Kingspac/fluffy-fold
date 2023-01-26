let imgContainer = document.getElementById('img-container')

function changeBg(){
    let images = [
        'url("images (1).jpeg")',
        'url("images (2).jpeg")',
        'url("images (3).jpeg")',
        'url("images (4).jpeg")',
        'url("images (5).jpeg")',
        'url("images (6).jpeg")',
        'url("images (6).jpeg")',
        'url("images (7).jpeg")',
        'url("images (8).jpeg")',
        'url("images (9).jpeg")',
        'url("images (10).jpeg")',
        'url("images (11).jpeg")',
        
        
    ]
 let bg = images[ Math.floor( Math.random()*
    images.length)];
    imgContainer.style.backgroundImage = bg
}


setInterval(changeBg,3000 )

let menLi = document.getElementById("men-li");
let men = document.getElementById("men");


menLi.addEventListener('click', ()=> {
    men.style.display="block";
});

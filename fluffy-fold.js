let imgContainer = document.getElementById('img-container')

function changeBg(){
    let images = [
        'url("/photos/images (1).jpeg")',
        'url("/photos/images (2).jpeg")',
        'url("/photos/images (3).jpeg")',
        'url("/photos/images (4).jpeg")',
        'url("/photos/images (5).jpeg")',
        'url("/photos/images (6).jpeg")',
        'url("/photos/images (6).jpeg")',
        'url("/photos/images (7).jpeg")',
        'url("/photos/images (8).jpeg")',
        'url("/photos/images (9).jpeg")',
        'url("/photos/images (10).jpeg")',
        'url("/photos/images (11).jpeg")',
        
        
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
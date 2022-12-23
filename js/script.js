/*# Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.*/

const data = [
    { postID:1, postAuthor:'Phil Mangione', postAuthorProfilePicture:'https://unsplash.it/300/300?image=15',postDate:'12-09-2022',postImage:'https://unsplash.it/600/300?image=171',postLikes: 34,postText:"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias."},
    { postID:2, postAuthor:'Sofia Perlari', postAuthorProfilePicture:'https://unsplash.it/300/300?image=56',postDate:'10-18-2021',postLikes: 4,postText:"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias."},
    { postID:3, postAuthor:'Ronald McDonald', postDate:'12-09-2022',postImage:'https://unsplash.it/600/300?image=15',postLikes: 68,postText:"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias."},
    { postID:4, postAuthor:'Sergio Mattarella', postAuthorProfilePicture:'https://unsplash.it/300/300?image=7',postDate:'06-21-2022',postImage:'https://unsplash.it/600/300?image=51',postLikes: 3495,postText:"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias."},
    { postID:5, postAuthor:'Pippo', postDate:'09-29-2022',postLikes: 0,postText:"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias."},

]

const containerElement = document.getElementById('container');

for (let post of data){
    
    containerElement.innerHTML += `
    <div class="post">
    <div class="post__header">
    <div class="post-meta">
    <div class="post-meta__icon">
    <img class="profile-pic" src="${post.postAuthorProfilePicture}" alt="${post.postAuthor}" />
    </div>
    <div class="post-meta__data">
    <div class="post-meta__author">${post.postAuthor}</div>
    <div class="post-meta__time">${post.postDate}</div>
    </div>
    </div>
    </div>
    <div class="post__text">
    ${post.postText}
    </div>
    <div class="post__image">
    <img src="${post.postImage}" alt="" />
    </div>
    <div class="post__footer">
    <div class="likes js-likes">
    <div class="likes__cta">
    <button class="like-button js-like-button" href="#" data-postid="1">
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    <span class="like-button__label">Mi Piace</span>
    </button>
    </div>
    <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${post.postLikes}</b> persone</div>
    </div>
    </div>
    </div>`

}

const likeButtons = document.querySelectorAll('.like-button')
const likesCounter = document.querySelectorAll('.js-likes-counter')

for (let i = 0; i < likeButtons.length; i++){
    
    likeButtons[i].addEventListener('click', ()=>{
        likesCounter[i].innerHTML = ''
        likeButtons[i].classList.toggle('like-button--liked')

        if (likeButtons[i].classList.contains('like-button--liked')){
            likesCounter[i].innerHTML = data[i].postLikes+1 
        } else {likesCounter[i].innerHTML = data[i].postLikes}
    })
    console.log(likesCounter[i].innerHTML)
}

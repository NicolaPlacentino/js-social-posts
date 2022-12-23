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
    { postID:4, postAuthor:'Phil Mangione', postAuthorProfilePicture:'https://unsplash.it/300/300?image=7',postDate:'12-09-2022',postImage:'https://unsplash.it/600/300?image=51',postLikes: 3495,postText:"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias."},
    { postID:5, postAuthor:'Phil Mangione', postDate:'12-09-2022',postLikes: 0,postText:"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias."},

]

const containerElement = document.getElementById('container');

console.log(containerElement)


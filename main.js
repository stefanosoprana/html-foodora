/**********************************************/
/**********************************************/
/***** PROGETTO: FoodoraReplica - main.js **+**/
/**********************************************/
/**********************************************/
console.log('welcome to FoodoraReplica');

/*****************************/
/**********PROGRAMMA**********/
/*****************************/

$(document).ready(function() {
  $(".card").mouseenter(function() {
    $(this).addClass('active');
  });
  $(".card").mouseleave(function() {
    $(this).removeClass('active');
  });
});

/**********************************/
/*************FUNZIONI*************/
/**********************************/

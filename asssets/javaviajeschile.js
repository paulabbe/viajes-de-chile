$(document).ready(function(){


      
    $(".boton").dblclick(function(){
    $(this).on(alert("el correo fue enviado correctamente..." ))    
    })


  $('[data-bs-toggle="tooltip"]').tooltip();


$(document).scroll(function (){
    const y = $("html").scrolltop();

    y > 300 ? $("nav").addclass("nav-black") : $("nav").removeClass("nav-black")
})







})
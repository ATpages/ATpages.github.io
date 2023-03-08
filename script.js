function openItem(evt, nombreItem) {
    var i, tabcontent, tablinks;
  
    // ocultar
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // remover active
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // muestra y agrega active
    document.getElementById(nombreItem).style.display = "block";
    evt.currentTarget.className += " active";
}
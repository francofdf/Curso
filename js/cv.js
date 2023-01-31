function accion(id_div){
    document.getElementById("personales").style.display = "none";
    document.getElementById("objetivos").style.display = "none";
    document.getElementById("estudios").style.display = "none";
    document.getElementById("extras").style.display = "none";
    document.getElementById("experiencia").style.display = "none";
    document.getElementById(id_div).style.display="block";
};
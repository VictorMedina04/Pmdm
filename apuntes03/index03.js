$(document).ready(function () {

    $.ajax({
        url: "https://swapi.dev/api/people",
        method: "GET",
    }).done(function (data) {

        //JSON.parse toma texto en json q llega desde el servidor y lo transforma a un objeto
        var json = JSON.parse(data)
        //Lo q se programa aqui se ejecuta cuando se resuelve la peticion asincrona
        //Cuando me llegue la respuesta del servidor
    });
});
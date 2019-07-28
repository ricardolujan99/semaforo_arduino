/*

Esto no funciona, hay que revisar el manejo de la matriz y lograr un retardo en el en el bucle for

*/



var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {
    var rojo_s1 = new five.Led(13);
    var amarillo_s1 = new five.Led(2);
    var verde_s1 = new five.Led(3);
    var peaton_s1 = new five.Led(4);
    
    var rojo_s2 = new  five.Led(5);
    var amarillo_s2 = new five.Led(6);
    var verde_s2 = new five.Led(7);
    var peaton_s2 = new five.Led(8);
    
    var rojo_s3 = new  five.Led(9);
    var amarillo_s3 = new five.Led(10);
    var verde_s3 = new five.Led(11);
    var peaton_s3 = new five.Led(12);
    
    var rojo_s4 = new five.Led(13);
    var amarillo_s4 = new five.Led(14);
    var verde_s4 = new five.Led(15);
    var peaton_s4 = new five.Led(1);


    var mat = [
    ['on', 'off', 'off', 'off', 'off', 'off', 'on', 'off', 'off', 'off', 'on', 'off', 'off', 'off', 'on', 'off'],
    ['off', 'on', 'off', 'off', 'off', 'on', 'off', 'off', 'off', 'off', 'on', 'off', 'off', 'off', 'on', 'off' ],
    ['off', 'off', 'on', 'off', 'on', 'off', 'off', 'off', 'off', 'off', 'on', 'off', 'off', 'off', 'on', 'off' ],
    ['off', 'off', 'on', 'off', 'off', 'on', 'off', 'off', 'off', 'on', 'off', 'off', 'off', 'off', 'on', 'off' ],
    ['off', 'off', 'on', 'off', 'off', 'off', 'on', 'off', 'on', 'off', 'off', 'off', 'off', 'off', 'on', 'off' ],
    ['off', 'off', 'on', 'off', 'off', 'off', 'on', 'off', 'off', 'on', 'off', 'off', 'off', 'on', 'off', 'off' ],
    ['off', 'off', 'on', 'off', 'off', 'off', 'on', 'off', 'off', 'off', 'on', 'off', 'on', 'off', 'off', 'off' ],
    ['off', 'off', 'on', 'off', 'off', 'off', 'on', 'off', 'off', 'off', 'on', 'off', 'off', 'on', 'off', 'off' ],
    ['off', 'off', 'on', 'off', 'off', 'off', 'on', 'off', 'off', 'off', 'on', 'off', 'off', 'off', 'on', 'off' ],
    ['off', 'off', 'on', 'on', 'off', 'off', 'on', 'on', 'off', 'off', 'on', 'on', 'off', 'off', 'on', 'on' ]
];

    function semaforo_1(estado_verde,estado_amarillo,estado_rojo,estado_peaton){
        if (estado_rojo === 'on'){ 
            rojo_s1.on();
        } else {
            rojo_s1.on();
        }

        if (estado_amarillo === 'on') {
            amarillo_s1.on();
        } else {
            amarillo_s1.on();
        }
        if (estado_verde === 'on') {
            verde_s1.on();
        } else {
            verde_s1.on();
        }
        if (estado_peaton === 'on') {
            peaton_s1.on();
        } else {
            peaton_s1.on();
        }
      
    };

    function semaforo_2(estado_verde, estado_amarillo, estado_rojo, estado_peaton) {
        if (estado_rojo === 'on') {
            rojo_s2.on();
        } else {
            rojo_s2.on();
        }

        if (estado_amarillo === 'on') {
            amarillo_s2.on();
        } else {
            amarillo_s2.on();
        }
        if (estado_verde === 'on') {
            verde_s2.on();
        } else {
            verde_s2.on();
        }
        if (estado_peaton === 'on') {
            peaton_s2.on();
        } else {
            peaton_s2.on();
        }
    }; 

    function semaforo_3(estado_verde, estado_amarillo, estado_rojo, estado_peaton) {
        if (estado_rojo === 'on') {
            rojo_s3.on();
        } else {
            rojo_s3.on();
        }

        if (estado_amarillo === 'on') {
            amarillo_s3.on();
        } else {
            amarillo_s3.on();
        }
        if (estado_verde === 'on') {
            verde_s3.on();
        } else {
            verde_s3.on();
        }
        if (estado_peaton === 'on') {
            peaton_s3.on();
        } else {
            peaton_s3.on();
        }
    };

    function semaforo_4(estado_verde, estado_amarillo, estado_rojo, estado_peaton) {
        if (estado_rojo === 'on') {
            rojo_s4.on();
        } else {
            rojo_s4.on();
        }

        if (estado_amarillo === 'on') {
            amarillo_s4.on();
        } else {
            amarillo_s4.on();
        }
        if (estado_verde === 'on') {
            verde_s4.on();
        } else {
            verde_s4.on();
        }
        if (estado_peaton === 'on') {
            peaton_s4.on();
        } else {
            peaton_s4.on();
        }
    };



    function  secuencia(paso){
        semaforo_1(mat[paso, 0], mat[paso, 1], mat[paso, 2], mat[paso, 3]);
        semaforo_2(mat[paso, 4], mat[paso, 5], mat[paso, 6], mat[paso, 7]);
        semaforo_3(mat[paso, 8], mat[paso, 9], mat[paso, 10], mat[paso, 11]);
        semaforo_4(mat[paso, 12], mat[paso, 13], mat[paso, 14], mat[paso, 15]);
    }

    var retardo = 10000;
   
     setTimeout(function () {
        for (var paso = 0; paso < 10; paso++){
            secuencia(paso);
            if (paso == 9) {
                paso = 0;
            }
        }
    }, retardo);   



});

var   //variables (no se declaran con el signo $ ni con _)   
  //pueden ser LOCALES o GLOBALES (en caso de no declararse)
  //TIPOS primitivos de variable:
            //undefinid   - Debe definirse. VAriable no declarada.
            //null        - Valor nulo (objeto que todavía no existe. Sin                 dirección de memoria)
            //boolean     - Es o verdadera o falsa (0 es false - Otro                     número es true)//cadenas de texto vacias,                     tipos undefined y null cuentan como false.
            //num         - Número
                        //entero 10, decimal 3.26,octal 033, hexadecimal 0xd3,infinity divisiones por cero, nan variables no numericas
            //string      - Cadena de texto

typeof (varible);   //Sirve para SABER el tipo de valor de una variable
                    //EJEMPLO:      var inicio="lol"
                                    //console.log (typeof (inicio))
                                    Number.isInteger(33); //esta función pregunta si el parámetro es un número entero, todo lo que no sea un num entero lo devuelve como falso
function soma(a, b){
    var nota;
    nota = eval(a) + eval(b);
    document.querySelector("#res").value = nota;
}


function subtrair(a, b){
    var nota;
    nota = a - b;
    document.querySelector("#res").value = nota;
}


function multiplicar(a, b){
    var nota;
    nota = a * b;
    document.querySelector("#res").value = nota;
}


function dividir(a, b){
    var nota;
    if(b == 0){
        document.querySelector("#res").value = "ERRO! B = 0";
    }else{
        nota = a / b;
        document.querySelector("#res").value = nota;
    }
}


function potenciar(a, b){
    var fat = 0;
    while(b > 1){
        fat += (a * a);
        b--;
    }
    document.querySelector("#res").value = fat;
}


function fatorial(a){
    var fat = 1;

    for(var n = a; n > 0; n--){
        fat = fat * n;
    }

    document.querySelector("#res").value = fat;
}


function fibonacci(a){
    var fib = [];

    if(a == 0){
        return 
    }else if(a == 1){
        fib = [1]
    }else{
        fib = [1, 1]
    }

    for(var n = 2; n < a; n ++){
        fib[n] = fib[n - 1] + fib[n - 2];
    }

    document.querySelector("#res").value = fib;

}


function Euler(a){
    var Euler = 1;
    var fat = 1;

    for(var e = 1; e <= a; e++){
        fat *= e;
        Euler += 1/fat;
    }

    document.querySelector("#res").value = Euler;
    return Euler;
}


function PI(a){
    document.querySelector("#res").value =  Math.PI; 
}


function Inverter(a){
    var invertido = 0;

    invertido = 1/ a;
    document.querySelector("#res").value = invertido;
}


function Eelevado(a, b){
    var euler = Euler(a);

    var result = Math.pow(euler, b);
    document.querySelector("#res").value = result;
}


function Logaritmo(a){
    var result = 0;

    result = Math.log(a);
    document.querySelector("#res").value = result;
}


function Seno(a){
    rad = a*Math.PI / 180;
    document.querySelector("#res").value = Math.sin(rad);
}


function Cosseno(a){
    rad = a*Math.PI / 180;
    document.querySelector("#res").value = Math.cos(rad);
}


function Tangente(a){
    rad = a*Math.PI / 180;
    document.querySelector("#res").value = Math.tan(rad);
}

function Mod(a, b){
    var resp = 0;

    resp = a % b;
    document.querySelector("#res").value = resp
}


function Binario(a, base = 2){
    var total = []
    var i = 0

    while (a > base - 1){
        total[i] = a % base;
        a = Math.floor(a / base)
        i++
    }
    total[i] = a;
    total.reverse()
    total = total.join("")

    document.querySelector("#res").value = total
}


function Octal(a, base = 8){
    var total = []
    var i = 0

    while (a > base - 1){
        total[i] = a % base;
        a = Math.floor(a / base)
        i++
    }
    total[i] = a;
    total.reverse()
    total = total.join("")

    document.querySelector("#res").value = total
}


function Hexadecimal(a, base = 16){
    var total = []
    var i = 0

    while (a > base - 1){
        total[i] = a % base
        a = Math.floor(a / base)
        i++
    }
    total[i] = a;
    total.reverse()

    for(var c = 0; c< total.length; c++){
        if(total[c] == 10){
            total[c] = "a";  
        }else if(total[c] == 11){
            total[c] = "b";  
        }else if(total[c] == 12){
            total[c] = "c";  
        }else if(total[c] == 13){
            total[c] = "d";  
        }else if(total[c] == 14){
            total[c] = "e";  
        }else if(total[c] == 15){
            total[c] = "f";  
        }
    }

    total = total.join("")

    document.querySelector("#res").value = total
}


function BaseN(a, base){
    var total = []
    var i = 0

    while (a > base - 1){
        total[i] = a % base;
        a = Math.floor(a / base)
        i++
    }
    total[i] = a;
    total.reverse()
    total = total.join("")

    document.querySelector("#res").value = total

}
function rQuadrada(a){
    var resp = Math.sqrt(a)
    document.querySelector("#res").value = resp
}


function rCubica(a){
    var resp = Math.cbrt(a)
    document.querySelector("#res").value = resp
}
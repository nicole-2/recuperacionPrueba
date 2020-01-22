
class Edificio{
    constructor(pisos=20, apartamentos=10, numInquilinos = []){
        this.pisos = pisos;
        this.apartamentos = apartamentos;
        this.numInquilinos = numInquilinos;
    }
    
    ListarNum(){
        for(var i=0; i<10;i++){
            var arrayNumInquilinos = CrearNumAleatorios(1,10);
            //Con la propiedad push añade la lista creada al array numInquilinos
            this.numInquilinos.push(arrayNumInquilinos);
            console.log(this.numInquilinos);
            
        }    
    }

    ContarInquilinos(){
        var sumaInquilinos = 0;
        //A cada elemento del array numInquilinos súmalo y auméntalo en la variable sumaInquilinos
        this.numInquilinos.forEach(function(numInquilino){
            sumaInquilinos += numInquilino;
        });
        console.log(sumaInquilinos);
    }

}


function CrearNumAleatorios(min,max){
    //Devuelve un número entero con Math.floor
    //Devuelve un número aleatoro con Math.random() * (numMax), pero numMax no se incluye
    //(max-min+1) Crea el rango del "ArrayNum" cuando aumento el +min se toma en cuenta el min
    return Math.floor(Math.random()*(max-min +1) + min);
}


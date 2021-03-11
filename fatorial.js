const fatorial = (num)=>{
    const numero = num;
    let resultado=1;
    let count=1;

    while(count<=numero){
    resultado *= count;
    count++;
    }
    console.log(resultado);
    return resultado;
}

fatorial(6);
export const formatearDinero = (valor) =>{
    const formatear = new Intl.NumberFormat('en-Es',{
        style: 'currency',
        currency: 'EUR'
    })

    return formatear.format(valor)
}

export const calcular = (cantidad, plazo) =>{
    let total;

    if (cantidad < 5000) {
        total = cantidad * 1.5;
    }else if(cantidad >=5000 && cantidad <10000){
        total = cantidad * 1.25;
    }else if(cantidad >=10000 && cantidad <15000){
        total = cantidad * 1.10;
    }else{
        total = cantidad * 1.09;
    }

    if (plazo === 6) {
        total *= 1.1
    }else if(plazo=== 12){
        total *= 1.2
    }else{
        total *= 1.4
    }

    return total;
}

export const calcularMesualidad = (total, meses) => {
    return total /meses;
}
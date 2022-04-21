//alert()


buyTickets()


function buyTickets()  {
    let confirmSelection = confirm("Comprar entradas")
    selectEvent(confirmSelection)
}

function selectEvent(c) {
    if (c) {
        console.warn("-------------------------------")
        console.warn("Por favor seleccione un evento")
        console.warn("-------------------------------")
        console.log("1: INXS - Wembley Stadium")
        console.log("2: QUEEN - Wembley Stadium")
        console.log("3: DIRE STRAITS - Arco Arena")
        console.log("4: GUNS N' Roses - Waldstadion")
        console.log("5: Finalizar Operación")
        let selectEve =prompt("Seleccione el evento")

        switch(selectEve) {
            case "1":
                console.log("-------------------------------") 
                console.log("Evento Seleccionado: INXS - Wembley Stadium")
                console.log("-------------------------------")
                selectFnc()
                break;
            case "2":
                console.log("-------------------------------") 
                console.log("Evento Seleccionado: QUEEN - Wembley Stadium")
                selectFnc()
                break;
            case "3": 
                console.log("-------------------------------")
                console.log("Evento Seleccionado: DIRE STRAITS - Arco Arena")
                selectFnc()
                break;
            case "4": 
                console.log("-------------------------------")
                console.log("Evento Seleccionado: GUNS N' Roses - Waldstadion")
                selectFnc()
                break;
            case "5": 
                console.warn("-------------------------------")
                console.warn("Operación Finalizada")
                console.warn("-------------------------------")
                break;
            default:
                console.log("Selección Incorrecta")
                selectEvent(c)
                break;      
        }

    }
    else {
        console.log("Selección Invalida, por favor seleccione nuevamente")
        let dontGo = confirm("Aún quieres comprar entradas?")
        
        if (dontGo) 
            buyTickets()        
        else 
            console.warn("Operación Cancelada")
        
    }    
}

function selectFnc() {

    console.warn("-------------------------------") 
    console.warn("Seleccione la función") 
    console.warn("-------------------------------") 
    console.log("1: Miercoles 21 Septiembre 18:00Hs")
    console.log("-------------------------------") 
    console.log("2: Viernes 23 Septiembre 18:00Hs")
    console.log("-------------------------------") 
    console.log("3: Finalizar Operación")
    console.log("-------------------------------") 
    

    do {
        numero = (Number(prompt("Seleccione su función")));
       
        if(numero == 1) {
            console.log(`Opción Seleccionada: ${numero}`)       
            selectPayMethod()
        }
        else if (numero == 2) {
            console.log(`Opción Seleccionada: ${numero}`)    
            selectPayMethod()
        }
        else if (numero == 3) {
            console.clear()
            console.warn("-------------------------------")
            console.warn("Operación Finalizada")
            console.warn("-------------------------------")

        }
        else {
            console.clear()
            console.warn("-------------------------------")         
            console.warn("La opción seleccionada es incorrecta, seleccione nuevamente")
            console.warn("-------------------------------")
            selectFnc()      
        }
    }
    while (isNaN(numero))
    
}


function selectPayMethod() {
    console.warn("-------------------------------")         
    console.warn("Como desea abonar su compra?")
    console.warn("-------------------------------")
    console.log("1: Efectivo")
    console.log("2: Tarjeta de Crédito")
    console.log("3: Tarjeta de Débito")

    op = prompt("Seleccione una opción")

    switch(op) {
        case "1":
            console.log(`Usted está abonando con la opcion:${op}, Efectivo`)
            payAccepted()
            break;
        case "2":
            console.log(`Usted está abonando con la opcion:${op}, Tarjeta de Crédito`)
            payAccepted()
            break;
        case "3":
            console.log(`Usted está abonando con la opcion:${op}, Tarjeta de Débito`)
            payAccepted()
            break;

        default:
            console.clear()
            console.warn("-------------------------------")   
            console.warn("Por favor seleccione una opción correcta.")
            console.warn("-------------------------------")
            selectPayMethod()   
            break;
    }

}

function payAccepted() {
    console.warn("-------------------------------")  
    console.warn("Su pago fue aceptado, Gracias por su compra!")
    console.warn("-------------------------------")  
}
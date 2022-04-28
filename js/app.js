//alert()


buyTickets()


function buyTickets()  {
    let confirmSelection = confirm("Comprar entradas")
    selectEvent(confirmSelection)
}

function selectEvent(c) {
    
//Array de objetos
const listEvents = [{ id: 1, bandName: "INXS", place: "Wembley Stadium"},
        { id: 2, bandName: "QUEEN", place: "Wembley Stadium"},
        { id: 3, bandName: "DIRE STRAITS", place: "Arco Arena"},
        { id: 4, bandName: "GUNS N' ROSES", place: "Waldstadion"}]

    if (c) {
        console.warn("-------------------------------")
        console.warn("Por favor seleccione un evento")
        console.warn("-------------------------------")
        
        //Recorrido del Array e impresión
        for (const event of listEvents) {            
            console.log(`Opcion: ${event.id} ${event.bandName} - ${event.place}`);
        }
        
        console.log("Opción: 5 Finalizar Operación")
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
            seatSelectorQty()
        }
        else if (numero == 2) {
            console.log(`Opción Seleccionada: ${numero}`)    
            seatSelectorQty()
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

function seatSelectorQty(){
    console.warn("-------------------------------")         
    console.warn("Seleccione la cantidad de tickets")
    console.warn("-------------------------------")
    console.warn("*Maximo de entradas permitidas por operacion 8*")
    console.log("Precio:$200 por unidad, cargo de servicio por entrada 10% (del valor)")

    op = prompt("Seleccione la cantidad")

    if((op > 8) || (op < 1)) {       
            console.clear()
            console.warn("-------------------------------")         
            console.error("Seleccion incorrecta, seleccione nuevamente")
            console.warn("-------------------------------")
            seatSelectorQty()            
    } 
    selectPayMethod(op)    
}


function selectPayMethod(quantity) {
    

    let cashWallet = 2000
    let creditWallet = 3000
    let debitWallet = 1500

    let ticketValue = 200
    let ticketServiceCh = parseInt(ticketValue * 1.10) //10%
    let qtyTicket = ticketValue*quantity
    let ticketTotal = qtyTicket + ticketServiceCh

    alert(`Valor total de su compra: $${ticketTotal}, Valor de tickets: $${qtyTicket}, valor Service Charge $${ticketServiceCh}`)


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

            if (ticketTotal > cashWallet) {
                payStatus(2)            
            }
            else {
                cashWallet -= ticketTotal
                console.warn(`Su saldo actual en efectivo es:$${cashWallet}`)
                payStatus(1)
            }
                
            break;
        case "2":
            console.log(`Usted está abonando con la opcion:${op}, Tarjeta de Crédito`)
            if (ticketTotal > creditWallet) {
                payStatus(2)            
            }
            else {
                creditWallet -= ticketTotal
                console.warn(`Su saldo actual en tarjeta de crédito es:$${creditWallet}`)
                payStatus(1)
            }
                
            break;
        case "3":
            console.log(`Usted está abonando con la opcion:${op}, Tarjeta de Débito`)
            if (ticketTotal > debitWallet) {
                payStatus(2)            
            }
            else {
                debitWallet -= ticketTotal
                console.warn(`Su saldo actual en tarjeta de débito es:$${debitWallet}`)
                payStatus(1)
            }
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

function payStatus(status) {

    if (status == 1) {
        console.warn("-------------------------------")  
        console.warn("Su pago fue aceptado, Gracias por su compra!")
        console.warn("-------------------------------")  
    }
    else {
        console.error("-------------------------------")  
        console.error("Su pago fue rechazado. Fondos insuficientes.")
        console.error("-------------------------------")  
    }
}
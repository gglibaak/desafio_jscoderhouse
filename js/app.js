//alert()

//Array de objetos
const listEvents = [{ id: 1, bandName: "INXS", place: "Wembley Stadium", dayHour: "Sábado 13 Julio 16:00Hs",},
                    { id: 2, bandName: "QUEEN", place: "Wembley Stadium", dayHour: "Sábado 13 Julio 13:00Hs" },
                    { id: 3, bandName: "DIRE STRAITS", place: "Arco Arena", dayHour: "Martes 30 Junio 19:00Hs"},
                    { id: 4, bandName: "GUNS N' ROSES", place: "Waldstadion", dayHour: "Viernes 25 De Junio 17:00Hs"}]

const listFunc = [ "1 - Miercoles 21 Septiembre 18:00Hs","2 - Viernes 23 Septiembre 18:00Hs" ]
const listJson = JSON.stringify(listEvents)

localStorage.setItem("eventList", listJson)



let cashWallet = 2000
let creditWallet = 3000
let debitWallet = 1500
let ticketValue = 200


let selectEve 

buyTickets()


function buyTickets()  {
    let confirmSelection = confirm("Comprar entradas")
    selectEvent(confirmSelection)
}

function advertMessages(p) {

    advert = document.getElementById("topMsg")

    switch(p) {
        case 1:
    
            advert.innerHTML = (`<p style="color: blue; font-weight: bold;">-----Por favor seleccione un evento-----</p>`)
                                
            document.body.appendChild(advert)
            break;
       
        case 2:
            
            advert.innerHTML = (`<p style="color: red; font-weight: bold;">-----Selección Incorrecta-----</p>`)
                                
            document.body.appendChild(advert)
            break;

        case 3:
            advert.innerHTML = (`<p style="color: red; font-weight: bold">-----Operación Cancelada-----</p>`)
                                
            document.body.appendChild(advert)
            break;
        default:
            
            advert.innerHTML = (`<p style="color: red; font-weight: bold">-----ERROR-----</p>`)
                                
            document.body.appendChild(advert)
            break;
        }
}

function selectEvent(c) {
    
    

    if (c) {
          
        //Mensaje
        //advertMessages(1)
                
        
        const parseList = JSON.parse(localStorage.getItem("eventList"))
        
        //Recorrido del Array e impresión       
        for (const event of parseList) {            
                      
           let list = document.createElement("div")

           list.className = "listEvent"
           

            list.innerHTML = `
                              <p>  Opción ${event.id} </p>                              
                              <ul> 
                               <li> ${event.bandName} </li>
                               <li> ${event.dayHour} </li>
                               <li> ${event.place} </li>
                              </ul>                              
                             `
            document.body.appendChild(list)
        }
        
        console.log("Presione 5 para Finalizar Operación")
       // let selectEve =prompt("Seleccione el evento")

       const selectedOpt = document.querySelector('#formOption')

       selectedOpt.addEventListener('submit', (e)=> {
           e.preventDefault()
           
           const optionValue = document.querySelector('#option').value
           //console.log(optionValue)

           selectEve = optionValue       
              

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
                    advertMessages(2)                
                // selectEvent(c)
                    
                    break;      
            }
        })

    }
    else {
        
        console.log("Selección Invalida, por favor seleccione nuevamente")
        let dontGo = confirm("Aún quieres comprar entradas?")
        
        if (dontGo) 
            buyTickets()        
        else 
        advertMessages(3)
        
    }    
    
}

function selectFnc() {

    //Spread
    const spreadList = [...listFunc]

    //Destructuring 
    const [a, b] = spreadList

    console.warn("-------------------------------") 
    console.warn("Seleccione la función") 
    console.warn("-------------------------------") 
    console.log(a)
    console.log("-------------------------------") 
    console.log(b)
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
            seatSelectorQty()   
            break;
    }

}

function payStatus(status) {
    //Operador Ternario
    status == 1 ? console.warn("Su pago fue aceptado, Gracias por su compra!") : console.error("Su pago fue rechazado. Fondos insuficientes.")  
}
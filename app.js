
const enunciado= "Construye una lista que contenga tramos horarios, en intervalos de 30 min. Que empiece a las 8 am y termine a las 8pm O sea un cuadro con un bloque que empiece a las 8, luego 8.30, 9, 9 30.. así hasta las 8pm La empresa tiene disponibilidad de 8 motociclistas cada 30 min Cuando alguien haga click sobre una de estas cajitas debería tomar un recurso de motociclista O sea un contador que empiece en 8 y luego baje a 7, a demás de marcar la caja en verde Si el mismo usuario da click en la misma caja, debe liberar el recurso, si se encontraba en verde, debe liberar el recurso, o sea el contador nuevamente pasa de 7 a 8 Si otros usuarios han tomado a todos los motociclistas, la caja debe aparecer en color rojo y no me debe dejar tomar ese horario."
const enunciadoEng= "Build a list containing time slots, in 30 min intervals. Let it start at 8 a.m. and end at 8 p.m. That is, a table with a block that starts at 8, then 8.30, 9, 9 30... like this until 8pm The company has availability of 8 motorcyclists every 30 min When someone clicks on one of these boxes they should take a biker resource That is, a counter that starts at 8 and then goes down to 7, in addition to marking the box in green If the same user clicks on the same box, they must release the resource, if it was green, they must release the resource, that is, the counter goes from 7 to 8 again If other users have taken all the motorcyclists, the box should appear in red and it should not let me take that schedule"

const changeLeng=document.getElementById("lenguaje")
const tituloProblema = document.getElementById("titulo")
const motoLeft = document.getElementById("motoLeft")
language=document.getElementById("enunciado")   

language.textContent=enunciado


let parImpar=0

changeLeng.addEventListener('click', function(){ 
    
        parImpar++
        console.log(parImpar)
    
        let number=parImpar%2
        console.log(number)
        if(number==0){ 
            language.textContent=enunciado 
            changeLeng.innerHTML="English" 
            tituloProblema.innerHTML ="Problema 1" 
            motoLeft.innerHTML = "Motocicletas restantes"
        }  
        if(number!==0){ 
            language.textContent=enunciadoEng 
            changeLeng.innerHTML="Spanish" 
            tituloProblema.innerHTML ="Problem 1" 
            motoLeft.innerHTML ="Motorcycles left"
        }     
})



let contador = 8 

let buttons = document.querySelectorAll(".green") 

motoDisponible=document.getElementById('contarClick')

motoDisponible.textContent=contador  

buttons.forEach(function(boton){ 
    boton.addEventListener('click', function(){ 

        let el1=boton.classList.toggle("edit") 
        
        if(el1==true){ 
            contador-- 
           
        }else{ 
            contador++ 
            
        } 

        motoDisponible.textContent=contador
    
            if(contador>0 || contador < 8){ 
               boton.disabled=false 
               document.querySelectorAll(".green").forEach(e=>e.disabled=false)  
            }  
            
            if(contador===0 || contador <=0){ 
                alert("there are no more motocycles")  
        
                document.querySelectorAll(".green").forEach(e=>e.disabled=true) 
                document.querySelectorAll(".edit").forEach(e=>e.disabled=false)     
        }  
    })
})






let input = ""

let inputbtns = document.querySelectorAll('.input-btn');
let displayresult = document.getElementById('display-result')
let inputnumber = document.getElementById('input-number')

Array.from(inputbtns).forEach((ib)=>{
    ib.addEventListener('click', (e)=>{
        // console.log("clicked "+ e.target.value)
        if(e.target.value == "="){
            try{                
                displayresult.innerHTML = eval(input) 
                if(displayresult.innerHTML == "Infinity"){
                    displayresult.innerHTML = "can not divide by zero"
                }else{
                    inputnumber.value = displayresult.innerHTML
                    displayresult.innerHTML = ""
                    input = inputnumber.value
                    if(input == "undefined"){
                        inputnumber.value= ""
                        input = ""
                    }
                    inputnumber.placeholder="0"
                }           
            }catch(error){
                displayresult.innerHTML = "Error"
                inputnumber.value = ""
                inputnumber.placeholder=""
                input = ""
            }
        }else if(e.target.value == "AC"){
            inputnumber.value = ""
            displayresult.innerHTML = ""
            input = ""
            inputnumber.placeholder="0"
        }else if(e.target.value == "%"){
            displayresult.innerHTML = input/100
        }else if(e.target.value == "bs"){
            try{
                console.log(input)
                input=input.slice(0,-1)
                inputnumber.value=input
                displayresult.innerHTML = eval(input)
            }catch(error){}
        }
        else{
            try{
                input = input + e.target.value           
                
                if(input.startsWith('/') || input.startsWith('*') || input.startsWith('+') || input.startsWith('.') ){  
                    input=""                                     
                }else{
                    inputnumber.value = input    
                    displayresult.innerHTML = eval(input)   
                    if(displayresult.innerHTML == "Infinity"){
                        displayresult.innerHTML = "can not divide by zero"
                    }                 
                }

            }catch(error){}

        }

    })
})

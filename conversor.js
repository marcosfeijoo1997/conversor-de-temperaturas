
    let input=document.getElementById("input")
    let output=document.getElementById("output")
    let convertir=document.getElementById("convertir")


    input.addEventListener("focus",()=>{
        convertir.onclick=handleSelect
    })


    function handleSelect(){
        let select=document.getElementById("select")
        let selectOut=document.getElementById("selectOut")
        let selectOption=select.value;
if(selectOption==='optcelsius'){
  
    selectOut.options[0].disabled=false
    selectOut.options[1].disabled=true
    selectOut.options[2].disabled=false
    selectOut.options[3].disabled=false
    input.placeholder='C°'
    
    if (selectOut.value==='optkelvinOut')
    {
        output.value=(parseInt(input.value)+273.15).toFixed(2)+'K°'
    }
    if (selectOut.value==='optfahrenheitOut')
    {
        output.value=(parseInt(input.value)*9/5+32)+'F°'
    }
 
   
    }
    if(selectOption==='optkelvin'){
        selectOut.options[0].disabled=false
        selectOut.options[1].disabled=false
        selectOut.options[2].disabled=true
        selectOut.options[3].disabled=false
        input.placeholder='K°'

        if(selectOut.value==='optcelsiusOut'){
                output.value=(parseInt(input.value)-273.15).toFixed(2)
                input.placeholder='K°'}
            
            if(selectOut.value==='optfahrenheitOut'){
                output.value=((parseInt(input.value)-273.15)*9/5+32).toFixed(2)
                input.placeholder='K°'}
            }




            if(selectOption==='optfahrenheit'){
                selectOut.options[0].disabled=false
                selectOut.options[1].disabled=false
                selectOut.options[2].disabled=false
                selectOut.options[3].disabled=true
                input.placeholder='F°'
                if(selectOut.value==='optcelsiusOut'){
                    
                output.value=((parseInt(input.value)-32)*5/9).toFixed(2)}

                if(selectOut.value==='optkelvinOut'){
                    
                    output.value=((parseInt(input.value)-32)*5/9+273.15).toFixed(2)}
            
                   
                    }}
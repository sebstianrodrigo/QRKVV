popupWhatsApp = () => {
  
    
    let sendBtn = document.getElementById('send-btn');
  
    
    
    sendBtn.addEventListener("click", () => {
    let msg1 = document.getElementById('whats-in1').value;
    let relmsg1 = msg1.replace(/ /g,"%20");
    let msg2 = document.getElementById('whats-in2').value;
    let relmsg2 = msg2.replace(/ /g,"%20");
    let msg3 = document.getElementById('whats-in3').value;
    let relmsg3 = msg3.replace(/ /g,"%20");
       
     window.open('https://api.whatsapp.com/send/?phone=51959881159&text='+ 'Estimada Arq. Karina Villacorta quisiera una cotizacion de '+ relmsg1 +' ' + relmsg2 + ' '+ relmsg3 + '.', '_blank'); 
    
    });
  
    
  }
  
  popupWhatsApp();
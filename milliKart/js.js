let btn = document.getElementsByClassName('btn')[0]
btn.addEventListener('click',function(e){
    e.preventDefault();
    let cardNumber = document.getElementById('cardNumber').value;
    let cardDate = document.getElementById('cardDate').value;
    let cardCvv = document.getElementById('cardCvv').value;
        if(cardNumber == "" || cardDate == "" || cardCvv == ""){
           if(cardNumber == ""){
            document.getElementById('cardNumber').classList.add("is-invalid");
           }
           if(cardDate == ""){
            document.getElementById('cardDate').classList.add("is-invalid");
        }
          if(cardCvv == ""){
            document.getElementById('cardCvv').classList.add("is-invalid");
        }
        
}
    
        if(cardNumber == kart.huseyn.number && cardDate == kart.huseyn.date && cardCvv == kart.huseyn.cvv ){
            if(kart.huseyn.balance < 1){
                alert('kasib')
            }
            else{alert('emeliyyat heyata kecdi')}
        }
        else if(cardNumber == kart.ali.number && cardDate == kart.ali.date && cardCvv == kart.ali.cvv ){
            if(kart.ali.balance < 1){
                alert('kasib')
            }
            else{alert('emeliyyat heyata kecdi')}
            
        }
        else if(cardNumber == kart.cavid.number && cardDate == kart.cavid.date && cardCvv == kart.cavid.cvv ){
            if(kart.cavid.balance < 1){
                alert('kasib')
            }
            else{alert('emeliyyat heyata kecdi')}
            
        }
})
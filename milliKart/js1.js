for(let f in kart){
    if(cardName == kart[f].name && cardDate == kart[f].date && cardCvv == kart[f].cvv){
         if(kart[f].balance<1){
             alert('ugurla heyata kecdi')
         }
    }
}




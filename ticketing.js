function sectionscroll(){

var paribahanSection = document.getElementById('paribahan-section');

    paribahanSection.scrollIntoView({ behavior: 'smooth' });}

const buttons = document.querySelectorAll('.button');
let clickCount = 0;
let array = []
for(const button of buttons){
    button.addEventListener('click', function(){
      
      

        clickCount++
        if(clickCount <= 4){

            button.style.backgroundColor = '#1DD100'; 
            // left seat count
            const seat = getTextAndConvertParseIntElementById('left-seat');
            const leftSeat = seat - 1;
            setInnerTextById('left-seat', leftSeat);
        //   selectedSeat count
            const countSeat = getTextAndConvertParseIntElementById('selected-seat');
            const selectedSeat = countSeat + 1;
            setInnerTextById('selected-seat', selectedSeat);

            // append selectedSeat information
                const createDiv = document.createElement('div')
                const listIteam1 = document.createElement('p');
                listIteam1.textContent = button.innerText; 

                const listIteam2 = document.createElement('p');
                listIteam2.textContent = 'economic';

                const listIteam3 = document.createElement('p');
                 listIteam3.textContent = 550;
                 const emptyDiv = document.getElementById('empty-div');
                 

            emptyDiv.appendChild(listIteam1);
            emptyDiv.appendChild(listIteam2);
            emptyDiv.appendChild(listIteam3);

            const totalCost = getTextAndConvertParseIntElementById('total-price');
            const totalPrice = totalCost + 550;
            setInnerTextById('total-price', totalPrice);  
            setInnerTextById('grand-price', totalPrice);  
    

           }
           else{
            alert('You have selected maximum limit')
           }
       
    
          
    })}
    function hideInput(){
       const couponHide = getInputValueById('input-value');
        
        if(couponHide === 'NEW15' || couponHide === 'Couple 20' ) {
            hideId('input-div')
            
            if( couponHide === 'NEW15'){
                const costTotal = getTextAndConvertParseIntElementById('total-price');
            const CouponPrice = (costTotal * 15) / 100;
            const grandPrice = costTotal - CouponPrice; 

            setInnerTextById('grand-price',  grandPrice) 
            } 
            else{   const costTotal = getTextAndConvertParseIntElementById('total-price');
            const CouponPrice = (costTotal * 20) / 100;
            const grandPrice = costTotal - CouponPrice; 

            setInnerTextById('grand-price',  grandPrice) 

            }
        }
    else{
        alert('provide right coupon code')
    }
    }

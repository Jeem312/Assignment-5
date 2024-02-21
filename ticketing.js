function sectionscroll(){

var paribahanSection = document.getElementById('paribahan-section');

    paribahanSection.scrollIntoView({ behavior: 'smooth' });}

const buttons = document.querySelectorAll('.button');
let clickCount = 0;
for(const button of buttons){
    button.addEventListener('click', function(){
      
        clickCount++
        if(clickCount <= 4){

            button.style.backgroundColor = '#1DD100'; 
            const seat = getTextAndConvertParseIntElementById('left-seat');
            const leftSeat = seat - 1;
            setInnerTextById('left-seat', leftSeat);

            const countSeat = getTextAndConvertParseIntElementById('selected-seat');
            const selectedSeat = countSeat + 1;
            setInnerTextById('selected-seat', selectedSeat);

           }
           else{
            alert('You have selected maximum limit')
           }
          
    })
}
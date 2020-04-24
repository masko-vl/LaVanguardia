import shuffle from 'lodash.shuffle';
//import FontAwesomeClasses from './fontAwesomeClasses';
import imageTable from './images/imageTable';

//Quantity of cards that is going to have our deck
const NUMBER_OF_CARDS = 20;

export default () => {
let cards = [];

//while length of our deck is less than 20 push fontawesomeclasses 
while (cards.length < NUMBER_OF_CARDS) {

    const arrayImages = shuffle(imageTable)
    let card = {}
    console.log(arrayImages)
    arrayImages.map((image, index)=>{
        if(index < 10){
             card = {
                icon : image,
                //wasguessed is going to turn true when we find the couple of this card
                wasGuessed: false
            }
            cards.push(card);
            //we clone the card
            cards.push({...card});
        }
        return (cards)
    })

return shuffle(cards);
}}
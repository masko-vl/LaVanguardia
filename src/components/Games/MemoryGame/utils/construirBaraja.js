import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClasses';

//Quantity of cards that is going to have our deck
const NUMBER_OF_CARDS = 20;

export default () => {
const fontAwesomeClasses = FontAwesomeClasses();
let cards = [];

//while length of our deck is less than 20 push fontawesomeclasses 
while (cards.length < NUMBER_OF_CARDS) {
    const index = Math.floor(Math.random() * fontAwesomeClasses.length);
    //props of every single card
    const card = {
        icon : fontAwesomeClasses.splice(index, 1)[0],
        //wasguessed is going to turn true when we find the couple of this card
        wasGuessed: false
    }
    cards.push(card);
    //we clone the card
    cards.push({...card});
}
return shuffle(cards);
}
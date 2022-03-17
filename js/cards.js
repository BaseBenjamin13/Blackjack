
import aceInput from "../js/game.js";



//got ca.. from https://boardgames.stackexchange.com/questions/51426/where-can-i-download-high-quality-images-of-poker-cards
export let deckOfCards = [
    //2's
    {name: '2', suit: 'Hearts', num: 2, img: '../../PNG-cards-1.3/2_of_hearts.png'},
    {name: '2', suit: 'Clubs', num: 2, img: '../../PNG-cards-1.3/2_of_clubs.png'},
    {name: '2', suit: 'Diamonds', num: 2, img: '../../PNG-cards-1.3/2_of_diamonds.png'},
    {name: '2', suit: 'Spades', num: 2, img: '../../PNG-cards-1.3/2_of_Spades.png'},
    //3's
    {name: '3', suit: 'Hearts', num: 3, img: '../../PNG-cards-1.3/3_of_hearts.png'},
    {name: '3', suit: 'Clubs', num: 3, img: '../../PNG-cards-1.3/3_of_clubs.png'},
    {name: '3', suit: 'Diamonds', num: 3, img: '../../PNG-cards-1.3/3_of_diamonds.png'},
    {name: '3', suit: 'Spades', num: 3, img: '../../PNG-cards-1.3/3_of_Spades.png'},
    //4's
    {name: '4', suit: 'Hearts', num: 4, img: '../../PNG-cards-1.3/4_of_hearts.png'},
    {name: '4', suit: 'Clubs', num: 4, img: '../../PNG-cards-1.3/4_of_clubs.png'},
    {name: '4', suit: 'Diamonds', num: 4, img: '../../PNG-cards-1.3/4_of_diamonds.png'},
    {name: '4', suit: 'Spades', num: 4, img: '../../PNG-cards-1.3/4_of_spades.png'},
    //5's
    {name: '5', suit: 'Hearts', num: 5, img: '../../PNG-cards-1.3/5_of_hearts.png'},
    {name: '5', suit: 'Clubs', num: 5, img: '../../PNG-cards-1.3/5_of_clubs.png'},
    {name: '5', suit: 'Diamonds', num: 5, img: '../../PNG-cards-1.3/5_of_diamonds.png'},
    {name: '5', suit: 'Spades', num: 5, img: '../../PNG-cards-1.3/5_of_spades.png'},
    //6's
    {name: '6', suit: 'Hearts', num: 6, img: '../../PNG-cards-1.3/6_of_hearts.png'},
    {name: '6', suit: 'Clubs', num: 6, img: '../../PNG-cards-1.3/6_of_clubs.png'},
    {name: '6', suit: 'Diamonds', num: 6, img: '../../PNG-cards-1.3/6_of_diamonds.png'},
    {name: '6', suit: 'Spades', num: 6, img: '../../PNG-cards-1.3/6_of_spades.png'},
    //7's
    {name: '7', suit: 'Hearts', num: 7, img: '../../PNG-cards-1.3/7_of_hearts.png'},
    {name: '7', suit: 'Clubs', num: 7, img: '../../PNG-cards-1.3/7_of_clubs.png'},
    {name: '7', suit: 'Diamonds', num: 7, img: '../../PNG-cards-1.3/7_of_diamonds.png'},
    {name: '7', suit: 'Spades', num: 7, img: '../../PNG-cards-1.3/7_of_spades.png'},
    //8's
    {name: '8', suit: 'Hearts', num: 8, img: '../../PNG-cards-1.3/8_of_hearts.png'},
    {name: '8', suit: 'Clubs', num: 8, img: '../../PNG-cards-1.3/8_of_clubs.png'},
    {name: '8', suit: 'Diamonds', num: 8, img: '../../PNG-cards-1.3/8_of_diamonds.png'},
    {name: '8', suit: 'Spades', num: 8, img: '../../PNG-cards-1.3/8_of_spades.png'},
    //9's
    {name: '9', suit: 'Hearts', num: 9, img: '../../PNG-cards-1.3/9_of_hearts.png'},
    {name: '9', suit: 'Clubs', num: 9, img: '../../PNG-cards-1.3/9_of_clubs.png'},
    {name: '9', suit: 'Diamonds', num: 9, img: '../../PNG-cards-1.3/9_of_diamonds.png'},
    {name: '9', suit: 'Spades', num: 9, img: '../../PNG-cards-1.3/9_of_spades.png'},
    //10's
    {name: '10', suit: 'Hearts', num: 10, img: '../../PNG-cards-1.3/10_of_hearts.png'}, 
    {name: '10', suit: 'Clubs', num: 10, img: '../../PNG-cards-1.3/10_of_clubs.png'},
    {name: '10', suit: 'Diamonds', num: 10, img: '../../PNG-cards-1.3/10_of_diamonds.png'},
    {name: '10', suit: 'Spades', num: 10, img: '../../PNG-cards-1.3/10_of_spades.png'},
    //jack's
    {name: 'Jack', suit: 'Hearts', num: 10, img: '../../PNG-cards-1.3/jack_of_hearts.png'},
    {name: 'Jack', suit: 'Clubs', num: 10, img: '../../PNG-cards-1.3/jack_of_clubs.png'},
    {name: 'Jack', suit: 'Diamonds', num: 10, img: '../../PNG-cards-1.3/jack_of_diamonds.png'},
    {name: 'Jack', suit: 'Spades', num: 10, img: '../../PNG-cards-1.3/jack_of_spades.png'},
    //Queen's
    {name: 'Queen', suit: 'Hearts', num: 10, img: '../../PNG-cards-1.3/queen_of_hearts.png'},
    {name: 'Queen', suit: 'Clubs', num: 10, img: '../../PNG-cards-1.3/queen_of_clubs.png'},
    {name: 'Queen', suit: 'Diamonds', num: 10, img: '../../PNG-cards-1.3/queen_of_diamonds.png'},
    {name: 'Queen', suit: 'Spades', num: 10, img: '../../PNG-cards-1.3/queen_of_spades.png'},
    //King's
    {name: 'King', suit: 'Hearts', num: 10, img: '../../PNG-cards-1.3/king_of_hearts.png'},
    {name: 'King', suit: 'Clubs', num: 10, img: '../../PNG-cards-1.3/king_of_clubs.png'},
    {name: 'King', suit: 'Diamonds', num: 10, img: '../../PNG-cards-1.3/king_of_diamonds.png'},
    {name: 'King', suit: 'Spades', num: 10, img: '../../PNG-cards-1.3/king_of_spades.png'},
    //ace's
    {name: 'Ace', suit: 'Hearts', num: aceInput, img: '../../PNG-cards-1.3/ace_of_hearts.png'},
    {name: 'Ace', suit: 'Clubs', num: aceInput, img: '../../PNG-cards-1.3/ace_of_clubs.png'},
    {name: 'Ace', suit: 'Diamonds', num: aceInput, img: '../../PNG-cards-1.3/ace_of_diamonds.png'},
    {name: 'Ace', suit: 'Spades', num: aceInput, img: '../../PNG-cards-1.3/ace_of_spades.png'},
];









export let dealersDeckOfCards11 = [
    //2's
    {name: '2', suit: 'Hearts', num: 2, img: '../../PNG-cards-1.3/2_of_hearts.png'},
    {name: '2', suit: 'Clubs', num: 2, img: '../../PNG-cards-1.3/2_of_clubs.png'},
    {name: '2', suit: 'Diamonds', num: 2, img: '../../PNG-cards-1.3/2_of_diamonds.png'},
    {name: '2', suit: 'Spades', num: 2, img: '../../PNG-cards-1.3/2_of_Spades.png'},
    //3's
    {name: '3', suit: 'Hearts', num: 3, img: '../../PNG-cards-1.3/3_of_hearts.png'},
    {name: '3', suit: 'Clubs', num: 3, img: '../../PNG-cards-1.3/3_of_clubs.png'},
    {name: '3', suit: 'Diamonds', num: 3, img: '../../PNG-cards-1.3/3_of_diamonds.png'},
    {name: '3', suit: 'Spades', num: 3, img: '../../PNG-cards-1.3/3_of_Spades.png'},
    //4's
    {name: '4', suit: 'Hearts', num: 4, img: '../../PNG-cards-1.3/4_of_hearts.png'},
    {name: '4', suit: 'Clubs', num: 4, img: '../../PNG-cards-1.3/4_of_clubs.png'},
    {name: '4', suit: 'Diamonds', num: 4, img: '../../PNG-cards-1.3/4_of_diamonds.png'},
    {name: '4', suit: 'Spades', num: 4, img: '../../PNG-cards-1.3/4_of_spades.png'},
    //5's
    {name: '5', suit: 'Hearts', num: 5, img: '../../PNG-cards-1.3/5_of_hearts.png'},
    {name: '5', suit: 'Clubs', num: 5, img: '../../PNG-cards-1.3/5_of_clubs.png'},
    {name: '5', suit: 'Diamonds', num: 5, img: '../../PNG-cards-1.3/5_of_diamonds.png'},
    {name: '5', suit: 'Spades', num: 5, img: '../../PNG-cards-1.3/5_of_spades.png'},
    //6's
    {name: '6', suit: 'Hearts', num: 6, img: '../../PNG-cards-1.3/6_of_hearts.png'},
    {name: '6', suit: 'Clubs', num: 6, img: '../../PNG-cards-1.3/6_of_clubs.png'},
    {name: '6', suit: 'Diamonds', num: 6, img: '../../PNG-cards-1.3/6_of_diamonds.png'},
    {name: '6', suit: 'Spades', num: 6, img: '../../PNG-cards-1.3/6_of_spades.png'},
    //7's
    {name: '7', suit: 'Hearts', num: 7, img: '../../PNG-cards-1.3/7_of_hearts.png'},
    {name: '7', suit: 'Clubs', num: 7, img: '../../PNG-cards-1.3/7_of_clubs.png'},
    {name: '7', suit: 'Diamonds', num: 7, img: '../../PNG-cards-1.3/7_of_diamonds.png'},
    {name: '7', suit: 'Spades', num: 7, img: '../../PNG-cards-1.3/7_of_spades.png'},
    //8's
    {name: '8', suit: 'Hearts', num: 8, img: '../../PNG-cards-1.3/8_of_hearts.png'},
    {name: '8', suit: 'Clubs', num: 8, img: '../../PNG-cards-1.3/8_of_clubs.png'},
    {name: '8', suit: 'Diamonds', num: 8, img: '../../PNG-cards-1.3/8_of_diamonds.png'},
    {name: '8', suit: 'Spades', num: 8, img: '../../PNG-cards-1.3/8_of_spades.png'},
    //9's
    {name: '9', suit: 'Hearts', num: 9, img: '../../PNG-cards-1.3/9_of_hearts.png'},
    {name: '9', suit: 'Clubs', num: 9, img: '../../PNG-cards-1.3/9_of_clubs.png'},
    {name: '9', suit: 'Diamonds', num: 9, img: '../../PNG-cards-1.3/9_of_diamonds.png'},
    {name: '9', suit: 'Spades', num: 9, img: '../../PNG-cards-1.3/9_of_spades.png'},
    //10's
    {name: '10', suit: 'Hearts', num: 10, img: '../../PNG-cards-1.3/10_of_hearts.png'}, 
    {name: '10', suit: 'Clubs', num: 10, img: '../../PNG-cards-1.3/10_of_clubs.png'},
    {name: '10', suit: 'Diamonds', num: 10, img: '../../PNG-cards-1.3/10_of_diamonds.png'},
    {name: '10', suit: 'Spades', num: 10, img: '../../PNG-cards-1.3/10_of_spades.png'},
    //jack's
    {name: 'Jack', suit: 'Hearts', num: 10, img: '../../PNG-cards-1.3/jack_of_hearts.png'},
    {name: 'Jack', suit: 'Clubs', num: 10, img: '../../PNG-cards-1.3/jack_of_clubs.png'},
    {name: 'Jack', suit: 'Diamonds', num: 10, img: '../../PNG-cards-1.3/jack_of_diamonds.png'},
    {name: 'Jack', suit: 'Spades', num: 10, img: '../../PNG-cards-1.3/jack_of_spades.png'},
    //Queen's
    {name: 'Queen', suit: 'Hearts', num: 10, img: '../../PNG-cards-1.3/queen_of_hearts.png'},
    {name: 'Queen', suit: 'Clubs', num: 10, img: '../../PNG-cards-1.3/queen_of_clubs.png'},
    {name: 'Queen', suit: 'Diamonds', num: 10, img: '../../PNG-cards-1.3/queen_of_diamonds.png'},
    {name: 'Queen', suit: 'Spades', num: 10, img: '../../PNG-cards-1.3/queen_of_spades.png'},
    //King's
    {name: 'King', suit: 'Hearts', num: 10, img: '../../PNG-cards-1.3/king_of_hearts.png'},
    {name: 'King', suit: 'Clubs', num: 10, img: '../../PNG-cards-1.3/king_of_clubs.png'},
    {name: 'King', suit: 'Diamonds', num: 10, img: '../../PNG-cards-1.3/king_of_diamonds.png'},
    {name: 'King', suit: 'Spades', num: 10, img: '../../PNG-cards-1.3/king_of_spades.png'},
    //ace's
    {name: 'Ace', suit: 'Hearts', num: 11, img: '../../PNG-cards-1.3/ace_of_hearts.png'},
    {name: 'Ace', suit: 'Clubs', num: 11, img: '../../PNG-cards-1.3/ace_of_clubs.png'},
    {name: 'Ace', suit: 'Diamonds', num: 11, img: '../../PNG-cards-1.3/ace_of_diamonds.png'},
    {name: 'Ace', suit: 'Spades', num: 11, img: '../../PNG-cards-1.3/ace_of_spades.png'},
];












export let dealersDeckOfCards1 = [
    //2's
    {name: '2', suit: 'Hearts', num: 2, img: '../../PNG-cards-1.3/2_of_hearts.png'},
    {name: '2', suit: 'Clubs', num: 2, img: '../../PNG-cards-1.3/2_of_clubs.png'},
    {name: '2', suit: 'Diamonds', num: 2, img: '../../PNG-cards-1.3/2_of_diamonds.png'},
    {name: '2', suit: 'Spades', num: 2, img: '../../PNG-cards-1.3/2_of_Spades.png'},
    //3's
    {name: '3', suit: 'Hearts', num: 3, img: '../../PNG-cards-1.3/3_of_hearts.png'},
    {name: '3', suit: 'Clubs', num: 3, img: '../../PNG-cards-1.3/3_of_clubs.png'},
    {name: '3', suit: 'Diamonds', num: 3, img: '../../PNG-cards-1.3/3_of_diamonds.png'},
    {name: '3', suit: 'Spades', num: 3, img: '../../PNG-cards-1.3/3_of_Spades.png'},
    //4's
    {name: '4', suit: 'Hearts', num: 4, img: '../../PNG-cards-1.3/4_of_hearts.png'},
    {name: '4', suit: 'Clubs', num: 4, img: '../../PNG-cards-1.3/4_of_clubs.png'},
    {name: '4', suit: 'Diamonds', num: 4, img: '../../PNG-cards-1.3/4_of_diamonds.png'},
    {name: '4', suit: 'Spades', num: 4, img: '../../PNG-cards-1.3/4_of_spades.png'},
    //5's
    {name: '5', suit: 'Hearts', num: 5, img: '../../PNG-cards-1.3/5_of_hearts.png'},
    {name: '5', suit: 'Clubs', num: 5, img: '../../PNG-cards-1.3/5_of_clubs.png'},
    {name: '5', suit: 'Diamonds', num: 5, img: '../../PNG-cards-1.3/5_of_diamonds.png'},
    {name: '5', suit: 'Spades', num: 5, img: '../../PNG-cards-1.3/5_of_spades.png'},
    //6's
    {name: '6', suit: 'Hearts', num: 6, img: '../../PNG-cards-1.3/6_of_hearts.png'},
    {name: '6', suit: 'Clubs', num: 6, img: '../../PNG-cards-1.3/6_of_clubs.png'},
    {name: '6', suit: 'Diamonds', num: 6, img: '../../PNG-cards-1.3/6_of_diamonds.png'},
    {name: '6', suit: 'Spades', num: 6, img: '../../PNG-cards-1.3/6_of_spades.png'},
    //7's
    {name: '7', suit: 'Hearts', num: 7, img: '../../PNG-cards-1.3/7_of_hearts.png'},
    {name: '7', suit: 'Clubs', num: 7, img: '../../PNG-cards-1.3/7_of_clubs.png'},
    {name: '7', suit: 'Diamonds', num: 7, img: '../../PNG-cards-1.3/7_of_diamonds.png'},
    {name: '7', suit: 'Spades', num: 7, img: '../../PNG-cards-1.3/7_of_spades.png'},
    //8's
    {name: '8', suit: 'Hearts', num: 8, img: '../../PNG-cards-1.3/8_of_hearts.png'},
    {name: '8', suit: 'Clubs', num: 8, img: '../../PNG-cards-1.3/8_of_clubs.png'},
    {name: '8', suit: 'Diamonds', num: 8, img: '../../PNG-cards-1.3/8_of_diamonds.png'},
    {name: '8', suit: 'Spades', num: 8, img: '../../PNG-cards-1.3/8_of_spades.png'},
    //9's
    {name: '9', suit: 'Hearts', num: 9, img: '../../PNG-cards-1.3/9_of_hearts.png'},
    {name: '9', suit: 'Clubs', num: 9, img: '../../PNG-cards-1.3/9_of_clubs.png'},
    {name: '9', suit: 'Diamonds', num: 9, img: '../../PNG-cards-1.3/9_of_diamonds.png'},
    {name: '9', suit: 'Spades', num: 9, img: '../../PNG-cards-1.3/9_of_spades.png'},
    //10's
    {name: '10', suit: 'Hearts', num: 10, img: '../../PNG-cards-1.3/10_of_hearts.png'}, 
    {name: '10', suit: 'Clubs', num: 10, img: '../../PNG-cards-1.3/10_of_clubs.png'},
    {name: '10', suit: 'Diamonds', num: 10, img: '../../PNG-cards-1.3/10_of_diamonds.png'},
    {name: '10', suit: 'Spades', num: 10, img: '../../PNG-cards-1.3/10_of_spades.png'},
    //jack's
    {name: 'Jack', suit: 'Hearts', num: 10, img: '../../PNG-cards-1.3/jack_of_hearts.png'},
    {name: 'Jack', suit: 'Clubs', num: 10, img: '../../PNG-cards-1.3/jack_of_clubs.png'},
    {name: 'Jack', suit: 'Diamonds', num: 10, img: '../../PNG-cards-1.3/jack_of_diamonds.png'},
    {name: 'Jack', suit: 'Spades', num: 10, img: '../../PNG-cards-1.3/jack_of_spades.png'},
    //Queen's
    {name: 'Queen', suit: 'Hearts', num: 10, img: '../../PNG-cards-1.3/queen_of_hearts.png'},
    {name: 'Queen', suit: 'Clubs', num: 10, img: '../../PNG-cards-1.3/queen_of_clubs.png'},
    {name: 'Queen', suit: 'Diamonds', num: 10, img: '../../PNG-cards-1.3/queen_of_diamonds.png'},
    {name: 'Queen', suit: 'Spades', num: 10, img: '../../PNG-cards-1.3/queen_of_spades.png'},
    //King's
    {name: 'King', suit: 'Hearts', num: 10, img: '../../PNG-cards-1.3/king_of_hearts.png'},
    {name: 'King', suit: 'Clubs', num: 10, img: '../../PNG-cards-1.3/king_of_clubs.png'},
    {name: 'King', suit: 'Diamonds', num: 10, img: '../../PNG-cards-1.3/king_of_diamonds.png'},
    {name: 'King', suit: 'Spades', num: 10, img: '../../PNG-cards-1.3/king_of_spades.png'},
    //ace's
    {name: 'Ace', suit: 'Hearts', num: 1, img: '../../PNG-cards-1.3/ace_of_hearts.png'},
    {name: 'Ace', suit: 'Clubs', num: 1, img: '../../PNG-cards-1.3/ace_of_clubs.png'},
    {name: 'Ace', suit: 'Diamonds', num: 1, img: '../../PNG-cards-1.3/ace_of_diamonds.png'},
    {name: 'Ace', suit: 'Spades', num: 1, img: '../../PNG-cards-1.3/ace_of_spades.png'},
];

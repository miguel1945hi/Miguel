import react, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
  // |>>Estilos |>>>Botão |>>Alerta
const CELL_SIZE = 20; //Tamanho de cada célula do grid
const GRID_SIZE = 15; //Defineo grid 15x15
  //Posição inicial do personagem 
const INITIAL_SNAKE = [{x:7, y:7}];
  //Direção inicial do personagem (subindo)
const [INITIAL_DIRECTION = {x:0, y:-1};
export default function SnakeGame() {
  //Estado que guarda a posição de células do Snake 
 const [snake , setSnake] = useState(INITIAL_SNAKE);
  //estado que guarda a direção que a Snake está indo 
 const [direction, setDirection] = useState(INITIAL_DIRECTION); 
  //estado que verifica se o jogo acabou
 const [isGameOver, setIsGameOver] = useState(false);
  //referência irá armazenar o intervalo de tempo que a Snake se move
 const moveInterval = useRef(null); 
  //função de movimento do Snake 
 function moveSnake(){
   SetSnake(prev => {
    const newHead ={
    x: prev[0] x + direction x,
    y: prev[0] y + direction y, 
    };
    //verifica se a cabeça bateu nas bordas
    //ou se bateu no próprio corpo 

if ( 
    newHead x < 0 || newHead x >= GRID_SIZE ||
    //colisão na parede direita ou esquerda 
    newHead y < 0 || newHead y >= GRID_SIZE ||
    //colisão na parede superior ou inferior 
  prev some(segment => segment x === newHead x && segment y === newHead y)){
       setIsGameOver(true);
       clearInterval(moveInterval current);
       Alert alert('Fim de jogo'; 'Você bateu!')
       return prev;
    };


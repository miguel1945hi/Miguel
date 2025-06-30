import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
  //               |>>Estilos    |>>>Botão     |>> Alerta
const CELL_SIZE = 20; // Tamanho de cada célula do grid
const GRID_SIZE = 15; // Define o grid 15x15
  // Posição inicial do personagem 
const INITIAL_SNAKE = [{ x:7, y:7 }];
  // Direção inicial do personagem (subindo)
const INITIAL_DIRECTION = { x: 0 , y: -1 };
export default function SnakeGame(){
  // Estado que guarda a posição de células do Snake 
 const [snake , setSnake] = useState(INITIAL_SNAKE);
  // Estado que guarda a direção que a Snake está indo 
 const [direction, setDirection] = useState(INITIAL_DIRECTION); 
  // Estado que verifica se o jogo acabou
 const [isGameOver, setIsGameOver] = useState(false);
  // Referência irá armazenar o intervalo de tempo que a Snake se move
 const moveInterval = useRef(null); 
  //Função de movimento do Snake 
 function moveSnake(){
   setSnake(prev => {
    const newHead ={
    x: prev[0].x + direction.x,
    y: prev[0].y + direction.y, 
    };
    // Verifica se a cabeça bateu nas bordas
    // ou se bateu no próprio corpo 
    if ( 
       newHead.x <0 || newHead.x >= GRID_SIZE || // Colisão na parede direita ou esquerda
       newHead.y < 0 || newHead.y >= GRID_SIZE || // Colisão na parede superior ou inferior
       prev.some(segment => segment.x === newHead.x && segment.y === newHead.y)){
           setIsGameOver(true);
           clearInterval(moveInterval.current);
           Alert.alert('Fim de jogo', 'Você bateu!')
           return prev; // Retorna o estado atual
       };
      // criar uma nova array da cobrinha, com a nova cabeça na frente 
      const newSnake = [newHead, ...prev];
      // Remove o último elemento, para ela só crescer comendo 
      newSnake.pop();
      //Atualiza a cobrinha com a nova posição dela
      return newSnake; 
     });
} 

// Criar o loop do jogo principal
useEffect (() => { 
    moveInterval.current = setInterval(() => {
        if( ! isGameOver) moveSnake(); // Move a snake
    },200) //se move a cada 200ms

    //limpar o intervalo se a direção mudar
    return () => clearInterval(moveInterval.current); 
}, [direction]);
const renderCell = (x,y) => {
//verifica se a posição é a mesma da cobrinha 
 const issSnake = snake.some(cell =)

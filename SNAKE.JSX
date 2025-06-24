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
 const [isGameOver, setIsGameOver]


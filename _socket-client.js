const io = require('socket.io-client');

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTNlNmQwM2M5MWEyMWE1ZjZlYjFjMGYiLCJqdGkiOiJhYzcwMzkwNGVhNmIyZDM1OTc1MDkwMDdmOTVjOTEwZSIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2OTg1ODk5NTUsImV4cCI6MTY5ODY3NjM1NX0.fFN2-3Xg7e9Aw5N0-BoyTtx11oEfBEKXTg-oEfQegX8';

// Подключение к серверу WebSocket
const socket = io('https://33a3-77-222-97-144.ngrok-free.app/chats', {
  extraHeaders: {
    Authorization: `Bearer ${token}`,
  },
  transportOptions: {
    polling: {
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    },
  },
});

// Обработчик успешного подключения
socket.on('connect', () => {
  console.log('Connected to the server.');

  // Запрос всех чатов после установления соединения
  socket.emit('getAllChats');
});

// Обработчик события 'chatsList', получение списка всех чатов
socket.on('chatsList', (chats) => {
  console.log('Чат пользователя:', chats);
});

// Обработчик события 'newChat', который будет вызван при создании нового чата
socket.on('newChat', (chat) => {
  console.log('Received newChat event:', chat);
});

// Обработчик ошибок авторизации
socket.on('authError', (errorMessage) => {
  console.error('Error auth:', errorMessage);
});

// Обработчик ошибок авторизации
socket.on('Error', (errorMessage) => {
  console.error('Error received:', errorMessage);
});

// // Создание нового чата
// socket.emit(
//   'chat',
//   {
//     sender: 'ID_PROFILE',
//     recipient: 'ID_recipient',
//     message: 'Hello, World!',
//   },
//   (response) => {
//     console.log('Chat created:', response);
//   },
// );

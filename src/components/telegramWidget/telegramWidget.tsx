import { useEffect } from 'react';

declare global {
  interface Window {
    onTelegramAuth?: (user: IUser) => void; // Объявите тип для функции onTelegramAuth
  }
}

interface IUser {
  auth_date: number;
  first_name: string;
  hash: string;
  id: number;
  username: string;
}

function TelegramWidget() {
  // Функция для обработки аутентификации Telegram
  async function onTelegramAuth(user: IUser) {
    try {
      const response = await fetch('http://localhost:3001/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    // Добавьте функцию onTelegramAuth в глобальный объект window, чтобы скрипт Telegram мог ее найти
    window.onTelegramAuth = onTelegramAuth;

    // Создайте и добавьте скрипт Telegram на страницу
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.dataset.telegramLogin = 'botKits_coral_bot';
    script.dataset.size = 'large';
    script.dataset.onauth = 'onTelegramAuth(user)';
    document.body.appendChild(script);

    // Удалите скрипт и функцию onTelegramAuth, когда компонент будет размонтирован
    // Удалите скрипт и функцию onTelegramAuth, когда компонент будет размонтирован
    return () => {
      document.body.removeChild(script);
      if (window.onTelegramAuth) {
        // Проверьте, существует ли свойство перед его удалением
        delete window.onTelegramAuth;
      }
    };
  }, []); // Пустой массив зависимостей гарантирует, что этот useEffect будет выполнен только один раз

  return null; // Этот компонент не рендерит ничего видимого
}

export default TelegramWidget;

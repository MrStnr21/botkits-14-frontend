import React, { useEffect } from 'react';

const TelegramLoginWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute('data-telegram-login', "botKits_coral_bot");
    script.setAttribute('data-size', "large");
    script.setAttribute('data-auth-url', "https://botkits.nomoreparties.co/telegram");
    script.setAttribute('data-request-access', "write");
    document.body.appendChild(script);

    // При удалении компонента, удалите скрипт
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return <div id="telegram-login-widget"></div>;
}

export default TelegramLoginWidget;

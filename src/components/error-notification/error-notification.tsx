import styles from './error-notification.module.scss';

function ErrorNotification() {
  return (
    <div className={styles.container}>
      <p>Произошла ошибка, попробуйте позже</p>
    </div>
  );
}

export default ErrorNotification;

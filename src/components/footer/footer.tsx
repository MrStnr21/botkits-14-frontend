import stylesFooter from './footer.module.scss';

function Footer() {
  return (
    <footer className={stylesFooter.footer}>
      <p className={stylesFooter.text}>&copy; 2023 BotKits</p>
    </footer>
  );
}

export default Footer;

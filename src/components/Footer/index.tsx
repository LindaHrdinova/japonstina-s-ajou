import './styleFooter.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <span>
        <a href="." className="footer_link">
          JAPONŠTINA S ÁJOU
        </a>
      </span>
      <span>
        <a href="obchodni-podminky">Obchodní podmínky</a>
      </span>
    </footer>
  );
};

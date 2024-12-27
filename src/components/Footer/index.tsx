import './styleFooter.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <span className="leftText">
        <a href="." className="footer_link">
          JAPONŠTINA S ÁJOU
        </a>
      </span>
      <span className="rightText">
        <a href="obchodni-podminky" className="footer_link">
          Obchodní podmínky
        </a>
      </span>
    </footer>
  );
};

import './styleInstagram.css';

export const Instragram: React.FC = () => {
  return (
    <>
      <div className="instagram">
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        <iframe
          src="//lightwidget.com/widgets/0ef47a1bf1a9527bbbab3f01012bfbc0.html"
          allowTransparency={true}
          scrolling="no"
          className="instagram-lightwidget"
        ></iframe>
      </div>
    </>
  );
};

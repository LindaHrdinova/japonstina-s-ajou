import './styleInstagram.css';

export const Instragram: React.FC = () => {
  return (
    <>
      <div className="instagram">
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        <iframe
          src="//lightwidget.com/widgets/931dc531b42f556585b9dd5f3855047d.html"
          allowTransparency={true}
          scrolling="no"
          className="instagram-lightwidget"
        ></iframe>
      </div>
    </>
  );
};

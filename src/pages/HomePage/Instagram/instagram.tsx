import './styleInstagram.css';

export const Instragram: React.FC = () => {
  const mockUp: boolean = true;

  return (
    <>
      <div className="instagram">
        {mockUp ? (
          <img src="public/mockup - Insta - Ája.png" alt="" />
        ) : (
          <>
            <script src="http://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe
              src="http://lightwidget.com/widgets/931dc531b42f556585b9dd5f3855047d.html"
              allowTransparency={true}
              scrolling="no"
              className="instagram-lightwidget"
            ></iframe>
          </>
        )}
      </div>
    </>
  );
};

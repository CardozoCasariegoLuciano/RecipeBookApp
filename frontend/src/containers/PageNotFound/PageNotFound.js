import "./pageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="notFound_Conteiner">
      <div className="notFount_content">
        <div className="notFound_animationContent">
          <div className="notFound_animation01"></div>

          <div className="notFound_animation02"><p>404</p></div>
        </div>
        <h2>Uups, la pagina que estas buscando no existe</h2>
      </div>
    </div>
  );
};

export default PageNotFound;

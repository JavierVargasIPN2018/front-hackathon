import "./Footer.css"

export const Footer = () => {
  return (
    <div className="FooterDiv">
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
          </div>
          <div>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>HealthLink
                </h6>
                <p>
                Somos una empresa en cooperación y desarrollo web con una red ampliamente especializada de hospitales a nivel internacional, la cual brinda acceso a información de manera segura así como a registros de salud.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Información
                </h6>
                <p>
                  <a href="#!" className="text-reset">Información</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Registro</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Contactos</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">QR code</a>
                </p>
              </div>
      
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contactanos</h6>
                <p><i className="fas fa-home me-3 text-secondary"></i> IPN UPIITA</p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  test@test.com
                </p>
                <p><i className="fas fa-phone me-3 text-secondary"></i> +52 55 7990 1798</p>
                <p><i className="fas fa-print me-3 text-secondary"></i> +52 55 1709 2600</p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4" >
          © 2023 Copyright:
          <a className="text-reset fw-bold">Hackathon 2023</a>
        </div>
      </footer>
    </div>
  );
}


/* <footer classNameName="footer">
            <div  classNameName="footerCopy">
                <p>Todos los derechos reservados a Hackathon</p>
            </div>
        </footer> */
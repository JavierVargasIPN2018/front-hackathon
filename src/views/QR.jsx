import "./QR.css"

export const QrCod = () => {
  return (
    <div className="qr">
      <h1>Obten el qr par un despliegue de la informacion</h1>
      <img src='https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://hackathon-healthlink.netlify.app/' className='imgqr' />
    </div>
  )
}

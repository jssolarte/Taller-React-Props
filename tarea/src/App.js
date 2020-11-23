import './App.css';
import imgApple from './img/icon_apple.png';
import imgProfile from './img/emoji_mujer.png';
import img_TresPuntos from './img/img_puntos.png';
import img_BtnTriangulo from './img/btn_triangulo.png';
import img_BtnCuadrado from './img/btn_cuadrado.png';
import img_BtnMas from './img/btn_mas.png';
import iconCohete from './img/icon_cohete.png';
import iconUsuario from './img/icon_usuario.png';
import iconListon from './img/icon_liston.png';
import iconLibro from './img/icon_libro.png';
import iconUsuarios from './img/icon_usuarios.png';
import iconSettings from './img/icon_tuerca.png';
import iconFlechaIzquiera from './img/icon_flecha_izquierda.png';
import iconBarra from './img/icon_blanco_negro.png';
import iconLupa from './img/icon_lupa.png';
import iconSonido from './img/icon_raro_1.png';
import imgProfit from './img/estadistica.png';
import imgLetra from './img/icon_letra.png';
import iconTresPuntos from './img/icon_trespuntos.png';
import iconDiagonal from './img/icon_flecha_diagonal.png';
import iconClip from './img/icon_clip.png';
import imgNube from './img/img_nube.PNG';
import imgNegra from './img/img_negra.png';
function App() {

  // let img=[
  //   require("./img/icon_apple.png"),
  //   require("./img/icon_trespuntos.png"),

  // ]
  return (

    <div className="o-container-all row">
    <div className="o-container-menu col-1">
      <div><img src={img_TresPuntos}/></div>
      <div><img src={img_BtnTriangulo}/></div>
      <div><img src={img_BtnCuadrado}/></div>
      <div><img src={img_BtnMas}/></div>


      
    </div>  

    <div className="o-container-profile col-3">
      <img src={imgProfile} placeholder="img-profile"/>

      <div className="o-container-title-welcome">Welcome back, Julie Bell</div>

      <div>
        <nav>
          <ul>
            <div> <img src={iconCohete} /> Dashboard</div>
            <div> <img src={iconUsuario} />Clients</div>
            <div> <img src={iconListon} />Invoices</div>
            <div> <img src={iconLibro} />Estimates</div>
            <div> <img src={iconUsuarios} />My team</div>

          </ul>
        </nav>
      </div>
      <div> <img src={iconSettings} /> Settings <img src={iconFlechaIzquiera} /></div>
    </div>
    <div className="o-container-details col-8">
      <div className="o-row-number1 row">
        <div className="col-4">
        <h3>Invoices</h3>
        <div>
          <label>$12,095</label><spam>Overdue</spam>
          <label>$33,363</label><spam>Total outstanding</spam>
          <label>$4,500</label><spam>Indraft</spam>
        </div>
        </div>
        <div className="col-4">
          <h3>outstanding revenue</h3>
          <div> <img src={iconBarra}></img></div><label>$21.3K</label><div>$12,095 overdue <img src={iconLupa}></img></div>
        </div>
      </div>
      <div className="o-row-number2 row">
          <div className="col-3">
            <h2>Total profit</h2> <label>September 2020</label> <spam> <img src={iconSonido}></img></spam>
            <div className="card">
            <img src={imgProfit} placeholder="img-grafica"></img>
            
            </div>
          </div>
          <div className="col-5">
            <h2>Expenses</h2><div><spam><img src={iconDiagonal}></img></spam></div> 
            <div className="o-cards-all row">
              {/* start card number one */}
              <div className="o-card-one card col">
                <div className="card-body col">
                  <h2 className="card-title">$20</h2>
                  <label className="card-text">23 sepp, 2020</label>
                  <spam><img src={iconClip}></img></spam>
                  <div>
                    <img src={imgLetra}></img>
                    <label className="card-text">Software</label>
                  </div>
                </div>
              </div>
              {/* finish card one */}
               {/* start card number two */}
               <div className="o-card-one card col">
                <div className="card-body col">
                  <h2 className="card-title">$20</h2>
                  <label className="card-text">23 sepp, 2020</label>
                  <spam><img src={iconClip}></img></spam>

                  <div>
                    
                    <img src={iconTresPuntos}/>
                    <label className="card-text">Management</label>
                  </div>
                </div>
              </div>
              {/* finish card two */}
               {/* start card number three */}
               <div className="o-card-one card col">
                <div className="card-body col">
                 <div className="row details-with-clip">
                  <div className="col-11">

                  <h2 className="card-title">$20</h2>
                  <label className="card-text">23 sepp, 2020</label>
                  </div>
                  <div className="col-1">

                  <spam><img className="img_clip" src={iconClip}></img></spam>
                  </div>
                 </div>

                  <div>
                    <img src={imgApple}></img>
                    <label className="card-text">Support</label>
                  </div>
                </div>
              </div>
              {/* finish card three */}
            </div>
          </div>
      </div>
      <div className="o-row-number3 row">
        <div className="col-5">
          
         <div> <h2>Invoices</h2> </div><label>recently created</label><div> <spam><img src={iconSonido}></img></spam><img src={iconDiagonal}></img> <spam></spam></div>
          <div className="o-card-all-section3 row">
            <div className="o-card1-detail-section3 card col">
              <div><img className="img-fluid" src={imgNube}></img></div>
            </div>
            {/* start card one */}
            <div className="o-card2-detail-section3 card col">
              <label className="card-text">#00106</label>
              <h5 className="card-title">Mindtickle</h5>
              <label className="card-text border-bottom">2 sep,2020</label>
              <label>viewed</label> <label>$3,500</label>
            </div>
            {/* finish card one */}
            {/* start card two */}

            <div className="o-card3-detail-section3 card col border-left border-warning">
              <label className="card-text">#00105</label>
              <h5 className="card-title">Cleancloud</h5>
              <label className="card-text border-bottom">1 sep,2020</label>
              <label>Sent</label> <label>$2,000</label>
            </div>
            {/* finish card two */}

          </div>
        </div>
        <div className="col-3">
        <div className="o-card1-detail-section3 card row">
             <div> <img className="img-negra-card" src={imgNegra}></img></div> 
            </div>
        </div>
      </div>
    </div>
    </div>
  
  );
}

export default App;

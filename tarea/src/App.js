import './App.css';

function App() {
  return (

    <div className="o-container-all row">
    <div className="o-container-menu col-1">
      <h2>menu</h2>
    </div>  

    <div className="o-container-profile col-3">
      <img src="" placeholder="img-profile"></img>

      <div className="o-container-title-welcome">Welcome back, Julie Bell</div>

      <div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Clients</li>
            <li>Invoices</li>
            <li>Estimates</li>
            <li>My team</li>

          </ul>
        </nav>
      </div>
      <div>Settings</div>
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
          <div>barra de progreso</div><label>$21.3K</label><spam>$12,095 overdue</spam>
        </div>
      </div>
      <div className="o-row-number2 row">
          <div className="col-3">
            <h2>Total profit</h2> <label>September 2020</label> <spam>icon</spam>
            <div>
            <img src="./img/web_grafica.PNG" placeholder="img-grafica"></img>
            </div>
          </div>
          <div className="col-5">
            <h2>Expenses</h2>
            <div className="o-cards-all row">
              {/* start card number one */}
              <div className="o-card-one card col">
                <div className="card-body col">
                  <h2 className="card-title">$20</h2>
                  <label className="card-text">23 sepp, 2020</label>
                  <spam>icon</spam>
                  <div>
                    <img src="./img/web_grafica.PNG"></img>
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
                  <spam>icon</spam>
                  <div>
                    <img src="./img/web_grafica.PNG"></img>
                    <label className="card-text">Software</label>
                  </div>
                </div>
              </div>
              {/* finish card two */}
               {/* start card number three */}
               <div className="o-card-one card col">
                <div className="card-body col">
                  <h2 className="card-title">$20</h2>
                  <label className="card-text">23 sepp, 2020</label>
                  <spam>icon</spam>
                  <div>
                    <img src="./img/web_grafica.PNG"></img>
                    <label className="card-text">Software</label>
                  </div>
                </div>
              </div>
              {/* finish card three */}
            </div>
          </div>
      </div>
      <div className="o-row-number3 row">
        <div className="col-5">
          
          <h2>Invoices</h2> <label>recently created</label><spam>icon1</spam><spam>icon2</spam>
          <div className="o-card-all-section3 row">
            <div className="o-card1-detail-section3 card col">
              <spam src="./img/web_grafica.PNG">icon</spam>
            </div>
            {/* start card one */}
            <div className="o-card2-detail-section3 card col">
              <label className="card-text">#00106</label>
              <h5 className="card-title">Mindtickle</h5>
              <label className="card-text">2 sep,2020</label>
              <label>viewed</label> <label>$3,500</label>
            </div>
            {/* finish card one */}
            {/* start card two */}

            <div className="o-card3-detail-section3 card col">
              <label className="card-text">#00105</label>
              <h5 className="card-title">Cleancloud</h5>
              <label className="card-text">1 sep,2020</label>
              <label>Sent</label> <label>$2,000</label>
            </div>
            {/* finish card two */}

          </div>
        </div>
        <div className="col-3">
        <div className="o-card1-detail-section3 card col">
              <spam src="./img/web_grafica.PNG">icon</spam>
            </div>
        </div>
      </div>
    </div>
    </div>
  
  );
}

export default App;

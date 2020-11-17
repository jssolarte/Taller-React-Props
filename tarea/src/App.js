import './App.css';

function App() {
  return (


    <div className="form-group row">

      
     <form>
        <div className=" o-col col-10">
          <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        <div className=" o-col col-10">
        <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
   </div>
  
  );
}

export default App;

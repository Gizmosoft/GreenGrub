// import logo from './logo.svg';
import './App.css';
import Landing from './Pages/Landing';
import CalculateRecipe from './CalculateRecipe';
import SignInSide from './SignInSide';

function App() {
  return (
    <div className="App">
           <Landing/>
      {/* <SignInSide/> */}
      <CalculateRecipe/>
    </div>
  );
}

export default App;

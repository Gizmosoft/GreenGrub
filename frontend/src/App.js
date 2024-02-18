// import logo from './logo.svg';
import "./App.css";
import Landing from "./Pages/Landing";
import CalculateRecipe from "./CalculateRecipe";
import SignInSide from "./SignInSide";
import {BrowserRouter as Router, Route, Routes} from  'react-router-dom';
import Header from "./Components/NavBar";
import Leaderboard from "./Components/LeaderBoard";
import Explore from "./Pages/Explore";
import RecipeDetailsPage from "./Pages/RecipeDetailsPage";
function App() {
  return (
    <div className='App'>
     <Router>
      <Header />  
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/recipe-calculator" element={<CalculateRecipe/>} />
        <Route path="/signin" element={<SignInSide/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/recipe/:id" element={<RecipeDetailsPage/>} />
        {/* <Route component={NotFound} /> */}
      </Routes>
    </Router>
    {/* <CalculateRecipe/> */}
    </div>
  );
}

export default App;

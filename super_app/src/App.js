
import RegisterPage from "./pages/Register/Register";
import OnboardingPage from "./pages/Onboarding/Onboarding";
import ProfilePage from "./pages/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
// Here, Import pages only
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes path = "/register">
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/onboarding" element = {<OnboardingPage/>}/>
          <Route path="/profile" element = {<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

import "./App.css";
import ResponsiveAppBar from "./component/ResponsiveAppBar";
import { AllRoutes } from "./component/AllRoutes";
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <AllRoutes />
    </div>
  );
}

export default App;

import './App.css';
import './MobileQuery.css';
import Dashboard from './Pages/Dashboard';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Review from './Pages/Review';

function App() {
  return (
    <div className="App">
     <Header />
     <Review />
     <Dashboard />
     <Footer/>
    </div>
  );
}

export default App;

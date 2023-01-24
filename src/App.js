import './App.css';
import Hero from './components/Hero/hero'
import Programs from './components/Programs/programs'
import Reasons from './components/Reasons/reasons'
import Plans from './components/Plans/plans'
import Testimonials from './assets/Testimonials/testimonials'
import Join from './components/Join/join';
import Footer from './components/Footer/footer'
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;

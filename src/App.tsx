import { Header } from './components/Header';
import { HbA1cMeter } from './components/HbA1cMeter';
import { FactorsSection } from './components/Factors';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[480px] mx-auto bg-white">
        <Header />
        <main>
          <HbA1cMeter value={6.25} />
          <FactorsSection />
        </main>
      </div>
    </div>
  );
}

export default App;
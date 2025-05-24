import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <div className="app">
        <a href="#main" className="skip-to-main">Skip to main content</a>
        <Header />
        <Home />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;

// import { neuralbay_ai_backend } from 'declarations/neuralbay_ai_backend';
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes";
import Header from "../components/header";
import Footer from "../components/footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient(); 
  return (
    <Router>
      <Header />
      <QueryClientProvider client={queryClient}>
            <AppRoutes /> 
        </QueryClientProvider>
      <Footer />
    </Router>
  );
}

export default App;

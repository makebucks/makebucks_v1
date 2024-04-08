import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import TradersMentorship from './components/TradersMentorship';
import AppLayout from './components/AppLayout';
import OurApp from './components/OurApp';
import ContactUsPage from './components/ContactUsPage';
import TaxFiling from './components/TaxFiling';
import ScrollToTop from './utils/ScrollToTop';
import DataTable from './pages/DaraTable';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndCondition from './components/TermsAndCondition';


let queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0,
    }
  }
})

function App() {
  return (
  
    <QueryClientProvider client={queryClient}>
       <div className="App">
        <GlobalStyle/>
        {/* <LandingPage/> */}
        <BrowserRouter>
        <ScrollToTop/>
        <Routes>
            <Route element={<AppLayout/>}>
                <Route index element={<Navigate replace to="home"/>}/>
                <Route path='home' element={<LandingPage/>}/>
                <Route path='traders-mentorship' element={<TradersMentorship/>}/>  
                <Route path='tax-filing' element={<TaxFiling/>}/>  
                <Route path='our-app' element={<OurApp/>}/>  
                <Route path='contact-us' element={<ContactUsPage/>}/>           
                <Route path='user-details' element={<DataTable/>}/>   
                <Route path='privacy-policy' element={<PrivacyPolicy/>}/> 
                <Route path='Terms&condition' element={<TermsAndCondition/>}/>           

            </Route>
         
        </Routes>
    </BrowserRouter>
        </div>
        <Toaster position='top-right' 
                 gutter={12} 
                 containerStyle={{margin:"8px"}}
                 toastOptions={{
                  success:{
                    duration: 3000,
                  },
                  error:{
                    duration:5000
                  },
                  style:{
                    fontSize: '14px',
                    maxWidth: '500px',
                    padding: '16px 24px',
                    backgroundColor: '#dedede',
                    marginTop:'90px'
                  }
                 }}/>
        </QueryClientProvider>
   
  );
}

export default App;

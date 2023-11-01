import Footer from './components/footer';
import NavBar from './components/navBar';
import './css/main.css'
import HomePage from './pages/home';
import ProjectPage from './pages/projectPage';
import ProjectsPage from './pages/projectsPage';
import ContactsPage from './pages/contactsPage';

function App() {
    return (
        <div className='App'>
            <NavBar />
            <ProjectPage />
            <Footer />
        </div>
  );
}

export default App;

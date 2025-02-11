import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import CardList from "./components/CardList";
import SongList from "./components/SongList";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <Header />
        <h1 className="new">New</h1>
        <CardList />
        <SongList />
      </main>
    </div>
  );
};

export default App;

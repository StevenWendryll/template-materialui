import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import AccountMenu from "./pages/menu/AccountMenu";  


function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
    </div>
  );
}

export default App;

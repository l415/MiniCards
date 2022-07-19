import "./App.css";
import Cabecera from "./components/templates/Cabecera"
import Contenido from "./components/templates/Contenido";
import Pie from "./components/templates/Pie";

function App() {
  return (
    <div>
      <Cabecera title="Pagina en componentes"/>
      <Contenido />
      <Pie />
    </div>
  );
}

export default App;

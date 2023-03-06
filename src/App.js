import { FiSearch }  from 'react-icons/fi';
import './style.css'; 

function App() {
  return (
    <div className="container">
      <div className="topo">
        <h1 className="title">IP Address Track</h1>

        <div className="containerInput">
          <input type="text" placeholder="Digite seu cep..."/>
          <button className="buttonSearch"><FiSearch size={25} color="#111"/></button>
        </div>

        <div className="main">
          
          <h2>CEP: 41380-250</h2>
          <span>Rua Teste alguma</span>
          <span>Valéria</span>
          <span>Salvador - BA</span>
        </div>
      </div>

    </div>
  );
}

export default App;

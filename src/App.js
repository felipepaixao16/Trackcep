import { useState} from 'react';
import { FiSearch }  from 'react-icons/fi';
import './style.css'; 
import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
     
    //aqui estou criando as condicionais dos valores do meu input de pesquisa ao clicar no buttonSearch.
    if(input === '') {
      alert("Preencha algum cep!")
      return
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");
    } catch {
      alert("Erro ao buscar!");
      setInput("")
    }
  }

  return (
    <div className="container">
      <div className="topo">
        <h1 className="title">IP Address Track</h1>

        <div className="containerInput">
          <input type="text" placeholder="Digite seu cep..." value={input} onChange={(e) => setInput(e.target.value)}/>
          <button className="buttonSearch" onClick={handleSearch}><FiSearch size={25} color="#111"/></button>
        </div>

        <div className="main">
          <span className="cep"><h2>CEP</h2> {cep.cep}</span>
          <span><h2>Rua</h2> {cep.logradouro}</span>
          <span><h2>Bairro</h2> {cep.bairro}</span>
          <span><h2>Cidade  -  UF</h2> {cep.localidade} - {cep.uf}</span>
        </div>
      </div>
    </div>
  );
}

export default App;

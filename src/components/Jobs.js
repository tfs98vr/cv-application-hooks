import '../styles/Jobs.css'
const { useState } = require("react")

function Jobs(props) {
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa]= useState('');
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [fimDisabled, setFimDisabled] = useState(false);
  const [descricao, setDescricao] = useState('');

  const sendInfo = (count, campo, funcao, e) => {
    funcao(e.target.value);
    props[campo](count, campo, e.target.value);
  }

  const sendAtual = (e) => {
    setFimDisabled(e.target.checked);
    props.atual(props.contagem, e.target.checked);
    setFim('');
  }

  return(
    <div className='jobs-container'>
      <label className='j-cargo'>
        Cargo
        <input
          value={cargo}
          onChange={(e) => sendInfo(props.contagem, 'cargo', setCargo, e)}
        />
      </label>

      <label className='j-empresa'>
        Empresa
        <input
          value={empresa}
          onChange={(e) => sendInfo(props.contagem, 'empresa', setEmpresa, e)}
        />
      </label>

      <label className='j-inicio'>
        Data de início
        <input
          type='date'
          value={inicio}
          onChange={(e) => sendInfo(props.contagem, 'inicio', setInicio, e)}
        />
      </label>

      <label className='j-atual'>
        Emprego atual?
        <input
          type='checkbox'
          onChange={(e) => sendAtual(e)}
        />
      </label>

      <label className='j-saida'>
        Data de saída
        <input
          type='date'
          value={fim}
          onChange={(e) => sendInfo(props.contagem, 'fim', setFim, e)}
          disabled={fimDisabled}
        />
      </label>

      <label className='j-descricao'>
        Descricao do cargo
        <input
          value={descricao}
          onChange={(e) => sendInfo(props.contagem, 'descricao', setDescricao, e)}
        />
      </label>
    </div>
  )
}

export default Jobs
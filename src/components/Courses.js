import { useState } from "react"
import '../styles/Courses.css'

function Courses(props) {
  const [curso, setCurso] = useState('');
  const [escola, setEscola] = useState('');
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [fimDisabled, setFimDisabled] = useState(false);

  const sendInfo = (count, campo, funcao, e) => {
    funcao(e.target.value);
    props[campo](count, campo, e.target.value);
  }

  const sendAndamento = (e) => {
    setFimDisabled(e.target.checked);
    props.andamento(props.contagem, e.target.checked);
    setFim('');
  }

  return(
    <div className='courses-container'>
      <label className='c-curso'>
        Curso
        <input
          value={curso}
          onChange={(e) => sendInfo(props.contagem, 'curso', setCurso, e)}
        />
      </label>

      <label className='c-instituicao'>
        Instituição
        <input
          value={escola}
          onChange={(e) => sendInfo(props.contagem, 'escola', setEscola, e)}
        />
      </label>

      <label className='c-inicio'>
        Data de início
        <input
          type='date'
          value={inicio}
          onChange={(e) => sendInfo(props.contagem, 'inicio', setInicio, e)}
        />
      </label>

      <label className='c-andamento'>
        Em andamento?
        <input
          type='checkbox'
          onChange={(e) => sendAndamento(e)}
        />
      </label>

      <label className='c-fim'>
        Data de finalização
        <input
          type='date'
          value={fim}
          onChange={(e) => sendInfo(props.contagem, 'fim', setFim, e)}
          disabled={fimDisabled}
        />
      </label>
    </div>
  )
}

export default Courses
import { useState } from "react"
import '../styles/Education.css'

function Education(props) {
  const [escolaridade, setEscolaridade] = useState('');
  const [escola, setEscola] = useState('');
  const [disableEscola, setDisableEscola] = useState(true);
  const [curso, setCurso] = useState('');
  const [disableCurso, setDisableCurso] = useState(true);
  const [ano, setAno] = useState('');
  const [disableAno, setDisableAno] = useState(true);

  const sendEscolaridade = (e) => {
    setEscolaridade(e.target.value);
    props.escolaridade(e.target.value, '');
    setEscola('');
    setCurso('');
    setAno('');
    if(e.target.value === 'Ensino fundamental' || e.target.value === 'Ensino médio incompleto') {
      setDisableEscola(true);
      setDisableCurso(true);
      setDisableAno(true);
    } else if(e.target.value === 'Ensino médio completo') {
      setDisableEscola(false);
      setDisableCurso(true);
      setDisableAno(false);
    } else if(e.target.value === 'Ensino superior incompleto') {
      setDisableEscola(false);
      setDisableCurso(false);
      setDisableAno(true);
    } else if(e.target.value === 'Ensino superior completo') {
      setDisableEscola(false);
      setDisableCurso(false);
      setDisableAno(false);
    } else {
      setDisableEscola(true);
      setDisableCurso(true);
      setDisableAno(true);
    }
  }

  const sendInfo = (campo, e, funcao) => {
    funcao(e.target.value);
    props[campo]([campo], e.target.value);
  }

  return(
    <div className='education-container'>
      <label className="escolaridade">
        Escolaridade
        <select onChange={(e) => sendEscolaridade(e)} value={escolaridade}>
          <option value=''>--Escolaridade--</option>
          <option value='Ensino fundamental'>Ensino fundamental</option>
          <option value='Ensino médio incompleto'>Ensino médio incompleto</option>
          <option value='Ensino médio completo'>Ensino médio completo</option>
          <option value='Ensino superior incompleto'>Ensino superior incompleto</option>
          <option value='Ensino superior completo'>Ensino superior completo</option>
        </select>
      </label>

      <label className="instituicao">
        Instituição
        <input
          value={escola}
          onChange={(e) => sendInfo('escola', e, setEscola)}
          disabled={disableEscola}
        />
      </label>

      <label className="graduacao">
        Curso
        <input
          value={curso}
          onChange={(e) => sendInfo('curso', e, setCurso)}
          disabled={disableCurso}
        />
      </label>

      <label className="ano-fim">
        Ano de finalização
        <input
          type='number'
          value={ano}
          onChange={(e) => sendInfo('anoFim', e, setAno)}
          disabled={disableAno}
        />
      </label>
    </div>
  )
}

export default Education
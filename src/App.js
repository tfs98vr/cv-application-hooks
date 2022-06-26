import { useState } from 'react';
import Basic from './components/Basic'
import Education from './components/Education'
import Courses from './components/Courses'
import Jobs from './components/Jobs'
import Curriculum from './components/Curriculum'
import './styles/App.css'

function App(props) {
  const [info, setInfo] = useState({nome: '', rua: '', numero: '', bairro: '', cidade: '', estado: '', cep: '', tel: '', email: ''})
  const [edu, setEdu] = useState({escolaridade: '', escola: '', curso: '', anoFim: ''})
  const [course, setCourse] = useState({[`curso${1}`]: {curso: '', escola: '', inicio: '', andamento: '', fim: ''}})
  const [countCourse, setCountCourse] = useState(2)
  const [arrCourse, setArrCourse] = useState([1])
  const [job, setJob] = useState({[`emprego${1}`]: {cargo: '', empresa: '', inicio: '', atual: '', fim: '', descricao: ''}})
  const [countJob, setCountJob] = useState(2)
  const [arrJob, setArrJob] = useState([1])
  const [displayForm, setDisplayForm] = useState('block')
  const [displayCurriculum, setDisplayCurriculum] = useState('none')

  const getInfoFromBasic = (campo, val) => setInfo({...info, [campo]: val})
  const getInfoFromEducation = (campo, val) => setEdu({...edu, [campo]: val})
  const getEscolaridade = (nivel, val) => setEdu({escolaridade: nivel, escola: val, curso: val, anoFim: val})
  const getInfoFromCourses = (count, campo, val) => setCourse({...course, [`curso${count}`]: {...course[`curso${count}`], [campo]: val}})
  const isAndamentoChecked = (count, val) => {
    if(val) {
      setCourse({...course, [`curso${count}`]: {...course[`curso${count}`], andamento: 'Em andamento', fim: ''}})
    } else {
      setCourse({...course, [`curso${count}`]: {...course[`curso${count}`], andamento: '', fim: ''}})
    }
  }
  const adicionarCurso = () => {
    setCountCourse(countCourse+1)
    setArrCourse([...arrCourse, countCourse])
    setCourse({...course, [`curso${arrCourse.length+1}`]: {curso: '', escola: '', inicio: '', andamento: '', fim: ''}})
  }
  const removerCurso = () => {
    setCountCourse(countCourse-1)
    let tempObj = course
    delete tempObj[`curso${arrCourse.length}`]
    setCourse(tempObj)
    let tempArr = arrCourse
    tempArr.splice(tempArr.length - 1, 1)
    setArrCourse(tempArr)
  }
  const deleteButtonCourse = () => {
    if(arrCourse.length > 1) {
      return(
        <button className='delete-btn' onClick={removerCurso}>Remover</button>
      )
    }
  }
  const getInfoFromJobs = (count, campo, val) => setJob({...job, [`emprego${count}`]: {...job[`emprego${count}`], [campo]: val}})
  const isAtualChecked = (count, val) => {
    if(val) {
      setJob({...job, [`emprego${count}`]: {...job[`emprego${count}`], atual: 'Emprego atual', fim: ''}})
    } else {
      setJob({...job, [`emprego${count}`]: {...job[`emprego${count}`], atual: '', fim: ''}})
    }
  }
  const addJob = () => {
    setCountJob(countJob+1)
    setArrJob([...arrJob, countJob])
    setJob({...job, [`emprego${arrJob.length+1}`]: {cargo: '', empresa: '', inicio: '', atual: '', fim: '', descricao: ''}})
  }
  const removerJob = () => {
    setCountJob(countJob-1)
    let tempObj = job
    delete tempObj[`emprego${arrJob.length}`]
    setJob(tempObj)
    let tempArr = arrJob
    tempArr.splice(tempArr.length-1, 1)
    setArrJob(tempArr)
  }
  const deleteBtnJob = () => {
    if(arrJob.length > 1) {
      return(
        <button className='delete-btn' onClick={removerJob}>Remover</button>
      )
    }
  }
  const gerarCurriculo = () => {
    setDisplayForm('none')
    setDisplayCurriculum('block')
  }
  const getDisplayCurriculum = () => {
    setDisplayForm('block')
    setDisplayCurriculum('none')
  }

  return (
    <div className="App">
      <div style={{display: displayForm}}>
        <h1 className='titulo'>GERADOR DE CURRÍCULOS</h1>

        <div className='subtitulo'>Informações básicas</div>
        <Basic
          nome={getInfoFromBasic}
          rua={getInfoFromBasic}
          numero={getInfoFromBasic}
          bairro={getInfoFromBasic}
          cidade={getInfoFromBasic}
          estado={getInfoFromBasic}
          cep={getInfoFromBasic}
          tel={getInfoFromBasic}
          email={getInfoFromBasic}
        />

        <div className='subtitulo'>Educação</div>
        <Education
          escolaridade={getEscolaridade}
          escola={getInfoFromEducation}
          curso={getInfoFromEducation}
          anoFim={getInfoFromEducation}
        />

        <div className='subtitulo'>Cursos</div>
        {arrCourse.map((val) => 
          <Courses
            key={val} 
            contagem={val} 
            curso={getInfoFromCourses} 
            escola={getInfoFromCourses} 
            inicio={getInfoFromCourses}
            andamento={isAndamentoChecked}
            fim={getInfoFromCourses}
          />      
        )}

        <div className='button-container'>
          <button className='add-btn' onClick={adicionarCurso}>Adicionar</button>
          {deleteButtonCourse()}
        </div>

        <div className='subtitulo'>Experiência profissional</div>
        {arrJob.map((val) => 
          <Jobs
            key={val}
            contagem={val}
            cargo={getInfoFromJobs}
            empresa={getInfoFromJobs}
            inicio={getInfoFromJobs}
            atual={isAtualChecked}
            fim={getInfoFromJobs}
            descricao={getInfoFromJobs}
          />
        )}

        <div className='button-container'>
          <button className='add-btn' onClick={addJob}>Adicionar</button>
          {deleteBtnJob()}
        </div>

        <div className='generate-container'>
          <button onClick={gerarCurriculo} className='generate'>Gerar Currículo</button>
        </div>
      </div>

      <div>
        <Curriculum
          display={displayCurriculum}
          valorDisplay={getDisplayCurriculum}

          nome={info.nome}
          rua={info.rua}
          numero={info.numero}
          bairro={info.bairro}
          cidade={info.cidade}
          estado={info.estado}
          cep={info.cep}
          tel={info.tel}
          email={info.email}

          escolaridade={edu.escolaridade}
          escola={edu.escola}
          graduacao={edu.curso}
          anoFim={edu.anoFim}

          qtdCursos={arrCourse}
          curso={course}

          qtdEmpregos={arrJob}
          emprego={job}
        />
      </div>
    </div>
  );
}

export default App;

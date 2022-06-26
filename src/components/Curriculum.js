import '../styles/Curriculum.css'

function Curriculum(props) {
  const sendDisplay = () => props.valorDisplay()

  return(
    <div style={{display: props.display}} className="curriculum-container">
      <h1>{props.nome}</h1>

      <h3>Informações básicas</h3>
      <div className="curriculum-basico">
        <div>Rua {props.rua}, Nº {props.numero}, {props.bairro}, {props.cidade}, {props.estado}</div>
        <div>Cep: {props.cep}, Tel: {props.tel}, Email: {props.email}</div>
      </div>
      <hr></hr>

      <h3>Educação</h3>
      <div className="curriculum-escolaridade">
        <div>{props.escolaridade} {props.escola}</div>
        <div>{props.graduacao} {props.anoFim}</div>
      </div>
      <hr></hr>

      <h3>Cursos</h3>
      {props.qtdCursos.map((val) => 
        <div key={val}>
          <div>{props.curso[`curso${val}`].curso}, {props.curso[`curso${val}`].escola}</div>
          <div>{props.curso[`curso${val}`].inicio} - {props.curso[`curso${val}`].andamento} {props.curso[`curso${val}`].fim}</div>
        </div>
      )}
      <hr></hr>

      <h3>Experiência profissional</h3>
      {props.qtdEmpregos.map((val) => 
        <div key={val}>
          <div>{props.emprego[`emprego${val}`].cargo} {props.emprego[`emprego${val}`].empresa}</div>
          <div>{props.emprego[`emprego${val}`].inicio} - {props.emprego[`emprego${val}`].atual} {props.emprego[`emprego${val}`].fim}</div>
          <div>{props.emprego[`emprego${val}`].descricao}</div>
        </div>
      )}
      <hr></hr>

      <button className='voltar' onClick={sendDisplay}>Retornar</button>
    </div>
  )
}

export default Curriculum
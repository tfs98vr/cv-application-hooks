import { useState } from 'react'
import '../styles/Basic.css'

function Basic(props) {
  const[nome, setNome] = useState('');
  const[rua, setRua] = useState('');
  const[numero, setNumero] = useState('');
  const[bairro, setBairro] = useState('');
  const[cidade, setCidade] = useState('');
  const[estado, setEstado] = useState('');
  const[cep, setCep] = useState('');
  const[tel, setTel] = useState('');
  const[email, setEmail] = useState('');

  const sendInfo = (campo, e, funcao) => {
    funcao(e.target.value);
    props[campo](campo, e.target.value);
  }

  return(
    <div className="basic-container">
      <label className='b-nome'>
        Nome
        <input
          value={nome}
          onChange={(e) => sendInfo('nome', e, setNome)}
        />
      </label>

      <label className='b-rua'>
        Rua
        <input
          value={rua}
          onChange={(e) => sendInfo('rua', e, setRua)}
        />
      </label>

      <label className='b-numero'>
        Número
        <input
          type='number'
          value={numero}
          onChange={(e) => sendInfo('numero', e, setNumero)}
        />
      </label>

      <label className='b-bairro'>
        Bairro
        <input
          value={bairro}
          onChange={(e) => sendInfo('bairro', e, setBairro)}
        />
      </label>

      <label className='b-cidade'>
        Cidade
        <input
          value={cidade}
          onChange={(e) => sendInfo('cidade', e, setCidade)}
        />
      </label>

      <label className='b-estado'>
        Estado
        <input
          value={estado}
          onChange={(e) => sendInfo('estado', e, setEstado)}
        />
      </label>

      <label className='b-cep'>
        CEP
        <input
          value={cep}
          onChange={(e) => sendInfo('cep', e, setCep)}
        />
      </label>

      <label className='b-tel'>
        Telefone
        <input
          value={tel}
          onChange={(e) => sendInfo('tel', e, setTel)}
        />
      </label>

      <label className='b-email'>
        E-mail
        <input
          type='email'
          value={email}
          onChange={(e) => sendInfo('email', e, setEmail)}
        />
      </label>
    </div>
  )
}

export default Basic
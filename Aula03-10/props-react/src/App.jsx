import './App.css'
import Mensagem from './components/mensagem.jsx'
import PropsNomeados from './c omponents/propsNomeados.jsx'
import MeuAvatar from './components/meuavatar.jsx'
import imagem from './assets/avatar.jpg'

function App() {

  return (
    <>
      <Mensagem titulo="Aprendendo Props, properties, ou ainda propriedades" texto="Bem-vindo(a) ao mundo das props!" nome="Luiz" />
      <Mensagem titulo="Interclasse 2025" texto="Bem vindo(a) ao interclasse" nome="Luiz" />
      <PropsNomeados titulo="Interclasse 2026" texto="Bem vindo(a) ao interclasse" nome="Luiz" altura={1.73} />
      <MeuAvatar nome='Mariana' 
      idade= '17' 
      foto={imagem} 
      estilo='Depressiva' 
      disciplina='Lana Del Rey' />
    </>
  )
}

export default App



export default function MeuAvatar({nome, idade, foto, estilo, disciplina}) {
    return (
        <>
            <h1>meu nome: {nome}</h1>
            <p>Idade: {idade}</p>
            <img src={mariana.png} alt="Foto de perfil" style={{ width: '200px', height: '200px' }} />
            <p>Estilo: {estilo}</p>
            <p>Disciplina: {disciplina}</p>
        </>
    )
}
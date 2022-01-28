function Titulo(){
  return(
    <h1>ignorando o h1</h1>
  )
}


//component react
function HomePage() {
  //JSX
  return ( //coloque esses parenteses so para o texto nao ficar escuro quando eu quebro a linha
    <div>
      <Titulo>Boas Vindas!</Titulo>
      <h2>Discord- Alura Matrix</h2>
      <style jsx>{`
      h1 {
        color: red;
      }
    `}</style>
    </div>
  )
}

export default HomePage
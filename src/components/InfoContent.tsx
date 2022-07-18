export function InfoContent() {

  return (
    <div className="flex flex-col md:gap-4 md:flex-row">
      <div className="mx-4 mb-12 text-justify md:mb-0">
        <h1 className="text-4xl font-bold mb-3 text-red-400">About</h1>
        <h2 className="text-lg font-bold mb-2 text-red-400">Inspiration</h2>
        <p>&nbsp;The website vacho.co was inspired by the famous cowsay, which is a terminal program used to render animals written in ASCII saying something you write. Having this base, I started to expand to other animals, being able to switch from animal and the sentence continues to be displayed, not having to rewrite it. </p>
        <p>&nbsp;With this inspiration, I recreated my version of cowsay using Javascript with React.js. The project is so simple that I don't have a backend, nor a database, just this little screen you're seeing.</p>
      </div>

      <div className="mx-4 text-justify">
        <h1 className="text-4xl font-bold mb-3 text-green-400">Sobre</h1>
        <h2 className="text-lg font-bold mb-2 text-green-400">Inspiração</h2>
        <p>&nbsp;O site vacho.co foi inspirado no famoso cowsay, que é um programa de terminal utilizado para renderizar animais escritos em ASCII falando o que você escrever. Tendo essa base, comecei a expandir para outros animais, conseguindo até trocar de animal e ainda sim a frase continua sendo exibida, não tendo que reescrevê-la. </p>
        <p>&nbsp;Com essa inspiração, recriei minha versão do cowsay usando Javascript com React.js. O projeto é simples, não utilizei de backend nem banco de dados, apenas essa pequena tela que você está vendo.</p>
      </div>
    </div>
  )
}
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-600 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2023 Mapa de Desigualdade. Todos os direitos reservados.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-200 transition duration-300">Política de Privacidade</a>
            <a href="#" className="hover:text-purple-200 transition duration-300">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


const Footer = () => {
    return (
      <div id="contact" className="font-sGrotesk flex flex-col sm:flex-row justify-between py-12 ">
        <div className="flex justify-center sm:justify-start w-full">
          <p className="font-bold text-center sm:text-left ml-8 sm:w-3/5">Designed by Brittany Chiang & Built by Irvin Pelcaztre-Ortega ✌️ 2024</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center mt-4 sm:mt-0 w-full sm:w-auto">
          <a className="ml-4 sm:ml-4 mr-12 font-bold text-red-900 hover:border-b-2 border-red-900 transition duration-300 ease-in-out" href="#">EMAIL</a>
          <a className="ml-4 sm:ml-4 mr-12 font-bold text-red-900 hover:border-b-2 border-red-900 transition duration-300 ease-in-out" href="https://github.com/Ipelcaztreortega" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <a className="ml-4 sm:ml-4 mr-12 font-bold text-red-900 hover:border-b-2 border-red-900 transition duration-700 ease-in-out" href="https://www.linkedin.com/in/irvin-pelcaztre-ortega/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        </div>
      </div>
    )
  }
  
  export default Footer;
  
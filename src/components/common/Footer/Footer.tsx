
const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-4">
      <hr className="border-white border-t" />
      <div className="container mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;

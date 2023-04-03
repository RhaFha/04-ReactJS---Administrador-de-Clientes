const Header: React.FC<IPropsHeader> = ({ titulo, subtitulo }) => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">{titulo}</h1>
      <p className="mt-3">{subtitulo}</p>
    </>
  );
};

export default Header;

interface IPropsHeader {
  titulo: string;
  subtitulo: string;
}

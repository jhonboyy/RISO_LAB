import Colours from "./Modifiers/Colours";
import Pattern from "./Modifiers/Pattern";
import FecAngInt from "./Modifiers/FecAngInt"

export default function Menu() {
  const actualizarVariables = () => {
    console.log("Variables actualizadas");
  };

  const checkEnter = (event, field) => {
    if (event.key === 'Enter') {
      console.log(`Enter presionado en ${field}`);
    }
  };

  return (
    <div className="menu">
      <Colours />
      <Pattern />
      <FecAngInt actualizarVariables={actualizarVariables} checkEnter={checkEnter} />
    </div>
  );
}
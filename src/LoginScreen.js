import { useNavigate } from "react-router-dom";
import './loginStyles.css';
function LoginScreen() {
  
  const navigate = useNavigate();
  const handleButtonClick = (e) => {
    e.preventDefault();
    const rut = e.target.elements.rut.value;
    navigate(`/pat/${rut}`);
  };

  return (
    <div>
      <h1>Bienvenido a sistema de fichas clínicas</h1>
      <form onSubmit={handleButtonClick}>
        <label>
          Ingrese rut: 
          <br></br>
          <br></br>
          <input type="text" name="rut" />
        </label>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginScreen;
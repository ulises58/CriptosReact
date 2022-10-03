import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";

const InpuSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const monedas = [
    { id: "USD", nombre: "Dolar de Estados Unidos" },
    { id: "MXN", nombre: "Peso Mexicano" },
    { id: "EUR", nombre: "Euro" },
    { id: "GBP", nombre: "Libra Esterlina" },
  ];

  const [SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);

  return (
    <form>
      <SelectMonedas />

      <InpuSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Formulario;

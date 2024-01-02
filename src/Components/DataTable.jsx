// import getRgbaPalette from 'get-rgba-palette';
import { Input } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { arrColores } from "../Components/AllColors";
import { useEffect, useState } from 'react';

const DataTable = ({ colorData }) => {
  const arrayColors = Object.entries(colorData);
  const tableHead = ["Color", "Código HEX", "Qty de Piezas", "Número Proveedor", "Nombre Color"];
  // Crear un array de estados para almacenar los valores de los inputs
  const [inputValues, setInputValues] = useState(arrayColors.map(() => 0));

  // Función para manejar los cambios en los inputs
  const handleInputChange = (index, event) => {
    const { value } = event.target;

    // Actualizar el estado correspondiente al input cambiado
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = Number(value); // Convertir a número si es necesario
      return newValues;
    });
  };

  // Función para establecer el valor del segundo input basado en el primero y arrColores
  const setSecondInputValue = (index) => {
    const firstInputValue = inputValues[index];
    const secondInputValue = arrColores[firstInputValue] || '';
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index + 1] = secondInputValue;
      return newValues;
    });
  };

  // Actualiza el array de valores de inputs cuando colorData cambie
  useEffect(() => {
    setInputValues(arrayColors.map(() => 0));
  }, [colorData]);
  
  return (
    <div className=" ">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Tabla de Valores</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {
                tableHead.map((head, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >{head}</th>
                )
                )}
            </tr>
          </thead>
          <tbody>
            {arrayColors.map(([color, cantidad], index) => (
              <tr key={index}>
                <td style={{ backgroundColor: color, width: '50px', height: '50px' }}></td>
                <td>{color}</td>
                <td>{cantidad}</td>
                <td>
                  <Input
                    variant='outline'
                    type='number'
                    min="0"
                    max={arrColores.length - 1}
                    value={inputValues[index]}
                    onChange={(event) => {
                      handleInputChange(index, event);
                      setSecondInputValue(index);
                    }}
                  />
                </td>
                <td>
                  <Input
                    variant='standard'
                    type='text'
                    disabled
                    value={inputValues[index + 1] || ''}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
DataTable.propTypes = {
  colorData: PropTypes.object.isRequired,
};
export default DataTable
// import getRgbaPalette from 'get-rgba-palette';
import PropTypes from 'prop-types';
import InputColors from './InputColors';
import { Button, Card } from '@material-tailwind/react';

const DataTable = ({ colorData }) => {
  const arrayColors = Object.entries(colorData);
  const tableHead = ["Color", "Código HEX", "Qty de Piezas", "Número Proveedor", "Nombre Color"];

  return (
    <section className='w-full my-4'>
      <h2 className="text-lg font-semibold mb-4">Tabla de Colores</h2>
      <Card className="h-full w-full px-2 py-2">
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
                <td className='w-12 h-12' style={{ backgroundColor: color}}></td>
                <td>{color}</td>
                <td>{cantidad}</td>
                <InputColors />
              </tr>
            ))}
            <tr>
              
            </tr>
          </tbody>
        </table>
        <div className='py-6'>
        <Button size="md">Guardar</Button>
        </div>
      </Card>
    </section>
  )
}
DataTable.propTypes = {
  colorData: PropTypes.object.isRequired,
};
export default DataTable
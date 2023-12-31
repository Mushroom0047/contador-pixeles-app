// import getRgbaPalette from 'get-rgba-palette';
import PropTypes from 'prop-types';

const DataTable = ({colorData} ) => {
  return (
    <div className=" bg-green-300">
        <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Tabla de Valores</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Color</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código Hex</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty de Piezas</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Número Proveedor</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre Color</th>
          </tr>
        </thead>
        <tbody>
          {/* {colorData.map((color, index) => (
            <tr key={index}>
              <td style={{ backgroundColor: color.hex, width: '50px', height: '50px' }}></td>
              <td>{color.count}</td>
            </tr>
          ))} */}
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
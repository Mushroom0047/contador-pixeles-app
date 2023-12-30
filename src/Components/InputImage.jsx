import { useState } from "react";

const InputImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0];      
      if (file && file.type === 'image/png') {
        setSelectedFile(file);
      } else {
        setSelectedFile(null);
      }
    };
  
    return (
      <div>
        <h2>Suelta el archivo aquí</h2>
        <input
          type="file"
          accept=".png"
          onChange={handleFileChange}
        />
        {selectedFile && (
          <div>
            <p>Archivo seleccionado: {selectedFile.name}</p>        
          </div>
        )}
      </div>
    );
}

export default InputImage
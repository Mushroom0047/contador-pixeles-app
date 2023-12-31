

const InputImage = ({ onFileChange }) => {

    const handleFileChange = (event) => {
      const file = event.target.files[0];      
      if (file && file.type === 'image/png') {
        onFileChange(file);
      } else {
        onFileChange(null);
      }
    };
  
    return (
      <div className="container mx-auto text-center py-14">
        <h2>Suelta el archivo aquí</h2>
        <input
          type="file"
          accept=".png"
          onChange={handleFileChange}
        />        
      </div>
    );
}

export default InputImage
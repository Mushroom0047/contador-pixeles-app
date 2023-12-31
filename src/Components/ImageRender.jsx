import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import DataTable from "../Components/DataTable"

const ImageRender = ({ selectedFile }) => {
    const canvasRef = useRef(null);
    const [colors, setColors] = useState({});
    
    function rgbToHex(color) {
        var hex = color.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }

        useEffect(() => {
            if (selectedFile) {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext("2d");
                const image = new Image();                
    
                const reader = new FileReader();
                reader.onload = function (event) {
                    setColors({}); // Reiniciar los colores
                    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

                    image.onload = function () {
                        canvas.width = image.width;
                        canvas.height = image.height;
                        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                        
                        const colorCounts = {};
    
                        for (var y = 0; y < image.height; y++) {
                            for (var x = 0; x < image.width; x++) {
                              var pixel = ctx.getImageData(x, y, 1, 1).data;
                  
                              // Omitir el color transparente (canal alfa = 0)
                              if (pixel[3] === 0) {
                                continue;
                              }
                  
                              var colorHex = "#" + rgbToHex(pixel[0]) + rgbToHex(pixel[1]) + rgbToHex(pixel[2]);
                  
                              if (colorCounts[colorHex]) {
                                colorCounts[colorHex]++;
                              } else {
                                colorCounts[colorHex] = 1;
                              }
                            }
                          }
    
                        setColors(colorCounts);
                    };
                    image.src = event.target.result;
                };
                reader.readAsDataURL(selectedFile);
            }
        }, [selectedFile]);
    return (
        <div>
            {selectedFile && (
                <div className="flex justify-center">
                    <canvas
                        ref={canvasRef}
                        width={400}
                        height={400}
                        style={{ border: '1px solid black', display: 'block' }}
                    />
                </div>                
            )}
            <div>
                <h2>Conteo de colores:</h2>
                <DataTable colorData={colors} />
            </div>
        </div>
    );
}

ImageRender.propTypes = {
    selectedFile: PropTypes.instanceOf(File),
};

export default ImageRender
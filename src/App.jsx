import { useState } from "react";
import ImageRender from "./Components/ImageRender"
import InputImage from "./Components/InputImage"


const App = () => {
    // const canvasRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (file) => {
        setSelectedFile(file);
    };
    return (
        <>
            <InputImage onFileChange={handleFileChange} />
            <section className="container mx-auto">
                <div className="w-full flex flex-row flex-wrap justify-center text-center">
                    <div className="w-full lg:w-1/2">
                        <ImageRender selectedFile={selectedFile} />
                        <div className="flex justify-center">
                </div>             
                    </div>
                </div>

            </section>
        </>
    )
}

export default App
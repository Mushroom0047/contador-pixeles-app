import { useState } from "react";
import ImageRender from "./Components/ImageRender"
import InputImage from "./Components/InputImage"
import { Typography } from "@material-tailwind/react";
import Logo from '../src/assets/logoWP.png';


const App = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (file) => {
        setSelectedFile(file);
    };
    return (
        <>
        <div className="flex flex-col items-center">
            <Typography variant="h1" className="">Pixel Art Converter</Typography>
            <img 
            src={Logo} 
            alt="Logo brickpicture" 
            width={100}
            height={100}
            />
        </div>
            <InputImage onFileChange={handleFileChange} />
            <section className="mx-auto">
                <div className="w-full flex flex-row flex-wrap justify-center text-center">
                    <div className="w-full lg:w-1/2">
                        <ImageRender selectedFile={selectedFile} />                        
                    </div>
                </div>

            </section>
        </>
    )
}

export default App
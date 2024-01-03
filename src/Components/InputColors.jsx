import { Input } from "@material-tailwind/react";
import { useState } from "react";
import { arrColores } from "../Components/AllColors";

const InputColors = () => {
    const [inputValue, setinputValue] = useState('');

    const handleInputValue = (e) => {
      setinputValue(e.target.value);
    }
    return (
        <>
            <td className="w-auto">
                <Input                         
                    variant='outline'
                    type='number'
                    min="0"
                    max={arrColores.length - 1}
                    value={inputValue}
                    onChange={handleInputValue}
                />
            </td>
            <td className="w-auto">
                <Input
                    variant='standard'
                    type='text'
                    disabled
                    value={arrColores[inputValue]}
                />
            </td>
        </>
    )
}

export default InputColors
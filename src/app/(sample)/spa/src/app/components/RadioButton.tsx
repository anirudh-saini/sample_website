import React from "react";

interface RadioButtonsProps {
    index: number;
    selectedRadio: number;
    onChange: (index: number) => void;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({
    index,
    selectedRadio,
    onChange,
}) => (
    <div>
        <input
            type="radio"
            id={`radio-${index}-0`}
            name={`contentRadio-${index}`}
            checked={selectedRadio === index}
            onChange={() => onChange(index)}
        />
        <input
            type="radio"
            id={`radio-${index}-1`}
            name={`contentRadio-${index}`}
            checked={selectedRadio === index}
            onChange={() => onChange(index)}
        />
        <input
            type="radio"
            id={`radio-${index}-2`}
            name={`contentRadio-${index}`}
            checked={selectedRadio === index}
            onChange={() => onChange(index)}
        />
    </div>
);

export default RadioButtons;

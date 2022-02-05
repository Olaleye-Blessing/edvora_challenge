import { ChangeEventHandler, FC, HTMLAttributes } from "react";
import { StyledSelect } from "./Styles";

interface ISelect {
    name: string;
    value: string;
    id: string;
    options: string[];
    className?: string;
    others?: HTMLAttributes<HTMLSelectElement>;
    onChange: ChangeEventHandler<HTMLSelectElement>;
}

const Index: FC<ISelect> = ({
    id,
    name,
    value,
    others,
    className = "",
    options,
    onChange,
}) => {
    return (
        <StyledSelect>
            <select
                className={className}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                {...others}
            >
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </StyledSelect>
    );
};
export default Index;

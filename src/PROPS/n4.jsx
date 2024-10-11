import { useState } from "react"

const Contador = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    return { contador, incrementar };
}

export default Contador
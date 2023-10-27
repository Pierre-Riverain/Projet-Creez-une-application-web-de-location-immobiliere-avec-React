import { useState, useEffect } from "react";
import datasFile from '../../datas/datas.json';

/* Ce hook permet de lire les données contenu dans l'adresse URL.' */
function useDatas() {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        setDatas(datasFile);
    }, []);

    return { datas };
}
export { useDatas };
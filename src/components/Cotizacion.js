import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    
    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>Mayor precio del dia: <span>{resultado.HIGHDAY}</span></Info>
            <Info>Menor precio del dia: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variacion 24Hs: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Última actualización: <span>{resultado.PRICE}</span></Info>
        </ResultadoDiv>
     );
}
 
export default Cotizacion;
import "./Table.css"

export const Table = ({ arrayInformation = [] }) => {
    return (
        <div className="contenedor">
            <table className="tabla">
                <thead className="tabla__thead">
                    <tr>
                        <th classNameName="tablaTh">Nombre</th>
                        <th className="tablaTh">NSS</th>
                        <th className="tablaTh">CURP</th>
                        <th className="tablaTh">Tipo de Sangre</th>
                    </tr>
                </thead>
                <tbody className="tableTbody">
                    {arrayInformation.map((person) =>
                        <tr className="tablaTr">
                            <td className="tablaTd">{person.nombre + '' + person.apPaterno + '' + person.apMaterno}</td>
                            <td className="tablaTd">{person.numeroDeSeguroSocial}</td>
                            <td className="tablaTd">{person.curp}</td>
                            <td className="tablaTd">{person.tipoDeSangre}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

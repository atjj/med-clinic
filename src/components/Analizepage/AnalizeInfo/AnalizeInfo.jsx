import React from 'react';
import styles from './AnalizeInfo.module.scss';
import container from '../../../styles/ContainerStyles.module.scss';
import DB from './analize.json';
import { useTable } from 'react-table';
import { useMemo } from 'react';

const AnalizeInfo = () => {
    const data = useMemo(() => DB, []);
    const columns = useMemo(() => [
        {
            Header: "Название",
            accessor: "name",
            Cell: ({ row }) => (
                <div>
                    <span>{row.original.name}</span>
                    <button className={styles.addToCart} onClick={() => handleClick(row.index)}>Добавить в корзину</button>
                </div>
            )
        },
        {
            Header: "Цена",
            accessor: "price"
        },
        {
            Header: "Материал",
            accessor: "material"
        },
        {
            Header: "Условия подготовки к анализам *",
            accessor: "conditions"
        },
        {
            Header: "Время забора материала *",
            accessor: "timeMaterial"
        },
        {
            Header: "Время выдачи результатов *",
            accessor: "mainTime"
        }
    ], []);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    const handleClick = (index) => {
        const analyzeData = localStorage.getItem('analyze');
        const currentAnalyzes = analyzeData ? JSON.parse(analyzeData) : [];
        const newAnalyze = data[index];
    
        const updatedAnalyzes = Array.from(currentAnalyzes);
        updatedAnalyzes.push(newAnalyze);
        localStorage.setItem('analyze', JSON.stringify(updatedAnalyzes));
        console.log(updatedAnalyzes);
    }

    return (
        <div className={container.container}>
            <div className={styles.AnalizeInfo}>
                <div className={styles.tables}>
                    <table {...getTableProps}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render("Header")}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>

                        <tbody {...getTableBodyProps}>
                            {rows.map((row) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => (
                                            <td {...cell.getCellProps()}>
                                                {cell.render("Cell")}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AnalizeInfo;

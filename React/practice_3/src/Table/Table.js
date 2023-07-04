import { React, useMemo } from "react";
import "../App.css";   
import { useTable } from 'react-table';
import { Columns } from "./columns";
import TableData from './TableData.json';
import '../components/css/Table.css';

function Table() {
  const column = useMemo(() => Columns, []);
  const data = useMemo(() => TableData, []);
  const tableInstance = (useTable = {
    column,
    data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, 
   footerGroups ,rows, prepareRow } =
    tableInstance;
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
                headerGroup.headers.map((column) =>( <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {
            rows.map(row=>{
                prepareRow(row)
                return(<tr {...row.getRowProps()}>
                    {
                        row.cells.map((cell)=>{
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })
                    } 
                  </tr>)
            })
        }
      </tbody>
      <tfoot>
        {
          footerGroups.map((footerGroup)=>(<tr {...footerGroup.getFooterGroupProps()}>
            {
              footerGroup.headers.map(column =>(
                <td {...column.getFooterProps}>
                  {
                    column.render('Footer')
                  }
                </td>
              ))
            }
          </tr>))
        }
      </tfoot>
    </table>
  );
}

export default Table;

// Using this component
// <HistoryTable />
//pagination is disabled

import theme from "../theme";

import DataTable from "react-data-table-component";
import "../index.css";
import {  Link, ChakraProvider } from "@chakra-ui/react";
import "../data/historyData";
import historyData from "../data/historyData";
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function HistoryTable() {
  const columns = [
    {
      name: "From",
      selector: (row) => row.returnValues.from
      // sortable: true
    },
    {
      name: "To",
      selector: (row) => row.returnValues.to
      // sortable: true
    },
    {
      name: "Transaction",
      // selector: (row) => row.transactionHash
      cell: (row) => (
        <>
          <Link
            href={"https://etherscan.io/tx/" + row.transactionHash}
            isExternal
            
          >
            {truncate(row.transactionHash)}<ExternalLinkIcon mx='2px'/>
          </Link>
        </>
      ),
      right:true,
    }
  ];
  function truncate(str) {
    return str.length > 10 ? str.substr(0, 10) + "..." : str;
  }

  const customStyles = {
    rows: {
        style: {
            minHeight: '54px', // override the row height
            fontWeight: 'medium',
            fontSize:'14px',
        },
    },
    headRows:{
      style:{
        fontSize:'13px',
      },
    },
    headCells: {
        style: {
            padding: '10px', // override the cell padding for head cells
            fontSize:'13px',
            fontWeight:'bold',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
            
        },
    },
};

  return (
    <ChakraProvider theme={theme}>
    <div className="historyTable">
      <DataTable
        // title="Movies"
        noHeader
        columns={columns}
        data={historyData}
        defaultSortFieldID={1}
        pagination
        fixedHeader
        fixedHeaderScrollHeight={"365px"}
        customStyles={customStyles}
      />
    </div>
    </ChakraProvider>
  );
}
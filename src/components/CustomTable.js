import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useMemo } from "react";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  td: {
    textAlign: "left",
    padding: theme.spacing(1),
    border: "1px solid #dddddd",
    background: "#F5F5F5",
  },
  th: {
    textAlign: "left",
    padding: theme.spacing(2),
    border: "1px solid #dddddd",
    backgroundColor: "black",
    color: "white",
    fontWeight: "bolder",
  },
  sortIcon: {
    color: "white",
  },
}));

function CustomTable({ tableData, columnsToSort }) {
  const classes = useStyles();
  const [columnKey, setColumnKey] = useState(null);
  let tableHeaders;
  useMemo(() => {
    if (columnKey) {
      tableData?.sort((currentElement, nextElement) => {
        if (currentElement[columnKey] < nextElement[columnKey]) return -1;

        if (currentElement[columnKey] > nextElement[columnKey]) return 1;

        return 0;
      });
    }
    return tableData;
  }, [tableData, columnKey]);
  if (tableData.length > 0) tableHeaders = Object.keys(tableData[0]);
  return (
    <div>
      <table className={classes.table}>
        <tr>
          {tableHeaders?.map((tableHeader) => (
            <th className={classes.th}>
              {tableHeader}
              {columnsToSort?.includes(tableHeader) && (
                <IconButton
                  aria-label={tableHeader}
                  onClick={() => setColumnKey(tableHeader)}
                >
                  <ArrowUpwardIcon className={classes.sortIcon} />
                </IconButton>
              )}
            </th>
          ))}
        </tr>
        {tableData.map((data) => (
          <tr>
            {Object.entries(data).map((obj, ind) => {
              return (
                <td className={classes.td}>{Object.entries(data)[ind][1]}</td>
              );
            })}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default CustomTable;

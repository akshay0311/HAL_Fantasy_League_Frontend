import React from "react";
import { makeStyles } from "@material-ui/core";

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
}));

function CustomTable({ tableData }) {
  const classes = useStyles();
  let tableHeaders;
  if (tableData.length > 0) tableHeaders = Object.keys(tableData[0]);
  return (
    <div>
      <table className={classes.table}>
        <tr>
          {tableHeaders?.map((tableHeader) => (
            <th className={classes.th}>{tableHeader}</th>
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

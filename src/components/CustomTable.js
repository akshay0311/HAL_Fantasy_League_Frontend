import React, { useMemo, useState } from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom : theme.spacing(2)
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
  pagination: {
    marginTop: theme.spacing(4),
  },
}));

function CustomTable({ tableData, columnsToSort }) {
  const classes = useStyles();
  const [columnKey, setColumnKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  let tableHeaders;

  useMemo(() => {
    if (columnKey && sortOrder === "asc") {
      tableData?.sort((currentElement, nextElement) => {
        if (currentElement[columnKey] < nextElement[columnKey]) return -1;

        if (currentElement[columnKey] > nextElement[columnKey]) return 1;

        return 0;
      });
    } else if (columnKey && sortOrder === "desc") {
      tableData?.sort((currentElement, nextElement) => {
        if (currentElement[columnKey] > nextElement[columnKey]) return -1;

        if (currentElement[columnKey] < nextElement[columnKey]) return 1;

        return 0;
      });
    }
    return tableData;
  }, [tableData, columnKey, sortOrder]);

  const iconClicked = (tableHeader) => {
    setColumnKey(tableHeader);
    console.log(sortOrder);
    if (sortOrder === "asc") setSortOrder("desc");
    else setSortOrder("asc");
  };

  if (tableData.length > 0) tableHeaders = Object.keys(tableData[0]);
  else tableHeaders = Object.keys(tableData);
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
                  onClick={() => iconClicked(tableHeader)}
                >
                  {sortOrder === "asc" ? (
                    <ArrowUpward className={classes.sortIcon} />
                  ) : (
                    <ArrowDownward className={classes.sortIcon} />
                  )}
                </IconButton>
              )}
            </th>
          ))}
        </tr>
        {tableData.length > 0 ? (
          tableData?.map((data) => (
            <tr>
              {Object.entries(data).map((obj, ind) => {
                return (
                  <td className={classes.td}>{Object.entries(data)[ind][1]}</td>
                );
              })}
            </tr>
          ))
        ) : (
          <p>No Data Found</p>
        )}
      </table>
      {tableData.length > 0 && (
        <div clasName={classes.pagination}>
          <Stack spacing={2}>
            <Pagination count={10} shape="rounded" />
          </Stack>
        </div>
      )}
    </div>
  );
}

export default CustomTable;

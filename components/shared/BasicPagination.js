import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function BasicPagination({ page, handleNextPage }) {
  const classes = useStyles();
  return (
    <div className="d-flex justify-content-center">
      <div className={classes.root}>
        <Pagination
          onClick={handleNextPage}
          count={page}
          hidePrevButton
          hideNextButton
          color="primary"
        />
      </div>
    </div>
  );
}
export default BasicPagination;

import { Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import AddContentForm from "./AddContentForm";

const ListFetch = () => {
  const [listData, setListData] = useState([]);

  const saveDataHandler = (data) => {
    setListData(data);
  };

  const deleteHandler = (e) => {
    // console.log(title);
    listData.index(e);
  };

  return (
    <>
      <Container maxWidth="sm" mt={5}>
        <AddContentForm onSaveListData={saveDataHandler} />
        {listData?.map((title, index) => {
          return (
            <Typography
              variant="h5"
              sx={{ padding: 2, backgroundColor: "green", mt: 2 }}
              key={index}
              >
              {title}
            </Typography>
          );
        })}
      </Container>
    </>
  );
};

export default ListFetch;

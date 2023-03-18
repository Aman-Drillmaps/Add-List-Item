import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const AddContentForm = (props) => {
  const defaultData = ["Here is Title"];

  const [title, setTitle] = useState("");

  const [data, setData] = useState(defaultData);

  const TitleHandler = (e) => {
    setTitle(e.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setData((preTitle) => {
      return [title, ...preTitle];
    });
    setTitle('')
  };
  props.onSaveListData(data);

  return (
    <>
      <form style={{ marginTop: 50 }} onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={title}
          fullWidth
          onChange={TitleHandler}
        />
        <Button
          variant="contained"
          color="success"
          sx={{ mt: 3 }}
          fullWidth
          type="submit"
          
          >
          Add List
        </Button>
      </form>
    </>
  );
};

export default AddContentForm;

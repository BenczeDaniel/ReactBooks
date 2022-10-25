import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getSelBooks } from "./getData";
import { useQuery } from "react-query";
import {SelBooks} from './SelBooks';

export const Category = ({ categories,title }) => {
  const [categ, setCateg] = useState("");
  const {data,status} = useQuery(["books",categ,title],getSelBooks)

  const handleChange = (event) => {
    setCateg(event.target.value);
  };
  {status=='success' && console.log(data.data)}
  return (
    <Box>
      <Box sx={{ minWidth: 120, maxWidth:300, margin: 2 , bgcolor:'white'}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Kategóriák</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categ}
            label="Kategória"
            onChange={handleChange}
          >
            {categories.map((obj) => (
              <MenuItem key={obj.category} value={obj.category}>{obj.category}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    {status=='error'  && <div>Error fetching DATA...</div>}
    {status=='loading' && <div>Fetching data...</div>}
    {status=='success' && <SelBooks data={data.data}/>}
    </Box>
  );
};

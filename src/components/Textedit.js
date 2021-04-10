import React from "react";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function Textedit() {
  return (
    <TextField
      placeholder="Enter keywords..."
      variant="outlined"
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon color="primary" className="cursorp" />
          </InputAdornment>
        ),
      }}
    />
  );
}

import React from "react";
import ListItem from "@material-ui/core/ListItem";

export default function Listitem({ text }) {
  return (
    <ListItem>
      <p className="cursorp text500">{text}</p>
    </ListItem>
  );
}

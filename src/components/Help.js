import { useState } from "react";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export default function Help() {
  const [open, setOpen] = useState(false);
  return (
    <div className="help">
      <HelpOutlineIcon
        className="icon"
        onClick={() => setOpen((open) => !open)}
      />
      {open && (
        <div className="help-box">
          <p>
            This website made by Mukhamet Tilekbergen for testing purposes. If
            you have any question about site or author please feel free to
            contact!
          </p>
        </div>
      )}
    </div>
  );
}

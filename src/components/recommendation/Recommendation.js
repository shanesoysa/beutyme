import { useState } from "react";
import { Grid } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Recommendation() {
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setTime(event.target.value);
  };
  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={6} sm={3}>
        <br />
        <h2>
          <b>Select Features</b>
        </h2>
        <br />
        <FormControl sx={{ m: 1, minWidth: 120, ml: 0 }}>
          <InputLabel id="demo-simple-select-helper-label">Time</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={time}
            label="Time"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Day</MenuItem>
            <MenuItem value={20}>Night</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120, ml: 0 }}>
          <InputLabel id="demo-simple-select-helper-label">Occasion</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={occasion}
            label="Occasion"
            onChange={handleOccasionChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Wedding</MenuItem>
            <MenuItem value={20}>Party</MenuItem>
          </Select>
        </FormControl>
        <Button variant="outlined" onClick={handleClickOpen}>
          Login
        </Button>
        <Dialog open={open} onClose={handleClose} fullWidth={60}>
          <DialogTitle sx={{ backgroundColor: "#263238", color: "white" }}>
            Login
          </DialogTitle>
          <br />
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Username"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              type="Password"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Login</Button>
          </DialogActions>
        </Dialog>
      </Grid>
      <Grid item xs={6} sm={3}>
        <br />
        <h2>
          <b>Detected Features</b>
        </h2>

        <br />
        <p>
          <b>Hair Colour: &nbsp;</b>Black&nbsp;
        </p>
        <p>
          <b>Skin Type:&nbsp;</b>Oily&nbsp;
        </p>
        <p>
          <b>Skin Tone:&nbsp;</b> Neutral
        </p>
        <p>
          <b>Clothing Colour:&nbsp;</b>Red&nbsp;
        </p>
        <p>
          <b>Clothing Type:&nbsp;</b>Dress
        </p>
        <br />
      </Grid>
      <Grid item xs={12} sm={6}>
        <br />
        <h2>
          <b>Personalized Recommendations</b>
        </h2>
        <br />
        <p>
          <b>Foundation intensity: &nbsp;</b>Heavy&nbsp;|
          <b>&nbsp;Foundation colour:&nbsp;</b>#000000
        </p>
        <p>
          <b>Lipstick type:&nbsp;</b>Satin&nbsp;|
          <b>&nbsp;Lipstick colour:&nbsp;</b>#ffffff
        </p>
        <p>
          <b>Eyeshadow style:&nbsp;</b>Full-cut&nbsp;|
          <b>&nbsp;Eyeshadow colour:&nbsp;</b>#eeeeee
        </p>
        <br />
        <h2>
          <b>Trending Recommendations</b>
        </h2>
        <br />
        <p>
          <b>Foundation intensity: &nbsp;</b>Heavy&nbsp;|
          <b>&nbsp;Foundation colour:&nbsp;</b>#000000
        </p>
        <p>
          <b>Lipstick type:&nbsp;</b>Satin&nbsp;|
          <b>&nbsp;Lipstick colour:&nbsp;</b>#ffffff
        </p>
        <p>
          <b>Eyeshadow style:&nbsp;</b>Full-cut&nbsp;|
          <b>&nbsp;Eyeshadow colour:&nbsp;</b>#eeeeee
        </p>
        <br />
      </Grid>
    </Grid>
  );
}

export default Recommendation;

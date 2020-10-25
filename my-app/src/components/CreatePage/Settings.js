import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import store from '../../store'
import { connect } from 'react-redux'
import { updateFont } from '../../store/reducers/textWidget'
import "./Settings.css"

const { dispatch } = store;

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: "2vh",
    backgroundColor: "#f8f8ff", 
    width: "100%",
    height: "100%",
    textAlign: "left",

  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [font, setFont] = React.useState('Ten');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    // setFont(event.target.value);
    updateSelectedFont(event, event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="settings-container">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Fonts</InputLabel>
        <Select
        disableUnderline 
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={font}
          onChange={handleChange}
        >
          <MenuItem value={'Ten'}>Ten</MenuItem>
          <MenuItem value={'Twenty'}>Twenty</MenuItem>
          <MenuItem value={'Thirty'}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export const updateSelectedFont = (e, font) => {
    e.preventDefault()
   dispatch(updateFont(font))
}

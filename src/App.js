import React, { useState } from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

import axios from 'axios';

import { baseURL, dataPoints } from './util/constants'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  // formControl: {
  //   margin: theme.spacing(1),
  //   minWidth: 120,
  // },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {

  const [cityName, setCityName] = useState('');
  const [units, setUnits] = useState('metric');
  const [countryCode, setCountryCodes] = useState('');

  const classes = useStyles();
  const query = `http://${baseURL}?q=${cityName},${countryCode}&cnt=${dataPoints}&units=${units}&APPID=${process.env.REACT_APP_API_KEY}`
  const onSubmit = () => { 
    axios.get(query).then(response => console.log(response.data))
  }

  return (
    <div className="App">
      <h1>Weather forcast</h1>
      <form className={classes.container} noValidate autoComplete="off">
        <div>
          <TextField
            className={classes.textField}
            value={cityName}
            onChange={(e) => { setCityName(e.target.value) }}
            label="City"
            margin="normal"
          />
        </div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={countryCode}
            onChange={(e) => { setCountryCodes(e.target.value) }}
          >
            <MenuItem value={'ca'}>Canada</MenuItem>
            <MenuItem value={'in'}>India</MenuItem>
            <MenuItem value={'ie'}>Ireland</MenuItem>
            <MenuItem value={'pl'}>Poland</MenuItem>
            <MenuItem value={'gb'}>United Kingdom of Great Britain and Northern Ireland</MenuItem>
            <MenuItem value={'us'}>United States of America</MenuItem>
          </Select>
        </FormControl>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Units</FormLabel>
          <RadioGroup aria-label="gender" name="gender2" value={units} onChange={(e) => { setUnits(e.target.value) }}>
            <FormControlLabel
              value="metric"
              control={<Radio color="primary" />}
              label="metric"
              labelPlacement="start"
            />
            <FormControlLabel
              value="imperial"
              control={<Radio color="primary" />}
              label="imperial"
              labelPlacement="start"
            />
          </RadioGroup>
          <Button variant="contained" color="primary" onClick={onSubmit} className={classes.button}>
            Get Forcast
      </Button>
        </FormControl>
      </form>
    </div>
  );
}

export default App;

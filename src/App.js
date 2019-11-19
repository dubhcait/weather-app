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
import filterApiResponse from './util/filterApiResponse'


import Statistics from './components/statistics'



function App() {

  const [cityName, setCityName] = useState('');
  const [units, setUnits] = useState('metric');
  const [countryCode, setCountryCodes] = useState('');
  const [filteredData, setFilteredData] = useState(null)


  const classes = useStyles();
  const query = `https://${baseURL}?q=${cityName},${countryCode}&cnt=${dataPoints}&units=${units}&APPID=${process.env.REACT_APP_API_KEY}`
  const onSubmit = () => {
    axios.get(query).then(response => {

      setFilteredData(filterApiResponse(response.data.list))
    }).catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Weather forcast</h1>
      <form className={classes.container} noValidate autoComplete="off">
        <div>
          <TextField
          required
            className={classes.textField}
            value={cityName}
            onChange={(e) => { setCityName(e.target.value) }}
            label="City"
            margin="normal"
          />
        </div>
        <FormControl required className={classes.formControl}>
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

        <FormControl component="fieldset">
          <FormLabel component="legend">Units</FormLabel>
          <RadioGroup className={classes.units} value={units} onChange={(e) => { setUnits(e.target.value) }}>
            <FormControlLabel
              className={classes.label}
              value="metric"
              control={<Radio color="primary" />}
              label="metric"
              labelPlacement="start"
            />
            <FormControlLabel
              className={classes.label}
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
      {filteredData ? <Statistics data={filteredData} /> : null}
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  button: {
    margin: 'auto',
    marginTop: '16px',
    marginBottom: '16px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: 'auto',
    width: '60%',
  },
  textField: {
    margin: theme.spacing(3),
    width: '90%',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  units:{
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
  },
  label: {
  justifyContent: 'center',
  },
}));

export default App;

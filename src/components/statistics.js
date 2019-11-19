import React, { useState, useEffect } from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

import { createDataTracker } from '../util/dataTracker'


export default (props) => {
    const [displayType, setDisplayType] = useState('dayTemp')
    const [displayData, setDisplayData] = useState(null)

    useEffect(() => { 
        createDataTracker(props.data[displayType]).then(res => (setDisplayData(res)))}, [displayType, props.data])
        const classes = useStyles();


    return (
        <div className={classes.container}>
            <RadioGroup aria-label="Statistics of weanther Forcast" className={classes.options} value={displayType} onChange={(e) => {setDisplayType(e.target.value) }}>
                <FormControlLabel
                    value="dayTemp"
                    control={<Radio color="primary" />}
                    label="Day Temperature"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="nightTemp"
                    control={<Radio color="primary" />}
                    label="night Temperature"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="morningTemp"
                    control={<Radio color="primary" />}
                    label="Morning Temperature"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="humidity"
                    control={<Radio color="primary" />}
                    label="Humidity"
                    labelPlacement="start"
                />
            </RadioGroup>
            {displayData ? <div className={classes.statistics}> 


<div>
    <h3>{`Mimimum ${displayType}`}</h3>
            <p>{displayData.showMin()}</p>
</div>

<div>
    <h3>{`Maximum ${displayType}`}</h3>
            <p>{displayData.showMax()}</p>
</div>
<div>
    <h3>{`Mean ${displayType}`}</h3>
            <p>{displayData.showMean()}</p>
</div>
<div>
    <h3>{`Mode ${displayType}`}</h3>
            <p>{displayData.showMode()}</p>
</div>

            </div> : null}
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
      },
      options: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '20px'
      },
      statistics:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
      }


}))

import React from 'react'
import { WiDaySunny,WiCloud } from 'weather-icons-react';
import Card from '@material-ui/core/Card';
import { makeStyles} from '@material-ui/core/styles';
export default function Day({dayofWeek,temp,condition}) {
    const classes = useStyles()
    return (
            <Card className={classes.root}>
            <h4>{dayofWeek}</h4>
            {condition == 'Clouds'?
            <WiCloud size={24} color='#000' />:
            <WiDaySunny size={24} color='#000' />
            }
            <h4>{temp}{'°'}C</h4>
            </Card>
    )
}




const useStyles = makeStyles({
   
    root: {
        width: "200px",
      border:"2px solid black",
      marginRight:"1rem",
      backgroundColor:"#f5f5f5"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

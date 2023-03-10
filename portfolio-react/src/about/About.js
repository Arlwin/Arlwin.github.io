import './About.scss';
import { aboutMeText } from '../Constants';

import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Avatar, Box } from '@mui/material';

const PROFILE = require('../assets/profile.webp')

export class About extends Component {
  render() {
    return (
        <Grid
            className='main-container'
            display="flex" 
            alignItems="center"
            justifyContent="center"
        >
            <Grid
                direction="column"
                width="30vw"
            >
                <Typography 
                    variant="h3" 
                    component="h1"
                    sx = {{
                        color: 'text.main'
                    }}
                >
                    Hi, I'm Arlwin!
                </Typography>
                
                <Typography 
                    id="aboutMeText"
                    variant="body" 
                    component="span" 
                    sx = {{
                        color: 'text.main'
                    }}
                >
                    { aboutMeText }
                </Typography>
            </Grid>
        
            <Box width={100}></Box>

            <Avatar
                id = "profile"
                alt = "Profile"
                src = { PROFILE }
                className = 'avatar'
                sx = {{
                }}
            />
        </Grid>
    )
  }
}

export default About
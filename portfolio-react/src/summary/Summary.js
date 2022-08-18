import { Component } from 'react'

import { experience } from '../Constants';

import { Box } from '@mui/material'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

export class Summary extends Component {

    createTimelines() {

        const timelines = experience.map(
            (exp) => 
            <TimelineItem>
                <TimelineOppositeContent color="text.main">
                    <Typography variant="overline">
                        { exp['start'] } - { exp['end'] }
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                    sx={{
                        color: 'text.main',
                        mb: '50px',
                    }}
                >
                    <Typography variant="h6" component="span">
                        { exp['title'] }
                    </Typography>
                    <Typography variant="subtitle1">
                        { exp['subtitle'] }
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        )

        return timelines;
    }

    render() {
        return (
            <Box
                className='main-container'
            >
                <Grid
                    display="flex" 
                    alignItems="center"
                    justifyContent="center"
                >
                    <Timeline>
                        { this.createTimelines() }
                    </Timeline>
                </Grid>
            </Box>
        )
    }
}

export default Summary
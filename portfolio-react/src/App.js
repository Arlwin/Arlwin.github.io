import './App.css';

import { customTheme } from './Theme';
import { ThemeProvider } from '@mui/material/styles';

import About from './about/About';
import { Box } from '@mui/material';
import Summary from './summary/Summary';

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <Box 
                className="App"
                sx = {{
                    bgcolor: 'secondary.main'
                }}
            >
                <About />
                <Summary />
            </Box>
        </ThemeProvider>
    );
}

export default App;

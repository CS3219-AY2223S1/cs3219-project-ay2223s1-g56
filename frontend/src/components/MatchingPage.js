import * as React from 'react';
import {
    Box, 
    Typography,
    Button,
} from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useState} from "react";


function MatchingPage() {
    const [view, setView] = useState('list');
    //const [isMatchSuccess, setIsMatchSuccess] = useState(false)
    
    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    const handleFindMatch = async () => {
        //TODO: handle find match
        //setIsMatchSuccess(true);
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
            <Box display={"flex"} flexDirection={"column"} margin={"100"} border={1} justifyContent={"center"} width={"50%"} padding={5}>
                <Typography align="center" fontSize={"25px"}><b>Difficulty Level:</b></Typography>
                <br></br>
                <br></br>
                <ToggleButtonGroup
                    orientation="vertical"
                    value={view}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton disableRipple value="easy">
                        <Typography>Easy</Typography>
                    </ToggleButton>
                    <ToggleButton disableRipple value="medium">
                        <Typography>Medium</Typography>
                    </ToggleButton>
                    <ToggleButton disableRipple value="hard">
                        <Typography>Hard</Typography>
                    </ToggleButton>
                </ToggleButtonGroup>
                <br></br>
                <br></br>
                <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                    <Button variant={"outlined"} onClick={handleFindMatch}>Find a Match!</Button>
                </Box>
                
            </Box>
        </div>
    )
}

export default MatchingPage;

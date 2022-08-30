import * as React from 'react';
import {
    Box, 
    Button,
} from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useState} from "react";
import './MatchingPage.css';


function MatchingPage() {
    const [view, setView] = useState('list');
    
    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    const handleFindMatch = async () => {
        //TODO: handle find match
    }

    return (
        <div className="div">
            <Box id="box">
                <p id="title">Difficulty Level:</p>
                <ToggleButtonGroup
                    orientation="vertical"
                    value={view}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton disableRipple value="easy">
                        <p>Easy</p>
                    </ToggleButton>
                    <ToggleButton disableRipple value="medium">
                        <p>Medium</p>
                    </ToggleButton>
                    <ToggleButton disableRipple value="hard">
                        <p>Hard</p>
                    </ToggleButton>
                </ToggleButtonGroup>
                <Box id="matchButton">
                    <Button variant={"outlined"} onClick={handleFindMatch}>Find a Match!</Button>
                </Box>
                
            </Box>
        </div>
    )
}

export default MatchingPage;

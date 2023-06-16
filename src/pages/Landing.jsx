import React from 'react'
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Landing() {
    return (
        <div>

            This is Landing Page of The Tamarind Tree

            <br /><br />

            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Choose event type</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="pre_wedding_rituals" control={<Radio />} label="Pre-Wedding Rituals" />
                    <FormControlLabel value="wedding" control={<Radio />} label="Wedding" />
                    <FormControlLabel value="reception" control={<Radio />} label="Reception" />
                    <FormControlLabel value="milestone" control={<Radio />} label="Milestones" />
                    <FormControlLabel value="cocktails" control={<Radio />} label="Cocktails" />

                </RadioGroup>
            </FormControl>

            <br /><br />

            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Choose primary color of decor</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="red" control={<Radio />} label="Red" />
                    <FormControlLabel value="yellow" control={<Radio />} label="Yellow" />
                    <FormControlLabel value="offwhite" control={<Radio />} label="Offwhite" />
                    <FormControlLabel value="pink" control={<Radio />} label="Pink" />
                    <FormControlLabel value="blue" control={<Radio />} label="Blue" />

                </RadioGroup>
            </FormControl>



            <Link to="/second" >
                Click here to see Design Items
            </Link>



        </div>
    )
}

export default Landing;
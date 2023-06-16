import React, { useEffect, useState } from 'react'
import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Slider,
    Stack,
    Typography,
    ToggleButtonGroup,
    ToggleButton,
    FormGroup,
    Checkbox,
} from "@mui/material";
import './style.css';
import { useConfigurator } from "../contexts/Configurator";
export const LawnInterface = () => {

    // const { tableWidth, setTableWidth, legs, setLegs, legsColor, setLegsColor } =

    const {
        //Lawn
        lawnCeilingDrapeOne,
        setLawnCeilingDrapeOne,
        lawnCeilingDrapeTwo,
        setLawnCeilingDrapeTwo,
        lawnCeilingDrapeThree,
        setLawnCeilingDrapeThree,
        lawnCeilingDrapeFour,
        setLawnCeilingDrapeFour,
        lcdOneTexture,
        setLcdOneTexture,
        lcdTwoTexture,
        setLcdTwoTexture,
        lcdThreeTexture,
        setLcdThreeTexture,
        lcdFourTexture,
        setLcdFourTexture,

        lawnCeilingFlowerOne,
        setLawnCeilingFlowerOne,
        lawnCeilingFlowerTwo,
        setLawnCeilingFlowerTwo,
        lawnCeilingFlowerThree,
        setLawnCeilingFlowerThree,

        lawnCeilingProps,
        setLawnCeilingProps,


        // lawn pillars
        lawnPillarDrapeOne,
        setLawnPillarDrapeOne,
        lawnPillarDrapeTwo,
        setLawnPillarDrapeTwo,
        lpdOneTexture,
        setLpdOneTexture,
        lpdTwoTexture,
        setLpdTwoTexture,


    } = useConfigurator();


    // Lawn

    const [lawnPart, setLawnPart] = useState('lawnCeiling');
    const handleChangeTen = (event, newLawnPart) => {
        setLawnPart(newLawnPart);
    };

    // Lawn Drapes one two three
    const handleChangeEleven = event => {
        setLawnCeilingDrapeOne(current => !current);
    };
    const handleChangeTwelve = event => {
        setLawnCeilingDrapeTwo(current => !current);
    };
    const handleChangeThirteen = event => {
        setLawnCeilingDrapeThree(current => !current);
    };
    const handleChangeForteen = event => {
        setLawnCeilingDrapeFour(current => !current);
    };



    // Flower one two three
    const handleChangeSeven = event => {
        setGazeboCeilingFlowerOne(current => !current);
    };
    const handleChangeEight = event => {
        setGazeboCeilingFlowerTwo(current => !current);
    };
    const handleChangeNine = event => {
        setGazeboCeilingFlowerThree(current => !current);
    };

    // lawn pillars
    const handleChangeEighteen = event => {
        setLawnPillarDrapeOne(current => !current);
    };
    const handleChangeNineteen = event => {
        setLawnPillarDrapeTwo(current => !current);
    };
    const handleChangeTwenty = event => {
        setLawnPillarDrapeThree(current => !current);
    };


    console.log({
        lawnCeilingDrapeOne, lcdOneTexture, lcdTwoTexture
        , lcdThreeTexture, lawnCeilingDrapeFour, lcdFourTexture
    });

    return (
        <>
            <ToggleButtonGroup
                className='toggleGazebo'
                color="primary"
                value={lawnPart}
                exclusive
                onChange={handleChangeTen}
                aria-label="gazeboPart"
            >
                <ToggleButton className='toggleGazebo' value="lawnCeiling">Ceiling</ToggleButton>
                <ToggleButton className='toggleGazebo' value="lawnPillars">Pillars</ToggleButton>
                <ToggleButton className='toggleGazebo' value="lawnFloor">Floor</ToggleButton>
                <ToggleButton className='toggleGazebo' value="lawnSeats">Seats</ToggleButton>

            </ToggleButtonGroup>
            <br /><br />

            {lawnPart === 'lawnCeiling' && (
                <>

                    <FormGroup>
                        <FormLabel>Drapes</FormLabel>
                        <FormControlLabel
                            required control={<Checkbox />}
                            onChange={handleChangeEleven}
                            label="Drape 1"
                        />

                        {lawnCeilingDrapeOne && (
                            <>
                                {/* <Box className="glass" p={0}> */}
                                <div className='gcdDiv'>
                                    <FormControl>
                                        {/* <FormLabel>Textures</FormLabel> */}
                                        <RadioGroup
                                            value={lcdOneTexture}
                                            onChange={(e) => setLcdOneTexture(parseInt(e.target.value))}
                                            className='gcdTexture'
                                        >
                                            <FormControlLabel
                                                value={0}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texOne/grey.jpg' />}
                                            />

                                            <FormControlLabel
                                                value={1}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texTwo/red.jpg' />} />

                                            <FormControlLabel
                                                value={2}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texThree/yellow.jpg' />} />

                                            <FormControlLabel
                                                value={3}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texFour/cream.jpg' />} />

                                            <FormControlLabel
                                                value={4}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texFive/translucent.png' />} />

                                            <FormControlLabel
                                                value={5}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texSix/lightGreen.jpg' />} />

                                            <FormControlLabel
                                                value={6}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texSeven/orange.jpg' />} />

                                            <FormControlLabel
                                                value={7}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texEight/lightPink.jpg' />} />

                                            <FormControlLabel
                                                value={8}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texNine/lightVelvet.jpg' />} />

                                            <FormControlLabel
                                                value={9}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texTen/blue.jpg' />} />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                {/* </Box> */}

                            </>
                        )}

                        <FormControlLabel
                            required control={<Checkbox />}
                            onChange={handleChangeTwelve}
                            label="Drape 2"
                        />

                        {lawnCeilingDrapeTwo && (
                            <>
                                {/* <Box className="glass" p={0}> */}
                                <div className='gcd2Div'>
                                    <FormControl>
                                        {/* <FormLabel>Textures</FormLabel> */}
                                        <RadioGroup
                                            value={lcdTwoTexture}
                                            onChange={(e) => setLcdTwoTexture(parseInt(e.target.value))}
                                            className='gcdTexture'
                                        >
                                            <FormControlLabel
                                                value={0}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texOne/grey.jpg' />}
                                            />

                                            <FormControlLabel
                                                value={1}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texTwo/red.jpg' />} />

                                            <FormControlLabel
                                                value={2}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texThree/yellow.jpg' />} />

                                            <FormControlLabel
                                                value={3}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texFour/cream.jpg' />} />

                                            <FormControlLabel
                                                value={4}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texFive/translucent.png' />} />

                                            <FormControlLabel
                                                value={5}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texSix/lightGreen.jpg' />} />

                                            <FormControlLabel
                                                value={6}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texSeven/orange.jpg' />} />

                                            <FormControlLabel
                                                value={7}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texEight/lightPink.jpg' />} />

                                            <FormControlLabel
                                                value={8}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texNine/lightVelvet.jpg' />} />

                                            <FormControlLabel
                                                value={9}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texTen/blue.jpg' />} />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                {/* </Box> */}
                            </>
                        )}

                        <FormControlLabel
                            required control={<Checkbox />}
                            onChange={handleChangeThirteen}
                            label="Drape 3"
                        />
                        {lawnCeilingDrapeThree && (
                            <>
                                {/* <Box className="glass" p={0}> */}
                                <div className='gcd3Div'>
                                    <FormControl>
                                        {/* <FormLabel>Textures</FormLabel> */}
                                        <RadioGroup
                                            value={lcdThreeTexture}
                                            onChange={(e) => setLcdThreeTexture(parseInt(e.target.value))}
                                            className='gcdTexture'
                                        >
                                            <FormControlLabel
                                                value={0}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texOne/grey.jpg' />}
                                            />

                                            <FormControlLabel
                                                value={1}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texTwo/red.jpg' />} />

                                            <FormControlLabel
                                                value={2}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texThree/yellow.jpg' />} />

                                            <FormControlLabel
                                                value={3}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texFour/cream.jpg' />} />

                                            <FormControlLabel
                                                value={4}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texFive/translucent.png' />} />

                                            <FormControlLabel
                                                value={5}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texSix/lightGreen.jpg' />} />

                                            <FormControlLabel
                                                value={6}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texSeven/orange.jpg' />} />

                                            <FormControlLabel
                                                value={7}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texEight/lightPink.jpg' />} />

                                            <FormControlLabel
                                                value={8}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texNine/lightVelvet.jpg' />} />

                                            <FormControlLabel
                                                value={9}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texTen/blue.jpg' />} />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                {/* </Box> */}

                            </>
                        )}

                        <FormControlLabel
                            required control={<Checkbox />}
                            onChange={handleChangeForteen}
                            label="Drape 4"
                        />
                        {lawnCeilingDrapeFour && (
                            <>

                                <div className='gcd4Div'>
                                    <FormControl>

                                        <RadioGroup
                                            value={lcdFourTexture}
                                            onChange={(e) => setLcdFourTexture(parseInt(e.target.value))}
                                            className='gcdTexture'
                                        >
                                            <FormControlLabel
                                                value={0}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texOne/grey.jpg' />}
                                            />

                                            <FormControlLabel
                                                value={1}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texTwo/red.jpg' />} />

                                            <FormControlLabel
                                                value={2}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texThree/yellow.jpg' />} />

                                            <FormControlLabel
                                                value={3}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texFour/cream.jpg' />} />

                                            <FormControlLabel
                                                value={4}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texFive/translucent.png' />} />

                                            <FormControlLabel
                                                value={5}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texSix/lightGreen.jpg' />} />

                                            <FormControlLabel
                                                value={6}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texSeven/orange.jpg' />} />

                                            <FormControlLabel
                                                value={7}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texEight/lightPink.jpg' />} />

                                            <FormControlLabel
                                                value={8}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texNine/lightVelvet.jpg' />} />

                                            <FormControlLabel
                                                value={9}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texTen/blue.jpg' />} />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                {/* </Box> */}

                            </>
                        )}


                    </FormGroup>



                    {/* Flower Interface */}


                    {/* <Box className="glass" p={2}> */}
                    <FormGroup>
                        <FormLabel>Flowers</FormLabel>
                        <FormControlLabel
                            required control={<Checkbox />}
                            onChange={handleChangeSeven}
                            label="Flower 1"
                        />

                        {lawnCeilingFlowerOne && (
                            <>
                                <Box className="glass" p={2}>
                                    <FormControl>
                                        <FormLabel>Textures</FormLabel>
                                        <RadioGroup
                                            value={gcfOneTexture}
                                            onChange={(e) => setGcfOneTexture(e.target.value)}
                                        >
                                            <FormControlLabel
                                                value="gcfOneTextureOne"
                                                control={<Radio />}
                                                label="Texture 1"
                                            />
                                            <FormControlLabel value="gcfOneTextureTwo" control={<Radio />} label="Texture 2" />
                                            <FormControlLabel value="gcfOneTextureThree" control={<Radio />} label="Texture 3" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>

                            </>
                        )}

                        <FormControlLabel
                            required control={<Checkbox />}
                            onChange={handleChangeEight}
                            label="Flower 2"
                        />

                        {lawnCeilingFlowerTwo && (
                            <>
                                <Box className="glass" p={2}>
                                    <FormControl>
                                        <FormLabel>Textures</FormLabel>
                                        <RadioGroup
                                            value={gcfTwoTexture}
                                            onChange={(e) => setGcfTwoTexture(e.target.value)}
                                        >
                                            <FormControlLabel
                                                value="gcfTwoTextureOne"
                                                control={<Radio />}
                                                label="Texture 1"
                                            />
                                            <FormControlLabel value="gcfTwoTextureTwo" control={<Radio />} label="Texture 2" />
                                            <FormControlLabel value="gcfTwoTextureThree" control={<Radio />} label="Texture 3" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>

                            </>
                        )}

                        <FormControlLabel
                            required control={<Checkbox />}
                            onChange={handleChangeNine}
                            label="Flower 3"
                        />
                        {lawnCeilingFlowerThree && (
                            <>
                                <Box className="glass" p={2}>
                                    <FormControl>
                                        <FormLabel>Textures</FormLabel>
                                        <RadioGroup
                                            value={gcfThreeTexture}
                                            onChange={(e) => setGcfThreeTexture(e.target.value)}
                                        >
                                            <FormControlLabel
                                                value="gcfThreeTextureOne"
                                                control={<Radio />}
                                                label="Texture 1"
                                            />
                                            <FormControlLabel value="gcfThreeTextureTwo" control={<Radio />} label="Texture 2" />
                                            <FormControlLabel value="gcfThreeTextureThree" control={<Radio />} label="Texture 3" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>

                            </>
                        )}
                    </FormGroup>
                    {/* </Box> */}


                    {/* Props Interface */}


                    {/* <Box className="glass" p={2}> */}
                    <FormControl>
                        <FormLabel>Props</FormLabel>
                        <RadioGroup
                            value={lawnCeilingProps}
                            onChange={(e) => setLawnCeilingProps(e.target.value)}
                        >
                            <FormControlLabel
                                value="gcpOne"
                                control={<Radio />}
                                label="Props 1"
                            />
                            <FormControlLabel value="gcpTwo" control={<Radio />} label="Props 2" />
                            <FormControlLabel value="gcpThree" control={<Radio />} label="Props 3" />
                            <FormControlLabel value="gcpFour" control={<Radio />} label="Props 4" />

                        </RadioGroup>
                    </FormControl>
                    {/* </Box> */}




                </>
            )}








            {lawnPart === 'lawnPillars' && (
                <>

                    <FormGroup>
                        <FormLabel>Drapes</FormLabel>
                        <FormControlLabel
                            required control={<Checkbox />}
                            onChange={handleChangeEighteen}
                            label="Drape 1"
                        />

                        {lawnPillarDrapeOne && (
                            <>
                                {/* <Box className="glass" p={0}> */}
                                <div className='gcdDiv'>
                                    <FormControl>
                                        {/* <FormLabel>Textures</FormLabel> */}
                                        <RadioGroup
                                            value={lpdOneTexture}
                                            onChange={(e) => setLpdOneTexture(parseInt(e.target.value))}
                                            className='gcdTexture'
                                        >
                                            <FormControlLabel
                                                value={0}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texOne/grey.jpg' />}
                                            />

                                            <FormControlLabel
                                                value={1}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texTwo/red.jpg' />} />

                                            <FormControlLabel
                                                value={2}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texThree/yellow.jpg' />} />

                                            <FormControlLabel
                                                value={3}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texFour/cream.jpg' />} />

                                            <FormControlLabel
                                                value={4}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texFive/translucent.png' />} />

                                            <FormControlLabel
                                                value={5}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texSix/lightGreen.jpg' />} />

                                            <FormControlLabel
                                                value={6}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texSeven/orange.jpg' />} />

                                            <FormControlLabel
                                                value={7}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texEight/lightPink.jpg' />} />

                                            <FormControlLabel
                                                value={8}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texNine/lightVelvet.jpg' />} />

                                            <FormControlLabel
                                                value={9}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texTen/blue.jpg' />} />

                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                {/* </Box> */}

                            </>
                        )}

                        <FormControlLabel
                            required control={<Checkbox />}
                            onChange={handleChangeNineteen}
                            label="Drape 2"
                        />

                        {lawnPillarDrapeTwo && (
                            <>
                                {/* <Box className="glass" p={0}> */}
                                <div className='gcd2Div'>
                                    <FormControl>
                                        {/* <FormLabel>Textures</FormLabel> */}
                                        <RadioGroup
                                            value={lpdTwoTexture}
                                            onChange={(e) => setLpdTwoTexture(parseInt(e.target.value))}
                                            className='gcdTexture'
                                        >
                                            <FormControlLabel
                                                value={0}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texOne/grey.jpg' />}
                                            />

                                            <FormControlLabel
                                                value={1}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texTwo/red.jpg' />} />

                                            <FormControlLabel
                                                value={2}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texThree/yellow.jpg' />} />

                                            <FormControlLabel
                                                value={3}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texFour/cream.jpg' />} />

                                            <FormControlLabel
                                                value={4}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texFive/translucent.png' />} />

                                            <FormControlLabel
                                                value={5}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texSix/lightGreen.jpg' />} />

                                            <FormControlLabel
                                                value={6}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texSeven/orange.jpg' />} />

                                            <FormControlLabel
                                                value={7}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texEight/lightPink.jpg' />} />

                                            <FormControlLabel
                                                value={8}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texNine/lightVelvet.jpg' />} />

                                            <FormControlLabel
                                                value={9}
                                                control={<Radio />}
                                                label={<img className='grey' src='./gcdTextures/texTen/blue.jpg' />} />

                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </>
                        )}

                    </FormGroup>



                    {/* Flower Interface */}


                    {/* <Box className="glass" p={2}> */}
                    <FormGroup>
                        <FormLabel>Flowers</FormLabel>
                        <FormControlLabel
                            required control={<Checkbox />}
                            onChange={handleChangeSeven}
                            label="Flower 1"
                        />

                        {lawnCeilingFlowerOne && (
                            <>
                                <Box className="glass" p={2}>
                                    <FormControl>
                                        <FormLabel>Textures</FormLabel>
                                        <RadioGroup
                                            value={gcfOneTexture}
                                            onChange={(e) => setGcfOneTexture(e.target.value)}
                                        >
                                            <FormControlLabel
                                                value="gcfOneTextureOne"
                                                control={<Radio />}
                                                label="Texture 1"
                                            />
                                            <FormControlLabel value="gcfOneTextureTwo" control={<Radio />} label="Texture 2" />
                                            <FormControlLabel value="gcfOneTextureThree" control={<Radio />} label="Texture 3" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>

                            </>
                        )}

                        <FormControlLabel
                            required control={<Checkbox />}
                            onChange={handleChangeEight}
                            label="Flower 2"
                        />

                        {/* {lawnCeilingFlowerTwo && (
                            <>
                                <Box className="glass" p={2}>
                                    <FormControl>
                                        <FormLabel>Textures</FormLabel>
                                        <RadioGroup
                                            value={gcfTwoTexture}
                                            onChange={(e) => setGcfTwoTexture(e.target.value)}
                                        >
                                            <FormControlLabel
                                                value="gcfTwoTextureOne"
                                                control={<Radio />}
                                                label="Texture 1"
                                            />
                                            <FormControlLabel value="gcfTwoTextureTwo" control={<Radio />} label="Texture 2" />
                                            <FormControlLabel value="gcfTwoTextureThree" control={<Radio />} label="Texture 3" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>

                            </>
                        )} */}

                        {/* <FormControlLabel
                            required control={<Checkbox />}
                            onChange={handleChangeNine}
                            label="Flower 3"
                        />
                        {lawnCeilingFlowerThree && (
                            <>
                                <Box className="glass" p={2}>
                                    <FormControl>
                                        <FormLabel>Textures</FormLabel>
                                        <RadioGroup
                                            value={gcfThreeTexture}
                                            onChange={(e) => setGcfThreeTexture(e.target.value)}
                                        >
                                            <FormControlLabel
                                                value="gcfThreeTextureOne"
                                                control={<Radio />}
                                                label="Texture 1"
                                            />
                                            <FormControlLabel value="gcfThreeTextureTwo" control={<Radio />} label="Texture 2" />
                                            <FormControlLabel value="gcfThreeTextureThree" control={<Radio />} label="Texture 3" />
                                        </RadioGroup>
                                    </FormControl>
                                </Box>

                            </>
                        )} */}
                    </FormGroup>
                    {/* </Box> */}


                    {/* Props Interface */}


                    {/* <Box className="glass" p={2}> */}
                    {/* <FormControl>
                        <FormLabel>Props</FormLabel>
                        <RadioGroup
                            value={gazeboCeilingProps}
                            onChange={(e) => setGazeboCeilingProps(e.target.value)}
                        >
                            <FormControlLabel
                                value="gcpOne"
                                control={<Radio />}
                                label="Props 1"
                            />
                            <FormControlLabel value="gcpTwo" control={<Radio />} label="Props 2" />
                            <FormControlLabel value="gcpThree" control={<Radio />} label="Props 3" />
                            <FormControlLabel value="gcpFour" control={<Radio />} label="Props 4" />

                        </RadioGroup>
                    </FormControl> */}
                    {/* </Box> */}




                </>
            )}

















        </>
    );
};

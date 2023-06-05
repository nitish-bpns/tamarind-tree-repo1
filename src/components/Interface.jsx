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
export const Interface = () => {

  // const { tableWidth, setTableWidth, legs, setLegs, legsColor, setLegsColor } =


  const { legs,
    setLegs,
    legsColor,
    setLegsColor,
    tableWidth,
    setTableWidth,
    ball,
    setBall,
    gazeboCeilingDrapeOne,
    setGazeboCeilingDrapeOne,
    gazeboCeilingDrapeTwo,
    setGazeboCeilingDrapeTwo,
    gazeboCeilingDrapeThree,
    setGazeboCeilingDrapeThree,
    gcdOneTexture,
    setGcdOneTexture,
    gcdTwoTexture,
    setGcdTwoTexture,
    gcdThreeTexture,
    setGcdThreeTexture,
    gazeboCeilingFlowerOne,
    setGazeboCeilingFlowerOne,
    gazeboCeilingFlowerTwo,
    setGazeboCeilingFlowerTwo,
    gazeboCeilingFlowerThree,
    setGazeboCeilingFlowerThree,
    gcfOneTexture,
    setGcfOneTexture,
    gcfTwoTexture,
    setGcfTwoTexture,
    gcfThreeTexture,
    setGcfThreeTexture,
    gazeboCeilingProps,
    setGazeboCeilingProps,


  } = useConfigurator();

  const [part, setPart] = useState('gazebo');
  const handleChange = (event, newPart) => {
    setPart(newPart);
  };


  const [gazeboPart, setGazeboPart] = useState('gazeboCeiling');
  const handleChangeTwo = (event, newGazeboPart) => {
    setGazeboPart(newGazeboPart);
  };

  // Drapes one two three
  const handleChangeFour = event => {
    setGazeboCeilingDrapeOne(current => !current);
  };
  const handleChangeFive = event => {
    setGazeboCeilingDrapeTwo(current => !current);
  };
  const handleChangeSix = event => {
    setGazeboCeilingDrapeThree(current => !current);
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


  // const [gazeboCeilingDrapes, setGazeboCeilingDrapes] = useState('gazeboCeilingDrapeOne');
  // const handleChangeThree = (event, newGazeboCeilingDrapes) => {
  // setGazeboCeilingDrapes(newGazeboCeilingDrapes);
  // };

  console.log({ gazeboCeilingDrapeOne, gcdOneTexture, gcdTwoTexture, gcdThreeTexture, gcfOneTexture, gcfTwoTexture, gcfThreeTexture, gazeboCeilingProps });

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
      }}
      p={2}
      color={'black'}
    >
      <Stack spacing={3}>
        <Typography variant="caption">Bandstand Configurator</Typography>

        <ToggleButtonGroup
          color="primary"
          value={part}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton className='toggleGazebo' value="gazebo">Gazebo</ToggleButton>
          <ToggleButton className='toggleGazebo' value="lawn">Lawn Area</ToggleButton>
        </ToggleButtonGroup>

        {part === 'gazebo' && (
          <>

            <ToggleButtonGroup
              className='toggleGazebo'
              color="primary"
              value={gazeboPart}
              exclusive
              onChange={handleChangeTwo}
              aria-label="gazeboPart"
            >
              <ToggleButton className='toggleGazebo' value="gazeboCeiling">Ceiling</ToggleButton>
              <ToggleButton className='toggleGazebo' value="gazeboPillars">Pillars</ToggleButton>
              <ToggleButton className='toggleGazebo' value="gazeboFloor">Floor</ToggleButton>
              <ToggleButton className='toggleGazebo' value="gazeboSeats">Seats</ToggleButton>
              <ToggleButton className='toggleGazebo' value="gazeboSteps">Steps</ToggleButton>
              <ToggleButton className='toggleGazebo' value="gazeboBackdrop">Backdrop</ToggleButton>

            </ToggleButtonGroup>


            {gazeboPart === 'gazeboCeiling' && (
              <>

                <Box className="glass" p={2}>
                  <FormGroup>
                    <FormLabel>Drapes</FormLabel>
                    <FormControlLabel
                      required control={<Checkbox />}
                      onChange={handleChangeFour}
                      label="Drape 1"
                    />

                    {gazeboCeilingDrapeOne && (
                      <>
                        <Box className="glass" p={2}>
                          <FormControl>
                            <FormLabel>Textures</FormLabel>
                            <RadioGroup
                              value={gcdOneTexture}
                              onChange={(e) => setGcdOneTexture(e.target.value)}
                            >
                              <FormControlLabel
                                value="gcdOneTextureOne"
                                control={<Radio />}
                                label="Texture 1"
                              />
                              <FormControlLabel value="gcdOneTextureTwo" control={<Radio />} label="Texture 2" />
                              <FormControlLabel value="gcdOneTextureThree" control={<Radio />} label="Texture 3" />
                            </RadioGroup>
                          </FormControl>
                        </Box>

                      </>
                    )}

                    <FormControlLabel
                      required control={<Checkbox />}
                      onChange={handleChangeFive}
                      label="Drape 2"
                    />

                    {gazeboCeilingDrapeTwo && (
                      <>
                        <Box className="glass" p={2}>
                          <FormControl>
                            <FormLabel>Texture 2</FormLabel>
                            <RadioGroup
                              value={gcdTwoTexture}
                              onChange={(e) => setGcdTwoTexture(e.target.value)}
                            >
                              <FormControlLabel
                                value="gcdTwoTextureOne"
                                control={<Radio />}
                                label="Texture 1"
                              />
                              <FormControlLabel value="gcdTwoTextureTwo" control={<Radio />} label="Texture 2" />
                              <FormControlLabel value="gcdTwoTextureThree" control={<Radio />} label="Texture 3" />
                            </RadioGroup>
                          </FormControl>
                        </Box>

                      </>
                    )}

                    <FormControlLabel
                      required control={<Checkbox />}
                      onChange={handleChangeSix}
                      label="Drape 3"
                    />
                    {gazeboCeilingDrapeThree && (
                      <>
                        <Box className="glass" p={2}>
                          <FormControl>
                            <FormLabel>Texture 3</FormLabel>
                            <RadioGroup
                              value={gcdThreeTexture}
                              onChange={(e) => setGcdThreeTexture(e.target.value)}
                            >
                              <FormControlLabel
                                value="gcdTwoTextureOne"
                                control={<Radio />}
                                label="Texture 1"
                              />
                              <FormControlLabel value="gcdThreeTextureTwo" control={<Radio />} label="Texture 2" />
                              <FormControlLabel value="gcdThreeTextureThree" control={<Radio />} label="Texture 3" />
                            </RadioGroup>
                          </FormControl>
                        </Box>

                      </>
                    )}
                  </FormGroup>
                </Box>




                {/* Flower Interface */}


                <Box className="glass" p={2}>
                  <FormGroup>
                    <FormLabel>Flowers</FormLabel>
                    <FormControlLabel
                      required control={<Checkbox />}
                      onChange={handleChangeSeven}
                      label="Flower 1"
                    />

                    {gazeboCeilingFlowerOne && (
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

                    {gazeboCeilingFlowerTwo && (
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
                    {gazeboCeilingFlowerThree && (
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
                </Box>



                {/* Props Interface */}


                <Box className="glass" p={2}>
                  <FormControl>
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
                  </FormControl>
                </Box>




              </>
            )}


            {/*  slider control
            
            <Box className="glass" p={2}>
              <FormControl>
                <FormLabel>Ceiling width</FormLabel>
                <Slider
                  sx={{
                    width: "200px",
                  }}
                  min={50}
                  max={200}
                  value={tableWidth}
                  onChange={(e) => setTableWidth(e.target.value)}
                  valueLabelDisplay="auto"
                />
              </FormControl>
            </Box> */}


            {/* <Box className="glass" p={2}>
              <FormControl>
                <FormLabel>Ceiling Layout</FormLabel>
                <RadioGroup
                  value={legs}
                  onChange={(e) => setLegs(parseInt(e.target.value))}
                >
                  <FormControlLabel
                    value={0}
                    control={<Radio />}
                    label="Standard"
                  />
                  <FormControlLabel value={1} control={<Radio />} label="Solid" />
                  <FormControlLabel value={2} control={<Radio />} label="Design" />
                </RadioGroup>
              </FormControl>
            </Box> */}


            {/* <Box className="glass" p={2}>
              <FormControl>
                <FormLabel>Ceiling Color</FormLabel>
                <RadioGroup
                  value={legsColor}
                  onChange={(e) => setLegsColor(e.target.value)}
                >
                  <FormControlLabel
                    value={"#777777"}
                    control={<Radio />}
                    label="Black"
                  />
                  <FormControlLabel
                    value={"#ECECEC"}
                    control={<Radio />}
                    label="Chrome"
                  />
                  <FormControlLabel
                    value={"#C9BD71"}
                    control={<Radio />}
                    label="Gold"
                  />
                  <FormControlLabel
                    value={"#C9A3B9"}
                    control={<Radio />}
                    label="Pink Gold"
                  />
                </RadioGroup>
              </FormControl>
            </Box> */}

          </>
        )}

        {part === 'lawn' && (
          <>
            <Box className="glass" p={2}>
              <FormControl>
                <FormLabel>Ball Layout</FormLabel>
                <RadioGroup
                  value={ball}
                  onChange={(e) => setBall(e.target.value)}
                >
                  <FormControlLabel
                    value='ballA'
                    control={<Radio />}
                    label="Ball One"
                  />
                  <FormControlLabel value='ballB' control={<Radio />} label="Ball Two" />
                  <FormControlLabel value='ballC' control={<Radio />} label="Ball Three" />
                </RadioGroup>
              </FormControl>
            </Box>

          </>
        )}

      </Stack>
    </Box>
  );
};

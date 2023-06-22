import React from 'react'
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styles from './index.module.css';

import ReactAudioPlayer from 'react-audio-player';


function Landing() {
    return (
        <div className={styles.landing}>


            <div className={styles.main1}>
                <img className={styles.bg1left} src='./landingImages/bg1left.jpg' alt='img' />
            </div>

            <div className={styles.main2}>
                <img className={styles.logo} src='./landingImages/logo.png' alt='logo' />
                <br />

                <div className={styles.animate}>
                    <div className={styles.bg1head1}>
                        ENVISH.AI
                    </div>

                    <div className={styles.bg1head2}>
                        Decor Your Wedding Now !
                    </div>
                </div>

                <div className={styles.cardHead}>
                    YOUR VENUE
                </div>

                <div className={styles.main22}>

                    <div className={styles.vCard}>
                        <Link to='/second' >
                            <img className={styles.gaz} src='./landingImages/gaz.webp' alt='gaz' />
                        </Link>
                    </div>

                </div>


                <ReactAudioPlayer
                    src="./music.mp3"
                    autoPlay={true}
                    controls
                    loop={true}
                />



            </div>


            {/* 
                <FormControl>

                    <div className={styles.head2} >
                        <img className={styles.eventImg} src='./landingImages/event.png' alt='img' />
                    </div>

                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="wedding"
                            control={<Radio />}
                            label={<img className={styles.prw} src='./landingImages/wedding.png' />}
                        />
                        <FormControlLabel value="reception"
                            control={<Radio />}
                            label={<img className={styles.prw} src='./landingImages/reception.png' />}
                        />
                        <FormControlLabel value="pre_wedding_rituals"
                            control={<Radio />}
                            label={<img className={styles.prw} src='./landingImages/pwr.png' />}
                        />
                        <FormControlLabel value="milestone"
                            control={<Radio />}
                            label={<img className={styles.prw} src='./landingImages/reception.png' />}
                        />
                        <FormControlLabel value="cocktails"
                            control={<Radio />}
                            label={<img className={styles.prw} src='./landingImages/cokctails.png' />}
                        />

                    </RadioGroup>
                </FormControl>

                <br /><br />

                <FormControl>
                    <div className={styles.head3} >
                        <img className={styles.eventImg} src='./landingImages/pc.png' alt='img' />
                    </div>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="red"
                            control={<Radio />}
                            label={<img className={styles.prw} src='./landingImages/red.png' />}
                        />
                        <FormControlLabel value="yellow"
                            control={<Radio />}
                            label={<img className={styles.prw} src='./landingImages/yellow.png' />}
                        />
                        <FormControlLabel value="offwhite"
                            control={<Radio />}
                            label={<img className={styles.prw} src='./landingImages/offwhite.png' />}
                        />
                        <FormControlLabel value="pink"
                            control={<Radio />}
                            label={<img className={styles.prw} src='./landingImages/pink.png' />}
                        />
                        <FormControlLabel value="blue"
                            control={<Radio />}
                            label={<img className={styles.prw} src='./landingImages/blue.png' />}
                        />

                    </RadioGroup>
                </FormControl> */}



        </div>
    )
}

export default Landing;
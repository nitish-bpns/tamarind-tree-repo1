// import React from 'react'
import { Link } from 'react-router-dom';
import styles from './second.module.css';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Second() {
    return (
        <div className={styles.landing2} >

            <div className={styles.sec1}>
                <img className={styles.secleft} src='./landingImages/bg1left.jpg' alt='img' />
            </div>


            <div className={styles.sec2}>
                <img className={styles.logo} src='./landingImages/logo.png' alt='logo' />

                <br />

                <div className={styles.secanimate}>

                    <div className={styles.sechead1}>
                        ENVISH.AI
                    </div>

                    <div className={styles.sechead2}>
                        Decor Your Wedding Now !
                    </div>
                </div>


                <div className={styles.sec2Head}>
                    EVENT TYPE
                </div>


                <div className={styles.sec2con1}>

                    <input
                        type="radio" name="event"
                        id="wedding" className={styles.inputhidden} />
                    <label for="wedding">
                        <img
                            src="./landingImages/ev1.svg"
                            alt="wedding" />
                    </label>

                    <input
                        type="radio" name="event"
                        id="preWedding" className={styles.inputhidden} />
                    <label for="preWedding">
                        <img
                            src="./landingImages/ev2.svg"
                            alt="preWedding" />
                    </label>

                    <input
                        type="radio" name="event"
                        id="reception" className={styles.inputhidden} />
                    <label for="reception">
                        <img
                            src="./landingImages/ev3.svg"
                            alt="reception" />
                    </label>

                    <input
                        type="radio" name="event"
                        id="milestone" className={styles.inputhidden} />
                    <label for="milestone">
                        <img
                            src="./landingImages/ev4.svg"
                            alt="milestone" />
                    </label>

                </div>

                <div className={styles.sec2Head2}>
                    COLOR PALLETE
                </div>


                <div className={styles.sec2con2}>

                    <input
                        type="radio" name="pallete"
                        id="col1" className={styles.inputhidden2} />
                    <label for="col1">
                        <img
                            className={styles.cpImg}
                            src="./landingImages/cp1.svg"
                            alt="col1" />
                    </label>

                    <input
                        type="radio" name="pallete"
                        id="col2" className={styles.inputhidden2} />
                    <label for="col2">
                        <img
                            className={styles.cpImg}
                            src="./landingImages/cp2.svg"
                            alt="col2" />
                    </label>

                    <input
                        type="radio" name="pallete"
                        id="col3" className={styles.inputhidden2} />
                    <label for="col3">
                        <img
                            className={styles.cpImg}
                            src="./landingImages/cp3.svg"
                            alt="col3" />
                    </label>

                    <input
                        type="radio" name="pallete"
                        id="col4" className={styles.inputhidden2} />
                    <label for="col4">
                        <img
                            className={styles.cpImg}
                            src="./landingImages/cp4.svg"
                            alt="col4" />
                    </label>

                </div>


                <div className={styles.sec2Head3}>
                    THEME
                </div>


                <div className={styles.sec2con3}>

                    <input
                        type="radio" name="type"
                        id="tr1" className={styles.inputhidden2} />
                    <label for="tr1">
                        <img
                            className={styles.cpImg}
                            src="./landingImages/tr1.svg"
                            alt="tr1" />
                    </label>

                    <input
                        type="radio" name="type"
                        id="tr2" className={styles.inputhidden2} />
                    <label for="tr2">
                        <img
                            className={styles.cpImg}
                            src="./landingImages/tr2.svg"
                            alt="tr2" />
                    </label>

                </div>


                <center>
                    <div className={styles.sec2Head4}>
                        GENERATE
                    </div>

                    <div className={styles.sec2Head5}>
                        OR
                    </div>

                    <div className={styles.sec2Head6}>
                        CHOOSE TEMPLATE
                    </div>

                </center>


                <center>
                    <div className={styles.sec2con4}>

                        <input
                            type="radio" name="temp"
                            id="temp1" className={styles.inputhidden4} />
                        <label for="temp1">
                            <img
                                className={styles.tpImg}
                                src="./landingImages/gaz.webp"
                                alt="temp1" />
                        </label>

                        <input
                            type="radio" name="temp"
                            id="temp2" className={styles.inputhidden4} />
                        <label for="temp2">
                            <img
                                className={styles.tpImg}
                                src="./landingImages/gaz.webp"
                                alt="temp2" />
                        </label>

                        <input
                            type="radio" name="temp"
                            id="temp3" className={styles.inputhidden4} />
                        <label for="temp3">
                            <img
                                className={styles.tpImg}
                                src="./landingImages/gaz.webp"
                                alt="temp3" />
                        </label>

                        <input
                            type="radio" name="temp"
                            id="temp4" className={styles.inputhidden4} />
                        <label for="temp4">
                            <img
                                className={styles.tpImg}
                                src="./landingImages/gaz.webp"
                                alt="temp4" />
                        </label>

                        <input
                            type="radio" name="temp"
                            id="temp5" className={styles.inputhidden4} />
                        <label for="temp5">
                            <img
                                className={styles.tpImg}
                                src="./landingImages/gaz.webp"
                                alt="temp5" />
                        </label>

                    </div>
                </center>



                <center>
                    <Link to='/gazebo'>
                        <div className={styles.sec2Head7}>
                            SKIP
                        </div>
                    </Link>
                </center>




            </div>





        </div>


    )
}

export default Second;
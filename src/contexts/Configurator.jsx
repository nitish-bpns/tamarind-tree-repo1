import { createContext, useContext, useState } from "react";

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
    const [legs, setLegs] = useState(0);
    const [legsColor, setLegsColor] = useState('#777777');
    const [tableWidth, setTableWidth] = useState(100);
    const [ball, setBall] = useState('ballA');
    const [gazeboCeilingDrapeOne, setGazeboCeilingDrapeOne] = useState(false);
    const [gazeboCeilingDrapeTwo, setGazeboCeilingDrapeTwo] = useState(false);
    const [gazeboCeilingDrapeThree, setGazeboCeilingDrapeThree] = useState(false);
    const [gcdOneTexture, setGcdOneTexture] = useState(0);
    const [gcdTwoTexture, setGcdTwoTexture] = useState(0);
    const [gcdThreeTexture, setGcdThreeTexture] = useState(0);
    const [gazeboCeilingFlowerOne,
        setGazeboCeilingFlowerOne] = useState(false);
    const [gazeboCeilingFlowerTwo,
        setGazeboCeilingFlowerTwo] = useState(false);
    const [gazeboCeilingFlowerThree,
        setGazeboCeilingFlowerThree,] = useState(false);
    const [gcfOneTexture, setGcfOneTexture] = useState('');
    const [gcfTwoTexture, setGcfTwoTexture] = useState('');
    const [gcfThreeTexture, setGcfThreeTexture] = useState('');

    //gazebo pillars
    const [gazeboPillarDrapeOne, setGazeboPillarDrapeOne] = useState(false);
    const [gazeboPillarDrapeTwo, setGazeboPillarDrapeTwo] = useState(false);
    const [gazeboPillarDrapeThree, setGazeboPillarDrapeThree] = useState(false);
    const [gpdOneTexture, setGpdOneTexture] = useState(0);
    const [gpdTwoTexture, setGpdTwoTexture] = useState(0);
    const [gpdThreeTexture, setGpdThreeTexture] = useState(0);

    // Lawn
    const [lawnCeilingDrapeOne, setLawnCeilingDrapeOne] = useState(false);
    const [lawnCeilingDrapeTwo, setLawnCeilingDrapeTwo] = useState(false);
    const [lawnCeilingDrapeThree, setLawnCeilingDrapeThree] = useState(false);
    const [lawnCeilingDrapeFour, setLawnCeilingDrapeFour] = useState(false);
    const [lcdOneTexture, setLcdOneTexture] = useState(0);
    const [lcdTwoTexture, setLcdTwoTexture] = useState(0);
    const [lcdThreeTexture, setLcdThreeTexture] = useState(0);
    const [lcdFourTexture, setLcdFourTexture] = useState(0);

    const [lawnCeilingFlowerOne,
        setLawnCeilingFlowerOne] = useState(false);
    const [lawnCeilingFlowerTwo,
        setLawnCeilingFlowerTwo] = useState(false);
    const [lawnCeilingFlowerThree,
        setLawnCeilingFlowerThree,] = useState(false);




    return <ConfiguratorContext.Provider value={{
        legs,
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

        // gazebo pillars
        gazeboPillarDrapeOne,
        setGazeboPillarDrapeOne,
        gazeboPillarDrapeTwo,
        setGazeboPillarDrapeTwo,
        gazeboPillarDrapeThree,
        setGazeboPillarDrapeThree,
        gpdOneTexture,
        setGpdOneTexture,
        gpdTwoTexture,
        setGpdTwoTexture,
        gpdThreeTexture,
        setGpdThreeTexture,

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


    }}>
        {children}
    </ConfiguratorContext.Provider>
}

export const useConfigurator = () => {
    return useContext(ConfiguratorContext);
}

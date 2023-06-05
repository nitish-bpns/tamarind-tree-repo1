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
    const [gcdOneTexture, setGcdOneTexture] = useState('');
    const [gcdTwoTexture, setGcdTwoTexture] = useState('');
    const [gcdThreeTexture, setGcdThreeTexture] = useState('');
    const [gazeboCeilingFlowerOne,
        setGazeboCeilingFlowerOne] = useState(false);
    const [gazeboCeilingFlowerTwo,
        setGazeboCeilingFlowerTwo] = useState(false);
    const [gazeboCeilingFlowerThree,
        setGazeboCeilingFlowerThree,] = useState(false);
    const [gcfOneTexture, setGcfOneTexture] = useState('');
    const [gcfTwoTexture, setGcfTwoTexture] = useState('');
    const [gcfThreeTexture, setGcfThreeTexture] = useState('');





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
    }}>
        {children}
    </ConfiguratorContext.Provider>
}

export const useConfigurator = () => {
    return useContext(ConfiguratorContext);
}

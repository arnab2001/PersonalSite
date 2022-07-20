import { IconButton ,useColorMode,useColorModeValue} from "@chakra-ui/react";
import {sunIcon,MoonIcon, SunIcon} from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { ImSun } from "react-icons/im";
import  {AnimatePresence,motion} from 'framer-motion';

const ThemeToggleButton=()=>{
    const {toggleColorMode} = useColorMode();

    return(
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div style={{display:'inline-block'}} 
            key={useColorModeValue('light','dark')} 
            initial={{x:20, opacity: 0}}
            animate={{x:0 , opacity:1}}
            exit={{x:-20, opacity:0}}
            transition={{duration:0.2}}
            >
            
            <IconButton 
                aria-label="Toggle theme" 
                colorScheme={useColorModeValue('purple','orange')}
                icon={useColorModeValue(<MoonIcon/>,<ImSun/>)} 
                onClick = {toggleColorMode} 
                variant="ghost"
                size="md"
                >
            </IconButton>
            </motion.div>
        </AnimatePresence>
    )
}
export default ThemeToggleButton;
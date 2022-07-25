import { Center } from '@chakra-ui/react'
import {BsFillSuitHeartFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <Center alignItems="center" justifyContent="center"  opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Made with&nbsp;<BsFillSuitHeartFill size="15px" color='red' display='inline'/>&nbsp;by Arnab Chatterjee
    </Center>
  )
}

export default Footer
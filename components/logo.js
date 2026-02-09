// import Link form 'next/link';
import Image from "next/image";
import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";

import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: scale(0.7);
    //  transform: scale(0.7) rotate(2turn);
    
    
  }
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue("", "-dark")}.png`;
    return (
        <Link href="/" style={{ textDecoration: 'none' }}>
            <LogoBox>
                <Image src={footPrintImg} width={20} height={20}  alt="Arnab Chatterjee" />
            <Text
                color = {useColorModeValue("gray.800", "whiteAlpha.800")}
                fontFamily = 'M PLUS Rounded 1c'
                fontWeight="bold"
                marginLeft={2}>
                Arnab Chatterjee
                </Text>
            </LogoBox>
        </Link>
    )
}
export default Logo;
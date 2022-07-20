import NextLink from 'next/link'
import Image  from 'next/image'
import {Box, Text,LinkBox, LinkOverlay} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children , href, title, thumbnail}) => (
    <box w = "100%"  align = "center">
        <LinkBox cursor="pointer">
            <Image src = {thumbnail} 
            alt = {title}
            className = "grid-item-thumbnail"
            placeholder="blur"
            loading = "lazy"
            />
            <LinkOverlay href={href} target= "_blank">
                <Text mt={2}>{Title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>

        </LinkBox>

        </box>
)
export const WorkGridItem =({children,id,title,thumbnail}) => (
    <Box w="100%" align="center">
        <NextLink href={`/works/${id}`}>
            <LinkBox cursor="pointer">
            <Image src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            style={{borderRadius:"10px"}}
            />

            <LinkOverlay href={`/works/${id}`}>
                <Text mt={2} fontSize= {20}>{title}</Text>
            </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
        

    </Box>
    )

    export const GridItemStyle = () => (
        <Global Styles = {`
            .grid-item-thumbnail{
                border-radius: 13px;
            }
            `}
            />
    )
import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer" className="grid-item">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        width={400}
        height={300}
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)
export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer" className="grid-item">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          width={400}
          height={300}
          style={{ borderRadius: '10px' }}
        />

        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global styles={`
            .grid-item-thumbnail{
                    border-radius: 16px;
                    transition: all 0.4s ease-in-out;
                }
                .grid-item:hover .grid-item-thumbnail{
                    transform: scale(1.05) translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }
                `}
  />
)

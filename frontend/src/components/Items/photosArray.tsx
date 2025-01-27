"use client"

import React, { useState } from "react";
import Image from "next/image";
// import NextImage from "next/image"

import {
    Badge,
    Box,
    Card,
    HStack,
    Text,
} from "@chakra-ui/react"

import {
    DialogRoot,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogBody,
    DialogFooter,
    DialogActionTrigger,
    DialogCloseTrigger,
  } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button"
import ImageLoader from "../actions/fetchimage"


interface ImageItemProps {
    id: number;
    src: string;
    alt: string;
    width: number;
    height: number;
}

const ImagesArray = () => {
    const [selectedImage, setSelectedImage] = useState<ImageItemProps | null>(null);

    const images: ImageItemProps[] = [
        {
            id: 1,
            src: 'bedroom-1.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 2,
            src: 'bedroom-2.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 3,
            src: 'bedroom-3.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 4,
            src: 'bedroom-4.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 5,
            src: 'bedroom-5.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 6,
            src: 'bedroom-6.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 7,
            src: 'bedroom-7.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 8,
            src: 'balcony-1.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 9,
            src: 'balcony-2.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 10,
            src: 'balcony-3.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 11,
            src: 'bathroom-1.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 12,
            src: 'bathroom-2.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 13,
            src: 'bathroom-3.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 14,
            src: 'bathroom-4.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 15,
            src: 'bathroom-5.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 16,
            src: 'desk-1.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 17,
            src: 'desk-2.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 18,
            src: 'desk-3.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 19,
            src: 'hall-1.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 20,
            src: 'hall-2.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 21,
            src: 'hall-3.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 22,
            src: 'hall-4.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 23,
            src: 'hall-5.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 24,
            src: 'hall-6.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 25,
            src: 'kitchen-1.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 26,
            src: 'kitchen-2.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 27,
            src: 'kitchen-3.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 28,
            src: 'kitchen-4.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 29,
            src: 'kitchen-5.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 30,
            src: 'kitchen-6.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 31,
            src: 'livingroom-1.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 32,
            src: 'livingroom-2.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 33,
            src: 'livingroom-3.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 34,
            src: 'livingroom-4.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 35,
            src: 'livingroom-5.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },{
            id: 36,
            src: 'livingroom-6.png',
            alt: 'photo-room',
            width: 500,
            height: 500,
        },

    ];

    const handleImageClick = (image: ImageItemProps) => {
        setSelectedImage
    }

    return(
        <>
          {images.map((image) => (
            <Card.Root key={image.id} onClick={() => handleImageClick(image)} cursor="pointer" flexDirection="row" overflow="hidden" maxW="xl">
                <Image
                  loader={ImageLoader}                        
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />                  
            <Box>
              <Card.Body>
                <Card.Description>
                  Description
                </Card.Description>
              </Card.Body>
            </Box>
          </Card.Root>
           ))}
           
           {selectedImage && (
                   <DialogRoot size="full" motionPreset="slide-in-bottom" open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                     <DialogTrigger asChild>
                       <span />
                     </DialogTrigger>
                     <DialogContent>
                       <DialogBody>
                         <Image
                           loader={ImageLoader}
                           src={selectedImage.src}
                           alt={selectedImage.alt}
                           width={selectedImage.width * 2} // Double the size for expanded view
                           height={selectedImage.height * 2}
                         />
                       </DialogBody>
                       <DialogCloseTrigger />
                     </DialogContent>
                   </DialogRoot>
                 )}
        </>
    )
}
export default ImagesArray

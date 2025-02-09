'use client';
import {
    Carousel,
    CAROUSEL_BUTTON_WIDTH,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import React, { useEffect, useRef, useState } from 'react';
import { PostItemImage } from '@/app/home/(components)/PostItemImage';
import { AnimationWrapper } from '@/components/AnimationWrapper';

export const PostImagesCarousel: React.FC<{ imagesIds: string[] }> = ({
    imagesIds,
}) => {
    const [showPrevVisible, setShowPrevVisible] = useState(false);
    const [showNextVisible, setShowNextVisible] = useState(false);

    const contentRef = useRef<HTMLDivElement>(null);
    const previousRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            const content = contentRef.current;
            const contentWidth =
                contentRef.current.getBoundingClientRect().width;
            const onMouseMove = (event: MouseEvent) => {
                if (event.offsetX < CAROUSEL_BUTTON_WIDTH) {
                    if (!showNextVisible) {
                        setShowPrevVisible(true);
                    }
                } else if (
                    event.offsetX >
                    contentWidth - CAROUSEL_BUTTON_WIDTH
                ) {
                    setShowNextVisible(true);
                } else {
                    setShowNextVisible(false);
                    setShowPrevVisible(false);
                }
            };
            const onMouseLeave = () => {
                setShowPrevVisible(false);
                setShowNextVisible(false);
            };
            contentRef.current.addEventListener('mousemove', onMouseMove);
            contentRef.current.addEventListener('mouseleave', onMouseLeave);

            return () => {
                content?.removeEventListener('mousemove', onMouseMove);
                content?.removeEventListener('mouseleave', onMouseLeave);
            };
        }
    }, [showNextVisible, showPrevVisible]);

    return (
        <Carousel ref={contentRef}>
            <CarouselContent>
                {imagesIds.map((publicId) => (
                    <CarouselItem key={publicId}>
                        <PostItemImage publicId={publicId} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <AnimationWrapper
                show={showPrevVisible}
                options={{ duration: 200 }}
            >
                <CarouselPrevious ref={previousRef} />
            </AnimationWrapper>
            <AnimationWrapper
                show={showNextVisible}
                options={{ duration: 200 }}
            >
                <CarouselNext ref={nextRef} />
            </AnimationWrapper>
        </Carousel>
    );
};

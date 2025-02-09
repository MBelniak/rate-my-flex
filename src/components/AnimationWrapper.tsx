import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';

/**
 * Wrap around component to animate mount/unmount effect.
 * Example:
 * <AnimationWrapper show={showNextVisible}>
 *     <CarouselNext ref={nextRef} />
 * </AnimationWrapper>
 * @param show - whether the child element should be mounted or not
 * @param children - child element
 * @param from - 'from' keyframe of an animation
 * @param to - 'to' keyframe of an animation
 * @param unMountAnimation - more complex animation keyframes
 * @param options - animation options
 */
export const AnimationWrapper: React.FC<
    PropsWithChildren<{
        show: boolean;
        from?: Keyframe;
        to?: Keyframe;
        unMountAnimation?: Keyframe[];
        options?: KeyframeAnimationOptions;
    }>
> = ({
    show,
    children,
    from = { opacity: 0 },
    to = { opacity: 1 },
    unMountAnimation,
    options = { duration: 500, fill: 'forwards' },
}) => {
    const elementRef = useRef<HTMLDivElement>(null);

    const [removeState, setRemove] = useState(!show);

    useEffect(() => {
        const childElement = elementRef.current;
        if (show) {
            setRemove(false);
            if (!childElement) return;
            childElement.animate([from, to], options);
        } else {
            if (!childElement) return;
            const animation = childElement.animate(
                unMountAnimation || [to, from],
                options
            );
            animation.onfinish = () => {
                setRemove(true);
            };
        }
    }, [show, removeState]);

    return !removeState && <div ref={elementRef}>{children}</div>;
};

import { useEffect } from 'react';

const preloadImage = (src: string) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function() {
            resolve(img);
        }
        img.onerror = img.onabort = function() {
            reject(src);
        }
        img.src = src;
    })
}

const ImagePreloader = (props: any) => {
    useEffect(() => {
        let isCancelled = false;

        async function loadImage() {

            if (isCancelled) {
                return;
            }

            await preloadImage(props.src);

            if (isCancelled) {
                return;
            }
        }

        loadImage();

        return () => {
            isCancelled = true;
        }
        
    }, [props])

    return (
        <img src={props.src} {...props} />
    );
}

export default ImagePreloader;
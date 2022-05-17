import { useEffect, useState } from 'react';

const preloadImage = (src: string) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve(img);
        }
        img.onerror = img.onabort = () => {
            reject(src);
        }
        img.src = src;
    })
}

const ImagePreloader = (props: any) => {
    const [load, setLoad] = useState<boolean>(false);

    useEffect(() => {
        let isCancelled = false;

        const loadImage = async () => {

            if (isCancelled) {
                return;
            }

            await preloadImage(props.src);

            if (isCancelled) {
                return;
            }
            
            setLoad(true);
        }

        loadImage();

        return () => {
            isCancelled = true;
        }
        
    }, [props]); // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <img src={props.src} {...props} style={{ opacity: load ? 1 : 0}} alt={props.alt ? props.alt : 'preloadImage'} />
    );
}

export default ImagePreloader;
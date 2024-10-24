import { useRef, useEffect, useState } from 'react'
type Props = { image: string };

export const RandomFox = ({ image }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null);
    const [src, setSrc] = useState('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=');

    useEffect(() =>{
         //nuevo observador
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
               setSrc(image)
            }

        });
    });
    //boserver node
    if(node.current){
        observer.observe(node.current);
    }
    

    //desconectar
    return()=>{
        observer.disconnect()
    }

    }, [image]);
   
    return (
        <img ref={node}
            width={320}
            height={320}
            src={src}
            className="rounded bg-gray-300"
            alt="Random Fox"
            style={{ objectFit: 'cover' }}
        />
    );
};

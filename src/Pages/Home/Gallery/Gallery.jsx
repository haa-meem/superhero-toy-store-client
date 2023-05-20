import { useEffect, useState } from 'react';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, [])
    return (
        <div className='my-2'>
            <h1 className='text-center font-bold text-5xl mb-3'>Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 bg-orange-300">
                {
                    gallery.map(info =>
                        <div key={info.id}>
                            <img className="w-full h-full rounded-full p-3" src={info.image} />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Gallery;
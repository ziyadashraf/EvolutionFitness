import ImageGallery from 'react-image-gallery';
import Photo1 from "../../images/Photo1.JPG"
import Photo2 from "../../images/Photo2.JPG"
import Photo3 from "../../images/Photo3.JPG"
import Photo4 from "../../images/Photo4.JPG"
import Photo5 from "../../images/Photo5.JPG"
import Photo6 from "../../images/Photo6.JPG"



const Gallery = () => {


    const images = [
        {
            original: Photo2,
            thumbnail: Photo2,
        },
        {
            original: Photo1,
            thumbnail: Photo1,
        },

        {
            original: Photo3,
            thumbnail: Photo3,
        },
        {
            original: Photo4,
            thumbnail: Photo4,
        },
        {
            original: Photo5,
            thumbnail: Photo5,
        },
        {
            original: Photo6,
            thumbnail: Photo6,
        },
    ];



    return (
        <ImageGallery items={images} />
    )

}

export default Gallery
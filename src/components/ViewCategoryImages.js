import React, {useState} from 'react';
import { useLocation, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';

function ViewCategoryImages(props) {
    const { state } = useLocation();
    let history = useHistory();
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    const [imageToShow, setImageToShow] = useState('');
    const showImage = (image) => {
        //set imageToShow to be the one that's been clicked on    
        setImageToShow(image);
        //set lightbox visibility to true
        setLightBoxDisplay(true);
    };

    const hideLightBox = () => {
        setLightBoxDisplay(false)
     }
        const images = state.stalls.images.map((img,i) => {
            return(
                            
                    <div className='col-6 adr' key={i}>
                <img src={img} width={130} height={130} className="menuImg" onClick={() => showImage(img)}/>
                { lightboxDisplay ?
                <div id="lightbox" onClick={hideLightBox}>
                <img id="lightbox-img" src={imageToShow}></img>
                 </div>
                : '' }
                </div>)
        })
    return (
        <div className='container contact'>
            <div className='row-header titlee adr'>
            {state.stalls.title}
            </div>
            <div className='row' >
            {images}
            </div>
            <div className='adr contact'>
            <Button onClick={() => history.goBack()} variant="dark">חזור לעמוד הקודם</Button>
            </div>
        </div>
    );
}

export default ViewCategoryImages;
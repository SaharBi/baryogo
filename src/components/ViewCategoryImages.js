import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';

function ViewCategoryImages(props) {
    const { state } = useLocation();
    let history = useHistory();

        const images = state.stalls.images.map((img,i) => {
            return(
                            
                    <div className='col-6 adr' key={i}>
                <img src={img} width={130} height={130} className="menuImg"/>
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
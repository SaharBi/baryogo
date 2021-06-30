import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import background from './../assets/images/bg.jpg'

function ViewCategoryDetails(props) {
    const { state } = useLocation();
    let history = useHistory();
    const menu = state.stalls.menu.map( (stall,i) => {
        return(

            <div key={i} className='row-header'>
                              <Link
  to={{
    pathname: `/view-category-images/${stall.title}`,
    state: { stalls: stall }
  }}
>
            <div className="col-12 contact adr">
            <Button variant="dark" className ='btnc'>
            <h6>{stall.title}</h6>
            </Button>
            </div>
            </Link>
              </div>
        )
    })


    return (
        <div className='container contact coverr'  style={{ backgroundImage: `url(${background})`, backgroundSize: 'contain' }}>
            <div className='row' >
      <div className="col-12 col-md m-1">
      <h5>{state.stalls.name}</h5>
      </div>
      </div>
{menu}
            <div className='adr contact'>
            <Button onClick={() => history.goBack()} variant="dark">חזור לעמוד הקודם</Button>
            </div>
        </div>
    );
}

export default ViewCategoryDetails;
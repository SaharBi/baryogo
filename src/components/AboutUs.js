import React from 'react';
import AboutUsImg from '../assets/images/aboutus.jpg';

function AboutUs(props) {
    return (
        <div>
              <div className='contact'>
            <div className="container">
            <div className="row row-content">
                <div className="col-12 col-sm-5 offset-sm-1 font-link">
                    <div className='adr'>
                        <h5>מי אנחנו</h5><br />
                        <p className='titlee'>
                        ברוכים הבאים לבר-יוגו ! </p>
<p>
בר-יוגו מציעה שירותי דוכני מזון וקינוחים לכל סוגי האירועים בטעמים טובים ומגוונים תוך שמירה על טריות ואיכות כערך עליון.
החברה מציעה שירותי בר קינוחים מפנק שהופך כל אירוע לחוויה מיוחדת ובלתי נשכחת.
החברה בעלת ניסיון של 7 שנים, אנו נותנים מענה לאירועים קטנים כגדולים בפריסה ארצית.
הצוות שלנו הוא צוות קבוע, מקצועי ומיומן שיעניק לאורחים שלכם את השירות האיכותי ביותר.
אתם מוזמנים להכנס בתפריט לגלריה ולהתרשם מדוגמאות לאירועים שאנחנו עושים. 
המוצרים שלנו כשרים – חלבי / פרווה תוך שמירה מירבית על טעם איכותי ומיוחד.
</p><p className='titlee2'>
אז למה אתם מחכים? צרו קשר עכשיו ותהפכו את האירוע שלכם לטעים יותר !

                        </p>
                        </div>
                </div>
                <div className="col-12 col-sm-5 offset-sm-1">
                    <img className='caru2' src={AboutUsImg} height={400} width={450}></img>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default AboutUs;
import React, {useState} from 'react';
import { ButtonGroup, Button, Form } from 'react-bootstrap';
import { send } from 'emailjs-com';

function Contactus(props) {
    const [nameErr, setNameErr] = useState('');
    const [phoneErr, setPhoneErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [error, setError] = useState('');
    const [errorType, setErrorType] = useState('green');
    const [toSend, setToSend] = useState({
        from_name: '',
        phone: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
          if(toSend.from_name === '' || toSend.phone === '' || toSend.reply_to ===''){
            setErrorType('red')
            setError('שים לב, אתה צריך למלא את שדות החובה בטופס');
          } else
          if(nameErr==='' && phoneErr === '' && emailErr === ''){
        e.preventDefault();
        send(
          'service_fe7jd2e',
          'template_wd190cc',
          toSend,
          'user_gTpz4eFCIlyjnQDESNG4P'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
          setToSend({
            from_name: '',
            phone: '',
            message: '',
            reply_to: '',
          })
          setErrorType('green')
          setError(`מכתבך נשלח בהצלחה, ניצור איתך קשר בקרוב`)
        } else {
            setErrorType('red')
            setError('נא מלא את הטופס בהתאם להוראות');
        }
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    
      const handleNameChange = (e) => {
          handleChange(e);
          let name = e.target.value;
          let num=0;
             for(let i=0; i<name.length; i++){
              if(name[i]>='!' && name[i]<='@'){
                num++;
              }
          } if (num>0 || name.length<2){
            setNameErr(' השם אמור להכיל לפחות 2 אותיות וללא מספרים')
          } else setNameErr('')
      }

      const handlePhoneChange = (e) => {
        handleChange(e);
        let num = e.target.value;
        if(num.length !== 10){
            setPhoneErr('מספר הפלאפון חייב להכיל 10 מספרים בלבד')
        } else setPhoneErr('')

    }

    const handleEmailChange = (e) => {
        handleChange(e);
        let mail = e.target.value;
        let n1 =0;
        let n2 = 0;
        for(let i=0; i<mail.length; i++){
            if(mail[i] === '@'){
                n1++;
            }
            if(mail[i] === '.'){
                n2++;
            }
        } if(n1===0 || n2===0){
            setEmailErr('כתובת המייל חייבת להיות עם @ ועם . אחריה')
        } else setEmailErr('')

    }

    return (
        <div className='contact'>


<div className="container font-link">
            <div className="row row-content">
                <div className="col-12">
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <div className='adr'>
                        <h5>הפרטים שלנו</h5><br />
                        <address>
                        <h6>צוות בר-יוגו לשירותכם</h6>
                        רחוב הזית 7,<br />
                        קרית גת, ישראל<br />
                        <i className="fa fa-phone"></i>: 054-4555545<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:Baryogurt@gmail.com">Baryogurt@gmail.com</a><br />
                        <a role="button" className="btn btn-success btn2" href="tel:054-4555545"><i className="fa fa-phone"></i> התקשרו עכשיו</a>
                        </address>
                        </div>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>צרו עימנו קשר</h5>
<Form onSubmit={onSubmit}>
  <Form.Group controlId="exampleForm.ControlInput1" className='cardtext'>
    <Form.Label>שם מלא</Form.Label>
    <Form.Control type="text" name='from_name' placeholder="ישראל ישראלי" value={toSend.from_name} onChange={handleNameChange} />
    <p className='errorTypeN'>{nameErr}</p>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1" className='cardtext'>
    <Form.Label>מספר פלאפון</Form.Label>
    <Form.Control type="number" name='phone' placeholder="0500000000" value={toSend.phone} onChange={handlePhoneChange} />
    <p className='errorTypeN'>{phoneErr}</p>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1" className='cardtext'>
    <Form.Label>אימייל</Form.Label>
    <Form.Control type="email" name='reply_to' placeholder="baryogo@gmail.com" value={toSend.reply_to} onChange={handleEmailChange} />
    <p className='errorTypeN'>{emailErr}</p>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1" className='cardtext'>
    <Form.Label>הודעה</Form.Label>
    <Form.Control as="textarea" className='textar' rows={3} name='message' placeholder="כתוב את ההודעה שלך כאן (לא חובה)" value={toSend.message} onChange={handleChange} />
  </Form.Group>
  <p className={errorType}>{error}</p>
  <Button onClick={onSubmit} className='subbtn'>שלח</Button>
</Form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Contactus;
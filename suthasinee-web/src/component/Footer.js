import React from 'react';
import { Facebook, PhoneAndroid, WhatsApp} from '@material-ui/icons';
function Footer(){
    return(
        <div className="footer">
            <div className="contact-icons">
                <a href="tel:+1740-648-7326"><PhoneAndroid /></a>
                <a href="https://wa.me/+17406487326"><WhatsApp/></a>
                <a href="https://wa.me/+17406487326"><Facebook/></a>

            </div>
            <p>Copyright © rigth to reserved  </p>
        </div>
    )
}
export default Footer;
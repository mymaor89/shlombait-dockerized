import "./Consulting.css";
import React,{ useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Maor from "./maor.jpg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { contactus } from "../../util/api";

// const base_url = 'http://35.207.89.38:5000';

const Consulting = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const contactUshandler = async (e) => {
    e.preventDefault();

    // const config = {
    //   header: {
    //     "Content-Type": "application/json",
    //   },
    // };


    try {
      // const { data } = await axios.post(
      //   `${base_url}/api/contact`,
      //   {
      //     name,
      //     email,
      //     message,
      //   },
      //   config
      // );
      const data = await contactus(name,email,message)
      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };



    return (
      <div>
        <div className="container">
          <div className="row flex-center sm-no-flex">
            <div className="pull-right sm-no-float col-md-8">
              <ul className="team-members">
                {/* single member row starts */}
                <li className="clearfix">
                  <div className="member-details">
                    <div>                      
                      <img src="https://media.easy.co.il/images/UserThumbs/10066337_1580297666249.jpg" alt="UI Designer" />
                      <div className="member-info">
                        <h3>מיכאל בוקובזה</h3>
                        <p>יועץ זוגי</p>
                      </div>
                    </div>
                  </div>
                  <div className="member-details">
                    <div>
                      <img
                        src="https://www.pandaclinic.co.il/wp-content/uploads/%D7%A2%D7%A0%D7%91%D7%9C-%D7%A8%D7%95%D7%99%D7%98%D7%9E%D7%9F.jpg"
                        alt="UI Designer"
                      />
                      <div className="member-info">
                        <h3>ענבל מיכאלי</h3>
                        <p>יועצת זוגית</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              {/* /end team-photos */}
            </div>
            {/* /end col-md-8 */} 
            <div className="pull-left col-md-4 sm-text-center">
              <div className="team-overview">
                <h2> מי אנחנו</h2>
                <div>
                  יועצים זוגיים בעלי ניסיון רב,  החלטנו להקים
                  את האתר לשיקום הזוגיות מאחר וזו מטרה חשובה לשלמות החברה
                  ורווחתה. לאחר חיפוש אחר אתרים אחרים בנושא, גילינו כי אין מענה
                  הולם בחרנו להרים את הכפפה. האתר עדיין נמצא בשלבי פיתוח שבסיומו
                  תקבלו דרכים יצירתיות לשקם ולפתח את הזוגיות שלכם. בהצלחה!
                </div>
                <p />
              </div>
            </div>
            {/* /end col-md-4 */}
          </div>
          {/* /end row */}
        </div>
        {/* /end container */}
        <div className="contact-us">
          <form  onSubmit={contactUshandler}  className="contact-us__form">
  <h1 className="contact-us__title">Contact us</h1>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                required
                id="name"
                placeholder="Enter name"
                value={name}
            onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                required
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group" className="root">
              <label htmlFor="message">message:</label>
              <TextField
                id="message"
                required
                label="Enter message"
                multiline
                rows={4}
                fullWidth
                defaultValue="Enter message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    );
}
export default Consulting;

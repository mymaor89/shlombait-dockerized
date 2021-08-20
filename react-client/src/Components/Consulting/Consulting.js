import "./Consulting.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Maor from "./maor.jpg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import clsx from 'clsx';



class Consulting extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };
  updateInputValue(e) {
    let new_state = this.state;
    new_state[e.target.id] = e.target.value;
    this.setState({ new_state });
  }
  render() {
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
                      <img src={Maor} alt="UI Designer" />
                      <div className="member-info">
                        <h3>Maor Yatskan</h3>
                        <p>Programmer</p>
                      </div>
                    </div>
                  </div>
                  <div className="member-details">
                    <div>
                      <img
                        src="https://axis.org/wp-content/uploads/2014/10/chris-headshot.png"
                        alt="UI Designer"
                      />
                      <div className="member-info">
                        <h3>Eden Edri</h3>
                        <p>UI Designer</p>
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
                  בוגרי תואר להנדסת תוכנה במכללת סמי שמעון אשדוד. החלטנו להקים
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
          <form
            /* onSubmit={registerHandler} */ className="contact-us__form"
          >
            <h1 className="contact-us__title">Contact us</h1>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                required
                id="name"
                placeholder="Enter name"
                value={this.state.name}
                onChange={(evt) => this.updateInputValue(evt)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                required
                id="email"
                placeholder="Email address"
                value={this.state.email}
                onChange={(evt) => this.updateInputValue(evt)}
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
                value={this.state.message}
                onChange={(evt) => this.updateInputValue(evt)}
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
}
export default Consulting;

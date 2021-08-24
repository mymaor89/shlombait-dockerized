const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

exports.contact = async (req, res, next) => {
    // Send Email to email provided but first check if user exists
    const { name, email, message } = req.body;
  
    try {
      try {
        await sendEmail({
          to: email,
          subject: `${name} wants to contact you`,
          text: `${message}`,
        });
  
        res.status(200).json({ success: true, data: "Email Sent" });
      } catch (err) {
        console.log(err);
  
        return next(new ErrorResponse("Email could not be sent", 500));
      }
    } catch (err) {
      next(err);
    }
  };
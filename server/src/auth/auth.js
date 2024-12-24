// passport js auth
import passport from "passport";
import LocalStrategy from "passport-local";
import Person from "../models/person.model.js";

passport.use(
  new LocalStrategy(async (userName, passWord, done) => {
    try {
      const user = await Person.findOne({ username: userName });
      if (!user) {
        return done(null, false, { message: " Incorrect username" });
      }
      const isPasswordMatch = await user.comparePassword(passWord);
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: " Incorrect password" });
      }
    } catch (error) {
      return done(error);
    }
  })
);

export default passport;

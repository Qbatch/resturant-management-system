import jwt from 'jsonwebtoken';
import passport from 'passport';
import express from 'express';
import '../middleware'
const Router = express.Router();
const jwtSecret = "i am adeveloper !!!!";

Router.post('/login', (req, res) => {
  console.log("Request Body ",req.body)
  passport.authenticate('login', { session: false }, (err, user, info) => {
    // console.log('Login: ', { err, user, info });

    if (err || !user) {
      return res.status(400).send(err && err.message);
    }
    req.login(user, { session: false }, (error) => {
      if (error) {
        return res.status(500).send(err && err.message);
      }
      console.log("//////111111111////////");
      const token = jwt.sign(user.email, jwtSecret);
      console.log("//////2222222222////////" , token);
      return res.json({ user, token });
    });
  })(req, res);
});
  

Router.post('/register', (req, res, next) => {
  passport.authenticate('signup', { session: false }, (err, user, info) => {
    // console.log('Request Body : ', req.body );
    // console.log('Register: ', { err, user, info });

    if (err || !user) {
      return res.status(400).send(err && err.message);
    }

    req.login(user, { session: false }, (error) => {
      if (error) {
        return res.status(500).send(err && err.message);
      }

      console.log('User: ', user);
      const token = jwt.sign(user.email, jwtSecret);
      console.log(" Token ", token);
      return res.json({ user, token });
    });
  })(req, res, next);
});






export default Router;
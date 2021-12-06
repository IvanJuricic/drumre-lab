const isLoggedIn = (req, res, next) => {
  //console.log("JE li logiran ", req);
  req.user ? next() : res.sendStatus(401);
};

module.exports = isLoggedIn;

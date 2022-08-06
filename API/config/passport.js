module.exports = function(passport, user) {
    const bCrypt = require("bcrypt-nodejs");
    const Users = user;

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {

        Users.findByPk(id).then(function(user) {

            if (user) {

                done(null, user.get());

            } else {

                done(user.errors, null);

            }

        });

    });

    const LocalStrategy = require("passport-local").Strategy;

    passport.use("local-signup", new LocalStrategy(
        {
            phoneField: "phone",
            passwordField: "password",
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, phone, password, done) {
            console.log("Je passe par là !");
            const generateHash = function(password) {
                console.log("coucou password hash");
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            Users.findOne({
                where: {
                    phone: phone
                }
            }).then(function(user) {
                if (user) {
                    console.log("That phone is already taken");
                    return done(null, false, {
                        message: "That phone is already taken"
                    });
                }
                else {
                    const userPassword = generateHash(password);
                    const data =
                        {
                            full_name: req.body.full_name,
                            phone: phone,
                            password: userPassword
                        };

                    Users.create(data).then(function(newUser, created) {

                        if (!newUser) {
                            console.log("error user creation");
                            return done(null, false, {
                                message: "error user creation"
                            });

                        }

                        if (newUser) {
                            console.log(newUser);
                            return done(null, newUser);

                        }

                    });

                }

            })
                .catch(error => console.log("there is an error with user creation : ", error));

        }

    ));

    //LOCAL SIGNIN
    passport.use("local-signin", new LocalStrategy(
        {
            // by default, local strategy uses username and password, we will override with
            phoneField: "phone",
            passwordField: "password",
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },


        function(req, phone, password, done) {

            const Users = user;

            const isValidPassword = function(userPassword, password) {

                return bCrypt.compareSync(password, userPassword);

            };

            Users.findOne({
                where: {
                    phone: phone
                }
            }).then(function(user) {

                if (!user) {

                    return done(null, false, {
                        message: "phone does not exist"
                    });

                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, {
                        message: "Incorrect password."
                    });

                }


                const userInfo = user.get();
                return done(null, userInfo);


            }).catch(function(err) {

                console.log("Error:", err);

                return done(null, false, {
                    message: "Something went wrong with your Signin"
                });

            });


        }

    ));

};

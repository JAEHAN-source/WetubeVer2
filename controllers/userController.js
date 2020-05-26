import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
    const { body: { name, email, password1, password2 } } = req;
    if (password1 !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" })

    } else {
        //to do:resister user
        //to do:log in user
        res.redirect(routes.home);
    }

};
export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}
export const logout = (req, res) => res.redirect(routes.home);
export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const usersDetail = (req, res) => res.render("usersDetail", { pageTitle: "userDetail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "editProfile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "changePassword" });
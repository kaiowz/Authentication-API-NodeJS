const router = require("express").Router();

const UsersController = require("./controllers/usersController");
const UsersValidator = require("./validators/userValidator");
const Auth = require("./middlewares/authMiddleware");

router.post("/api/signup", UsersValidator.signup, UsersController.singup);
router.post("/api/signin", UsersController.signin);
router.put("/api/user/:_id", Auth.private, UsersValidator.edit, UsersController.update);
router.get("/api/user", Auth.private, UsersController.profile);
router.delete("/api/user/:_id", Auth.private, UsersController.delete);


module.exports = router;
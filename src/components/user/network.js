// Solo rutas del usuario

//Router es una function
import { Router } from "express";
import * as Controller from "./controller";

const userRouter = Router();

userRouter.route("/").get(Controller.findAll);
userRouter.route("/:id").get(Controller.findOne);
userRouter.route("/").post(Controller.create);
userRouter.route("/:id").put(Controller.update);
userRouter.route("/:id").delete(Controller.remove);


// export default es una cosa
//export es masde un cosa
export default userRouter;
import { Router } from "express";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { createCarController } from "../controllers/car/createCar.controller";
import { getCarsController } from "../controllers/car/getCars.controller";
import { bodyValidator } from "../middlewares";
import { carUpdateSerializer } from "../schemas/car.schemas";
import { updateCarController } from "../controllers/car/updateCar.controller";
import { deleteCarController } from "../controllers/car/deleteCar.controller";
import { getEspecificCarController } from "../controllers/car/getEspecificCar.controller";

const carRoutes = Router();

carRoutes.post("", validateTokenMiddleware, createCarController);
carRoutes.get("", validateTokenMiddleware, getCarsController);
carRoutes.get("/:id", validateTokenMiddleware, getEspecificCarController);
carRoutes.patch(
  "/:id",
  validateTokenMiddleware,
  bodyValidator(carUpdateSerializer),
  updateCarController
);
carRoutes.delete("/:id", validateTokenMiddleware, deleteCarController);

export default carRoutes;

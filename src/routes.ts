import { Request, Response, Router } from "express";
import { YoutubeController } from "./controller/YoutubeController";

const routes: Router = Router()

routes.get("", (req:Request,res:Response) => {
    res.json(
        {
            status: "Api está on-line"
        }
    );
})
routes.get("/youtube/download", new YoutubeController().downloadVideo)

export { routes };


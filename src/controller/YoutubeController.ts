import { Request, Response } from "express";
import ytdl from "ytdl-core";

export class YoutubeController{

    async downloadVideo(request: Request, response: Response) {
        const { url, nome_arquivo }  = request.query;
        response.header("Content-Disposition", `attachmentt; filename=\"${nome_arquivo}.mp4\"`)
        return ytdl(url as string).pipe(response)
   }

}
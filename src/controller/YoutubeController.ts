import { Request, Response } from "express";
import * as fs from 'fs';
import ytdl from "ytdl-core";

export class YoutubeController{

    async downloadVideo(request: Request, response: Response) {
        const musicas = request.body.musicas;
        const nome_arquivo = request.query.nome_arquivo as string;
        const path = request.query.path as string;
        response.header("Content-Disposition", `attachmentt; filename=\"${nome_arquivo}.mp3\"`)
        
        musicas.forEach((musica: string,index: number) => {
            ytdl(musica).pipe(fs.createWriteStream(path+nome_arquivo+index+".mp3"))
        });
        response.status(200);
        return response.json(
            {
                retorno: "Musicas baixadas com sucesso"
            }
        );
   }

}
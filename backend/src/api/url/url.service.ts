import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUrlDto } from './url.dto';
import { Url } from './url.entity';
import { hash } from "typeorm/util/StringUtils";

@Injectable()
export class UrlService {
    @InjectRepository(Url)
    private readonly repository: Repository<Url>;

    public getUrl(id: number): Promise<Url> {
        return this.repository.findOneBy({ id });
    }

    public createUrl(body: CreateUrlDto): Promise<Url> {
        const url: Url = new Url();

        url.original = body.original;

        // TODO: HASH URL
        url.hash = hash(body.original);

        return this.repository.save(url);
    }
}

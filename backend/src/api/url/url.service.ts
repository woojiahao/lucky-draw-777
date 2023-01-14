import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUrlDto } from './url.dto';
import { Url } from './url.entity';
import { createHash } from 'crypto';

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

        url.hash = this.generateHash(body.original);

        return this.repository.save(url);
    }

    private generateHash(originalUrl: string): string {
        const susAdjectives = ["free", "unlimited", "delightful", "beautiful", "alluring", "amazing", "magical", "imported", "fancy", "fresh", "fragrant", "lovely", "irresistable", "outstanding", "superb"]; 
        const susNouns = ["c0ins", "d1amonds", "w1fe", "bank", "treasur3", "s1ngles", "g3ms", "cr3dits", "m0ney", "inher1tance", "g0ld", "s1lver", "plat1num", "j3wel", "f0rtun3", "priz3", "ROL3X", "PATEk", "gucc1", "s3x"]
        const hash: string = createHash("md5").update(originalUrl).digest("base64");
        const splits: Array<string> = hash.match(/.{1,8}/g);
        const words = ["hello", "world", "abc"];
        return splits
            .map((split: string) => (
                split.split("")
                    .reduce((acc, curr) => acc + curr.charCodeAt(0), 0)
            ))
            .map((index: number) => words[index % 3])
            .join("-");
    }
}

import {Body, Controller, Get, Inject, Param, Redirect, ParseIntPipe, Post, Res} from '@nestjs/common';
import { CreateUrlDto } from './url.dto';
import { Url } from './url.entity';
import { UrlService } from './url.service';

@Controller('/')
export class UrlController {
    @Inject(UrlService)
    private readonly service: UrlService;

    @Get(':hash')
     public async getUrl(@Res() res, @Param('hash') hash: string): Promise<void> {
        const original = await this.service.getUrl(hash).then(url => url.original);
        return res.redirect(original)
    }

    @Post('/url')
    public createUser(@Body() body: CreateUrlDto): Promise<Url> {
        return this.service.createUrl(body);
    }
}

import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUrlDto } from './url.dto';
import { Url } from './url.entity';
import { UrlService } from './url.service';

@Controller('url')
export class UrlController {
    @Inject(UrlService)
    private readonly service: UrlService;

    @Get(':id')
    public getUrl(@Param('id', ParseIntPipe) id: number): Promise<Url> {
        return this.service.getUrl(id);
    }

    @Post()
    public createUser(@Body() body: CreateUrlDto): Promise<Url> {
        return this.service.createUrl(body);
    }
}

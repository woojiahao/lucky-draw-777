import {
    Body,
    Controller,
    Get,
    Inject,
    Param,
    Post,
    Res,
    NotFoundException, BadRequestException
} from '@nestjs/common';
import { CreateUrlDto } from './url.dto';
import { Url } from './url.entity';
import { UrlService } from './url.service';

@Controller('/')
export class UrlController {
    @Inject(UrlService)
    private readonly service: UrlService;

    @Get(':hash')
     public async getUrl(@Res() res, @Param('hash') hash: string): Promise<void> {
        const url = await this.service.getUrl(hash);
        if (url) {
            const original = url.original;
            if (original.startsWith("http://") || original.startsWith("https://")) {
                return res.redirect(original);
            }
            return res.redirect(`https://${original}`);
        } else {
            throw new NotFoundException();
        }
    }

    @Post('/url')
    public createUser(@Body() body: CreateUrlDto): Promise<Url> {
        return this.service.createUrl(body);
    }
}

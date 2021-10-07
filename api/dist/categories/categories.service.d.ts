import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';
export declare class CategoriesService {
    private categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        name: string;
        imageSrc: string;
    } & Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): string;
    update(id: number): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    forwardError(err: any): void;
}

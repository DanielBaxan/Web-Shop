import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const res = await this.categoryRepo.save({
        ...createCategoryDto,
      });
      return res;
    } catch (err) {
      this.forwardError(err);
    }
  }

  async findAll() {
    try {
      const res = await this.categoryRepo.find();
      return res;
    } catch (err) {
      this.forwardError(err);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }

  public forwardError(err) {
    throw new HttpException(
      '_from categories' + (err.sqlMessage || err.message),
      508,
    );
  }
}

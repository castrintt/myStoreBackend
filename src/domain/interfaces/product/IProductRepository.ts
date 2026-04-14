import { CreateProductDto } from "src/application/dto/request/create-product.dto";
import { UpdateProductDto } from "src/application/dto/request/update-product.dto";
import { FindProductDto } from "src/application/dto/response/find-product.dto";

export interface IProductRepository {
    create(product: CreateProductDto): Promise<{ id: string }>;
    findOne(id: string): Promise<FindProductDto | null>;
    findAll(): Promise<FindProductDto[]>;
    update(id: string, product: UpdateProductDto): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}
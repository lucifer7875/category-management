import CONSTANTS from "../../helpers/constants";
import { ResponseBuilder } from "../../helpers/responseBuilder";
import CategoryUtils from "./categoryUtils";
import { Request, Response } from "express";
import { asyncHandler } from "../../helpers/asyncHandler";

const {
    MESSAGES: {
        OK,
        CREATED,
        CATEGORY_CREATED_SUCCESSFULLY,
        CATEGORY_FETCHED_SUCCESSFULLY,
        CATEGORY_NOT_FOUND,
        CATEGORY_UPDATED_SUCCESSFULLY,
        CATEGORY_DELETED_SUCCESSFULLY,
    }
} = CONSTANTS;

export default class CategoryController {
    private categoryService: CategoryUtils;
    private responseBuilder: ResponseBuilder;

    constructor() {
        this.categoryService = new CategoryUtils();
        this.responseBuilder = new ResponseBuilder();
    }

    /**
     * Get all categories
     */
    public getCategories = asyncHandler(async (req: Request, res: Response) => {
        const categories = await this.categoryService.getCategories();
        return this.responseBuilder.responseContent(res, OK, true, CATEGORY_FETCHED_SUCCESSFULLY, categories);
    });

    /**
     * Get category tree
     */
    public getCategoryTree = asyncHandler(async (req: Request, res: Response) => {
        const categories = await this.categoryService.getCategoryTree();
        return this.responseBuilder.responseContent(res, OK, true, CATEGORY_FETCHED_SUCCESSFULLY, categories);
    });

    /**
     * Get category by id
     */
    public getCategoryById = asyncHandler(async (req: Request, res: Response) => {
        const { id } = req.params;
        const category = await this.categoryService.getCategoryById(id);
        if (!category || category.length === 0) {
            return this.responseBuilder.responseContent(res, 404, false, CATEGORY_NOT_FOUND);
        }
        return this.responseBuilder.responseContent(res, OK, true, CATEGORY_FETCHED_SUCCESSFULLY, category[0]);
    });

    /**
     * Create category
     */
    public createCategory = asyncHandler(async (req: Request, res: Response) => {
        const { body } = req;
        const category = await this.categoryService.createCategory(body);
        return this.responseBuilder.responseContent(res, CREATED, true, CATEGORY_CREATED_SUCCESSFULLY, category);
    });

    /**
     * Update category
     */
    public updateCategory = asyncHandler(async (req: Request, res: Response) => {
        const { id } = req.params;
        const { body } = req;
        const category = await this.categoryService.updateCategory(id, body);
        return this.responseBuilder.responseContent(res, OK, true, CATEGORY_UPDATED_SUCCESSFULLY, category);
    });

    /**
     * Delete category
     */
    public deleteCategory = asyncHandler(async (req: Request, res: Response) => {
        const { id } = req.params;
        const category = await this.categoryService.deleteCategory(id);
        return this.responseBuilder.responseContent(res, OK, true, CATEGORY_DELETED_SUCCESSFULLY, category);
    });
}


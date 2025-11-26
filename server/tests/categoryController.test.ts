import { Request, Response } from 'express';
import CategoryController from '../src/modules/category/categoryController';
import CategoryUtils from '../src/modules/category/categoryUtils';

jest.mock('../src/modules/category/categoryUtils');

describe('CategoryController', () => {
    let categoryController: CategoryController;
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let categoryUtilsMock: jest.Mocked<CategoryUtils>;
    let mockNext: jest.Mock;

    beforeEach(() => {
        jest.clearAllMocks();

        categoryUtilsMock = {
            getCategories: jest.fn(),
            getCategoryById: jest.fn(),
            createCategory: jest.fn(),
            updateCategory: jest.fn(),
            deleteCategory: jest.fn(),
            getCategoryTree: jest.fn(),
        } as unknown as jest.Mocked<CategoryUtils>;

        (CategoryUtils as jest.Mock).mockReturnValue(categoryUtilsMock);

        categoryController = new CategoryController();

        mockRequest = { body: {}, params: {} };
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        mockNext = jest.fn();
    });

    describe('getCategories', () => {
        it('should return all categories successfully', async () => {
            const mockCategories = [{ id: '1', name: 'Category 1' }, { id: '2', name: 'Category 2' }];
            categoryUtilsMock.getCategories.mockResolvedValue(mockCategories as any);

            await categoryController.getCategories(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(200);

            expect(mockResponse.json).toHaveBeenCalledWith({
                statusCode: 200,
                success: true,
                message: 'Category fetched successfully',
                result: mockCategories
            });
        });

        it('should handle error while fetching categories', async () => {
            const error = new Error('Database error');
            categoryUtilsMock.getCategories.mockRejectedValue(error);

            await categoryController.getCategories(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockNext).toHaveBeenCalledWith(error);
        });
    });

    describe('getCategoryTree', () => {
        it('should return category tree successfully', async () => {
            const mockTree = [{ id: '1', name: 'Root', children: [] }];
            categoryUtilsMock.getCategoryTree.mockResolvedValue(mockTree as any);

            await categoryController.getCategoryTree(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith({
                statusCode: 200,
                success: true,
                message: 'Category fetched successfully',
                result: mockTree
            });
        });
    });

    describe('getCategoryById', () => {
        it('should return category by ID successfully', async () => {
            const mockCategory = { id: '1', name: 'Category 1' };
            mockRequest.params = { id: '1' };
            categoryUtilsMock.getCategoryById.mockResolvedValue([mockCategory] as any);

            await categoryController.getCategoryById(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith({
                statusCode: 200,
                success: true,
                message: 'Category fetched successfully',
                result: mockCategory
            });
        });

        it('should handle error while fetching category by ID', async () => {
            const error = new Error('Database error');
            mockRequest.params = { id: '1' };
            categoryUtilsMock.getCategoryById.mockRejectedValue(error);

            await categoryController.getCategoryById(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockNext).toHaveBeenCalledWith(error);
        });
    });

    describe('createCategory', () => {
        it('should create a new category successfully', async () => {
            const mockCategory = { id: '1', name: 'New Category' };
            mockRequest.body = { name: 'New Category' };
            categoryUtilsMock.createCategory.mockResolvedValue(mockCategory as any);

            await categoryController.createCategory(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(201);
            expect(mockResponse.json).toHaveBeenCalledWith({
                statusCode: 201,
                success: true,
                message: 'Category created successfully',
                result: mockCategory
            });
        });

        it('should handle error while creating category', async () => {
            const error = new Error('Database error');
            mockRequest.body = { name: 'New Category' };
            categoryUtilsMock.createCategory.mockRejectedValue(error);

            await categoryController.createCategory(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockNext).toHaveBeenCalledWith(error);
        });
    });

    describe('updateCategory', () => {
        it('should update category successfully', async () => {
            const mockCategory = { id: '1', name: 'Updated Category' };
            mockRequest.params = { id: '1' };
            mockRequest.body = { name: 'Updated Category' };
            categoryUtilsMock.updateCategory.mockResolvedValue(mockCategory as any);

            await categoryController.updateCategory(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith({
                statusCode: 200,
                success: true,
                message: 'Category updated successfully',
                result: mockCategory
            });
        });

        it('should handle error while updating category', async () => {
            const error = new Error('Database error');
            mockRequest.params = { id: '1' };
            mockRequest.body = { name: 'Updated Category' };
            categoryUtilsMock.updateCategory.mockRejectedValue(error);

            await categoryController.updateCategory(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockNext).toHaveBeenCalledWith(error);
        });
    });

    describe('deleteCategory', () => {
        it('should delete category successfully', async () => {
            const mockCategory = { id: '1', name: 'Deleted Category' };
            mockRequest.params = { id: '1' };
            categoryUtilsMock.deleteCategory.mockResolvedValue(mockCategory as any);

            await categoryController.deleteCategory(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith({
                statusCode: 200,
                success: true,
                message: 'Category deleted successfully',
                result: mockCategory
            });
        });

        it('should handle error while deleting category', async () => {
            const error = new Error('Database error');
            mockRequest.params = { id: '1' };
            categoryUtilsMock.deleteCategory.mockRejectedValue(error);

            await categoryController.deleteCategory(mockRequest as Request, mockResponse as Response, mockNext);

            expect(mockNext).toHaveBeenCalledWith(error);
        });
    });
});

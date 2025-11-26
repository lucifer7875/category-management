export default class CONSTANTS {
  public static readonly MESSAGES = {
    // HTTP Status Codes
    OK: 200,
    CREATED: 201,
    BAD_REQ: 400,
    INVALID_CREDENTIAL: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR_CODE: 500,

    // General Messages
    INTERNAL_SERVER: 'Something went wrong!',
    ERR_URL_NOT_FOUND: 'URL not found.',
    FAILED: 'FAILED.',

    // Auth Messages
    UNAUTHORIZED: 'Unauthorized.',
    INAVLID_TOKEN: 'Invalid token.',
    LOGIN_SUCCESS: 'You have successfully logged in!',
    SIGNUP_SUCCESS: 'Registration successful!',
    ACCOUNT_NOT_EXIST: 'Account does not exist with the given email.',
    ACCOUNT_DEACTIVATED: 'We apologize, but your account has been temporarily deactivated. Please contact our support team for further assistance.',
    INCORRECT_PASSWORD: 'Incorrect password.',
    EMAIL_INVALID: 'Invalid email.',
    FORGOT_PASSWORD_LINK_SEND: 'Forgot password link sent.',
    FORGOT_PASSWORD_LINK_EXPIRED: 'This link has been used earlier and is no longer valid.',
    PASSWORD_CHANGE_SUCESSFULLY: 'Password changed successfully.',

    // Category Messages
    CATEGORY_CREATED_SUCCESSFULLY: "Category created successfully",
    CATEGORY_FETCHED_SUCCESSFULLY: "Category fetched successfully",
    CATEGORY_UPDATED_SUCCESSFULLY: "Category updated successfully",
    CATEGORY_DELETED_SUCCESSFULLY: "Category deleted successfully",
    CATEGORY_NOT_FOUND: "Category not found",
  };
}

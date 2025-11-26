import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
export default class Utils {
    /**
     * Authorise token from headers and return user id
    */
    public authToken = async (authorization: any) => {
        let userId: any;
        if (authorization && authorization.split(' ')[0] === 'Bearer') {
            jwt.verify(authorization.split(' ')[1], process.env.JWT_SECRET, (err, token) => {
                if (err) {

                } else {
                    userId = token?.id;
                }
            });
        }
        if (userId == undefined) {
            userId = 0;
        }

        return userId;
    }

    /**
    * uploadImage
    * To upload bulk image.
    * @param images - images: array, folder name: string.
    * @returns The array of uploaded images.
    */
    public encryptPassword = (password) => {
        return bcrypt.hash(password, 10);
    };
}

import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import CONSTANTS from '../helpers/constants';

const { MESSAGES: { INAVLID_TOKEN, UNAUTHORIZED ,INVALID_CREDENTIAL} } = CONSTANTS;

// Extend Express Request interface to include user
declare global {
  namespace Express {
    interface Request {
      user?: any;
      userId?: number;
    }
  }
}

export const IsTokenValid = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(INVALID_CREDENTIAL).json({ message: UNAUTHORIZED });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(INVALID_CREDENTIAL).json({ message: UNAUTHORIZED });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    // Attach to request object for downstream use
    req.user = decoded;
    // @ts-ignore - handling legacy support if needed, though req.user is preferred
    req.userId = (decoded as any).id || (decoded as any).userId;

    // Also attach to locals as per original code, though req.user is more standard in Express
    res.locals = decoded;

    next();
  } catch (error) {
    return res
      .status(INVALID_CREDENTIAL)
      .json({ message: INAVLID_TOKEN, error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

// Deprecate extractUserId in favor of IsTokenValid, or alias it if strictly needed for backward compat
export const extractUserId = IsTokenValid;


import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getToken() {
  return localStorage.getItem('token');
}

export function setToken(token: string) {
  localStorage.setItem('token', token);
}

export function removeToken() {
  localStorage.removeItem('token');
}

/**
 * Decodes a JWT token and extracts the payload
 * @param token The JWT token to decode
 * @returns The decoded payload or null if invalid
 */
export function decodeToken(token: string): any {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}

/**
 * Gets the user name from the stored JWT token
 * @returns The user name or null if not found
 */
export function getNameFromToken(): string | null {
  const token = getToken();
  if (!token) return null;

  const decoded = decodeToken(token);
  return decoded?.name || decoded?.username || decoded?.email || null;
}


/**
   * Formats the options for the dropdown
   * @param data The data to format
   * @param valueFrom The name of the field to format
   * @param labelFrom The name of the field to format
   * @returns The formatted options
   */
export function formattedOptions<T>(data: T[], valueFrom: keyof T, labelFrom: keyof T) {
  if (!data) return [];
  return data.map((item) => ({
    value: String(item[valueFrom] ?? ''),
    label: String(item[labelFrom] ?? '')
  }));
}



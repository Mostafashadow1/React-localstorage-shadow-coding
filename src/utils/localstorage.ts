/**
 * Sets an item in the browser's local storage by converting the value to a JSON string
 *
 * @template T - The type of value being stored
 * @param {string} key - The key under which to store the value in local storage
 * @param {T} value - The value to be stored in local storage
 *
 * @example
 * ```typescript
 * // Store a string
 * setItemInLocalstorage('username', 'john_doe')
 *
 * // Store an object
 * setItemInLocalstorage('user', { id: 1, name: 'John' })
 * ```
 *
 * @throws {Error} If localStorage is not available or quota is exceeded
 */

export function setItemInLocalstorage<T>(key: string, value: T) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

/**
 * Retrieves an item from localStorage and parses it as JSON
 *
 * @template T - The type of the value to be retrieved
 * @param {string} key - The key under which the value is stored in localStorage
 * @param {T} intialValue - The default value to return if the key doesn't exist or if there's an error
 * @returns {T} The parsed value from localStorage if it exists, otherwise the initial value
 *
 * @example
 * ```typescript
 * // Get a string value
 * const name = getItemFromLocalstorage<string>('userName', '');
 *
 * // Get an object
 * const user = getItemFromLocalstorage<User>('userDetails', defaultUser);
 * ```
 */
export function getItemFromLocalstorage<T>(key: string, intialValue: T) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : intialValue;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Removes an item from the browser's local storage by its key.
 *
 * @param key - The key of the item to remove from local storage
 * @throws Will log any errors that occur during removal to the console
 *
 * @example
 * ```typescript
 * removeItemFromLocalstorage('user-preferences');
 * ```
 */
export function removeItemFromLocalstorage(key: string) {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
}

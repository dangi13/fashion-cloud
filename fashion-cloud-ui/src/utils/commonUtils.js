/**
 * It will generate alphanumeric string with capital letters.
 * @param {*} myLength : length of string you want
 */
 export function generateAlphaNumericString (myLength) {
    const generatedString = Array(myLength).fill(0).map(x => Math.random().toString(36).charAt(2)).join('').toUpperCase()
  
    return generatedString
  }
  
  /**
 * @param {object} replacementValues  : values with replacements in object format
 *                               e.g let args = {
                                                toBeReplaced : replacementValue,
                                                good:"bad",
                                                sick:"healthy"
                                    };
                                    // here for e.g good is the string that needs to be replaced with "bad"
 *  @returns {string} modified string
 */
export function replaceMultipleValues (stringToModify, replacementValues) {
  const regexToReplace = new RegExp(Object.keys(replacementValues).join('|'), 'gi') // it will form the required regex to replace values
  const modifiedString = stringToModify.replace(regexToReplace, (matched) => replacementValues[matched])

  return modifiedString
}
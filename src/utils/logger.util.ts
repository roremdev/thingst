/**
 * @description success response ✔
 * @param {string} message - success message */
export const complete = (message: string) => {
    console.log(`✔ Success: ${message}`)
}

/**
 * @description fail response ✖
 * @param {string} message - error message */
export const fail = (message: string) => {
    console.log(`✖ Error: ${message}`)
}

/**
 * @description info response ℹ
 * @param {string} message - info message */
export const info = (message: string) => {
    console.log(`ℹ Info: ${message}`)
}

/**
 * @description Success response ✔
 * @param {string} message - success message */
export const complete = (message: string) => {
    console.log(`✔ Success: ${message}`)
}

/**
 * @description Fail response ✖
 * @param {string} message - error message */
export const fail = (message: string) => {
    console.log(`✖ Error: ${message}`)
}

/**
 * @description Info response ℹ
 * @param {string} message - info message */
export const info = (message: string) => {
    console.log(`ℹ Info: ${message}`)
}

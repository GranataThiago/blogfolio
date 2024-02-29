import { EMAIL_REGEX } from "./utils"

export const isValidEmail = (email: string) => {
    return email.match(EMAIL_REGEX)
}
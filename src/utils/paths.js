import { url_contact, url_login } from "./pageUrls"


export const userGuestPaths = [
    url_login
]

export const userPublicPaths = [
    url_contact
]

export const isPublicRoute = ({ pathname }) => {
    return [...userGuestPaths].includes(pathname)
}

export const isGuestRoute = ({ pathname }) => {
    return [...userGuestPaths].includes(pathname)
};

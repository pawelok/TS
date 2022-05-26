import axios from 'axios'

export const getRequest = async (url) => {
    try {
        return await axios.get(url)
    } catch (err) {
        return err
    }
}

export const postRequest = async (url) => {
    try {
        return await axios.post(url)
    } catch (err) {
        return err
    }
}

import axios from 'axios';

export async function getFrequency(word) {
    try {
        const response = await axios.get('http://127.0.0.1:4999/check-word', {
            params: {
                word: word
            }
        });

        const frequency = response.data.frequency;
        return frequency;
    }
    catch (error) {
        if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        throw error;
    }
}

import axios from 'axios';

async function generateRandomImage(): Promise<{ url: string }> {
    try {
        const response = await axios.get('https://api.waifu.pics/sfw/waifu');
        const url = response.data.url;
        return {url};
    } catch (error) {
        console.error('Error api.waifu');
        return {url: 'https://bit.ly/47XoTlW'};
    }
}

export default generateRandomImage;

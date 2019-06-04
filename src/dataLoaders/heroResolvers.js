import axios from 'axios';

const dataLoaders = {
    Query: {
        heroes: async () => {
            let response;
            try {
                response = await axios({
                    method: 'get',
                    url: 'https://api.stratz.com/api/v1/Hero'
                });
            }
            catch (error) {
                // TODO handle error
                console.log(error.response);
            }
            const heroes = Object.values(response.data);
            console.log(heroes);
            return heroes;
        },
    },
}
export default dataLoaders;
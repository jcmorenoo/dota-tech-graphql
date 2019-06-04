import axios from 'axios';

const dataLoaders = {
    Query: {
        abilities: async () => {
            let response;
            try {
                response = await axios({
                    method: 'get',
                    url: 'https://api.stratz.com/api/v1/Ability'
                });
            }
            catch (error) {
                // TODO handle error
                console.log(error.response);
            }
            const abilities = Object.values(response.data);
            console.log(abilities);
            return abilities;
        },
    },
}
export default dataLoaders;
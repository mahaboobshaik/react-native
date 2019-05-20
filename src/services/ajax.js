
const apiHost = 'https://bakesaleforgood.com'

export default {
    async fetchInitialDeals() {
        try {
            let response = await fetch(apiHost+'/api/deals');
            let responseJson = await response.json();
            return responseJson;
          } catch (error) {
            console.error(error);
        }
    },

    async fetchDealDetails(dealId) {
        try {
            const response = await fetch(apiHost+'/api/deals/'+dealId);
            const responseJson = await response.json();
            return responseJson;
          } catch (error) {
            console.error(error);
        }
    },

    async fetchDealsSearchResults(searchTerm) {
        try {
            const response = await fetch(apiHost+'/api/deals?searchTerm='+searchTerm);
            const responseJson = await response.json();
            return responseJson;
          } catch (error) {
            console.error(error);
        }
    }
};
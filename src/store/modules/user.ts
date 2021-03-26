export const Users = {
    state: () => ({
    }),
    mutations: {},
    actions:{
        getData() {
            return new Promise((resolve) => {
                fetch('https://reqres.in/api/users?page=2').then(res => {
                    return res.json()
                }).then(result => {
                     resolve(result.data)
                })
            })
        }
    },
    getters: {

    }
}
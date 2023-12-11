const { createApp } = Vue

createApp({
    data(){
        return{
            message: "Dracarys!",
            image: "https://www.nacionflix.com/__export/1659314829158/sites/debate/img/2021/11/26/daenerys-targaryen-game-of-thrones-dracarys-dragons.jpg_242310155.jpg"
        }
    }
}).mount("#app");
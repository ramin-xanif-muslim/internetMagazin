// import * as axios from "axios";


// let Token = localStorage.getItem("Token")
// const instance = axios.create({
//     baseURL: "https://store.bein.az/controllers",
//     headers:     {
//         "Token": `${Token}`
//     }
// });


// export const productsAPI = {
//     getProduct() {
//         return dispatch => {
//             dispatch({
//                 type: GET_PRODUCT,
//                 payload: instance.post(`/product/read.php`)
//                     .then(result => result.data)
//                     .then(data => data)
//             })
//         }
//     },
//     updateProduct(data) {
//         return dispatch => {
//             dispatch({
//                 type: UPDATE_PRODUCT,
//                 payload: axios.post(`/product/update.php`, data)
//                     .then(result => result.data)
//                     .then(data => data.Body)
//             })
//         }
//     },
//     showMore(data) {
//         return dispatch => {
//             dispatch({
//                 type: SHOW_MORE,
//                 payload: axios.post(`/product/read.php`, data)
//                     .then(result => result.data)
//                     .then(data => data.Body.List)
//             })
//         }
//     },
// }

// export const profileAPI = {
//     getProfile(userId) {
//         return instance.get(`profile/` + userId);
//     },
//     getStatus(userId) {
//         return instance.get(`profile/status/` + userId);
//     },
//     updateStatus(status) {
//         return instance.put(`profile/status`, { status: status });
//     },
//     savePhoto(photoFile) {
//         const formData = new FormData();
//         formData.append("image", photoFile);

//         return instance.put(`profile/photo`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });
//     },
//     saveProfile(profile) {
//         return instance.put(`profile`, profile );
//     }
// }

// export const authAPI = {
//     me() {
//         return instance.get(`auth/me`);
//     },
//     login(email, password, rememberMe = false, captcha = null) {
//         return instance.post(`auth/login`, { email, password, rememberMe, captcha });
//     },
//     logout() {
//         return instance.delete(`auth/login`);
//     }
// }

// export const securityAPI = {
//     getCaptchaUrl() {
//         return instance.get(`security/get-captcha-url`);
//     }
// }



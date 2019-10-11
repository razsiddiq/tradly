export function PostData(type, userData){
    let BaseUrl = 'http://146.66.96.127/restful/'; 
    return new Promise((resolve, reject) => {
        fetch(BaseUrl+type,{
            method : 'POST',
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(1);
            resolve(responseJson);
        })
        .catch((error) => {
            console.log(2);
            reject(error);
        });
    });
}
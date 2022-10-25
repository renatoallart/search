import axios from "axios";

export async function fetchUsersData(){
    const {data} = await axios('https://random-data-api.com/api/v2/users?size=14&is_xml=true')
    // return data
    const formattedData = data.map(user => ({
        id:user.id,
        name: `${user.first_name} ${user.last_name}`,
        avatar:user.avatar,
        gender:user.gender,
        userName: user.username
    }) )
    return formattedData
}
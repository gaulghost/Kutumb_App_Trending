import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, FlatList, Text, RefreshControl, View} from 'react-native';
import UserCard from './UserCard';
import data from './data';
import ErrorCard from './error';
import LanguageBar from './languageBar';
import NavBar from './NavBar';
import UserShimmerCard from './UserShimmerCard';


function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}

const Shimmer = () => {
    const arr = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {arr.map((item) => {
                return <UserShimmerCard />
            })}
        </>
    )
}

function Users() {

    const [userData, setUserData] = useState(data);
    const [fetchfailed, setFetchFailed] = useState(false);
    const unique = [...new Set(userData.map(item => item.language))];
    const grouped = groupBy(userData, user => user.language);
    const [shimmerScreen, setShimmerScreen] = useState(true)
    const [refreshing, setRefreshing] = useState(false)

    // API is down, So made another file that contains data

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    const changeSetShimmerValue = () => {
        setShimmerScreen(true);
    }

    const disableErrorPage = () => {
        setShimmerScreen(true);
        delay(1000).then(() => setShimmerScreen(false));
        setFetchFailed(false);
    }

    const fetchApi = () => {
        axios({
            method: "GET",
            url: "https://ghapi.huchen.dev/repositories",
            headers: {
                "Content-Type":"application/json"
            }
        })
        .then((response) => {
            console.log(response)
            setUserData(response.data)
            setFetchFailed(false)
            delay(2000).then(() => setShimmerScreen(false));
        })
        .catch((err) => {
            console.log(err);
            setFetchFailed(true)
            delay(2000).then(() => setShimmerScreen(false));
        })
    }

    useEffect(() => {
       fetchApi();
    }, [])

    return (
        <>
        {   
            shimmerScreen == true ?
            <>
                <Shimmer/>
            </> : 
            <>
            {
                fetchfailed == false ? 
                <>
                <NavBar/>
                <View>
                    {   unique.map((item) =>{
                            const userDataLang = grouped.get(item);
                            return(
                                <>
                                    <LanguageBar key={item} language  = {item} color = {userDataLang[0].languageColor}/>
                                    <FlatList
                                        data={userDataLang}
                                        renderItem={(item) => <UserCard user = {item}/>}
                                        keyExtractor={(item) => item.author}
                                        refreshControl={<RefreshControl refreshing = {refreshing} onRefresh={fetchApi}/>}
                                    />
                                </>
                            )
                        })
                    }
                </View>
                {/* <ScrollView>
                    {   unique.map((item) =>{
                            const userDataLang = grouped.get(item);
                            return(
                                <>
                                    <LanguageBar key={item} language  = {item} color = {userDataLang[0].languageColor}/>
                                    {userDataLang.map((user) => {
                                        return <UserCard user={user}/>
                                    })}
                                </>
                            )
                        })
                    }
                </ScrollView> */}
                {/* <FlatList>
                    data = {unique}
                    renderItem = 
                        {(item) =>{
                            const userDataLang = grouped.get(item);
                            console.log("Unique : ",unique);
                            console.log("Item : ",item);
                            console.log("User Data per Language : ",userDataLang);
                            return(
                                <>
                                    <LanguageBar key={item} language  = {item} color = {userDataLang[0].languageColor}/>
                                    {userDataLang.map((user) => {
                                        return <UserCard user={user}/>
                                    })}
                                </>
                            )
                        }}
                    keyExtractor = {item => item[0].languageColor+'1'}
                    refreshControl = {<RefreshControl refreshing = {refreshing} onRefresh={fetchApi}/>}
                </FlatList> */}
                </>
                : <ErrorCard api={fetchApi} shimmerset = {changeSetShimmerValue} disableError = {disableErrorPage}/>

            }
            </>
        }
        </>

    );
}

export default Users;

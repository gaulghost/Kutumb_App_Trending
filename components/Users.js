import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
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


function Users() {

    const [userData, setUserData] = useState(data);
    const [fetchfailed, setFetchFailed] = useState(false);
    const unique = [...new Set(userData.map(item => item.language))];
    console.log("unique : ", unique);
    const grouped = groupBy(userData, user => user.language)
    console.log("Grouped Array Items : ", grouped)

    // API is down, So made another file that contains data

    const fetchApi = () => {
        console.log("fetch");
        axios({
            method: "GET",
            url: "https://ghapi.huchen.dev/repositories",
            headers: {
                "Content-Type":"application/json"
            }
        })
        .then((response) => {
            console.log(response)
            setFetchFailed(false)
        })
        .catch((err) => {
            console.log(err);
            setFetchFailed(true)
        })
    }

    useEffect(() => {
       fetchApi();
    }, [])

    return (
        <>
        {
            fetchfailed == false ? 
            <>
                {   unique.map((item) =>{
                        const userDataLang = grouped.get(item);
                        return(
                            <>
                            <NavBar/>
                            <ScrollView>
                                <LanguageBar key={item} language = {item} color = {userDataLang[0].languageColor}/>
                                {userDataLang.map((user) => {
                                    console.log(user);
                                    return <UserCard key={user["author"]} author={user["author"]}  reponame={user["name"]} avatar={user["avatar"]} description={user["description"]} language={user["language"]} stars={user["stars"]} forks={user["forks"]} iconColor={user["languageColor"]}/>
                                })}
                                <UserShimmerCard/>
                            </ScrollView>
                            </>
                        )
                    })
                }
            </>
            : <ErrorCard api={fetchApi}/>

        }
        </>

    );
}

export default Users;

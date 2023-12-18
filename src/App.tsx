import {Navigate, Route, Routes} from "react-router-dom";
import {Header} from "@/layout/header/Header";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {Navigation} from "@/layout/navigation/Navigation";
import {Profile} from "@/layout/profile/Profile";
import {News} from "@/layout/news/News";
import {PageError} from "@/layout/pageError/PageError";
import {Footer} from "@/layout/footer/Footer";
import {Users} from "@/layout/users/Users";
import {MessagesWithBlock} from "@/layout/messages/message/proba/MessagesWithBlock";
import {Message} from "@/layout/messages/message/proba/Message";
import {Login} from "@/components/login/Login";
import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "@/store/store";
import {useEffect} from "react";
import {authMeTC} from "@/store/reducers/auth-reducer";
import {Snackbar} from "@/components/snackbar/Snackbar";


function App() {
    const isInitialized = useSelector<AppStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(authMeTC())
    }, [dispatch]);

    return (
        <div>
            {isInitialized && <Header/>}
            <FlexWrapper justify={"space-between"}>
                {isInitialized && <Navigation/>}
                <Snackbar/>
                <Routes>
                    <Route path={'/'} element={<Profile/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                    {/*<Route path={'/users/:id'} element={<UserPage/>}/>*/}
                    <Route path={'/users/:id'} element={<Profile/>}/>
                    {/*<Route path={'messages'} element={<Messages/>}/>*/}
                    <Route path={'/messages'} element={<MessagesWithBlock/>}/>
                    <Route path={'/messages/:id'} element={<Message/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/404'} element={<PageError/>}/>
                    <Route path={'*'} element={<Navigate to={'/404'}/>}/>
                </Routes>
            </FlexWrapper>
            <Footer/>
        </div>
    )
}

export default App

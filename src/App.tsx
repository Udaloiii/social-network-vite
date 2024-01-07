import {Navigate, Route, Routes} from "react-router-dom";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {PageError} from "@/layout/pageError/PageError";
import {Footer} from "@/layout/footer/Footer";
import {Login} from "@/components/login/Login";
import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "@/store/store";
import {useEffect} from "react";
import {authMeTC} from "@/store/reducers/auth-reducer";
import {Loader} from "@/components/loader/Loader";
import {GoToTop} from "@/components/goToTop/GoToTop";
import {Container} from "@/components/container/Container";
import {Snackbar} from "@/components/snackbar/Snackbar";
import {ProfileVK} from "@/layout/profile/ProfileVK";
import {MessagesWithBlockVK} from "@/layout/messages/MessagesWithBlockVK";
import {MessageVK} from "@/layout/messages/message/proba/MessageVK";
import {UsersVK} from "@/layout/users/UsersVK";
import {NewsVK} from "@/layout/news/NewsVK";
import {Navigation} from "@/layout/navigation/Navigation";
import {Header} from "@/layout/header/Header";


function App() {
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.auth.isLoggedIn)
    const isAppInitialized = useSelector<AppStateType, boolean>(state => state.app.isInitialized)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(authMeTC())
    }, [dispatch]);

    if (!isAppInitialized) {
        return <div style={{
            width: "100vw",
            height: "100vh",
            margin: "0"
        }}>
            <Loader/>
        </div>
    }
    return (
        <div style={{background: "#EDEEF0"}}>
            {isLoggedIn && <Header/>}
            <Container>
                <FlexWrapper >
                {isLoggedIn && <Navigation/>}
                <Snackbar/>
                <GoToTop/>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                    {/*<Route path={'/'} element={<Profile/>}/>*/}
                    {/*<Route path={'/profile'} element={<Profile/>}/>*/}
                    <Route path={'/profile'} element={<ProfileVK/>}/>
                    {/*<Route path={'/users'} element={<Users/>}/>*/}
                    <Route path={'/users'} element={<UsersVK/>}/>
                    {/*<Route path={'/users/:id'} element={<UserPage/>}/>*/}
                    <Route path={'/users/:id'} element={<ProfileVK/>}/>
                    {/*<Route path={'/messages'} element={<MessagesWithBlock/>}/>*/}
                    <Route path={'/messages'} element={<MessagesWithBlockVK/>}/>
                    {/*<Route path={'/messages/:id'} element={<Message/>}/>*/}
                    <Route path={'/messages/:id'} element={<MessageVK/>}/>
                    {/*<Route path={'/news'} element={<News/>}/>*/}
                    <Route path={'/news'} element={<NewsVK/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/404'} element={<PageError/>}/>
                    <Route path={'*'} element={<Navigate to={'/404'}/>}/>
                </Routes>
            </FlexWrapper></Container>
            {isLoggedIn && <Footer/>}
        </div>
    )
}

export default App

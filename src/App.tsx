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
import {Navigation} from "@/layout/navigation/Navigation";
import {Header} from "@/layout/header/Header";
import {Profile} from "@/layout/profile/Profile";
import {Users} from "@/layout/users/Users";
import {Messages} from "@/layout/messages/Messages";
import {Message} from "@/layout/messages/message/Message";
import {News} from "@/layout/news/News";


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
                <FlexWrapper>
                    {isLoggedIn && <Navigation/>}
                    <Snackbar/>
                    <GoToTop/>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/users'} element={<Users/>}/>
                        <Route path={'/users/:id'} element={<Profile/>}/>
                        <Route path={'/messages'} element={<Messages/>}/>
                        <Route path={'/messages/:id'} element={<Message/>}/>
                        <Route path={'/news'} element={<News/>}/>
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

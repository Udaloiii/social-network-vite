import {Route, Routes} from "react-router-dom";
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
import {UserPage} from "@/layout/users/userPage/UserPage";


function App() {
    return (
        <div>
            <Header/>
            <FlexWrapper justify={"space-between"}>
                <Navigation/>
                <Routes>
                    <Route path={'/'} element={<Profile/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/users/:id'} element={<UserPage/>}/>
                    {/*<Route path={'messages'} element={<Messages/>}/>*/}
                    <Route path={'/messages'} element={<MessagesWithBlock/>}/>
                    <Route path={'/messages/:id'} element={<Message/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/*'} element={<PageError/>}/>
                </Routes>
            </FlexWrapper>
            <Footer/>
        </div>
    )
}

export default App

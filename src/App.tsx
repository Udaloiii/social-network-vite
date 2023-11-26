import {Route, Routes} from "react-router-dom";
import {Header} from "@/layout/header/Header";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {Navigation} from "@/layout/navigation/Navigation";
import {Profile} from "@/layout/profile/Profile";
import {Messages} from "@/layout/messages/Messages";
import {News} from "@/layout/news/News";
import {PageError} from "@/layout/pageError/PageError";
import {Footer} from "@/layout/footer/Footer";
import {Users} from "@/layout/users/Users";


function App() {
    return (
        <div>
            <Header/>
            <FlexWrapper justify={"space-between"}>
                <Navigation/>
                <Routes>
                    <Route path={'/'} element={<Profile/>}/>
                    <Route path={'profile'} element={<Profile/>}/>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'messages'} element={<Messages/>}/>
                    <Route path={'news'} element={<News/>}/>
                    <Route path={'/*'} element={<PageError/>}/>
                </Routes>
            </FlexWrapper>
            <Footer/>
        </div>
    )
}

export default App

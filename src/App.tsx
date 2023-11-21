import {FlexWrapper} from "./components/flexWrapper/FlexWrapper"
import {Header} from "./layout/header/Header"
import {Navigation} from "./layout/navigation/Navigation"
import {Profile} from "./layout/profile/Profile"
import {Footer} from "./layout/footer/Footer.tsx";
import {Route, Routes} from "react-router-dom";
import {Messages} from "./layout/messages/Messages.tsx";
import {News} from "./layout/news/News.tsx";
import {PageError} from "./layout/pageError/PageError.tsx";


function App() {
    return (
        <div>
            <Header/>
            <FlexWrapper justify={"space-between"}>
                <Navigation/>
                <Routes>
                    <Route path={'profile'} element={<Profile/>}/>
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

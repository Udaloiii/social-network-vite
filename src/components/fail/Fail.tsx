import styled from "styled-components";

export const Fail = () => {
    return (
        <Container>
            <div style={{width: "100%", height: "", paddingBottom: "83%", position: "relative"}}>
                <iframe src="https://giphy.com/embed/ljtfkyTD3PIUZaKWRi" width="100%" height="100%"
                        style={{position: "absolute", top: "15px", left: "200px", borderRadius: "10px", border: "none"}}
                        allowFullScreen></iframe>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 45vw;
    height: 45vh;
    user-select: none;
    border-radius: 12px;
    pointer-events: none;
`
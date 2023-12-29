import {FC} from "react";
import styled from "styled-components";
import {FlexWrapper} from "@/components/flexWrapper/FlexWrapper";
import {Icon} from "@/components/icon/Icon";

type IconType = {
    id: string
    href: string
}
const iconsForContacts: IconType[] = [
    {id: "linkedin", href: "https://www.linkedin.com/in/eugene-udalykh/"},
    {id: "gmail", href: "mailto:eugene.udalykh@gmail.com"},
    {id: "instagram", href: "https://www.instagram.com/udaloiii/"},
    {id: "telegram", href: "https://t.me/uda1oiii"}]
export const Footer: FC = () => {
    return (
        <StyleFooter>
                <FlexWrapper direction={"column"} gap={"10px"} align={"center"}>
                    <SocialList>
                        {iconsForContacts.map(el => <li key={el.id}><
                            Link href={el.href}
                                                                            target="_blank">
                            <Icon
                            iconId={el.id}/></Link>
                        </li>)}
                    </SocialList>
                    <Text>© 2023 Eugene Udalykh | All Rights Reserved.</Text>
                </FlexWrapper>
        </StyleFooter>
    )
}

const StyleFooter = styled.footer`
  //height: 50px;
  padding: 30px 0 10px;
`
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 30px;
  width: 30px;
  background-color: #4A76A8;
  transition: .2s;
  //color: whitesmoke;

  &:hover {
    transform: scale(1.1);
    transition: .2s;
    background-color: #005dbe;
    color: whitesmoke;
    box-shadow: 0 0 10px 2px #005dbe;
  }

  &:active {
    transform: scale(0.95);
    transition: .2s;
  }
  
  svg {
    width: 25px;
  }
`

const Text = styled.div`
  font-family: Josephine Sans, sans-serif;
  color: rgb(169, 169, 169);
  font-size: 0.8rem;
  user-select: none;
`
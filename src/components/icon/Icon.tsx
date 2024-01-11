import svgSprite from '../../assets/icons/svgSprite.svg'
import vkSprite from '../../assets/icons/svgSpriteVK.svg'
import styled from "styled-components";

type IconType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    colorLike?: string
    addLike?: () => void
    vkIcons?: boolean
    onClick?: () => void
}
export const Icon = ({iconId, width, height, viewBox, colorLike, addLike, vkIcons, onClick}: IconType) => {
    return (
        <IconWrap onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width={width || "50"} height={height || "50"}
                 viewBox={viewBox || "0 0 24 24"} fill="none" onClick={addLike}>
                <use xlinkHref={`${vkIcons ? vkSprite : svgSprite}#${iconId}`} color={colorLike}/>
            </svg>
        </IconWrap>
    )
}

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  // обернул в див для onClick
`
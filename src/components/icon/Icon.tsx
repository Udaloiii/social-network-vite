import svgSprite from '../../assets/icons/svgSprite.svg'

type IconType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    colorLike? : string
    addLike?: () => void
    postId: number
}
export const Icon = ({iconId, width, height, viewBox, colorLike, addLike}: IconType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || "50"} height={height || "50"}
             viewBox={viewBox || "0 0 24 24"} fill="none" onClick={addLike}>
            <use xlinkHref={`${svgSprite}#${iconId}`} color={colorLike}/>
        </svg>
    )
}
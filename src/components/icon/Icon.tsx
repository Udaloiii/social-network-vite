import svgSprite from '../../assets/icons/svgSprite.svg'

type IconType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = ({iconId, width, height, viewBox}: IconType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || "50"} height={height || "50"}
             viewBox={viewBox || "0 0 24 24"} fill="none">
            <use xlinkHref={`${svgSprite}#${iconId}`}/>
        </svg>
    )
}
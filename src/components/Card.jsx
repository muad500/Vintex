import "../styles/Components/Card.module.css"
import Button from "./Button"

export default function Card({ image, thumb, title, description}){
    return (
        <a href="" className="card">
            <img src={image} className="card__image" alt="" />
            <div className="card__overlay">
                <div className="card__header">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                    {/* <img className="card__thumb" src={thumb} alt="" /> */}
                    <div className="card__header-text">
                        <h3 className="card__title">{title}</h3>
                        <Button  data="Read More"/>
                    </div>
                </div>
                <p className="card__description">{description}</p>
            </div>
        </a>
    )
}
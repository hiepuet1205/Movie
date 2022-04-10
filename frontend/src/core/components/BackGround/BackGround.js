import classes from './BackGround.module.css'
import background from '../../../assets/video/background.mp4'

const BackGround = () => {
    return (
        <video autoPlay muted loop className={classes.myVideo}>
            <source src={background} type="video/mp4"/>
        </video>
    )
}

export default BackGround;
import { memo } from 'react';
import classes from './Person.module.css';

const Person = props => {
    const person = props.person

    return (
        <section className={`${classes.person} ${classes.person_container}`}>
            <h2 className={classes.person_name}>{person.name}</h2> 
            <div className={classes.person_details}>
                <img src={person.image} alt={person.name} className={classes.person_details_img}/>
                <div className={classes.person_details_video}>
                    <video
                        src={person.videoUrl}
                        controls
                    ></video>
                </div>
            </div>

            <div className={classes.person_info}>
                <div className={classes.person_info_description}>
                    <p>{person.description}</p>
                </div>
                <div>
                    <h4>Born</h4>
                    <p>{person.birthDay} in {person.born}</p>
                </div>
                <div>
                    <h4>Birth Name</h4>
                    <p>{person.birthName}</p>
                </div>
                <div>
                    <h4>Height</h4>
                    <p>{person.height/100} m</p>
                </div>
            </div>
        </section>
    )
}

export default memo(Person)
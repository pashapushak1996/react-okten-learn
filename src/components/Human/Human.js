import './Human.module.css';

const Human = ({human: {name, url, gender, hair_color, eye_color, height}}) => {
    return (
        <div>
            <h2>{ name }</h2>
            <div>
                <b>Height: </b>
                <span>{ height } cm</span>
            </div>
            <div>
                <b>Gender: </b>
                <span>{ gender }</span>
            </div>

        </div>
    );
}

export default Human;

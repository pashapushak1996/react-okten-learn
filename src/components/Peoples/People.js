import './People.module.css';
import Human from "../Human/Human";

export const People = ({people, nextPage}) => {
    console.log(people);
    return (
        <div>
            <div>
                <button onClick={ () => {
                    nextPage();
                } }>Next
                </button>
            </div>
            { people && people.map((human) => <Human key={ human.name } human={ human }/>) }
        </div>
    );
}


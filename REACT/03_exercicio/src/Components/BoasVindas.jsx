import PropTypes from 'prop-types';
const estilo = { color: 'Blue' };
const BoasVindas = (props) => {
    return (
        <div>
            <h1 style={estilo}>Olá, {props.nome}, seja bem-vindo!</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit odio odit, itaque minus, libero sequi omnis delectus
                voluptatibus cupiditate sed nisi nulla tempore suscipit dolores
                atque. Corporis quibusdam repellat tenetur.
            </p>
        </div>
    );
};

BoasVindas.defaultProps = {
    nome: 'Bruno',
};

BoasVindas.propTypes = {
    nome: PropTypes.string,
};

export default BoasVindas;

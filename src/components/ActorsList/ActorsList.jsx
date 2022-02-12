import { Image } from 'components/Utils/ImageApi';
import { Name, Container, Card } from './ActorsList.styled';
import PropTypes from 'prop-types';

export const ActorsList = ({ actors }) => (
  <Container>
    {actors?.length > 0 &&
      actors.map(({ id, profile_path, name }) => (
        <Card key={id}>
          <Image
            src={profile_path}
            alt={name}
            styling={' width: 100px; height: 150px;'}
          />
          <Name>{name}</Name>
        </Card>
      ))}
  </Container>
);

ActorsList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ),
};

import { SectionContainer } from 'components/Utils/SectionContainer';
import { Section, Li, SuperLink, Title } from './MoreInfoNavigation.styled';
import PropTypes from 'prop-types';

export const MoreInfoNavigation = ({ id }) => {
  return (
    <Section>
      <SectionContainer>
        <Title>Дополнительная информация</Title>
        <ul>
          <Li>
            <SuperLink to={`/movies/${id}/cast`}>Актерский состав</SuperLink>
          </Li>
          <Li>
            <SuperLink to={`/movies/${id}/reviews`}>Отзывы</SuperLink>
          </Li>
        </ul>
      </SectionContainer>
    </Section>
  );
};

MoreInfoNavigation.propTypes = {
  id: PropTypes.string.isRequired,
};

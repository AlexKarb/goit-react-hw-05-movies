import { RiSearchEyeLine } from 'react-icons/ri';
import { Formik, ErrorMessage } from 'formik';
import { Button } from 'components/Utils';
import { Wrapper, Label, Error, SuperForm, Input } from './SearchFom.styled';
import { schema } from 'helpers/validationSchema';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ query: '' }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <SuperForm>
          <Wrapper>
            <Input
              type="text"
              name="query"
              id="query"
              aria-label="search form"
              autoComplete="off"
              placeholder=" "
            />
            <Label htmlFor="query">Введите ваш запрос</Label>
            <ErrorMessage name="query" component={Error} />
          </Wrapper>
          <Button
            icon={<RiSearchEyeLine size={20} />}
            disabled={isSubmitting}
          />
        </SuperForm>
      )}
    </Formik>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

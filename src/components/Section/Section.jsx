import PropTypes from 'prop-types';
import { SectionWrap, Title } from "./Section.styled";

const Section = ({title, children}) => (
    <SectionWrap>
      <Title>{title}</Title>
      {children}
    </SectionWrap>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Section;


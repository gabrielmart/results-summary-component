import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import ReactionIcon from '../../assets/images/icon-reaction.svg';
import MemoryIcon from '../../assets/images/icon-memory.svg';
import VerbalIcon from '../../assets/images/icon-verbal.svg';
import VisualIcon from '../../assets/images/icon-visual.svg';

const CategoryWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  max-width: 23rem;
  max-height: 15rem;
  padding: 0 1rem;
  background: ${({ theme, type }) => (type === 'Reaction' && theme.colors.background.lightRed) || (type === 'Memory' && theme.colors.background.orangeyYellow) || (type === 'Verbal' && theme.colors.background.greenTeal) || (type === 'Visual' && theme.colors.background.cobaltBlue)};
  border-radius: 1rem;
`;

const CategoryLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme, type }) => (type === 'Reaction' && theme.colors.foreground.lightRed) || (type === 'Memory' && theme.colors.foreground.orangeyYellow) || (type === 'Verbal' && theme.colors.foreground.greenTeal) || (type === 'Visual' && theme.colors.foreground.cobaltBlue)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const CategoryValue = styled.p`
  flex-grow: 1;
  text-align: end;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.foreground.darkGrayBlue};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  & > span {
    margin-left: 0.8rem;
    color: ${({ theme }) => theme.colors.foreground.darkGrayBlueLight};
  }
`;

const Category = (props) => {
  const { type, value } = props;

  const options = {
    Reaction: {
      name: 'Reaction',
      icon: ReactionIcon
    },
    Memory: {
      name: 'Memory',
      icon: MemoryIcon
    },
    Verbal: {
      name: 'Verbal',
      icon: VerbalIcon
    },
    Visual: {
      name: 'Visual',
      icon: VisualIcon
    }
  };

  return (
    <CategoryWrapper id={'category-' + options[type].name} type={type}>
      <img src={options[type].icon} alt={'Icon Category ' + options[type].name} />
      <CategoryLabel type={type}>{options[type].name}</CategoryLabel>
      <CategoryValue>
        {value}
        <span>/100</span>
      </CategoryValue>
    </CategoryWrapper>
  );
};

Category.propTypes = {
  type: PropTypes.oneOf(['Reaction', 'Memory', 'Verbal', 'Visual']).isRequired,
  value: PropTypes.string.isRequired
};

export default Category;

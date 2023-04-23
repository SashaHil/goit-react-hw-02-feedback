import PropTypes from 'prop-types';
import { Buttons, ButtonsLayout } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsLayout>
      {options.map(option => {
        return (
          <Buttons
            type="button"
            key={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </Buttons>
        );
      })}
    </ButtonsLayout>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

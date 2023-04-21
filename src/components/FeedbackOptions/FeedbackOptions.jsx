import PropTypes from 'prop-types';
import { Buttons, ButtonsLayout } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsLayout>
      {options.map((name, i) => {
        return (
          <Buttons
            type="button"
            key={i + 1}
            onClick={() => {
              onLeaveFeedback(name);
            }}
          >
            {name}
          </Buttons>
        );
      })}
    </ButtonsLayout>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};

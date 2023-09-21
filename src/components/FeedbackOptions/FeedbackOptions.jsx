
import {WrapOptions, Button} from './FeedbackOptions.styled';

const FeedbackOptions = ({options, onFeedbackClick}) => (
    <WrapOptions>{
       options.map(option => (
        <Button 
          key={option} 
          onClick={() => onFeedbackClick(option)}>{option}</Button>
       ))}
    </WrapOptions>
);
 export default FeedbackOptions;
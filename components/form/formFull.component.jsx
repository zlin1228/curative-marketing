import ReverseChildren from 'utils/reverseChildren';

const FullForm = ({ formContent, formImage, form, reversed, ...props }) => (
  <div {...props}>
    {formContent}
    <div className="form-wrapper">
      <ReverseChildren reversed={reversed}>
        {formImage}
        {form}
      </ReverseChildren>
    </div>
  </div>
);

export default FullForm;
